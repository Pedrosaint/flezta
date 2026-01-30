"use client";

import React from "react";
import { ChatUser } from "../data/chat.data";

interface ChatSidebarProps {
    users: ChatUser[];
    selectedChatId: number;
    onSelectChat: (id: number) => void;
}

const ChatSidebar = ({ users, selectedChatId, onSelectChat }: ChatSidebarProps) => {
    return (
        <div className="w-80 bg-white border border-gray-200 rounded-l-[18px] overflow-hidden flex flex-col h-[calc(100vh-200px)]">
            <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-900">Chat</h1>
            </div>

            <div className="flex-1 overflow-y-auto">
                {users.map((user) => (
                    <div
                        key={user.id}
                        onClick={() => onSelectChat(user.id)}
                        className={`flex items-center gap-3 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${selectedChatId === user.id ? "bg-gray-50" : ""
                            }`}
                    >
                        <div
                            className={`w-12 h-12 rounded-full border ${user.avatarColor} flex items-center justify-center font-semibold text-lg flex-shrink-0`}
                        >
                            {user.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900 truncate">
                                    {user.name}
                                </h3>
                                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                                    {user.timestamp}
                                </span>
                            </div>
                            <p className="text-sm text-gray-700 truncate">
                                {user.lastMessage}
                            </p>
                            <div className="flex items-center gap-2">
                                {user.hasImage && (
                                    <div className="w-8 h-8 bg-gray-200 rounded flex-shrink-0"></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatSidebar;
