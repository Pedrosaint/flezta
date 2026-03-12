"use client";

import { LottieModal } from "@/shared/ui/components/modal.ui";
import { PrimaryButton } from "@/shared/ui/components/button.ui";
import congratulationsAnimation from "@/shared/utils/animation/Congratulations.json";

interface PasswordSuccessModalProps {
  onClose: () => void;
}

const PasswordSuccessModal = ({ onClose }: PasswordSuccessModalProps) => {
  return (
    <LottieModal
      isOpen
      onClose={onClose}
      animationData={congratulationsAnimation}
      title="Congratulation"
      description="You have successfully changed your password. Always keep it safe"
    >
      <div className="flex justify-center">
        <PrimaryButton onClick={onClose} className="w-[220px]">
          Continue
        </PrimaryButton>
      </div>
    </LottieModal>
  );
};

export default PasswordSuccessModal;
