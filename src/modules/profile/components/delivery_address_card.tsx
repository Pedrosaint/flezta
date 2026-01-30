"use client";

import React from "react";
import { motion } from "framer-motion";
import { Delete, EditIcon } from "@/assets/svg/svg_icon";
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
                    <button
                        onClick={handleEditOpen}
                        className="group w-[150px] p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer"
                    >
                        <motion.div
                            whileHover="hovered"
                            className="relative w-full rounded-[14px] overflow-hidden bg-gradient"
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                <div className="flex items-center gap-2 text-[#FDA106] font-semibold">
                                    <motion.p
                                        variants={{
                                            hovered: { x: -6 }
                                        }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                                        <EditIcon stroke={"#FDA106"} />
                                    </motion.p>
                                    <motion.p
                                        variants={{
                                            hovered: { x: 6 }
                                        }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                        className="text-sm"
                                    >
                                        Edit Address
                                    </motion.p>
                                </div>
                            </div>

                            {/* Default State */}
                            <div className="flex items-center gap-2 relative z-10 py-2.5 font-semibold flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-0">
                                <EditIcon />
                                <motion.span
                                    variants={{
                                        hovered: { x: -6 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="text-sm"
                                >
                                    Edit Address
                                </motion.span>
                            </div>
                        </motion.div>
                    </button>

                    <button
                        onClick={handleDeleteOpen}
                        className="border border-red-500 text-[#D24545] cursor-pointer px-5 py-2 rounded-[18px] text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                        <Delete />
                        Delete Address
                    </button>
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
