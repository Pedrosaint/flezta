import { useState } from "react";
import { useRouter } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import { useResetPasswordMutation } from "../apis/auth.api";
import handleErrors from "../../../shared/utils/handle_errors.util";
import { loginRoute } from "../../../core/routes/routeNames";

const useResetPasswordHook = () => {
  const router = useRouter();
  const email = secureLocalStorage.getItem("email") as string;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmitResetPasswordForm = async () => {
    if (password !== confirmPassword) {
      handleErrors("Passwords do not match");
      return false;
    }

    //==== Construct request body here ====//
    const requestBody = {
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await resetPassword(requestBody).unwrap();

      console.log("RESET PASSWORD RESPONSE::: ", response);

      if (response?.message) {
        secureLocalStorage.removeItem("email");
        scrollToTopSmooth();
        router.push(loginRoute);
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleSubmitResetPasswordForm,
    isLoading,
  };
};

export default useResetPasswordHook;
