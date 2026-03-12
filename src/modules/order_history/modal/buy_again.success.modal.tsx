"use client";

import { SuccessModal } from "@/shared/ui/components/modal.ui";

interface BuyAgainSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyAgainSuccessModal: React.FC<BuyAgainSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <SuccessModal
      isOpen={isOpen}
      onClose={onClose}
      title="Congratulation"
      description="Your review has been submitted successfully"
      primaryButtonText="Okay"
    />
  );
};

export default BuyAgainSuccessModal;
