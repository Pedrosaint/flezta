// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import  useWishlist  from "@/shared/ui/hooks/wish_list.hook";

// const useTopDealsHook = () => {
//   const router = useRouter();
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const { wishlist, toggleWishlist } = useWishlist();
//   const [floatingHearts, setFloatingHearts] = useState<{ id: string }[]>([]);

//   const scrollToTopSmooth = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handleWishlistClick = (productId: string) => {
//     const isAlreadyWishlisted = wishlist.includes(productId);

//     toggleWishlist(productId);

//     // Only animate when ADDING to wishlist
//     if (!isAlreadyWishlisted) {
//       const id = `${productId}-${Date.now()}`;

//       setFloatingHearts((prev) => [...prev, { id }]);

//       setTimeout(() => {
//         setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
//       }, 900);
//     }
//   };


//   return {
//     hoveredCard,
//     setHoveredCard,
//     wishlist,
//     floatingHearts,
//     setFloatingHearts,
//     toggleWishlist,
//     scrollToTopSmooth,
//     handleWishlistClick,
//     router,
//   };
// };

// export default useTopDealsHook;





import { useRouter } from "next/navigation";
import { useState } from "react";
import useWishlist from "@/shared/ui/hooks/wish_list.hook";

const ITEMS_PER_VIEW = 4;

const useTopDealsHook = (totalProducts: number) => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { wishlist, toggleWishlist } = useWishlist();
  const [floatingHearts, setFloatingHearts] = useState<{ id: string }[]>([]);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
   const [direction, setDirection] = useState<1 | -1>(1);

  const canGoNext = currentIndex + ITEMS_PER_VIEW < totalProducts;
  const canGoPrev = currentIndex > 0;

  const handleNext = () => {
    if (canGoNext) {
       setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
       setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleWishlistClick = (productId: string) => {
    const isAlreadyWishlisted = wishlist.includes(productId);
    toggleWishlist(productId);

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
    wishlist,
    floatingHearts,
    handleWishlistClick,
    scrollToTopSmooth,
    router,

    // carousel
    currentIndex,
    handleNext,
    handlePrev,
    canGoNext,
    canGoPrev,
    direction,
  };
};

export default useTopDealsHook;
