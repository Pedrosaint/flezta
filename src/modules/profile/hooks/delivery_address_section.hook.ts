import { useState } from 'react';

export const useDeliveryAddressSectionHook = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddOpen = () => setIsAddModalOpen(true);
    const handleAddClose = () => setIsAddModalOpen(false);

    return {
        isAddModalOpen,
        handleAddOpen,
        handleAddClose
    };
};
