"use client";

import React from "react";
import { GradientButton, PrimaryButton } from "@/shared/ui/components/button.ui";
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
          <GradientButton className="w-45">
            Restore To Default
          </GradientButton>
          <PrimaryButton
            type="button"
            className="w-45"
          >
            Save Updates
          </PrimaryButton>
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
              className={`space-y-4 transition-opacity duration-200 ${!emailNotificationsEnabled
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
              className={`space-y-4 transition-opacity duration-200 ${!inAppNotificationsEnabled
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
