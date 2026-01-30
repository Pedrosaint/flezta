"use client";

import { useState } from "react";
import { useModal } from "./useModal";

interface UseCancelOrderOptions {
  onConfirm?: (reason: string, message: string) => void;
  onSubmitSuccess?: () => void;
}

export const useCancelOrderModal = (opts: UseCancelOrderOptions = {}) => {
  const modal = useModal();
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const cancelReasons = [
    "Changed my mind",
    "Found a better price elsewhere",
    "Ordered by mistake",
    "Delivery time too long",
    "Product no longer needed",
    "Other",
  ];

  const reset = () => {
    setSelectedReason("");
    setMessage("");
  };

  const handleSubmit = () => {
    if (opts.onConfirm) {
      opts.onConfirm(selectedReason, message);
    }
    if (opts.onSubmitSuccess) {
      opts.onSubmitSuccess();
    }
    // Keep modal open/close decision to the caller; optionally reset
    reset();
  };

  return {
    ...modal,
    selectedReason,
    setSelectedReason,
    message,
    setMessage,
    cancelReasons,
    handleSubmit,
    reset,
  } as const;
};
