import React from "react";
import type { Order } from "../data/orders.data";
import OrderCard from "./OrderCard";

interface OrdersListProps {
  orders: Order[];
  handleViewReceipt: (order: Order) => void;
  navigateToDetails: (id: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({
  orders,
  handleViewReceipt,
  navigateToDetails,
}) => {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.orderId}
          order={order}
          onViewReceipt={() => handleViewReceipt(order)}
          onViewDetails={navigateToDetails}
        />
      ))}
    </div>
  );
};

export default OrdersList;
