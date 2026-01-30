"use client";

import ChairImage from "@/assets/images/office_seat.png";

interface OrderSummaryProps {
  onPaymentSubmit: () => void;
}

const OrderSummaryComp = ({ onPaymentSubmit }: OrderSummaryProps) => {
  return (
    <div className="bg-white rounded-4xl border border-[#C4C8CE] sticky top-40 h-full max-h-125 mt-11">
      <h2 className="text-xl font-bold bg-gray-50 px-5 rounded-t-4xl border-b border-gray-200 py-6 text-gray-700">
        Your Order
      </h2>

      <div className="space-y-4 p-6">
        {[1, 2].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <img
              src={ChairImage.src}
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">
                Ergonomic Office Chair (x2)
              </p>
              <p className="text-sm text-gray-500">$620.00</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 text-sm p-5">
        <div className="flex justify-between">
          <span>Item's total (8)</span>
          <span>$1,950.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fee</span>
          <span>$5.99</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$1,905.99</span>
        </div>

        <button
          onClick={onPaymentSubmit}
          className="mt-7 w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <div className="bg-primary-color text-white py-4 rounded-[14px] font-semibold">
            Make Payment
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryComp;