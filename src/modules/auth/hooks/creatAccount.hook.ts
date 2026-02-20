/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "sonner";
import {
  createAccountValidationSchema,
  LoginValidationType,
} from "../../../shared/utils/validations/auth.validation";
import { getBackendError, getFirebaseErrorMessage } from "@/shared/utils/firebase_errors.util";
import { dashboardRoute } from "@/core/routes/routeNames";
import secureLocalStorage from "react-secure-storage";
import { useCreateAccountMutation } from "../apis/auth.api";

const useCreateAccountHook = () => {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [createAccount] = useCreateAccountMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmitCreateAccountForm = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      // ===== 1. Validate form data =====
      const validatedData: LoginValidationType =
        await createAccountValidationSchema.validate(
          {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
          },
          { abortEarly: false, strict: true }
        );

      // ===== 2. Create user in Firebase Auth =====
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        validatedData.email,
        validatedData.password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      console.log("Firebase USER CREATED :::", user);
      console.log("Firebase TOKEN :::", token);
      console.log("Token length :::", token.length);

      if (token) {
        // ===== 3. Save token to secure storage =====
        secureLocalStorage.setItem("access_token", token);

        // ===== 4. Create user profile in Backend =====
        const backendResponse = await createAccount({
          firstName: validatedData.firstName.trim(),
          lastName: validatedData.lastName.trim(),
          phoneNumber: validatedData.phoneNumber?.trim() ?? "",
          email: validatedData.email.trim(),
        }).unwrap();

        console.log("Backend user created:", backendResponse);

        // ===== 5. Save complete user data =====
        secureLocalStorage.setItem(
          "user_data",
          JSON.stringify({
            firebaseUser: {
              uid: user.uid,
              email: user.email,
              emailVerified: user.emailVerified,
              metadata: {
                creationTime: user.metadata.creationTime,
                lastSignInTime: user.metadata.lastSignInTime,
              },
            },
            backendUser: backendResponse.data,
          })
        );

        setShowSuccessModal(true);
        scrollToTopSmooth();

        setTimeout(() => {
          router.push(dashboardRoute);
        }, 2000);
      } else {
        toast.error("Failed to retrieve access token");
      }
    } catch (error: any) {
      console.error("Create account error:", error);

      // ===== Handle Yup validation errors =====
      if (error.inner) {
        const formattedErrors: any = {};
        error.inner.forEach((err: any) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
        return;
      }

      // ===== Handle Firebase errors =====
      if (error.code) {
        const friendlyMessage = getFirebaseErrorMessage(error.code);

        if (
          error.code === "auth/email-already-in-use" ||
          error.code === "auth/invalid-email"
        ) {
          setErrors({ email: friendlyMessage });
        } else if (error.code === "auth/weak-password") {
          setErrors({ password: friendlyMessage });
        } else {
          toast.error(friendlyMessage);
        }
        return;
      }

      // ===== Handle RTK Query/Backend errors =====
      if (error.data) {
        toast.error(error.data.message || "Failed to create user profile");
      } else if (error.status === "FETCH_ERROR") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (isGoogleLoading) return;

    try {
      setIsGoogleLoading(true);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const token = await user.getIdToken();

      console.log("Google User:", user);

      // ===== Split displayName =====
      const displayName = user.displayName ?? "";
      const nameParts = displayName.trim().split(" ");

      const firstName = nameParts[0] ?? "";
      const lastName = nameParts.length > 1
        ? nameParts.slice(1).join(" ")
        : "";

      // ===== Store token =====
      secureLocalStorage.setItem("access_token", token);

      // ===== Create user in backend =====
      const backendResponse = await createAccount({
        firstName,
        lastName,
        phoneNumber: user.phoneNumber ?? "",
        email: user.email ?? "",
      }).unwrap();

      console.log("Backend user created:", backendResponse);

      setShowSuccessModal(true);

      setTimeout(() => {
        router.push(dashboardRoute);
      }, 2000);
    } catch (error: any) {
      console.error("Google login error:", error);

      // ===== Backend / RTK Query errors =====
      if (error?.data?.error) {
        const backendError = getBackendError(error.data.error);

        if (backendError.type === "info") {
          toast.info(backendError.message);

          setTimeout(() => {
            router.push(dashboardRoute);
          }, 1500);

          return;
        }

        toast.error(backendError.message);
        return;
      }

      // ===== Firebase errors =====
      if (error.code) {
        const friendlyMessage = getFirebaseErrorMessage(error.code);
        toast.error(friendlyMessage);
        return;
      }

      toast.error("Google login failed");
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
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    handleSubmitCreateAccountForm,
    handleGoogleLogin,
    isLoading,
    errors,
    showSuccessModal,
    userName,
    setUserName,
    isGoogleLoading,
  };
};

export default useCreateAccountHook;
