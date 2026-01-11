import { useRouter } from "next/navigation";

const useTopSellersHook = () => {
    const router = useRouter();

    const scrollToTopSmooth = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return {
        router,
        scrollToTopSmooth,
    };
};

export default useTopSellersHook;
