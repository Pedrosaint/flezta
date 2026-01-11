import { useRouter } from "next/navigation";
import { useState } from "react";
import  useWishlist  from "@/shared/ui/hooks/wish_list.hook";

const useListProductHook = () => {
    const router = useRouter();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
     const { wishlist, toggleWishlist } = useWishlist();
    const [floatingHearts, setFloatingHearts] = useState<{ id: string }[]>([]);

    const scrollToTopSmooth = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleWishlistClick = (productId: string) => {
      const isAlreadyWishlisted = wishlist.includes(productId);

      toggleWishlist(productId);

      // Only animate when ADDING to wishlist
      if (!isAlreadyWishlisted) {
        const id = `${productId}-${Date.now()}`;

        setFloatingHearts((prev) => [...prev, { id }]);

        setTimeout(() => {
          setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
        }, 900);
      }
    };


    return {
        hoveredCard,
        setHoveredCard,
        scrollToTopSmooth,
        toggleWishlist,
        wishlist,
        setFloatingHearts,
        handleWishlistClick,
        floatingHearts,
        router,
    };
};

export default useListProductHook;
