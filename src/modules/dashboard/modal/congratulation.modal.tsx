'use client';

import { SuccessModal } from '@/shared/ui/components/modal.ui';
import { useRouter } from 'next/navigation';
import { profileRoute } from '@/core/routes/routeNames';

const CongratulationModal = ({ onClose }: { onClose: () => void }) => {
    const router = useRouter();

    const handleClose = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        onClose();
        router.push(profileRoute);
    };

    return (
        <SuccessModal
            isOpen
            onClose={handleClose}
            title="Congratulations"
            description="You have successfully added a new delivery address"
            primaryButtonText="Okay"
        />
    );
};

export default CongratulationModal;
