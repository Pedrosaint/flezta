'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GoodIcon, ErrorIcon } from '@/assets/svg/svg_icon';
import { PrimaryButton, WarningButton, IconCloseButton } from './button.ui';

// ─────────────────────────────────────────────────────────────────────────────
// CenteredModal
// A generic centered overlay modal wrapper with scale animation.
// Renders children inside a white card in the center of the screen.
// ─────────────────────────────────────────────────────────────────────────────

interface CenteredModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    /** Max width class e.g. "max-w-sm" or "max-w-xl". Default: "max-w-xl" */
    maxWidth?: string;
    /** Whether clicking the backdrop dismisses the modal. Default: true */
    closeOnBackdrop?: boolean;
    className?: string;
    id?: string;
}

export const CenteredModal = ({
    isOpen,
    onClose,
    children,
    maxWidth = 'max-w-xl',
    closeOnBackdrop = true,
    className = '',
    id,
}: CenteredModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px]"
                    onClick={closeOnBackdrop && onClose ? onClose : undefined}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full bg-white rounded-2xl shadow-2xl ${maxWidth} ${className}`}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// SlideInModal
// A panel that slides in from the right side of the screen.
// Used for forms and detailed views (address, review, options, cancel order).
// ─────────────────────────────────────────────────────────────────────────────

interface SlideInModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    /** Max width of the panel. Default: "max-w-[700px]" */
    maxWidth?: string;
    id?: string;
}

export const SlideInModal = ({
    isOpen,
    onClose,
    title,
    children,
    maxWidth = 'max-w-[700px]',
    id,
}: SlideInModalProps) => {
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
                        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 cursor-pointer"
                    />

                    {/* Panel */}
                    <motion.div
                        id={id}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className={`fixed right-0 top-0 h-full w-full ${maxWidth} bg-white shadow-2xl z-[60] flex flex-col overflow-hidden`}
                    >
                        {/* Sticky Header */}
                        <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-200 z-10 shrink-0">
                            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                            <IconCloseButton onClick={onClose} />
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// SuccessModal
// Centered green "Congratulations" modal with a GoodIcon.
// Used after successful actions (address saved, password changed, etc.)
// ─────────────────────────────────────────────────────────────────────────────

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    primaryButtonText?: string;
    id?: string;
}

export const SuccessModal = ({
    isOpen,
    onClose,
    title = 'Congratulations',
    description = 'Your action was completed successfully.',
    primaryButtonText = 'Okay',
    id,
}: SuccessModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed bg-black/20 inset-0 flex items-center justify-center p-4 z-[100]"
                >
                    <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        id={id}
                        className="p-2 border border-[#003625] rounded-3xl bg-transparent"
                    >
                        <div className="bg-[#DDFFF4] rounded-2xl p-8 max-w-sm w-full text-center">
                            <div className="flex justify-center mb-6">
                                <GoodIcon width={50} height={50} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                            <p className="text-gray-700 mb-5 whitespace-pre-line">{description}</p>

                            <div className="flex justify-center">
                                <PrimaryButton onClick={onClose} size="md" className="w-50">
                                    {primaryButtonText}
                                </PrimaryButton>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// WarningConfirmModal
// Centered warning modal with an ErrorIcon.
// Used for destructive/confirm actions (delete, block, etc.)
// ─────────────────────────────────────────────────────────────────────────────

interface WarningConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description: React.ReactNode;
    confirmText: string;
    cancelText?: string;
    /** Show confirm on the right (default) or left side */
    confirmPlacement?: 'left' | 'right';
    id?: string;
}

export const WarningConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = 'Hold up!',
    description,
    confirmText,
    cancelText = 'No, Cancel',
    confirmPlacement = 'right',
    id,
}: WarningConfirmModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed bg-black/20 inset-0 flex items-center justify-center p-4 z-[100]"
                >
                    <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        id={id}
                        className="p-2 border border-[#FDA106] rounded-3xl bg-transparent"
                    >
                        <div className="bg-[#FFF4EA] rounded-2xl p-8 max-w-sm w-full text-center">
                            <div className="flex justify-center mb-6">
                                <ErrorIcon />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                            <div className="text-gray-700 mb-5">{description}</div>

                            <div className="flex justify-between gap-5">
                                {confirmPlacement === 'left' ? (
                                    <>
                                        <PrimaryButton onClick={onConfirm} fullWidth size="md">
                                            {confirmText}
                                        </PrimaryButton>
                                        <WarningButton onClick={onClose} fullWidth size="md">
                                            {cancelText}
                                        </WarningButton>
                                    </>
                                ) : (
                                    <>
                                        <PrimaryButton onClick={onClose} fullWidth size="md">
                                            {cancelText}
                                        </PrimaryButton>
                                        <WarningButton onClick={onConfirm} fullWidth size="md">
                                            {confirmText}
                                        </WarningButton>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// LottieModal
// Centered white modal with a Lottie animation.
// Used for payment success, password changed, etc.
// ─────────────────────────────────────────────────────────────────────────────

interface LottieModalProps {
    isOpen: boolean;
    onClose: () => void;
    animationData: object;
    title: string;
    description?: string;
    /** Extra content (e.g. detail rows, extra buttons) rendered below description */
    children?: React.ReactNode;
    id?: string;
}

export const LottieModal = ({
    isOpen,
    onClose,
    animationData,
    title,
    description,
    children,
    id,
}: LottieModalProps) => {
    // Lazy-load Lottie to avoid SSR issues
    const [Lottie, setLottie] = React.useState<React.ComponentType<{
        animationData: object;
        loop?: boolean;
        autoplay?: boolean;
        style?: React.CSSProperties;
    }> | null>(null);

    React.useEffect(() => {
        import('lottie-react').then((mod) => setLottie(() => mod.default));
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
                >
                    <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.95 }}
                        id={id}
                        className="relative w-full max-w-xl bg-white p-8 shadow-lg rounded-2xl"
                    >
                        {/* Close Button */}
                        <div className="absolute right-5 top-5">
                            <IconCloseButton onClick={onClose} />
                        </div>

                        {/* Animation */}
                        <div className="flex justify-center">
                            {Lottie && (
                                <Lottie
                                    animationData={animationData}
                                    loop
                                    autoplay
                                    style={{ width: 200, height: 200 }}
                                />
                            )}
                        </div>

                        {/* Title */}
                        <h2 className="mt-4 text-center text-2xl font-semibold">{title}</h2>

                        {/* Description */}
                        {description && (
                            <p className="mt-2 text-center text-sm text-gray-900">{description}</p>
                        )}

                        {/* Divider */}
                        <div className="my-4 border-t border-[#003625]/20" />

                        {/* Slot for extra content */}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
