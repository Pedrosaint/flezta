"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "./useModal";
import { ordersData } from "../data/orders.data";
import { orderDetailsRoute } from "@/core/routes/routeNames";
import { formatDollar } from "@/shared/utils/currency.util";

export const useOrderHistory = () => {
  const [activeTab, setActiveTab] = useState<"all" | "ongoing" | "completed">(
    "all",
  );
  const router = useRouter();

  const receiptModal = useModal();
  const [selectedOrder, setSelectedOrder] = useState<
    import("../data/orders.data").Order | null
  >(null);

  const counts = useMemo(() => {
    const all = ordersData.length;
    const ongoing = ordersData.filter((o) =>
      o.items.some((i) =>
        ["Processing", "Shipped", "Confirmed"].includes(i.status),
      ),
    ).length;

    const completed = ordersData.filter((o) =>
      o.items.every((i) => ["Delivered", "Cancelled"].includes(i.status)),
    ).length;

    return { all, ongoing, completed };
  }, []);

  const filteredOrders = useMemo(() => {
    if (activeTab === "all") return ordersData;

    const list = ordersData.filter((order) => {
      const hasOngoing = order.items.some((item) =>
        ["Processing", "Shipped", "Confirmed"].includes(item.status),
      );
      const hasCompleted = order.items.every((item) =>
        ["Delivered", "Cancelled"].includes(item.status),
      );

      if (activeTab === "ongoing") return hasOngoing;
      if (activeTab === "completed") return hasCompleted;
      return true;
    });

    return list;
  }, [activeTab]);

  const handleViewReceipt = (order: import("../data/orders.data").Order) => {
    setSelectedOrder(order);
    receiptModal.open();
  };

  const formatCurrency = (amount: number) => {
    return formatDollar(amount);
  };

  const receiptData = selectedOrder
    ? {
        orderId: selectedOrder.orderId,
        orderTime: selectedOrder.orderDate,
        itemsTotal: selectedOrder.subtotal,
        shipping: selectedOrder.shippingFee,
        orderTotal: selectedOrder.total,
        shippingAddress: {
          name: selectedOrder.shippingAddress.name,
          phone: selectedOrder.shippingAddress.phone,
          address: selectedOrder.shippingAddress.street,
        },
        paymentMethod: {
          type: selectedOrder.paymentMethod,
          last4: "****0000",
          paidOn: selectedOrder.orderDate,
          amount: selectedOrder.total,
        },
      }
    : null;

  const receiptItems = selectedOrder
    ? selectedOrder.items.map((i) => ({
        id: i.id,
        name: i.productName,
        price: i.price,
        quantity: i.qty,
        seller: "Offizy Stores",
        sellerVerified: true,
      }))
    : [];

  const navigateToDetails = (orderId: string) => {
    router.push(orderDetailsRoute.replace(":id", orderId));
  };

  return {
    activeTab,
    setActiveTab,
    receiptModal: receiptModal.isOpen,
    setReceiptModal: (open: boolean) =>
      open ? receiptModal.open() : receiptModal.close(),
    filteredOrders,
    counts,
    handleViewReceipt,
    navigateToDetails,
    receiptData,
    receiptItems,
    formatCurrency,
  } as const;
};
