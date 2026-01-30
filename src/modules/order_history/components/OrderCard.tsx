import React from "react";
import { formatDollar } from "@/shared/utils/currency.util";
import { getStatusTextColor } from "../data/orders.data";
import type { Order } from "../data/orders.data";

interface OrderCardProps {
  order: Order;
  onViewReceipt: () => void;
  onViewDetails: (id: string) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  order,
  onViewReceipt,
  onViewDetails,
}) => {
  return (
    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6">
      {/* Order Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="font-medium text-lg text-gray-900">
              Order ID: #{order.orderId}
            </h3>
            {/* Progress Bar */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden max-w-xs">
                <div
                  className={`h-full rounded-full ${order.progress >= 80 ? "bg-[#077D58]" : "bg-[#F8902E]"}`}
                  style={{ width: `${order.progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Order is {order.progress}% complete
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span>Order date: {order.orderDate}</span>
          </div>
        </div>

        <span className="text-2xl font-medium text-gray-900">
          {formatDollar(order.total)}
        </span>
      </div>

      {/* Order Items */}
      <div className="flex justify-between">
        <div className="flex gap-3">
          {order.items.map((item) => (
            <div key={item.id} className="shrink-0">
              <div className="w-20 h-20 bg-gray-200 border border-gray-300 rounded-xl mb-2"></div>
              <p
                className={`text-sm font-medium ${getStatusTextColor(item.status)} mb-0.5 shrink-0`}
              >
                Status: {item.status}
              </p>
              <p className="text-sm text-gray-600">Item no: {item.itemNo}</p>
              <p className="text-sm text-gray-600">QTY: {item.qty}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onViewReceipt()}
            className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            View Receipt
          </button>

          <button
            onClick={() => onViewDetails(order.orderId)}
            className="text-lg font-medium gradient-text hover:text-orange-600 transition-colors cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
