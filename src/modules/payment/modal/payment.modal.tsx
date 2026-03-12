"use client";

import { useRouter } from "next/navigation";
import { LottieModal } from "@/shared/ui/components/modal.ui";
import { PrimaryButton, SecondaryButton, GradientOutlineButton } from "@/shared/ui/components/button.ui";
import congratulationsAnimation from "@/shared/utils/animation/Congratulations.json";

interface PaymentModalProps {
  onClose?: () => void;
}

const PaymentModal = ({ onClose }: PaymentModalProps) => {
  const router = useRouter();

  return (
    <LottieModal
      isOpen
      onClose={onClose || (() => router.push("/"))}
      animationData={congratulationsAnimation}
      title="Thanks for your order!"
      description="Your payment was successful and your order is been processed."
    >
      {/* Order Details */}
      <div className="space-y-4 text-base">
        <DetailRow label="Transaction date" value="Friday, 14th November 2025" />
        <DetailRow label="Payment method" value="Mastercard ending with 0264" />
        <DetailRow label="Delivery method" value="Pickup station - FLEZTA pickup station" />
        <DetailRow label="Amount paid" value="$1,905.99" bold />
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-between items-center gap-4">
        <PrimaryButton type="button" fullWidth>
          Track Your Order
        </PrimaryButton>
        <SecondaryButton type="button" fullWidth onClick={() => router.push("/")}>
          Back To Home
        </SecondaryButton>
      </div>

      {/* Download Receipt */}
      <div className="mt-5">
        <GradientOutlineButton fullWidth>
          Download Receipt
        </GradientOutlineButton>
      </div>
    </LottieModal>
  );
};

export default PaymentModal;

/* ─────────────────────────────────────────────── */
/* Internal: Detail Row                            */
/* ─────────────────────────────────────────────── */
function DetailRow({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-700 font-semibold">{label}</span>
      <span className={bold ? "text-gray-900 font-bold" : "text-gray-500"}>{value}</span>
    </div>
  );
}
