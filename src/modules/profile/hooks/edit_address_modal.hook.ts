import { useState } from 'react';

interface UseEditAddressModalProps {
    onClose: () => void;
}

export const useEditAddressModalHook = ({ onClose }: UseEditAddressModalProps) => {
    const [formData, setFormData] = useState({
        firstName: 'Nwaolisa',
        lastName: 'Chinedu',
        email: 'chideranwaolisa@gmail.com',
        phoneNumber: '+2348000000000',
        country: 'ng',
        state: 'lagos',
        streetAddress: 'No 5 Olisa street'
    });

    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isStateOpen, setIsStateOpen] = useState(false);
    const [isCongratulationModal, setIsCongratulationModal] = useState(false);

    const countries = [
        { label: 'United States', value: 'us' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Canada', value: 'ca' },
        { label: 'Nigeria', value: 'ng' },
    ];

    const states = [
        { label: 'Lagos', value: 'lagos' },
        { label: 'Abuja', value: 'abuja' },
        { label: 'Kano', value: 'kano' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (name === 'country') setIsCountryOpen(false);
        if (name === 'state') setIsStateOpen(false);
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
    };
};
