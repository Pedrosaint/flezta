"use client";

import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/assets/images/app_logo.png";
import { VerifiedBadge } from "@/assets/svg/svg_icon";

interface ReceiptItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  seller: string;
  sellerVerified: boolean;
  image?: string;
}

interface OrderData {
  orderId: string;
  orderTime: string;
  itemsTotal: number;
  shipping: number;
  orderTotal: number;
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
  };
  paymentMethod: {
    type: string;
    last4: string;
    paidOn: string;
    amount: number;
  };
}

interface OrderReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: OrderData;
  items: ReceiptItem[];
  formatCurrency: (amount: number) => string;
}

const OrderReceiptModal: React.FC<OrderReceiptModalProps> = ({
  isOpen,
  onClose,
  orderData,
  items,
  formatCurrency,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-175 bg-white shadow-2xl z-60 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-200 z-10">
              <h2 className="text-2xl font-semibold text-gray-900">
                Order Receipt
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 pb-24">
              <div className="border-2 border-dashed border-gray-300 p-2">
                {/* Logo and Title */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-2">
                    <img src={Logo.src} alt="" className="w-10 h-10" />
                    <span className="font-bold text-sm">FLEZTA</span>
                  </div>
                  <span className="text-sm text-gray-600">Order Receipt</span>
                </div>

                {/* Order Summary */}
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    Order summary
                  </h3>
                  <div className="space-y-3 text-lg">
                    {[
                      { label: "Order ID", value: orderData.orderId },
                      { label: "Order time", value: orderData.orderTime },
                      {
                        label: "Item(s) total",
                        value: formatCurrency(orderData.itemsTotal),
                      },
                      {
                        label: "Shipping",
                        value: formatCurrency(orderData.shipping),
                      },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-gray-600">{row.label}</span>
                        <span className="text-gray-900 font-medium">
                          {row.value}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">Order total</span>
                      <span className="text-gray-900 font-semibold text-lg">
                        {formatCurrency(orderData.orderTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Shipping address
                  </h3>
                  <div className="text-gray-900 space-y-1">
                    <p className="font-semibold">
                      {orderData.shippingAddress.name}
                    </p>
                    <p className="text-gray-600">
                      {orderData.shippingAddress.phone}
                    </p>
                    <p className="whitespace-pre-line text-gray-600">
                      {orderData.shippingAddress.address}
                    </p>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="border-b border-gray-200 pb-4 p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Payment method
                  </h3>
                  <div className="mb-4">
                    <p className=" text-[#077D58] font-medium mb-1">
                      FLEZTA is committed to protecting your payment information
                    </p>
                    <p className=" text-gray-600">
                      We use strong encryption and perform regular reviews of
                      its system to protect your privacy
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-9 bg-white border border-gray-200 rounded-md flex flex-col items-center justify-center p-1">
                        <div className="flex gap-[-4px]">
                          <div className="w-4 h-4 bg-red-600 rounded-full opacity-80"></div>
                          <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-80 -ml-2"></div>
                        </div>
                        <h1 className="text-[5px] font-semibold text-gray-700">
                          master card
                        </h1>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700">
                          {orderData.paymentMethod.type} •{" "}
                          {orderData.paymentMethod.last4}
                        </p>
                        <p className="text-sm text-gray-600">
                          Paid on {orderData.paymentMethod.paidOn}
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">
                      {formatCurrency(orderData.paymentMethod.amount)}
                    </span>
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Item details ({items.length})
                  </h3>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-300 border border-gray-400 rounded-xl shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 mb-2 truncate">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span>By:</span>
                            <div className="w-5 h-5 bg-gray-200 border border-gray-300 rounded-full flex items-center justify-center font-bold text-[10px]"></div>
                            <span className="font-medium">{item.seller}</span>
                            {item.sellerVerified && (
                              <span>
                                <VerifiedBadge width={14} />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right flex flex-col gap-3 py-1">
                          <p className="text-sm text-gray-900">
                            {formatCurrency(item.price)}
                          </p>
                          <p className="text-xs text-gray-500 font-medium">
                            x{item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Environmental Notice */}
                <div className="bg-[#F3F4F6] p-4 border border-dashed border-[#DDE0E5]">
                  <p className="text-sm text-gray-900 leading-relaxed">
                    To prevent excess packaging waste, we do not include paper
                    receipts. However, you can always print one out for your
                    records.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="fixed bottom-0 right-0 w-full max-w-175 bg-white border-t border-gray-100 p-6 flex gap-4 z-20">
                <button className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer">
                  <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] font-semibold text-sm">
                    Download Receipt
                  </div>
                </button>
                <button className="w-full p-0.5 border backdrop-blur-[10px] border-[#FDA106] rounded-[18px] transition cursor-pointer">
                  <div className="w-full bg-[#FFF4EA] text-[#FDA106] py-4 rounded-[14px] font-semibold text-sm">
                    Share Receipt
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderReceiptModal;
