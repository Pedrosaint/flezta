import { useState, useRef } from 'react';

interface UseEditProfileModalProps {
    onClose: () => void;
}

export const useEditProfileModalHook = ({ onClose }: UseEditProfileModalProps) => {
    const [formData, setFormData] = useState({
        firstName: 'Nwaolisa',
        lastName: "Otor",
        userName: "UIUxOtor",
        email: "otorjohnstephenQgmail.com",
        phoneNumber: '+234 8130000000',
        streetAddress: '123 Main St'
    });

    const [isCongratulationModal, setIsCongratulationModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpdate = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('File selected:', file.name);
            // Logic to handle image upload would go here
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsCongratulationModal(true);
    };

    const handleSuccessClose = () => {
        setIsCongratulationModal(false);
        onClose();
    };

    return {
        formData,
        isCongratulationModal,
        fileInputRef,
        handleChange,
        handleSubmit,
        handleImageUpdate,
        handleFileChange,
        handleSuccessClose,
        setIsCongratulationModal
    };
};
