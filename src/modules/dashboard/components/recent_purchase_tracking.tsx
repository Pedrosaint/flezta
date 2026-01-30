"use client";

import React from "react";
import { X } from "lucide-react";
import { FastShippingIcon, Good } from "@/assets/svg/svg_icon";
import { useRecentPurchaseTrackingHook } from "../hooks/recent_purchase_tracking.hook";



const RecentPurchaseTracking = ({ onClose }: { onClose: () => void }) => {
    const {
        activeIndex,
        activePurchase,
        steps,
        progressWidth
    } = useRecentPurchaseTrackingHook();

    return (
        <div className="bg-white rounded-[20px] p-5 border border-gray-200 relative">
            {/* Gradient */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <defs>
                    <linearGradient id="closeIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#E26E00" />
                        <stop offset="100%" stopColor="#FDA106" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Recent purchase tracking
                    </h2>

                    <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                        <div>
                            <p className="text-sm text-gray-700 font-medium">
                                {activePurchase.productName}
                            </p>
                            <p className="text-sm text-gray-500">
                                Order ID: #{activePurchase.id}
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="hover:opacity-80 cursor-pointer"
                >
                    <X stroke="url(#closeIconGradient)" size={24} />
                </button>
            </div>

            {/* Estimated Arrival */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <FastShippingIcon width={17} />
                    <p className="text-sm text-gray-600">Estimated arrival</p>
                </div>

                <p className="text-lg font-semibold text-gray-900">
                    {activePurchase.estimatedArrival}
                </p>
            </div>

            {/* Progress Tracker */}
            <div className="relative">
                {/* Line */}
                <div className="absolute left-0 right-0 top-[10px] h-1.5 bg-gray-200">
                    <div
                        className="h-full bg-[#077D58] transition-all duration-500"
                        style={{ width: `${progressWidth}%` }}
                    />
                </div>

                {/* Steps */}
                <div className="relative flex w-full">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                            <div className="mb-1 z-10">
                                {step.completed ? (
                                    <div className="w-6 h-6 rounded-[6px] bg-[#003625] border border-[#003625] flex items-center justify-center">
                                        <Good />
                                    </div>
                                ) : (
                                    <div className="w-6 h-6 rounded-[6px] bg-gray-300 border border-white flex items-center justify-center">
                                        <Good />
                                    </div>
                                )}
                            </div>

                            <span
                                className={`text-sm whitespace-nowrap ${step.completed
                                    ? "text-[#077D58] font-medium"
                                    : "text-gray-500"
                                    }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination (3-dot capped indicator) */}
            <div className="flex items-center justify-center gap-4 pt-3">
                {[0, 1, 2].map((dotIndex) => {
                    const isActive =
                        (activeIndex === dotIndex && dotIndex < 2) ||
                        (activeIndex >= 2 && dotIndex === 2);

                    return isActive ? (
                        <div
                            key={dotIndex}
                            className="w-6 h-6 rounded-full border-2 border-[#003625] flex items-center justify-center"
                        >
                            <div className="w-3 h-3 rounded-full bg-gradient" />
                        </div>
                    ) : (
                        <div
                            key={dotIndex}
                            className="w-3 h-3 rounded-full bg-[#003625]"
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RecentPurchaseTracking;
