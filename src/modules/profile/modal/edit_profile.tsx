"use client"

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessModal from './success.modal';
import { useEditProfileModalHook } from '../hooks/edit_profile.hook';
import { EditIcon } from '@/assets/svg/svg_icon';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditProfileModal = ({ isOpen, onClose }: EditProfileModalProps) => {
    const {
        formData,
        isCongratulationModal,
        fileInputRef,
        handleChange,
        handleSubmit,
        handleImageUpdate,
        handleFileChange,
        handleSuccessClose,
    } = useEditProfileModalHook({ onClose });

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
                            <h2 className="text-2xl font-semibold text-gray-900">Update Your Profile</h2>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8">

                            {/* Profile Image */}
                            <div className="flex items-center gap-4 mb-8">
                                {/* Avatar */}
                                <div className="relative w-25 h-25 rounded-full bg-purple-100 border border-purple-600 flex items-center justify-center">
                                    <span className="text-purple-600 font-semibold text-2xl">
                                        OJ
                                    </span>
                                </div>

                                {/* Update image */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <button
                                    type="button"
                                    onClick={handleImageUpdate}
                                    className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer"
                                >
                                    <div className="relative">
                                        {/* Hidden SVG to define the gradient for EditIcon */}
                                        <svg width="0" height="0" className="absolute">
                                            <defs>
                                                <linearGradient id="edit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop stopColor="#E26E00" offset="0%" />
                                                    <stop stopColor="#FDA106" offset="100%" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <EditIcon width={24} height={24} stroke="url(#edit-gradient)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </div>
                                    <h1 className='gradient-text'>Update image</h1>
                                </button>
                            </div>


                            <div className="space-y-6">
                                {/* First and Last Name Row */}
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

                                {/* Username and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-start block text-sm text-gray-700 mb-2">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            placeholder="Enter username"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-[16px] outline-none"
                                        />
                                    </div>

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
                                            className="w-full px-4 py-3 border border-gray-200 rounded-[16px] outline-none cursor-not-allowed bg-gray-100"
                                            disabled
                                        />
                                    </div>
                                </div>

                                {/* Phone number - Half Width */}
                                <div className="w-full md:w-1/2">
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

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group w-full p-0.5 border border-[#003625] rounded-[16px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mb-5"
                                >
                                    <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                                        Update Profile
                                    </div>
                                </button>
                            </div>

                            {isCongratulationModal && (
                                <SuccessModal
                                    title="Congratulations"
                                    description="You have successfully updated your profile"
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

export default EditProfileModal;