"use client"

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DropdownIcon } from '@/assets/svg/svg_icon';
import { SlideInModal } from '@/shared/ui/components/modal.ui';
import { PrimaryButton } from '@/shared/ui/components/button.ui';
import ProfileSuccessModal from './success.modal';
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
        <>
            <SlideInModal
                isOpen={isOpen}
                onClose={onClose}
                title="Edit Delivery Address"
                maxWidth="max-w-[700px]"
            >
                <form onSubmit={handleSubmit} className="p-8">
                    <div className="space-y-6">
                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-start block text-sm text-gray-700 mb-2">
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
                                <label className="text-start block text-sm text-gray-700 mb-2">
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

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-start block text-sm text-gray-700 mb-2">
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

                        {/* Country and State */}
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
                                            {formData.country
                                                ? countries.find(c => c.value === formData.country)?.label
                                                : 'Select country'}
                                        </span>
                                        <DropdownIcon
                                            stroke="#0C0F16"
                                            className={`transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`}
                                        />
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
                                            {formData.state
                                                ? states.find(s => s.value === formData.state)?.label
                                                : 'Select state'}
                                        </span>
                                        <DropdownIcon
                                            stroke="#0C0F16"
                                            className={`transition-transform duration-200 ${isStateOpen ? 'rotate-180' : ''}`}
                                        />
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

                        {/* Submit */}
                        <PrimaryButton type="submit" fullWidth size="md">
                            Update Address
                        </PrimaryButton>
                    </div>
                </form>
            </SlideInModal>

            {isCongratulationModal && (
                <ProfileSuccessModal onClose={handleSuccessClose} />
            )}
        </>
    );
};

export default EditDeliveryAddressModal;