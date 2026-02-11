"use client";

import React from "react";
import { useNotificationSettingsHook } from "../hooks/notification.hook";
import type { NotificationOption } from "../types/notification.types";

const NotificationSettings: React.FC = () => {
  const {
    emailNotificationsEnabled,
    setEmailNotificationsEnabled,
    inAppNotificationsEnabled,
    setInAppNotificationsEnabled,
    emailNotifications,
    inAppNotifications,
    handleEmailNotificationToggle,
    handleInAppNotificationToggle,
  } = useNotificationSettingsHook();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            Notification Settings
          </h1>
          <p className="text-sm text-gray-600">
            Get notified of actions taking place.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="group w-45 p-0.5 border border-[#FDA106] rounded-[18px] cursor-pointer">
            <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient transition-all duration-300 hover:scale-[1.02]">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-[#FDA106] font-semibold">
                  Restore To Default
                </span>
              </div>

              {/* Default State */}
              <div className="relative z-10 py-3 font-semibold flex items-center justify-center text-black transition-opacity duration-300 group-hover:opacity-0">
                Restore To Default
              </div>
            </div>
          </button>
          <button
            type="button"
            className="group w-45 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
              Save Updates
            </div>
          </button>
        </div>
      </div>

      {/* Email Notifications Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="self-start">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Email notifications
            </h2>
            <p className="text-gray-600">
              FLEZTA will send you email <br />
              notifications for every system action
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotificationsEnabled}
                  onChange={() =>
                    setEmailNotificationsEnabled(!emailNotificationsEnabled)
                  }
                  className="sr-only peer"
                />
                <div className="w-7 h-4 bg-gray-200 rounded-full peer-focus:outline-none peer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:h-3 after:w-3 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all peer-checked:after:translate-x-full peer-checked:bg-linear-to-r peer-checked:from-[#e26e00] peer-checked:to-[#fda106]" />
              </label>
              <span className="font-medium text-gray-700">
                {emailNotificationsEnabled ? "On" : "Off"}
              </span>
            </div>

            {/* Email Notification Options */}
            <div
              className={`space-y-4 transition-opacity duration-200 ${
                !emailNotificationsEnabled
                  ? "opacity-30 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              {emailNotifications.map((notification: NotificationOption) => (
                <label
                  key={notification.id}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={notification.checked}
                    onChange={() =>
                      handleEmailNotificationToggle(notification.id)
                    }
                    className="notificationCheckbox"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {notification.label}
                    </p>
                    <p className="text-sm text-gray-600">
                      {notification.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* In-app Notifications Section */}
      <div className="mb-6 mt-15">
        <div className="flex items-center justify-between mb-4">
          <div className="self-start">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              In-app notifications
            </h2>
            <p className="text-gray-600">
              FLEZTA will send you in-app <br />
              notifications for every system action
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={inAppNotificationsEnabled}
                  onChange={() =>
                    setInAppNotificationsEnabled(!inAppNotificationsEnabled)
                  }
                  className="sr-only peer"
                />
                <div className="w-7 h-4 bg-gray-200 rounded-full peer-focus:outline-none peer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:h-3 after:w-3 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all peer-checked:after:translate-x-full peer-checked:bg-linear-to-r peer-checked:from-[#e26e00] peer-checked:to-[#fda106]" />
              </label>
              <span className="font-medium text-gray-700">
                {inAppNotificationsEnabled ? "On" : "Off"}
              </span>
            </div>

            {/* Email Notification Options */}
            <div
              className={`space-y-4 transition-opacity duration-200 ${
                !inAppNotificationsEnabled
                  ? "opacity-30 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              {inAppNotifications.map((notification: NotificationOption) => (
                <label
                  key={notification.id}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={notification.checked}
                    onChange={() =>
                      handleInAppNotificationToggle(notification.id)
                    }
                    className="notificationCheckbox"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {notification.label}
                    </p>
                    <p className="text-sm text-gray-600">
                      {notification.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
