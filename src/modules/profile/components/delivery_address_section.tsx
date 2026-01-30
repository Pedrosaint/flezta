"use client";

import React from "react";
import { Plus } from "lucide-react";
import DeliveryAddressCard from "./delivery_address_card";
import AddDeliveryAddressModal from "@/modules/dashboard/modal/add_address.modal";
import { useDeliveryAddressSectionHook } from "../hooks/delivery_address_section.hook";

interface DeliveryAddress {
    id: number;
    name: string;
    address: string;
    phone: string;
}

interface DeliveryAddressSectionProps {
    addresses: DeliveryAddress[];
}

const DeliveryAddressSection = ({ addresses }: DeliveryAddressSectionProps) => {
    const { isAddModalOpen, handleAddOpen, handleAddClose } = useDeliveryAddressSectionHook();
    return (
        <>
            <section className="bg-white rounded-[18px] p-4 shadow-sm flex justify-between items-center mb-5">
                <div>
                    <h3 className="font-semibold text-[20px]">
                        Delivery Address{" "}
                        <span className="text-gray-700">({addresses.length})</span>
                    </h3>
                </div>

                <button
                    type="button"
                    onClick={handleAddOpen}
                    className="group w-full max-w-[200px] p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                    <div className="flex items-center gap-2 w-full bg-[#003625] text-white py-4 px-4 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                        <Plus className="w-6 h-6" />
                        Add New Address
                    </div>
                </button>
            </section>

            <div className="space-y-4 rounded-[18px]">
                {addresses.map((address) => (
                    <DeliveryAddressCard key={address.id} address={address} />
                ))}
            </div>

            <AddDeliveryAddressModal
                isOpen={isAddModalOpen}
                onClose={handleAddClose}
            />
        </>
    );
};

export default DeliveryAddressSection;
