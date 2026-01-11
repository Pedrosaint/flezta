import { useState } from "react";

const useCustomerWhoViewedHook = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return {
    hoveredCard,
    setHoveredCard,
  };
};

export default useCustomerWhoViewedHook;
