"use client";

import React from "react";
import { Delete, EditIcon } from "@/assets/svg/svg_icon";
import { GradientButton, DangerButton } from "@/shared/ui/components/button.ui";
import EditDeliveryAddressModal from "../modal/edit_address.modal";
import WarningModal from "../modal/delete.modal";
import { useDeliveryAddressCardHook } from "../hooks/delivery_address_card.hook";

interface DeliveryAddress {
    id: number;
    name: string;
    address: string;
    phone: string;
}

interface DeliveryAddressCardProps {
    address: DeliveryAddress;
}

const DeliveryAddressCard = ({ address }: DeliveryAddressCardProps) => {
    const {
        isEditModalOpen,
        isDeleteModalOpen,
        handleEditOpen,
        handleEditClose,
        handleDeleteOpen,
        handleDeleteClose,
        handleDeleteConfirm
    } = useDeliveryAddressCardHook();

    return (
        <>
            <div className="border border-gray-200 rounded-[18px] bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-2">
                    {address.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                    {address.address}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                    {address.phone}
                </p>

                <div className="flex gap-3">
                    <GradientButton
                        onClick={handleEditOpen}
                        className="w-[180px]"
                        size="md"
                    >
                        <span className="transition-transform duration-300 group-hover:-translate-x-1.5 flex items-center">
                            <EditIcon stroke="currentColor" />
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                            Edit Address
                        </span>
                    </GradientButton>

                    <DangerButton
                        onClick={handleDeleteOpen}
                        size="md"
                        className="w-[180px]"
                    >
                        <Delete />
                        Delete Address
                    </DangerButton>
                </div>
            </div>

            <EditDeliveryAddressModal
                isOpen={isEditModalOpen}
                onClose={handleEditClose}
            />

            {isDeleteModalOpen && (
                <WarningModal
                    onClose={handleDeleteClose}
                    onConfirm={() => handleDeleteConfirm(address.id)}
                    title="Hold up!"
                    description={
                        <p>
                            Are you sure you want to delete? <br />
                            This will permanently remove this address.
                        </p>
                    }
                    confirmText="Yes, Delete"
                    successDescription="You have successfully deleted this delivery address"
                />
            )}
        </>
    );
};

export default DeliveryAddressCard;
