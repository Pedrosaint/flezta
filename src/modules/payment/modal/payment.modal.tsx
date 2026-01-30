"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Lottie from "lottie-react";
import congratulationsAnimation from "@/shared/utils/animation/Congratulations.json";


interface PaymentModalProps {
  onClose?: () => void;
}

const PaymentModal = ({ onClose }: PaymentModalProps) => {
  const router = useRouter();


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl bg-white p-8 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose || (() => router.push("/"))}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center">
        <Lottie animationData={congratulationsAnimation} loop={true} autoplay />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-2xl font-semibold">
          Thanks for your order!
        </h2>

        <p className="mt-2 text-center text-sm text-gray-900">
          Your payment was successful and your order is been processed.
        </p>

        {/* Divider */}
        <div className="my-3 border-t border-[#003625]/20" />

        {/* Order Details */}
        <div className="space-y-4 text-base">
          <DetailRow
            label="Transaction date"
            value="Friday, 14th November 2025"
          />
          <DetailRow
            label="Payment method"
            value="Mastercard ending with 0264"
          />
          <DetailRow
            label="Delivery method"
            value="Pickup station - FLEZTA pickup station"
          />
          <DetailRow label="Amount paid" value="$1,905.99" bold />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between items-center gap-4">
       <button 
       type="button"
       className="group w-[280px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer">
          <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
            Track Your Order
          </div>
        </button>

        <button
        type="button"
            className="w-[280px] p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer"
          >
            <div className="w-full bg-secondary-color text-primary-color py-4 rounded-[14px] text-center font-semibold">
              Back To Home
            </div>
          </button>
        </div>

        {/* Download Receipt */}
<button
  type="button"
  className="mt-5 w-full rounded-[14px] border border-[#FDA106] bg-[#FFF4EA] py-4 text-sm font-medium flex items-center justify-center cursor-pointer relative before:content-[''] before:absolute before:top-0 before:left-2 before:w-6 before:h-2 before:border-t before:border-[#FDA106] before:border-l before:rounded-tl-[4px] after:content-[''] after:absolute after:bottom-0 after:right-2 after:w-6 after:h-2 after:border-b after:border-[#FDA106] after:border-r after:rounded-br-[4px]"
>
  <h1 className="gradient-text">
    Download Receipt
  </h1>
</button>
      </div>
    </div>
  );
}

export default PaymentModal;

/* ---------------------------------- */
/* Reusable Detail Row Component */
/* ---------------------------------- */
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
      <span className={"text-gray-500"}>
        {value}
      </span>
    </div>
  );
}
