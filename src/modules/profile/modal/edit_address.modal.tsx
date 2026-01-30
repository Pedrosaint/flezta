"use client"

import { X } from 'lucide-react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DropdownIcon } from '@/assets/svg/svg_icon';
import SuccessModal from './success.modal';
import { useEditAddressModalHook } from '../hooks/edit_address_modal.hook';

interface EditDeliveryAddressModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditDeliveryAddressModal = ({ isOpen, onClose }: EditDeliveryAddressModalProps) => {
    const {
        formData,
        isCountryOpen,
        isStateOpen,
        isCongratulationModal,
        countries,
        states,
        setIsCountryOpen,
        setIsStateOpen,
        handleChange,
        handleSelectChange,
        handleSubmit,
        handleSuccessClose
    } = useEditAddressModalHook({ onClose });

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 opacity-50 backdrop-blur-sm z-50 cursor-pointer"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-[700px] bg-white shadow-2xl z-[60] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-200 z-10">
                            <h2 className="text-2xl font-semibold text-gray-900">Edit Delivery Address</h2>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8">
                            <div className="space-y-6">
                                {/* Full Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-start block text-sm  text-gray-700 mb-2">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter first name"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-[16px] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-start block text-sm  text-gray-700 mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter last name"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-[16px] outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number and Country Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-start block text-sm  text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter email address"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-[16px] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-start block text-sm text-gray-700 mb-2">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="Enter phone number"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-[16px] outline-none"
                                        />
                                    </div>
                                </div>

                                {/* State / City */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-start block text-sm text-gray-700 mb-2">
                                            Country
                                        </label>
                                        <div className="relative">
                                            <div
                                                onClick={() => setIsCountryOpen(!isCountryOpen)}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-[16px] flex items-center justify-between cursor-pointer bg-white"
                                            >
                                                <span className={formData.country ? 'text-gray-900' : 'text-gray-400'}>
                                                    {formData.country ? countries.find(c => c.value === formData.country)?.label : 'Select country'}
                                                </span>
                                                <DropdownIcon stroke="#0C0F16" className={`transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`} />
                                            </div>

                                            <AnimatePresence>
                                                {isCountryOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-2xl shadow-xl z-20 py-2 overflow-hidden"
                                                    >
                                                        {countries.map((country) => (
                                                            <div
                                                                key={country.value}
                                                                onClick={() => handleSelectChange('country', country.value)}
                                                                className="text-start border border-gray-100 px-4 py-2 hover:bg-green-50 cursor-pointer transition-colors text-gray-700 hover:text-[#003625]"
                                                            >
                                                                {country.label}
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-start block text-sm text-gray-700 mb-2">
                                            State / City
                                        </label>
                                        <div className="relative">
                                            <div
                                                onClick={() => setIsStateOpen(!isStateOpen)}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-[16px] flex items-center justify-between cursor-pointer bg-white"
                                            >
                                                <span className={formData.state ? 'text-gray-900' : 'text-gray-400'}>
                                                    {formData.state ? states.find(s => s.value === formData.state)?.label : 'Select state'}
                                                </span>
                                                <DropdownIcon stroke="#0C0F16" className={`transition-transform duration-200 ${isStateOpen ? 'rotate-180' : ''}`} />
                                            </div>

                                            <AnimatePresence>
                                                {isStateOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 py-2 overflow-hidden"
                                                    >
                                                        {states.map((state) => (
                                                            <div
                                                                key={state.value}
                                                                onClick={() => handleSelectChange('state', state.value)}
                                                                className="text-start px-4 py-2 border border-gray-100 hover:bg-emerald-50 cursor-pointer transition-colors text-gray-700 hover:text-[#003625]"
                                                            >
                                                                {state.label}
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                {/* Street Address */}
                                <div className="col-span-2 gap-6">
                                    <div>
                                        <label className="text-start block text-sm text-gray-700 mb-2">
                                            Street address
                                        </label>
                                        <textarea
                                            name="streetAddress"
                                            value={formData.streetAddress}
                                            onChange={handleChange}
                                            placeholder="Enter street address"
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group w-full p-0.5 border border-[#003625] rounded-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mb-5"
                                >
                                    <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                                        Update Address
                                    </div>
                                </button>
                            </div>

                            {isCongratulationModal && (
                                <SuccessModal
                                    onClose={handleSuccessClose}
                                />
                            )}
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EditDeliveryAddressModal;