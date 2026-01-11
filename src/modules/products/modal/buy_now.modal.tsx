"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import animationData from "@/shared/utils/animation/success confetti.json"
import Lottie from "lottie-react";

interface BuyNowModalProps {
  onClose: () => void;
}

const BuyNowModal = ({ onClose }: BuyNowModalProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-white rounded-3xl shadow border px-6 py-5 border-dashed border-gray-300 max-w-md w-full pointer-events-auto">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 shrink-0">
              <Lottie animationData={animationData} loop={false} autoplay />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-teal-700 mb-1">
                Congratulations
              </h3>
              <p className="text-gray-700">Item has been added to your cart</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BuyNowModal;
