import { useState } from "react";
import OfficeChair from "@/assets/images/office_seat.png";
import OfficeChair2 from "@/assets/images/office_seat_2.png";

const useProductDetailsHook = () => {
  const [isNegotiatePriceModal, setIsNegotiatePriceModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isBuyNowModal, setIsBuyNowModal] = useState(false);

  const images = [OfficeChair, OfficeChair2, OfficeChair, OfficeChair2];

  const colors = [
    { name: "black", code: "#000000" },
    { name: "gray", code: "#D1D5DB" },
    { name: "brown", code: "#4A2511" },
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return {
    isNegotiatePriceModal,
    setIsNegotiatePriceModal,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
    selectedImage,
    setSelectedImage,
    isFavorite,
    setIsFavorite,
    images,
    colors,
    decreaseQuantity,
    increaseQuantity,
    isBuyNowModal,
    setIsBuyNowModal,
  };
};

export default useProductDetailsHook;
