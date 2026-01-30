"use client";

import { useModal } from "./useModal";

export const useReceiptModal = () => {
  const modal = useModal();

  const orderData = {
    orderId: "#024588",
    orderTime: "Wednesday 1st January 2026",
    itemsTotal: 48000.0,
    shipping: 8000.0,
    orderTotal: 56000.0,
    shippingAddress: {
      name: "Otor John Stephen",
      phone: "+234 8134756623",
      address:
        "38 Asheik Jarma Street, Abuja, Federal Capital Territory\nNigeria",
    },
    paymentMethod: {
      type: "Master card",
      last4: "XXXX 9682",
      paidOn: "Wednesday 1st January 2026",
      amount: 56000.0,
    },
  };

  const items = [
    {
      id: 1,
      name: "The name of the product",
      price: 50000.0,
      quantity: 2,
      seller: "Offizy Stores",
      sellerVerified: true,
    },
    {
      id: 2,
      name: "The name of the product",
      price: 50000.0,
      quantity: 2,
      seller: "Offizy Stores",
      sellerVerified: true,
    },
  ];

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return {
    ...modal,
    orderData,
    items,
    formatCurrency,
  } as const;
};
