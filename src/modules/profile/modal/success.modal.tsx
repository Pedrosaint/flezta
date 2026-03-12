'use client';

import { SuccessModal } from '@/shared/ui/components/modal.ui';
import { useRouter } from 'next/navigation';
import { profileRoute } from '@/core/routes/routeNames';

interface SuccessModalModuleProps {
    title?: string;
    description?: string;
    onClose?: () => void;
    primaryButtonText?: string;
}

/**
 * Profile-specific wrapper around the shared SuccessModal.
 * Falls back to navigating to the profile route if no onClose is provided.
 */
const ProfileSuccessModal = ({
    title = 'Congratulations',
    description = 'You have successfully updated your delivery address',
    onClose,
    primaryButtonText = 'Okay',
}: SuccessModalModuleProps) => {
    const router = useRouter();

    const handleAction = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (onClose) {
            onClose();
        } else {
            router.push(profileRoute);
        }
    };

    return (
        <SuccessModal
            isOpen
            onClose={handleAction}
            title={title}
            description={description}
            primaryButtonText={primaryButtonText}
        />
    );
};

export default ProfileSuccessModal;
