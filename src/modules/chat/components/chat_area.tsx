"use client";

import React from "react";
import { MapPin, X } from "lucide-react";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { DateIcon, ShieldIcon } from "@/assets/svg/svg_icon";
import { ChatUser, Message } from "../data/chat.data";

interface ChatAreaProps {
    user: ChatUser;
    messages: Message[];
    onShowOptions: () => void;
    showSafetyNotice: boolean;
    onCloseSafetyNotice: () => void;
}

const ChatArea = ({
    user,
    messages,
    onShowOptions,
    showSafetyNotice,
    onCloseSafetyNotice
}: ChatAreaProps) => {
    return (
        <div className="flex-1 flex flex-col rounded-r-[18px] bg-white border border-l-0 border-gray-200 overflow-hidden h-[calc(100vh-200px)]">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full border ${user.avatarColor} flex items-center justify-center font-semibold text-lg`}>
                        {user.initials}
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900">{user.name}</h2>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span>Offline (Last active - {user.lastActive})</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={onShowOptions}
                    className="cursor-pointer p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                    <PiDotsThreeOutlineVertical className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-4">
                {messages.length > 0 ? (
                    messages.map((message) => (
                        <div key={message.id}>
                            {message.type === "product" && (
                                <div className="flex items-center gap-3 border-b border-gray-100 w-full pb-4 p-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 mb-0.5">
                                            {message.productName}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {message.productPrice}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {message.type === "text" && (
                                <div className="max-w-md border border-gray-100 rounded-[18px] p-4 m-4">
                                    <div className="mb-1">
                                        <p className="text-normal text-gray-900 whitespace-pre-line">
                                            {message.content}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3 text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4 text-black" />
                                            <span>{user.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DateIcon height={15} width={15} />
                                            <span>Last active - {user.lastActive}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {message.type === "negotiation" && (
                                <div className="flex justify-end p-4">
                                    <div className="bg-[#DDFFF4] border border-[#6CF5CA] rounded-2xl rounded-[10px] p-2 max-w-xs">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-lg font-medium text-[#077D58]">
                                                {message.newPrice}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                {message.originalPrice}
                                            </span>
                                        </div>
                                        <p className="text-xs text-[#077D58] font-medium">
                                            {message.status}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-500 py-20">
                        <p>No messages yet.</p>
                    </div>
                )}

                {/* Proceed To Buy Button (Optional - could be conditional) */}
                {messages.length > 0 && (
                    <div className="p-4">
                        <button
                            type="button"
                            className="group w-full max-w-[200px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                            <div className="w-full bg-[#003625] text-white py-4 px-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                                Proceed To Buy
                            </div>
                        </button>
                    </div>
                )}
            </div>

            {/* Safety Notice */}
            {showSafetyNotice && (
                <div className="bg-[#F6FAF9] border-t border-gray-200 p-4">
                    <div className="flex items-center justify-between max-w-4xl mx-auto">
                        <div className="flex items-center gap-2">
                            <ShieldIcon />
                            <p className="text-[#4B5563] text-sm">
                                Stay safe on FLEZTA. Don't share personal data, click on external links, or scan QR codes.
                            </p>
                        </div>
                        <button
                            onClick={onCloseSafetyNotice}
                            className="p-1 hover:bg-gray-200 rounded transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatArea;
