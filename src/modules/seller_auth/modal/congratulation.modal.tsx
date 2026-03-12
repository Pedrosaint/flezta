'use client';

import { SuccessModal } from '@/shared/ui/components/modal.ui';

const SellerCongratulationModal = ({ onClose }: { onClose: () => void }) => {
    const handleClose = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        onClose();
    };

    return (
        <SuccessModal
            isOpen
            onClose={handleClose}
            title="Congratulations"
            description="Your request have been submitted"
            primaryButtonText="Okay"
        />
    );
};

export default SellerCongratulationModal;
