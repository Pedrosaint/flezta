'use client';

import React from 'react';
import ProfileSuccessModal from './success.modal';
import { WarningConfirmModal } from '@/shared/ui/components/modal.ui';
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
    title = 'Hold up!',
    description,
    confirmText,
    cancelText = 'No, Cancel',
    successTitle = 'Congratulations',
    successDescription,
}: WarningModalProps) => {
    const pathname = usePathname();
    const { showSuccess, handleConfirm } = useWarningModalHook({ onConfirm });

    if (showSuccess) {
        return (
            <ProfileSuccessModal
                title={successTitle}
                description={successDescription}
                onClose={onCloseSuccess || onClose}
            />
        );
    }

    return (
        <WarningConfirmModal
            isOpen
            onClose={onClose}
            onConfirm={handleConfirm}
            title={title}
            description={description}
            confirmText={confirmText}
            cancelText={cancelText}
            // On profile route, confirm is on the left; otherwise on the right
            confirmPlacement={pathname === profileRoute ? 'left' : 'right'}
        />
    );
};

export default WarningModal;
