import { useState } from "react";
import OfficeChair from "@/assets/images/office_seat.png";
import OfficeChair2 from "@/assets/images/office_seat_2.png";
import useWishlist from "@/shared/ui/hooks/wish_list.hook";

const useProductDetailsHook = () => {
  const [isNegotiatePriceModal, setIsNegotiatePriceModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isBuyNowModal, setIsBuyNowModal] = useState(false);
  const { wishlist, toggleWishlist } = useWishlist();
  const [floatingHearts, setFloatingHearts] = useState<{ id: string }[]>([]);

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

  
  const scrollToTopSmooth = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  
  const handleWishlistClick = (productId: string) => {
    const isAlreadyWishlisted = wishlist.includes(productId);

    toggleWishlist(productId);

    // Only animate when ADDING to wishlist
    if (!isAlreadyWishlisted) {
      const id = `${productId}-${Date.now()}`;

      setFloatingHearts((prev) => [...prev, { id }]);

      setTimeout(() => {
        setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
      }, 900);
    }
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
    scrollToTopSmooth,
    handleWishlistClick,
    wishlist,
    toggleWishlist,
    floatingHearts,
    setFloatingHearts,
  };
};

export default useProductDetailsHook;
