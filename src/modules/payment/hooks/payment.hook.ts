import { useState } from "react";

const usePaymentHook = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [cvv, setCvv] = useState("");

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    setCvv(value);
  };

  const handlePaymentSubmit = () => {
    // Payment submission logic would go here
    console.log("Processing payment with method:", paymentMethod, "and CVV:", cvv);
    setShowPaymentModal(true);
  };

  return {
    showPaymentModal,
    setShowPaymentModal,
    paymentMethod,
    setPaymentMethod,
    cvv,
    handleCvvChange,
    handlePaymentSubmit,
  };
};

export default usePaymentHook;
