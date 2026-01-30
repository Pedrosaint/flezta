"use client";

import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface CancelOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedReason: string;
  setSelectedReason: (s: string) => void;
  message: string;
  setMessage: (m: string) => void;
  cancelReasons: string[];
  onSubmit: () => void;
}

const CancelOrderModal: React.FC<CancelOrderModalProps> = ({
  isOpen,
  onClose,
  selectedReason,
  setSelectedReason,
  message,
  setMessage,
  cancelReasons,
  onSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] cursor-pointer"
          />

          {/* Sidebar Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full max-w-175 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">
                Cancel Order
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Why are you canceling? */}
              <div>
                <label className="block text-lg text-gray-700 mb-2">
                  Why are you canceling?
                </label>
                <select
                  value={selectedReason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select option
                  </option>
                  {cancelReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tell us more */}
              <div>
                <label className="block text-lg text-gray-700 mb-2">
                  Tell us more
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter message here..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none"
                />
              </div>

              {/* Cancel Order Button */}
              <button
                onClick={onSubmit}
                type="submit"
                className="group w-full p-0.5 border border-[#003625] rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mb-5"
              >
                <div className="w-full bg-[#003625] text-white py-5 rounded-xl text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                  Cancel Order
                </div>
              </button>

              {/* Please Note Box */}
              <div className="bg-[#E8F4FF] border border-[#0095FF] rounded-2xl p-4 mt-26">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  Please note
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Curabitur et integer a
                  nisl pretium ornare duis. Enim quam orci diam vitae neque
                  condimentum. Amet leo elementum nunc integer semper nec quis
                  socils. Sit venenatis ausmodi pulvinar elementum magna.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CancelOrderModal;
