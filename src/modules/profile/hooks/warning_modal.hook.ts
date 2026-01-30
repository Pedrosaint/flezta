import { useState } from 'react';

interface UseWarningModalProps {
    onConfirm: () => void;
}

export const useWarningModalHook = ({ onConfirm }: UseWarningModalProps) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleConfirm = () => {
        onConfirm();
        setShowSuccess(true);
    };

    return {
        showSuccess,
        handleConfirm
    };
};
