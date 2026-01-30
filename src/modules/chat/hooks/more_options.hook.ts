import { useState } from 'react';

export const useMoreOptionsModalHook = () => {
    const [activeWarning, setActiveWarning] = useState<'block' | 'delete' | null>(null);

    const handleBlockClick = () => setActiveWarning('block');
    const handleDeleteClick = () => setActiveWarning('delete');
    const closeWarning = () => setActiveWarning(null);

    const handleConfirmBlock = () => {
        console.log("Seller blocked");
        // Actual block logic here
    };

    const handleConfirmDelete = () => {
        console.log("Conversation deleted");
        // Actual delete logic here
    };

    return {
        activeWarning,
        handleBlockClick,
        handleDeleteClick,
        closeWarning,
        handleConfirmBlock,
        handleConfirmDelete
    };
};
