// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useCreateAccountMutation } from "../apis/auth.api";
// import loginValidationSchema from "../../../shared/utils/validations/auth.validation";
// import secureLocalStorage from "react-secure-storage";
// import { loginRoute } from "../../../core/routes/routeNames";
// import handleErrors from "../../../shared/utils/handle_errors.util";
// import { toast } from "sonner";



// const useCreateAccountHook = () => {
//   const router = useRouter();

//   //==== State variables here ====//
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState<{ email?: string; password?: string }>(
//     {}
//   );

//   //==== Call you APIs here ====//
//   const [createAccount, { isLoading }] = useCreateAccountMutation();

//   const scrollToTopSmooth = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Handle submit login form
//   const handleSubmitCreateAccountForm = async () => {


//     //==== Construct request body here ====//
//     const requestBody = {
//       email: email,
//       password: password,
//     };

//     try {

//       //==== Validation request body here ====//
//       const validCreateAccountData = await loginValidationSchema.validate(
//         requestBody,
//         { abortEarly: false, strict: true }
//       );

//       //==== Call the APIs here ====//
//       const createAccountResponse = await createAccount(
//         validCreateAccountData
//       ).unwrap();
//       const userData = createAccountResponse?.user;
//       const token = createAccountResponse?.token;

//       console.log("LOGIN RESPONSE::: ", createAccountResponse);

//       if (token) {
//         //==== Save the token in secure storage here ====//
//         secureLocalStorage.setItem("access_token", token);
//         secureLocalStorage.setItem("user_data", userData!);

//         toast.success("account created successfully");
//         scrollToTopSmooth();
//         router.push(loginRoute);
//       } else {
//         toast.error(createAccountResponse?.message);
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

//       handleErrors(error);
//       console.log("Error in login APIs: ", error);
//     }
//   };

//   //==== Handle Firebase Google login here ====//
//   const handleGoogleLogin = () => {
//     //==== Implement Google login logic here ====//
//     console.log("Google login clicked");
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     showPassword,
//     setShowPassword,
//     handleSubmitCreateAccountForm,
//     isLoading,
//     handleGoogleLogin,
//     errors,
//   };
// };

// export default useCreateAccountHook;





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
import loginValidationSchema from "../../../shared/utils/validations/auth.validation";
import getFirebaseErrorMessage from "@/shared/utils/firebase_errors.util";
import { dashboardRoute } from "@/core/routes/routeNames";
import secureLocalStorage from "react-secure-storage";

const useCreateAccountHook = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmitCreateAccountForm = async () => {
    setIsLoading(true);
    setErrors({});

    try {
      // ===== Validate with your existing schema =====
      const validatedData = await loginValidationSchema.validate(
        { email, password },
        { abortEarly: false, strict: true }
      );

      // ===== Firebase email/password signup =====
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        validatedData.email,
        validatedData.password
      );
      const user = userCredential.user;
      const token = await user.getIdToken();

      console.log("USER CREATED :::", user);

      if (token) {
        //==== Save the token and user data in secure storage ====//
        secureLocalStorage.setItem("access_token", token);
        secureLocalStorage.setItem("user_data", JSON.stringify(user));

        toast.success("Account created successfully");
        scrollToTopSmooth();
        router.push(dashboardRoute);
      } else {
        toast.error("Failed to retrieve access token");
      }
    } catch (error: any) {
      console.error(error);

      // ===== Handle validation errors =====
      if (error.inner) {
        const formattedErrors: any = {};
        error.inner.forEach((err: any) => {
          formattedErrors[err.path] = err.message;
        });
        setErrors(formattedErrors);
        return;
      }

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
   }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      toast.success("Logged in with Google!");
      // router.push(appRoute);
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
    handleSubmitCreateAccountForm,
    handleGoogleLogin,
    isLoading,
    errors,
  };
};

export default useCreateAccountHook;
