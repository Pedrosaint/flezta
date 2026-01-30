"use client";

import React from "react";
import ChatSidebar from "../components/chat_sidebar";
import ChatArea from "../components/chat_area";
import MoreOptionsModal from "../modal/more_option.modal";
import { useChatPageHook } from "../hooks/chat_page.hook";

const ChatPage = () => {
    const {
        chatUsers,
        selectedChatId,
        selectedUser,
        messages,
        showMoreOptions,
        showSafetyNotice,
        handleSelectChat,
        toggleMoreOptions,
        closeSafetyNotice
    } = useChatPageHook();

    return (
        <div className="flex">
            <ChatSidebar
                users={chatUsers}
                selectedChatId={selectedChatId}
                onSelectChat={handleSelectChat}
            />

            <ChatArea
                user={selectedUser}
                messages={messages}
                onShowOptions={() => toggleMoreOptions(true)}
                showSafetyNotice={showSafetyNotice}
                onCloseSafetyNotice={closeSafetyNotice}
            />

            <MoreOptionsModal
                isOpen={showMoreOptions}
                onClose={() => toggleMoreOptions(false)}
            />
        </div>
    );
};

export default ChatPage;