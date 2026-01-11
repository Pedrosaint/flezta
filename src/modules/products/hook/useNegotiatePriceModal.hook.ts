import { useState } from "react";
import SeatImage from "@/assets/images/office_seat.png";

const useNegotiatePriceModalHook = (onClose: () => void) => {
  const [selectedOption, setSelectedOption] = useState("custom");
  const [customPrice, setCustomPrice] = useState("0.00");
  const [quantity, setQuantity] = useState(1);
  

  const product = {
    name: "Ergonomic Office Chair",
    price: 350.0,
    image: SeatImage,
  };

  const priceOptions = [
    { value: 330, label: "$330.00", discount: "10% off" },
    { value: 330, label: "$330.00", discount: "10% off" },
  ];

  const handleSubmit = () => {
    console.log(
      "Submitting offer:",
      selectedOption === "custom" ? customPrice : selectedOption
    );
    onClose();
  };

    const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

  return {
    selectedOption,
    setSelectedOption,
    customPrice,
    setCustomPrice,
    product,
    priceOptions,
    handleSubmit,
    decreaseQuantity,
    increaseQuantity,
    quantity,
  };
};

export default useNegotiatePriceModalHook;
