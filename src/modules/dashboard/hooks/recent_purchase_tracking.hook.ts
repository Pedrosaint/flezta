import { useEffect, useState } from 'react';
import recentPurchases from '../data/purchase.data';

const AUTO_SLIDE_INTERVAL = 4000;

export const useRecentPurchaseTrackingHook = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activePurchase = recentPurchases[activeIndex];
    const { steps, currentStep } = activePurchase;

    useEffect(() => {
        if (recentPurchases.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                prev === recentPurchases.length - 1 ? 0 : prev + 1
            );
        }, AUTO_SLIDE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const progressWidth = ((currentStep + 0.5) / steps.length) * 100;

    return {
        activeIndex,
        activePurchase,
        steps,
        progressWidth,
        setActiveIndex
    };
};
