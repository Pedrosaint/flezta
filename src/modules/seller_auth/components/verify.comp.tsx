"use client";

import { useState } from "react";
import { DropdownIcon, EditIcon, FileIcon } from "@/assets/svg/svg_icon";
import SellerCongratulationModal from "../modal/congratulation.modal";

const VerifyComp = () => {
    const [showModal, setShowModal] = useState(false);
    const [identityData] = useState({
        identificationType: "International Passport",
        idNumber: "B02678934561",
        accountName: "International passport.png",
    });

    const [storeData] = useState({
        storeName: "The name of your store",
        contactEmail: "The email provided",
        contactPhone: "The phone number provided",
        country: "Nigeria",
        state: "FCT - Abuja",
        zipCode: "900001",
    });

    const [accountData] = useState({
        bankName: "The name of your bank",
        accountNumber: "Your account number",
        accountName: "Your account name",
    });

    const handleSubmit = () => {
        setShowModal(true);
    };

    return (
        <div className="">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Verify & Submit
                </h1>
                <p className="text-sm text-gray-600">
                    Please verify all the information you've provided before submitting.
                </p>
            </div>

            {/* Identity Verification Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Identity Verification
                    </h2>
                    <button className="text-orange-500 hover:text-orange-600 transition-colors">
                        <EditIcon stroke="#FDA106" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Select means of identification */}
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Select means of identification
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={identityData.identificationType}
                                    readOnly
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <DropdownIcon />
                                </div>
                            </div>
                        </div>

                        {/* ID number */}
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                ID number
                            </label>
                            <input
                                type="text"
                                value={identityData.idNumber}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                    </div>

                    {/* Account name with file icon */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-2">
                            Account name
                        </label>
                        <div className="flex items-center gap-2">
                            <span className="bg-[#DDFFF4] rounded-[10px] p-1.5"><FileIcon width={20} height={20} /></span>
                            <span className="text-sm text-gray-900">
                                {identityData.accountName}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Store Setup Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Store Setup</h2>
                    <button className="text-orange-500 hover:text-orange-600 transition-colors">
                        <EditIcon stroke="#FDA106" />
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Name of store and Contact email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Name of store
                            </label>
                            <input
                                type="text"
                                value={storeData.storeName}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Contact email
                            </label>
                            <input
                                type="text"
                                value={storeData.contactEmail}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                    </div>

                    {/* Contact phone number and Country */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Contact phone number
                            </label>
                            <input
                                type="text"
                                value={storeData.contactPhone}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Country
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={storeData.country}
                                    readOnly
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <DropdownIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* State and ZIP code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">State</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={storeData.state}
                                    readOnly
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <DropdownIcon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                ZIP code
                            </label>
                            <input
                                type="text"
                                value={storeData.zipCode}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Account Setup Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Account Setup
                    </h2>
                    <button className="text-orange-500 hover:text-orange-600 transition-colors">
                        <EditIcon stroke="#FDA106" />
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Bank name and Account number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Bank name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={accountData.bankName}
                                    readOnly
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <DropdownIcon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Account number
                            </label>
                            <input
                                type="text"
                                value={accountData.accountNumber}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                    </div>

                    {/* Account name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 mb-2">
                                Account name
                            </label>
                            <input
                                type="text"
                                value={accountData.accountName}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-[16px] text-sm text-gray-900 cursor-default"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mb-5">
                <div className="w-full bg-primary-color text-white py-3 rounded-[14px] font-semibold">
                    Submit
                </div>
            </button>

            {showModal && (
                <SellerCongratulationModal onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default VerifyComp;