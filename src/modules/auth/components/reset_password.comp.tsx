'use client';

import { useState } from "react";
import Image from "next/image";
import LogoImage from "@/assets/images/app_logo.png";
import ResetPasswordModal from "../modal/reset_password.modal";
import { Eye, EyeOff } from "lucide-react";
import useResetPasswordHook from "../hooks/resetPassword.hook";

const ResetPasswordComp = () => {
  const [modalOpen, setModalOpen] = useState(false);


  const { password, setPassword, confirmPassword, setConfirmPassword, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, handleSubmitResetPasswordForm, isLoading } = useResetPasswordHook();

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
            Hurray! Please proceed to
          </p>
          <h2 className="text-3xl font-black text-primary-color">
            Reset your password
          </h2>
          <p className="text-primary-color text-[15px] mt-2">
            Enter a new password and enter it again to confirm
          </p>
        </div>

        <div className="space-y-5">
          {/* ===PASSWORD INPUT === */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* ===CONFIRM PASSWORD INPUT === */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 pl-3">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter your password again"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            // onClick={async () => {
            //   const success = await handleSubmitResetPasswordForm();
            //   if (success) setModalOpen(true);
            // }}
            onClick={() => setModalOpen(true)}
            disabled={isLoading}
            className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold">
              {isLoading ? "Proceeding..." : " Proceed To Save Password"}
            </div>
          </button>
        </div>
      </div>

      {/* Modal for successful password reset */}
      {modalOpen && <ResetPasswordModal />}
    </div>
  );
}

export default ResetPasswordComp
