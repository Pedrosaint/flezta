/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import loginValidationSchema from "../../../shared/utils/validations/auth.validation";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase_errors.util";
import { dashboardRoute, createAccountRoute } from "../../../core/routes/routeNames";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../slices/auth.slice";
import { toast } from "sonner";
import { useLazyGetUserQuery } from "../apis/auth.api";

const useLoginHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [getUser] = useLazyGetUserQuery();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ===== Handle Email/Password Login =====
  const handleSubmitLoginForm = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      // ===== Validate input =====
      const validatedData = await loginValidationSchema.validate(
        { email, password },
        { abortEarly: false, strict: true }
      );

      // ===== Firebase login =====
      const userCredential = await signInWithEmailAndPassword(
        auth,
        validatedData.email,
        validatedData.password
      );

      const user = userCredential.user;
      const token = await user.getIdToken();

      console.log("LOGIN USER :::", user);

      if (token) {
        // ===== Save auth data =====
        // ===== Save auth data temporarily =====
        secureLocalStorage.setItem("access_token", token);
        secureLocalStorage.setItem("user_data", JSON.stringify(user));

        // ===== Call /users/me API after login =====
        try {
          const userResponse = await getUser().unwrap();
          console.log("User data from /users/me:", userResponse);

          // Update user_data with backend response
          // Based on transformResponse, userResponse is the data object which has message and data (IUser)
          if (userResponse) {
            dispatch(setIsAuthenticated(true));
            secureLocalStorage.setItem(
              "user_data",
              JSON.stringify({
                firebaseUser: user,
                backendUser: userResponse.data,
              })
            );

            toast.success("Login successful");
            scrollToTopSmooth();

            // ===== Check for return URL =====
            const returnUrl = secureLocalStorage.getItem("return_url") as string | null;

            if (returnUrl) {
              secureLocalStorage.removeItem("return_url");
              router.push(returnUrl);
            } else {
              router.push(dashboardRoute);
            }
          }
        } catch (getUserError: any) {
          console.error("Error fetching user data:", getUserError);

          if (getUserError?.status === 404) {
            const errorMessage = getUserError?.data?.message || "Account not found. Please register first.";
            toast.error(errorMessage);

            // Redirect to create account page
            router.push(createAccountRoute);
          } else {
            toast.error("Failed to verify user account. Please try again.");
          }

          // Clear everything on error
          await auth.signOut();
          secureLocalStorage.clear();
          dispatch(setIsAuthenticated(false));
          return;
        }
      } else {
        toast.error("Failed to retrieve access token");
      }
    } catch (error: any) {
      console.error(error);

      // ===== Yup validation errors =====
      if (error.inner) {
        const formattedErrors: any = {};
        error.inner.forEach((err: any) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
        return;
      }

      // ===== API / Backend Errors (Nested structure) =====
      if (error?.data?.error?.message) {
        toast.error(error.data.error.message.replace(/_/g, " "));
        return;
      }

      // ===== Firebase errors =====
      if (error.code) {
        const friendlyMessage = getFirebaseErrorMessage(error.code);

        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-email" ||
          error.code === "auth/invalid-credential"
        ) {
          setErrors({ email: friendlyMessage });
        } else if (error.code === "auth/wrong-password") {
          setErrors({ password: friendlyMessage });
        } else {
          toast.error(friendlyMessage);
        }
      } else {
        // Fallback for any other error
        const genericMessage = error?.message || "Login failed. Please try again.";
        toast.error(genericMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };





  // ======== Google Login ========
  const handleGoogleLogin = async () => {
    if (isGoogleLoading) return;

    setIsGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      secureLocalStorage.setItem("access_token", token);
      secureLocalStorage.setItem("user_data", JSON.stringify(user));

      // ===== Call /users/me API after Google login =====
      try {
        const userResponse = await getUser().unwrap();
        console.log("User data from /users/me:", userResponse);

        // Update user_data with backend response
        if (userResponse) {
          dispatch(setIsAuthenticated(true));
          secureLocalStorage.setItem(
            "user_data",
            JSON.stringify({
              firebaseUser: user,
              backendUser: userResponse.data,
            })
          );

          toast.success("Logged in with Google!");

          // ===== Check for return URL =====
          const returnUrl = secureLocalStorage.getItem("return_url") as string | null;

          if (returnUrl) {
            secureLocalStorage.removeItem("return_url");
            router.push(returnUrl);
          } else {
            router.push(dashboardRoute);
          }
        }
      } catch (getUserError: any) {
        console.error("Error fetching user data:", getUserError);

        if (getUserError?.status === 404) {
          const errorMessage = getUserError?.data?.message || "Account not found. Please sign up with this Google account first.";
          toast.error(errorMessage);

          // Redirect to create account page
          router.push(createAccountRoute);
        } else {
          toast.error("Failed to verify user account. Please try again.");
        }

        // Clear and sign out
        await auth.signOut();
        secureLocalStorage.clear();
        dispatch(setIsAuthenticated(false));
        return;
      }
    } catch (error: any) {
      console.error("Google login error:", error);

      // Cleanup on error
      await auth.signOut();
      secureLocalStorage.clear();
      dispatch(setIsAuthenticated(false));

      // 1. Check for nested backend/API error
      if (error?.data?.error?.message) {
        toast.error(error.data.error.message.replace(/_/g, " "));
      }
      // 2. Check for general backend message
      else if (error?.data?.message) {
        toast.error(error.data.message);
      }
      // 3. Check for Firebase error code
      else if (error.code) {
        const friendlyMessage = getFirebaseErrorMessage(error.code);
        toast.error(friendlyMessage);
      }
      // 4. Final fallback
      else {
        toast.error(error.message || "Google login failed");
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleSubmitLoginForm,
    handleGoogleLogin,
    isLoading,
    errors,
    isGoogleLoading,
  };
};

export default useLoginHook;
