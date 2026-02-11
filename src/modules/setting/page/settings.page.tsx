"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SettingsSidebar from "../components/sidebar.comp";
import SecuritySettings from "../components/security.comp";
import NotificationSettings from "../components/notification.comp";

const SettingsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get("section");

  const [activeTab, setActiveTab] = useState<"security" | "notification">(
    sectionParam === "notification" ? "notification" : "security",
  );

  useEffect(() => {
    if (!sectionParam) return;

    if (sectionParam === "notification" || sectionParam === "security") {
      setActiveTab(sectionParam);
    }
  }, [sectionParam]);

  const handleTabChange = (tab: "security" | "notification") => {
    setActiveTab(tab);

    const params = new URLSearchParams(searchParams.toString());
    if (tab === "security") {
      params.delete("section");
    } else {
      params.set("section", tab);
    }

    const queryString = params.toString();
    router.replace(
      `/buyer_portal/settings${queryString ? `?${queryString}` : ""}`,
    );
  };

  return (
    <div className="border border-gray-200 rounded-[20px] bg-white">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 p-5 border-b border-gray-200">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-5 mb-5 p-5">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <SettingsSidebar
            activeTab={activeTab}
            setActiveTab={handleTabChange}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-200 rounded-[20px] p-5">
            {activeTab === "security" && (
              <SecuritySettings />
            )}

            {activeTab === "notification" && (
              <NotificationSettings />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
