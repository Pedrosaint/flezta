import { useState } from "react";

const useProductOverviewHook = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Product Description" },
    { key: "review", label: "Product Review" },
    { key: "shipping", label: "Shipping & Returns" },
  ];

  return {
    activeTab,
    setActiveTab,
    tabs,
  };
};

export default useProductOverviewHook;
