"use client";

import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Good } from "@/assets/svg/svg_icon";
import LeaveReviewModal from "./leave_review.modal";
import BuyAgainSuccessModal from "./buy_again.success.modal";
import { useModal } from "../hooks/useModal";
import { useLeaveReviewModal } from "../hooks/useLeaveReviewModal";

interface StatusStep {
  id: number;
  title: string;
  date: string;
  completed: boolean;
  active: boolean;
  note?: string;
}

interface ItemStatusHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancelOrder?: () => void;
  currentStatus?: string | null;
  itemDate?: string | null;
}

const ItemStatusHistoryModal: React.FC<ItemStatusHistoryModalProps> = ({
  isOpen,
  onClose,
  onCancelOrder,
  currentStatus,
  itemDate,
}) => {
  const buildSteps = (
    status?: string | null,
    date?: string | null,
  ): StatusStep[] => {
    const d = date || "";
    const steps: StatusStep[] = [
      {
        id: 1,
        title: "Order placed",
        date: d,
        completed: false,
        active: false,
      },
      {
        id: 2,
        title: "Pending Confirmation",
        date: d,
        completed: false,
        active: false,
      },
      {
        id: 3,
        title: "Waiting to be shipped",
        date: d,
        completed: false,
        active: false,
      },
      { id: 4, title: "Shipped", date: d, completed: false, active: false },
      {
        id: 5,
        title: "Available for pickup",
        date: d,
        completed: false,
        active: false,
        note: "You have 3 days to come pick up your item after which it will be cancelled and sent back to the seller.",
      },
      {
        id: 6,
        title: "Order Delivered",
        date: d,
        completed: false,
        active: false,
      },
    ];

    if (!status) return steps;

    switch (status) {
      case "Processing":
        steps[0].completed = true;
        steps[1].active = true;
        break;
      case "Order Confirmed":
        steps[0].completed = true;
        steps[1].completed = true;
        steps[2].active = true;
        break;
      case "Shipped":
        steps[0].completed = true;
        steps[1].completed = true;
        steps[2].completed = true;
        steps[3].active = true;
        break;
      case "Delivered":
        steps.forEach((s) => (s.completed = true));
        steps[5].active = true;
        break;
      case "Cancelled":
        // Return steps up to cancellation, then a Cancelled step with message
        return [
          {
            id: 1,
            title: "Order placed",
            date: d,
            completed: true,
            active: false,
          },
          {
            id: 2,
            title: "Pending Confirmation",
            date: d,
            completed: true,
            active: false,
          },
          {
            id: 99,
            title: "Cancelled - Payment Unsuccessful",
            date: d,
            completed: false,
            active: true,
            note: "Unfortunately, this item/order has been cancelled because your payment could not be completed. If you consider this to be an error and you have been charged, kindly reach out to our customer service in order to receive the appropriate assistance.",
          },
        ];
      default:
        break;
    }

    return steps;
  };

  const statusSteps = buildSteps(currentStatus, itemDate);

  // use modal hook for local modal states
  const reviewSuccess = useModal();
  const leaveReview = useLeaveReviewModal({
    onSubmit: () => {
      reviewSuccess.open();
    },
  });

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
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Order Status History
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            {/* Status Timeline */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="relative">
                {/* Status Steps */}
                <div className="space-y-6">
                  {statusSteps.map((step, index) => {
                    const isLast = index === statusSteps.length - 1;
                    const isCancelled = step.title.includes("Cancelled");

                    return (
                      <div key={step.id} className="relative flex gap-6">
                        {/* Icon + Line */}
                        <div className="relative flex flex-col items-center">
                          {/* Step Badge */}
                          <div className="relative z-10">
                            {step.completed ? (
                              <div
                                className={`w-6 h-6 rounded-md flex items-center justify-center ${
                                  step.active
                                    ? isCancelled
                                      ? "bg-[#D24545]"
                                      : "bg-[#077D58]"
                                    : "bg-gray-200"
                                }`}
                              >
                                <Good
                                  className={`w-3 h-3 ${
                                    step.active ? "text-white" : "text-gray-500"
                                  }`}
                                />
                              </div>
                            ) : (
                              <div
                                className={`w-6 h-6 rounded-md flex items-center justify-center ${
                                  step.active
                                    ? isCancelled
                                      ? "bg-[#D24545]"
                                      : "bg-[#077D58]"
                                    : "border-2 border-gray-300 bg-white"
                                }`}
                              >
                                <Good
                                  stroke={step.active ? "white" : "black"}
                                  width={12}
                                  height={12}
                                />
                              </div>
                            )}
                          </div>

                          {/* Connecting Line */}
                          {!isLast && (
                            <div
                              className={`mt-2 h-12 w-0.5 ${
                                step.active ||
                                statusSteps[index + 1]?.active ||
                                statusSteps
                                  .slice(index + 1)
                                  .some((s) => s.completed)
                                  ? "bg-gray-200"
                                  : "border-l-2 border-dashed border-gray-300"
                              }`}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-semibold ${
                              step.active
                                ? isCancelled
                                  ? "text-[#D24545]"
                                  : "text-[#077D58]"
                                : "text-gray-900"
                            }`}
                          >
                            {step.title}
                          </h3>

                          <p className="text-lg font-medium text-gray-500 mt-1">
                            {step.date}
                          </p>

                          {step.note && (
                            <p className="text-lg font-medium text-gray-500 mt-1">
                              {step.note}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            {currentStatus !== "Cancelled" && currentStatus !== "Delivered" && (
              <div className="p-6">
                <button
                  onClick={onCancelOrder}
                  type="submit"
                  className="group w-full p-0.5 border border-[#003625] rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mb-5"
                >
                  <div className="w-full bg-[#003625] text-white py-5 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                    Cancel Order
                  </div>
                </button>
              </div>
            )}

            {currentStatus === "Delivered" && (
              <div className="flex items-center p-6 gap-4">
                <button
                  type="button"
                  className="group w-52 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-full bg-[#003625] text-white py-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                    Buy Again
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => leaveReview.open()}
                  className="group w-52 p-0.5 border border-[#FDA106] rounded-[18px] cursor-pointer"
                >
                  <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient transition-all duration-300 hover:scale-[1.02]">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="text-[#FDA106] font-semibold">
                        Leave Seller Review
                      </span>
                    </div>

                    {/* Default State */}
                    <div className="relative z-10 py-4 font-semibold flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-0">
                      Leave Seller Review
                    </div>
                  </div>
                </button>
              </div>
            )}
          </motion.div>

          {leaveReview.isOpen && (
            <LeaveReviewModal
              isOpen={leaveReview.isOpen}
              onClose={() => leaveReview.close()}
              onSubmit={() => {
                leaveReview.close();
                reviewSuccess.open();
              }}
              rating={leaveReview.rating}
              setRating={leaveReview.setRating}
              hoveredRating={leaveReview.hoveredRating}
              setHoveredRating={leaveReview.setHoveredRating}
              comment={leaveReview.comment}
              setComment={leaveReview.setComment}
            />
          )}

          <BuyAgainSuccessModal
            isOpen={reviewSuccess.isOpen}
            onClose={() => {
              reviewSuccess.close();
              leaveReview.close();
              onClose();
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default ItemStatusHistoryModal;
