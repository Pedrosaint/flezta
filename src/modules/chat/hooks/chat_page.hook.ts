import { useState } from "react";
import { chatUsers, chatMessages } from "../data/chat.data";

export const useChatPageHook = () => {
    const [selectedChatId, setSelectedChatId] = useState<number>(2);
    const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false);
    const [showSafetyNotice, setShowSafetyNotice] = useState<boolean>(true);

    const selectedUser = chatUsers.find(user => user.id === selectedChatId) || chatUsers[1];
    const messages = chatMessages[selectedChatId] || [];

    const handleSelectChat = (id: number) => {
        setSelectedChatId(id);
    };

    const toggleMoreOptions = (value: boolean) => {
        setShowMoreOptions(value);
    };

    const closeSafetyNotice = () => {
        setShowSafetyNotice(false);
    };

    return {
        chatUsers,
        selectedChatId,
        selectedUser,
        messages,
        showMoreOptions,
        showSafetyNotice,
        handleSelectChat,
        toggleMoreOptions,
        closeSafetyNotice
    };
};
