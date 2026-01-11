import { useState } from "react";

const useCategoriesHook = () => {
  const [priceFrom, setPriceFrom] = useState(50);
  const [priceTo, setPriceTo] = useState(50000);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isNegotiatePriceModal, setIsNegotiatePriceModal] = useState(false);

  const MIN = 50;
  const MAX = 50000;

   const scrollToTopSmooth = () => {
     if (typeof window !== "undefined") {
       window.scrollTo({ top: 0, behavior: "smooth" });
     }
   };

  const categories = [
    "Appliances",
    "Fashion",
    "Phones & Tablets",
    "Home & Office",
    "Health & Beauty",
    "Computing",
  ];

  return {
    MIN,
    MAX,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    showCategories,
    setShowCategories,
    showPrice,
    setShowPrice,
    hoveredCard,
    setHoveredCard,
    categories,
    isNegotiatePriceModal,
    setIsNegotiatePriceModal,
    scrollToTopSmooth,
  };
};

export default useCategoriesHook;
