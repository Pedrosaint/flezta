import { useState, useEffect } from 'react';
import useAppLayoutHook from '@/shared/ui/hooks/app_layout.hook';

export const useDashboardPageHook = () => {
    const { handleProtectedRoutes } = useAppLayoutHook();
    const [showTracking, setShowTracking] = useState(true);

    useEffect(() => {
        handleProtectedRoutes();
    }, [handleProtectedRoutes]);

    const handleCloseTracking = () => setShowTracking(false);

    return {
        showTracking,
        handleCloseTracking
    };
};
