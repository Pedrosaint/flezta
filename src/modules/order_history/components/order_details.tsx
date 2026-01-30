"use client";

import { useParams, useRouter } from "next/navigation";
import { formatDollar } from "@/shared/utils/currency.util";
import { ArrowLeftIcon } from "@/assets/svg/svg_icon";
import { ordersData, getStatusColor, OrderItem } from "../data/orders.data";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { useCancelOrderModal } from "../hooks/useCancelOrderModal";
import { useLeaveReviewModal } from "../hooks/useLeaveReviewModal";
import { useReceiptModal } from "../hooks/useReceiptModal";
import ItemStatusHistoryModal from "../modal/status_history.modal";
import CancelOrderModal from "../modal/cancel_order.modal";
import CancelOrderSuccessModal from "../modal/buy_again.success.modal";
import LeaveReviewModal from "../modal/leave_review.modal";
import OrderReceiptModal from "../modal/receipt.modal";

const OrderDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const orderIdParam = params.id as string;

  // Find the dynamic order data
  const order = ordersData.find((o) => o.orderId === orderIdParam);
  const statusHistoryModal = useModal();
  const successModal = useModal();

  // Cancel order modal logic
  const cancelOrder = useCancelOrderModal({
    onSubmitSuccess: () => {
      successModal.open();
    },
  });

  // Leave review modal logic
  const leaveReview = useLeaveReviewModal({
    onSubmit: () => {
      // after submit, open the success modal
      leaveReview.close();
      successModal.open();
    },
  });

  // Receipt modal logic
  const receipt = useReceiptModal();
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);

  const handleCancelOrderClick = () => {
    statusHistoryModal.close();
    cancelOrder.open();
  };

  const handleSuccessModalClose = () => {
    // Close the success modal and any modals that led to it
    successModal.close();
    cancelOrder.close();
    cancelOrder.reset();
    statusHistoryModal.close();
    setSelectedItem(null);
  };

  if (!order) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Order not found</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 text-emerald-600 font-medium"
        >
          Go back to Order History
        </button>
      </div>
    );
  }

  const {
    billingAddress,
    shippingAddress,
    items,
    paymentMethod,
    subtotal,
    shippingFee,
    total,
  } = order;

  return (
    <div className="bg-white rounded-[20px] border border-gray-200">
      {/* Header */}
      <div className="mb-6 border-b border-gray-200 pb-4 p-5">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-900 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon />
          <span className="text-2xl font-semibold">Order Details</span>
        </button>
        <p className="text-gray-800">
          View the details of your order and track order
        </p>
      </div>

      {/* Address Cards and Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 border-b border-gray-200 pb-8 px-5">
        {/* Billing + Shipping Wrapper */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-[20px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Billing Address */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 px-4 py-4">
                Billing Address
              </h3>

              <div className="space-y-3 text-sm p-4">
                <div>
                  <p className="font-medium text-gray-900">
                    {billingAddress.name}
                  </p>
                  <p className="text-gray-600">{billingAddress.street}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <p className="text-gray-900">{billingAddress.email}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <p className="text-gray-900">{billingAddress.phone}</p>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="">
              <h3 className="font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 px-4 py-4">
                Shipping Address
              </h3>

              <div className="space-y-3 text-sm p-5">
                <div>
                  <p className="font-medium text-gray-900">
                    {shippingAddress.name}
                  </p>
                  <p className="text-gray-600">{shippingAddress.street}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <p className="text-gray-900">{shippingAddress.email}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <p className="text-gray-900">{shippingAddress.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-200 rounded-[20px]">
          <div className="">
            <div className="flex justify-between border-b border-gray-200 pb-2 px-5 py-4">
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">Order ID</span>
                <span className="font-medium text-gray-900">
                  #{order.orderId}
                </span>
              </div>

              <div className="h-10 w-px bg-gray-300" />

              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">Payment method</span>
                <span className="font-medium text-gray-900">
                  {paymentMethod}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium text-gray-900">
                  {formatDollar(subtotal)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping fee:</span>
                <span className="font-medium text-gray-900">
                  {formatDollar(shippingFee)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="gradient-text text-lg font-medium">
                  {formatDollar(total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Items in Your Order */}
      <div className="px-5 pb-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Items in your order
        </h3>
        <div className="bg-white">
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 p-3 rounded-2xl"
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span
                    className={`${getStatusColor(item.status)} text-white px-4 py-3 rounded-lg text-sm font-medium`}
                  >
                    Status: {item.status}
                  </span>
                  {item.status === "Delivered" && (
                    <button
                      onClick={() => leaveReview.open()}
                      type="button"
                      className="group w-52 p-0.5 border border-[#E26E00] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="w-full bg-[#263238] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                        Leave Seller Review
                      </div>
                    </button>
                  )}
                </div>

                {/* Date */}
                <p className="text-gray-600 mb-4 font-medium">On {item.date}</p>

                {/* Product Details */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 border border-gray-300 rounded-lg shrink-0"></div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        {item.productName}
                      </p>
                      <p className="text-gray-600 mb-1">QTY: {item.qty}</p>
                      <p className="text-base font-semibold text-gray-900">
                        {formatDollar(item.price)}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons based on Status */}
                  <div className="flex gap-4">
                    {item.status === "Processing" ||
                    item.status === "Shipped" ? (
                      <button
                        onClick={() => cancelOrder.open()}
                        type="button"
                        className="group w-52 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                          Cancel Order
                        </div>
                      </button>
                    ) : item.status === "Delivered" ? (
                      <button
                        type="button"
                        className="group w-52 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                          Buy Again
                        </div>
                      </button>
                    ) : null}

                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        statusHistoryModal.open();
                      }}
                      className="group w-52 p-0.5 border border-[#FDA106] rounded-[18px] cursor-pointer"
                    >
                      <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient transition-all duration-300 hover:scale-[1.02]">
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                          <span className="text-[#FDA106] font-semibold">
                            See Status History
                          </span>
                        </div>

                        {/* Default State */}
                        <div className="relative z-10 py-4 font-semibold flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-0">
                          See Status History
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ItemStatusHistoryModal
        isOpen={statusHistoryModal.isOpen}
        onClose={() => {
          statusHistoryModal.close();
          setSelectedItem(null);
        }}
        onCancelOrder={handleCancelOrderClick}
        currentStatus={selectedItem?.status}
        itemDate={selectedItem?.date}
      />

      <CancelOrderModal
        isOpen={cancelOrder.isOpen}
        onClose={() => cancelOrder.close()}
        selectedReason={cancelOrder.selectedReason}
        setSelectedReason={cancelOrder.setSelectedReason}
        message={cancelOrder.message}
        setMessage={cancelOrder.setMessage}
        cancelReasons={cancelOrder.cancelReasons}
        onSubmit={cancelOrder.handleSubmit}
      />

      <CancelOrderSuccessModal
        isOpen={successModal.isOpen}
        onClose={handleSuccessModalClose}
      />

      <OrderReceiptModal
        isOpen={receipt.isOpen}
        onClose={() => receipt.close()}
        orderData={receipt.orderData}
        items={receipt.items.map((item) => ({
          ...item,
          id: String(item.id),
        }))}
        formatCurrency={receipt.formatCurrency}
      />

      <LeaveReviewModal
        isOpen={leaveReview.isOpen}
        onClose={() => leaveReview.close()}
        onSubmit={() => {
          leaveReview.close();
          successModal.open();
        }}
        rating={leaveReview.rating}
        setRating={leaveReview.setRating}
        hoveredRating={leaveReview.hoveredRating}
        setHoveredRating={leaveReview.setHoveredRating}
        comment={leaveReview.comment}
        setComment={leaveReview.setComment}
      />
    </div>
  );
};

export default OrderDetailsPage;
