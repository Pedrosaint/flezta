import { useState } from "react";

const useRecentlyViewedHook = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return {
    hoveredCard,
    setHoveredCard,
  };
};

export default useRecentlyViewedHook;
