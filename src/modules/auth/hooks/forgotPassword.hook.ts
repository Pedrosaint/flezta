// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { toast } from "sonner";
// import secureLocalStorage from "react-secure-storage";
// import { verifyOtpRoute } from "../../../core/routes/routeNames";
// import getFirebaseErrorMessage from "@/shared/utils/firebase_errors.util";

// const useForgotPasswordHook = () => {
//   const router = useRouter();

//   // ===== State =====
//   const [email, setEmail] = useState("");
//   const [errors, setErrors] = useState<{ email?: string }>({});
//   const [isLoading, setIsLoading] = useState(false);

//   const scrollToTopSmooth = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // ===== Submit handler =====
//   const handleSubmitForgotPasswordForm = async () => {
//     setIsLoading(true);
//     setErrors({});

//     try {
//       if (!email) {
//         setErrors({ email: "Email is required" });
//         return;
//       }

//       // ===== Firebase password reset =====
//       await sendPasswordResetEmail(auth, email);

//       // Save email locally for possible OTP flow
//       secureLocalStorage.setItem("email", email);

//       toast.success("Password reset link sent to your email!");
//       scrollToTopSmooth();
//       router.push(verifyOtpRoute);
//     } catch (error: any) {
//       console.error(error);

    //   if (error.code) {
    //      const friendlyMessage = getFirebaseErrorMessage(error.code);
         
    //     if (error.code === "auth/user-not-found" || error.code === "auth/invalid-email") {
    //       setErrors({ email: friendlyMessage });
    //     } else {
    //       toast.error(friendlyMessage);
    //     }
    //   } else {
    //     toast.error("Something went wrong, please try again");
    //   }
    // } finally {
    //   setIsLoading(false);
    // }
//   };

//   return {
//     email,
//     setEmail,
//     errors,
//     isLoading,
//     handleSubmitForgotPasswordForm,
//   };
// };

// export default useForgotPasswordHook;




/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { loginRoute } from "../../../core/routes/routeNames";
import { getFirebaseErrorMessage } from "@/shared/utils/firebase_errors.util";

const useForgotPasswordHook = () => {
  const router = useRouter();

  // ===== State =====
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ===== Submit handler =====
  const handleSubmitForgotPasswordForm = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      if (!email) {
        setErrors({ email: "Email is required" });
        return;
      }

      // ===== Firebase password reset =====
      const response = await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}${loginRoute}`,
      });

      toast.success("Password reset link has been sent to your email.");

      scrollToTopSmooth();
    } catch (error: any) {
      console.error("Forgot password error:", error);

      if (error.code) {
        const friendlyMessage = getFirebaseErrorMessage(error.code);

        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-email"
        ) {
          setErrors({ email: friendlyMessage });
        } else {
          toast.error(friendlyMessage);
        }
      } else {
        toast.error("Something went wrong, please try again");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    errors,
    isLoading,
    handleSubmitForgotPasswordForm,
  };
};

export default useForgotPasswordHook;
