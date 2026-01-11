import { useState } from "react";

const useWishListHook = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return {
    hoveredCard,
    setHoveredCard,
  };
};

export default useWishListHook;
