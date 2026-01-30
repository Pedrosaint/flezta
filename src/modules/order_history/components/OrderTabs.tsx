import React from "react";

interface OrderTabsProps {
  activeTab: "all" | "ongoing" | "completed";
  setActiveTab: (tab: "all" | "ongoing" | "completed") => void;
  counts: { all: number; ongoing: number; completed: number };
}

const OrderTabs: React.FC<OrderTabsProps> = ({
  activeTab,
  setActiveTab,
  counts,
}) => {
  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="flex gap-8">
        <button
          onClick={() => setActiveTab("all")}
          className={`pb-3 text-lg font-medium transition-colors relative cursor-pointer ${
            activeTab === "all"
              ? "gradient-text"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          All Order ({counts.all})
          {activeTab === "all" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("ongoing")}
          className={`pb-3 text-lg font-medium transition-colors relative cursor-pointer ${
            activeTab === "ongoing"
              ? "gradient-text"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Ongoing ({counts.ongoing})
          {activeTab === "ongoing" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`pb-3 text-lg font-medium transition-colors relative cursor-pointer ${
            activeTab === "completed"
              ? "gradient-text"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Completed ({counts.completed})
          {activeTab === "completed" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient" />
          )}
        </button>
      </div>
    </div>
  );
};

export default OrderTabs;
