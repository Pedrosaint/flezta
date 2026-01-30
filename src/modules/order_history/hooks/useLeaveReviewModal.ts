"use client";

import { useState } from "react";
import { useModal } from "./useModal";

interface UseLeaveReviewOptions {
  onSubmit?: (payload: { rating: number; comment: string }) => void;
}

export const useLeaveReviewModal = (opts: UseLeaveReviewOptions = {}) => {
  const modal = useModal();
  const [rating, setRating] = useState<number>(5);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const reset = () => {
    setRating(5);
    setHoveredRating(0);
    setComment("");
  };

  const handleSubmit = () => {
    if (opts.onSubmit) {
      opts.onSubmit({ rating, comment });
    }
    reset();
    modal.close();
  };

  return {
    ...modal,
    rating,
    setRating,
    hoveredRating,
    setHoveredRating,
    comment,
    setComment,
    handleSubmit,
    reset,
  } as const;
};
