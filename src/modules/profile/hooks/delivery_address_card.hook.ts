import { useState } from 'react';

export const useDeliveryAddressCardHook = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleEditOpen = () => setIsEditModalOpen(true);
    const handleEditClose = () => setIsEditModalOpen(false);

    const handleDeleteOpen = () => setIsDeleteModalOpen(true);
    const handleDeleteClose = () => setIsDeleteModalOpen(false);

    const handleDeleteConfirm = (addressId: number) => {
        console.log("Deleting address:", addressId);
        // Add actual deletion logic here
        // Usually you would call an API then close the modal
        // For now, it's just logging
    };

    return {
        isEditModalOpen,
        isDeleteModalOpen,
        handleEditOpen,
        handleEditClose,
        handleDeleteOpen,
        handleDeleteClose,
        handleDeleteConfirm
    };
};
