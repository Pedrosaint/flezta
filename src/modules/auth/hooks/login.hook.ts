// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRouter } from "next/navigation";
// import loginValidationSchema from "../../../shared/utils/validations/auth.validation";
// import handleErrors from "../../../shared/utils/handle_errors.util";
// import { dashboardRoute } from "../../../core/routes/routeNames";
// import { useLoginMutation } from "../apis/auth.api";
// import { useState } from "react";
// import secureLocalStorage from "react-secure-storage";
// import { useDispatch } from "react-redux";
// import { setIsAuthenticated } from "../slices/auth.slice";
// import { toast } from "sonner";

// const useLoginHook = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // State variables
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
//     {}
//   );

//   // Call you APIs
//   const [login, { isLoading }] = useLoginMutation();

//   const scrollToTopSmooth = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Handle submit login form
//   const handleSubmitLoginForm = async () => {
//     // Construct request body
//     const requestBody = {
//       email: email,
//       password: password,
//     };

//     try {
//       // Validation request body
//       const validLoginData = await loginValidationSchema.validate(requestBody, {
//         abortEarly: false,
//         strict: true,
//       });

//       // Call the APIs here
//       const loginResponse = await login(validLoginData).unwrap();
//       const userData = loginResponse;
//       // const token = loginResponse.token;

//       console.log("LOGIN RESPONSE::: ", loginResponse);

//       if (userData) {
//         // Save the token in secure storage
//         // secureLocalStorage.setItem("access_token", token);
//         secureLocalStorage.setItem("user_data", userData!);
//         dispatch(setIsAuthenticated(true));

//         toast.success("Login successful");
//         console.log("Button clicked");
//         scrollToTopSmooth();
//         router.push(dashboardRoute);
//       } else {
//         // toast.error(loginResponse?.message);
//         toast.error("Login failed");
//       }
//     } catch (error: any) {
//       //==== Handle validation errors here ====//
//       if (error.inner) {
//         const formattedErrors: any = {};
//         error.inner.forEach((err: any) => {
//           formattedErrors[err.path] = err.message;
//         });

//         setErrors(formattedErrors);
//         return;
//       }

//       // Otherwise it's an API or network error → send to toast
//       handleErrors(error);
//     }
//   };

//   // Handle Firebase Google login
//   const handleGoogleLogin = () => {
//     // Implement Google login logic here
//     console.log("Google login clicked");
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     showPassword,
//     setShowPassword,
//     handleSubmitLoginForm,
//     isLoading,
//     handleGoogleLogin,
//     errors,
//   };
// };

// export default useLoginHook;

















/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import loginValidationSchema from "../../../shared/utils/validations/auth.validation";
import getFirebaseErrorMessage from "@/shared/utils/firebase_errors.util";
import { appRoute, dashboardRoute } from "../../../core/routes/routeNames";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { setIsAuthenticated } from "../slices/auth.slice";
import { toast } from "sonner";

const useLoginHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

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
        secureLocalStorage.setItem("access_token", token);
        secureLocalStorage.setItem("user_data", JSON.stringify(user));

        dispatch(setIsAuthenticated(true));

        toast.success("Login successful");
        scrollToTopSmooth();
        // router.push(dashboardRoute);
          router.push(appRoute);
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

      // ===== Firebase errors =====
      if (error.code) {
        const friendlyMessage = getFirebaseErrorMessage(error.code);

        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-email"
        ) {
          setErrors({ email: friendlyMessage });
        } else if (error.code === "auth/wrong-password") {
          setErrors({ password: friendlyMessage });
        } else {
          toast.error(friendlyMessage);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ===== Google Login =====
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      secureLocalStorage.setItem("access_token", token);
      secureLocalStorage.setItem("user_data", JSON.stringify(user));

      dispatch(setIsAuthenticated(true));

      toast.success("Logged in with Google!");
      router.push(dashboardRoute);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Google login failed");
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
  };
};

export default useLoginHook;
