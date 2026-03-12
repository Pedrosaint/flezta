"use client";

import React from "react";
import { SlideInModal } from "@/shared/ui/components/modal.ui";
import { PrimaryButton } from "@/shared/ui/components/button.ui";

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
  return (
    <SlideInModal
      isOpen={isOpen}
      onClose={onClose}
      title="Cancel Order"
      maxWidth="max-w-175"
    >
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
        <PrimaryButton onClick={onSubmit} type="submit" fullWidth size="lg">
          Cancel Order
        </PrimaryButton>

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
    </SlideInModal>
  );
};

export default CancelOrderModal;
