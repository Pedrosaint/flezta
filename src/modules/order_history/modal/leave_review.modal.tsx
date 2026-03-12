"use client";

import React from "react";
import { Camera, Video } from "lucide-react";
import { SlideInModal } from "@/shared/ui/components/modal.ui";
import { PrimaryButton } from "@/shared/ui/components/button.ui";
import { MdOutlineStarPurple500 } from "react-icons/md";

interface LeaveReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (review: {
    rating: number;
    comment: string;
    photos?: File[];
    videos?: File[];
  }) => void;
  product?: {
    name: string;
    quantity: number;
    price: number;
    image?: string;
  };
  rating: number;
  setRating: (r: number) => void;
  hoveredRating: number;
  setHoveredRating: (r: number) => void;
  comment: string;
  setComment: (c: string) => void;
}

const LeaveReviewModal: React.FC<LeaveReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  product = {
    name: "The name of the product",
    quantity: 2,
    price: 600.0,
  },
  rating,
  setRating,
  hoveredRating,
  setHoveredRating,
  comment,
  setComment,
}) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ rating: rating || 5, comment: comment || "" });
    }
    onClose();
  };

  const getRatingLabel = (r: number) => {
    const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
    return labels[r];
  };

  return (
    <SlideInModal
      isOpen={isOpen}
      onClose={onClose}
      title="Leave Review"
      maxWidth="max-w-175"
    >
      {/* Product Info */}
      <div className="flex gap-4 border-b border-gray-200 p-6">
        <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0" />
        <div>
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-1">QTY: {product.quantity}</p>
          <p className="text-base font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Review Textarea */}
      <div className="p-6">
        <label className="block text-sm text-gray-700 pb-2">
          Share your thoughts about this seller
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter review here..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none resize-none"
        />
      </div>

      {/* Star Rating */}
      <div className="p-6 flex items-center gap-4">
        <label className="block text-gray-700">Rate seller:</label>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <MdOutlineStarPurple500
                  className={`w-6 h-6 ${star <= (hoveredRating || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                    }`}
                />
              </button>
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {getRatingLabel(hoveredRating || rating)}
          </span>
        </div>
      </div>

      {/* Add Media + Submit */}
      <div className="pt-1 p-6">
        <label className="block text-sm text-gray-700 mb-3">Add media:</label>
        <div className="flex gap-3">
          <button
            type="button"
            className="border-2 border-dashed w-22 border-gray-300 rounded-2xl py-3 flex flex-col items-center justify-center gap-2 bg-gray-50 transition-colors"
          >
            <Camera className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">Photo</span>
          </button>
          <button
            type="button"
            className="border-2 border-dashed w-22 border-gray-300 rounded-2xl py-3 flex flex-col items-center justify-center gap-2 bg-gray-50 transition-colors"
          >
            <Video className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">Video</span>
          </button>
        </div>

        <PrimaryButton
          type="button"
          onClick={handleSubmit}
          fullWidth
          size="lg"
          className="mt-6"
        >
          Submit Review
        </PrimaryButton>
      </div>
    </SlideInModal>
  );
};

export default LeaveReviewModal;
