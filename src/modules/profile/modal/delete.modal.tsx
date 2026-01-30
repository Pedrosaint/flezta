'use client';

import React from 'react';
import SuccessModal from './success.modal';
import { ErrorIcon } from '@/assets/svg/svg_icon';
import { useWarningModalHook } from '../hooks/warning_modal.hook';
import { usePathname } from 'next/navigation';
import { profileRoute } from '@/core/routes/routeNames';

interface WarningModalProps {
    onClose: () => void;
    onConfirm: () => void;
    onCloseSuccess?: () => void;
    title?: string;
    description: React.ReactNode;
    confirmText: string;
    cancelText?: string;
    successTitle?: string;
    successDescription: string;
}

const WarningModal = ({
    onClose,
    onConfirm,
    onCloseSuccess,
    title = "Hold up!",
    description,
    confirmText,
    cancelText = "No, Cancel",
    successTitle = "Congratulations",
    successDescription
}: WarningModalProps) => {
    const pathname = usePathname();
    const { showSuccess, handleConfirm } = useWarningModalHook({ onConfirm });

    if (showSuccess) {
        return (
            <SuccessModal
                title={successTitle}
                description={successDescription}
                onClose={onCloseSuccess || onClose}
            />
        );
    }

    return (
        <div className="fixed bg-black/20 inset-0 flex items-center justify-center p-4 z-[100]">
            <div className="p-2 border border-[#FDA106] rounded-3xl bg-transparent">
                <div className="bg-[#FFF4EA] rounded-2xl p-8 max-w-sm w-full text-center">
                    <div className="flex justify-center mb-6">
                        <ErrorIcon />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {title}
                    </h3>
                    <div className="text-gray-700 mb-5">
                        {description}
                    </div>

                    {pathname === profileRoute ? (
                        <div className="flex justify-between gap-5">
                            <button
                                onClick={onClose}
                                className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer">
                                <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] font-semibold text-sm">
                                    {cancelText}
                                </div>
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="w-full p-0.5 border backdrop-blur-[10px] border-[#FDA106] rounded-[18px] transition cursor-pointer">
                                <div className="w-full bg-[#FFF4EA] text-[#FDA106] py-3 rounded-[14px] font-semibold text-sm">
                                    {confirmText}
                                </div>
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-between gap-5">
                            <button
                                onClick={handleConfirm}
                                className="group w-full p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer"
                            >
                                <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient">
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                                        <span className="text-[#FDA106] font-semibold">
                                            {confirmText}
                                        </span>
                                    </div>

                                    {/* Default State */}
                                    <div className="relative z-10 py-3 font-semibold flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                                        {confirmText}
                                    </div>
                                </div>
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full p-0.5 border backdrop-blur-[10px] border-[#FDA106] rounded-[18px] transition cursor-pointer">
                                <div className="w-full bg-[#FFF4EA] text-[#FDA106] py-3 rounded-[14px] font-semibold text-sm">
                                    {cancelText}
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WarningModal;
