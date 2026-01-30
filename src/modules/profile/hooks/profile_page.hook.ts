import { useEffect, useState } from 'react';
import useAppLayoutHook from '@/shared/ui/hooks/app_layout.hook';
import { IDeliveryAddress } from '../types/delivery.types';

export const useProfilePageHook = () => {
    const { handleProtectedRoutes } = useAppLayoutHook();
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

    useEffect(() => {
        handleProtectedRoutes();
    }, [handleProtectedRoutes]);

    const deliveryAddresses: IDeliveryAddress[] = [
        {
            id: 1,
            name: "Otor John Stephen",
            address: "38 Asheik Jarma Street, Jabi District, Abuja, Federal Capital Territory.",
            phone: "+234 8130000000",
        },
        {
            id: 2,
            name: "Otor John Stephen",
            address: "38 Asheik Jarma Street, Jabi District, Abuja, Federal Capital Territory.",
            phone: "+234 8130000000",
        },
        {
            id: 3,
            name: "Otor John Stephen",
            address: "38 Asheik Jarma Street, Jabi District, Abuja, Federal Capital Territory.",
            phone: "+234 8130000000",
        },
    ];

    const handleEditProfileOpen = () => setIsEditProfileModalOpen(true);
    const handleEditProfileClose = () => setIsEditProfileModalOpen(false);

    return {
        isEditProfileModalOpen,
        deliveryAddresses,
        handleEditProfileOpen,
        handleEditProfileClose,
        setIsEditProfileModalOpen
    };
};
