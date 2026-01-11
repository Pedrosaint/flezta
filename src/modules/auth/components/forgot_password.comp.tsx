'use client';

import LogoImage from "@/assets/images/app_logo.png";
import useForgotPasswordHook from "../hooks/forgotPassword.hook";
import { loginRoute } from "../../../core/routes/routeNames";
import { useRouter } from "next/navigation";

const ForgotPasswordComp = () => {
  const router = useRouter();

  //=== Call required hooks here ===//
  const { email, setEmail, handleSubmitForgotPasswordForm, isLoading } =
    useForgotPasswordHook();

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
            Hey! We learnt that you
          </p>
          <h2 className="text-3xl xl:text-4xl font-black text-primary-color">
            Forgot your password
          </h2>
          <p className="text-primary-color text-[15px] mt-2">
            Enter the email address for this account and we will send you a code
            to reset your password
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Email
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
            />
          </div>

          <div className="flex gap-5">
            <button
            onClick={() => {
              scrollToTopSmooth();
              router.push(loginRoute);
            }}
              disabled={isLoading}
              type="button"
              className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="w-full bg-secondary-color text-secondary-color py-4 rounded-[14px] font-semibold">
                {'Back To Login'}
              </div>
            </button>

            <button
              onClick={handleSubmitForgotPasswordForm}
            // onClick={() => {
            //   scrollToTopSmooth();
            //   router.push(verifyOtpRoute);
            // }}
              disabled={isLoading}
              type="button"
              className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
                {isLoading ? "Please wait..." : "Proceed To Get Code"}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComp;
