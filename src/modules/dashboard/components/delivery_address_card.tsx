"use client";

import DeliveryImage from "@/assets/images/delivery.png";
import { useState } from "react";
import AddDeliveryAddressModal from "../modal/add_address.modal";


const DeliveryAddressCard = () => {
    const [isAddAddressModal, setIsAddAddressModal] = useState(false);
    return (
        <section className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[250px]">
            <p className="text-2xl font-medium text-gray-900 mb-5">
                You don’t have any delivery address
            </p>
            <img src={DeliveryImage.src} alt="" className="mb-5" />

            <button
                onClick={() => setIsAddAddressModal(true)}
                className="group w-45 p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer"
            >
                <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <span className="text-[#FDA106] font-semibold">
                            Add Address
                        </span>
                    </div>

                    {/* Default State */}
                    <div className="relative z-10 py-4 font-semibold flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-0">
                        Add Address
                    </div>
                </div>
            </button>

            <AddDeliveryAddressModal
                isOpen={isAddAddressModal}
                onClose={() => setIsAddAddressModal(false)}
            />
        </section>
    );
};

export default DeliveryAddressCard;
