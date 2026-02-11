import { useState } from "react";
import type { NotificationOption } from "../types/notification.types";

export const useNotificationSettingsHook = () => {
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] =
    useState(true);
  const [inAppNotificationsEnabled, setInAppNotificationsEnabled] =
    useState(false);

  const [emailNotifications, setEmailNotifications] = useState<
    NotificationOption[]
  >([
    {
      id: "email-order-updates",
      label: "Order updates",
      description: "Receive notification when your order status changes",
      checked: false,
    },
    {
      id: "email-another-reason",
      label: "Another reason",
      description: "Receive notification for this reason, too",
      checked: true,
    },
    {
      id: "email-just-another",
      label: "Just another reason for notification",
      description: "Also receive notification for this",
      checked: false,
    },
  ]);

  const [inAppNotifications, setInAppNotifications] = useState<
    NotificationOption[]
  >([
    {
      id: "inapp-order-updates",
      label: "Order updates",
      description: "Receive notification when your order status changes",
      checked: false,
    },
    {
      id: "inapp-another-reason",
      label: "Another reason",
      description: "Receive notification for this reason, too",
      checked: false,
    },
    {
      id: "inapp-just-another",
      label: "Just another reason for notification",
      description: "Also receive notification for this",
      checked: false,
    },
  ]);

  const handleEmailNotificationToggle = (id: string) => {
    setEmailNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, checked: !notif.checked } : notif,
      ),
    );
  };

  const handleInAppNotificationToggle = (id: string) => {
    setInAppNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, checked: !notif.checked } : notif,
      ),
    );
  };

  return {
    emailNotificationsEnabled,
    setEmailNotificationsEnabled,
    inAppNotificationsEnabled,
    setInAppNotificationsEnabled,
    emailNotifications,
    inAppNotifications,
    handleEmailNotificationToggle,
    handleInAppNotificationToggle,
  };
};

