import { useRouter } from "next/navigation";
import { useState } from "react";
import { useVerifyOtpMutation } from "../apis/auth.api";
import secureLocalStorage from "react-secure-storage";
import { resetPasswordRoute } from "../../../core/routes/routeNames";
import handleErrors from "../../../shared/utils/handle_errors.util";
import { toast } from "sonner";


const useVerifyOtpHook = () => {
  const router = useRouter();
  const email = secureLocalStorage.getItem("email") as string;

  // OTP is 6 separate inputs
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmitVerifyOtpForm = async () => {

    if (otp.join("").length !== 6) {
      return;
    }

    //==== Construct request body here ====//
    const requestBody = {
      email,
      otp: otp.join(""),
    };

    try {
      const response = await verifyOtp(requestBody).unwrap();

      console.log("VERIFY OTP RESPONSE::: ", response);

      if (response?.message) {
        secureLocalStorage.removeItem("email");

        toast.success("OTP verified successfully");
        scrollToTopSmooth();
        router.push(resetPasswordRoute);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  return {
    otp,
    setOtp,
    handleSubmitVerifyOtpForm,
    isLoading,
  };
};

export default useVerifyOtpHook;