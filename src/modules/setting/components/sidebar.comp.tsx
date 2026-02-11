import React from "react";
import { BellIcon, SecurityIcon } from "@/assets/svg/svg_icon";

type SettingsTab = "security" | "notification";

interface SidebarProps {
  activeTab: SettingsTab;
  setActiveTab: (tab: SettingsTab) => void;
}

const SettingsSidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[20px] p-2 space-y-2">
      <button
        onClick={() => setActiveTab("security")}
        className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors cursor-pointer ${
          activeTab === "security"
            ? "text-[#003625]"
            : "text-gray-600 hover:text-[#003625]"
        }`}
      >
        {activeTab === "security" ? (
          <SecurityIcon stroke="#003625" />
        ) : (
          <SecurityIcon stroke="#0C0F16" />
        )}
        <span className="font-medium">Security settings</span>
      </button>
      <button
        onClick={() => setActiveTab("notification")}
        className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors cursor-pointer ${
          activeTab === "notification"
            ? "text-[#003625]"
            : "text-gray-600 hover:text-[#003625]"
        }`}
      >
        {activeTab === "notification" ? (
          <BellIcon stroke="#003625" />
        ) : (
          <BellIcon stroke="#0C0F16" />
        )}
        <span className="font-medium">Notification settings</span>
      </button>
    </div>
  );
};

export default SettingsSidebar;
