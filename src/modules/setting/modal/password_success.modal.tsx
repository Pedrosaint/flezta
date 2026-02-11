"use client";

import { X } from "lucide-react";
import Lottie from "lottie-react";
import congratulationsAnimation from "@/shared/utils/animation/Congratulations.json";

interface PasswordSuccessModalProps {
  onClose: () => void;
}

const PasswordSuccessModal = ({ onClose }: PasswordSuccessModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl bg-white p-8 shadow-lg rounded-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Success Icon / Animation */}
        <div className="flex justify-center">
          <Lottie
            animationData={congratulationsAnimation}
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center text-2xl font-semibold">
          Congratulation
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-sm text-gray-900">
          You have successfully changed your password. Always keep it safe
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#003625]/20" />

        {/* Action Button */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={onClose}
            className="group w-[220px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer"
          >
            <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
              Continue
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccessModal;

