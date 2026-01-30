"use client";

import { GoodIcon } from "@/assets/svg/svg_icon";
import { AnimatePresence, motion } from "framer-motion";

interface CancelOrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyAgainSuccessModal: React.FC<CancelOrderSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bg-black/20 inset-0 flex items-center justify-center p-4 z-200"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="p-2 border border-[#003625] rounded-3xl bg-transparent"
          >
            <div className="bg-[#DDFFF4] rounded-2xl p-8 max-w-sm w-full text-center">
              <div className="flex justify-center mb-6">
                <GoodIcon width={50} height={50} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Congratulation
              </h3>
              <p className="text-gray-700 mb-5">
                Your review has been submitted successfully
              </p>

              <button
                onClick={onClose}
                className="w-50 p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer"
              >
                <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] font-semibold hover:bg-[#004a33] transition-colors">
                  Okay
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BuyAgainSuccessModal;
