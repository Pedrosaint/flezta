'use client';

import LogoImage from "@/assets/images/app_logo.png";
import useVerifyOtpHook from "../hooks/verifyOtp.hook";
import { forgotPasswordRoute, resetPasswordRoute } from "../../../core/routes/routeNames";
import { useRouter } from "next/navigation";

const VerifyOtpComp = () => {
  const router = useRouter();

  const { otp, setOtp, handleSubmitVerifyOtpForm, isLoading } =
    useVerifyOtpHook();

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // If user types a number → go to next box
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }

    // If user clears input → go back
    if (!value && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };

  return (
    <div className="w-full overflow-hidden max-w-xl">
      <div className="p-5 md:p-12 flex flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <img src={LogoImage.src} alt="logo" className="w-22 h-22" />
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-primary-color font-medium text-lg mb-2">
            Alright! You can proceed to
          </p>
          <h2 className="text-3xl xl:text-4xl font-black text-primary-color">
            Verify OTP sent
          </h2>
          <p className="text-primary-color text-[15px] mt-2">
            Enter the 6-digit code that was sent to your email at
            myemail@gmail.com
          </p>
        </div>

        {/* === OTP INPUTS === */}
        <div className="flex justify-between mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              placeholder="-"
              className={`
                md:w-16 md:h-16 w-12 h-12 border rounded-2xl
                text-center text-xl font-bold
                focus:outline-none focus:border-primary-color
                ${digit
                  ? "border-[#003625] text-[#003625]"
                  : "border-gray-300 bg-white text-primary-color"
                }
            `}
            />
          ))}
        </div>

        <div className="flex gap-5">
          <button
            onClick={() => {
              scrollToTopSmooth();
              router.push(forgotPasswordRoute);
            }}
            disabled={isLoading}
            type="button"
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-full bg-secondary-color text-secondary-color py-4 rounded-[14px] font-semibold">
              {"Back"}
            </div>
          </button>

          <button
            // onClick={handleSubmitVerifyOtpForm}
            onClick={() => {
              scrollToTopSmooth();
              router.push(resetPasswordRoute);
            }}
            disabled={isLoading}
            type="button"
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
              {isLoading ? "Please wait..." : "Verify OTP"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpComp;
