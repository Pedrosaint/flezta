"use client";

import DeliveryImage from "@/assets/images/delivery.png";
import { useState } from "react";
import { GradientButton } from "@/shared/ui/components/button.ui";
import AddDeliveryAddressModal from "../modal/add_address.modal";


const DeliveryAddressCard = () => {
    const [isAddAddressModal, setIsAddAddressModal] = useState(false);
    return (
        <section className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[250px]">
            <p className="text-2xl font-medium text-gray-900 mb-5">
                You don’t have any delivery address
            </p>
            <img src={DeliveryImage.src} alt="" className="mb-5" />

            <GradientButton
                onClick={() => setIsAddAddressModal(true)}
                className="w-50"
            >
                Add Address
            </GradientButton>

            <AddDeliveryAddressModal
                isOpen={isAddAddressModal}
                onClose={() => setIsAddAddressModal(false)}
            />
        </section>
    );
};

export default DeliveryAddressCard;
