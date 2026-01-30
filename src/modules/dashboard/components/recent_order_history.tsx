"use client";

import { formatDollar } from "@/shared/utils/currency.util";
import { DateIcon } from "@/assets/svg/svg_icon";
import { useRecentOrderHistoryHook } from "../hooks/recent_order_history.hook";

const RecentOrderHistory = () => {
    const { orders } = useRecentOrderHistoryHook();

    return (
        <section className="bg-white rounded-3xl p-8 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        Recent Order History
                    </h3>
                    <p className="text-lg text-gray-700">Your top 5 recent orders</p>
                </div>

                <button className="border border-[#E26E00] bg-[#FFF4EA] px-8 py-3 rounded-[14px] text-sm font-medium  transition-colors cursor-pointer">
                    <h1 className="gradient-text text-lg"> See All Order</h1>
                </button>
            </div>

            {/* Orders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {orders.map((order, orderIdx) => (
                    <div
                        key={orderIdx}
                        className="border border-[#F3F4F6] rounded-2xl p-5 bg-[#F9FAFB]"
                    >
                        {/* Order Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">
                                    Order ID: #{order.orderId}
                                </p>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <DateIcon />
                                    <span>Order date: {order.orderDate}</span>
                                </div>
                            </div>
                            <span className="font-bold text-gray-900 text-2xl">
                                {formatDollar(order.total)}
                            </span>
                        </div>

                        {/* Order Items */}
                        <div className="flex gap-3 mt-4">
                            {order.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex-shrink-0">
                                    <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-xl mb-2"></div>
                                    <p className={`text-xs font-medium ${item.statusColor} mb-0.5`}>
                                        Status: {item.status}
                                    </p>
                                    <p className="text-xs text-gray-600">Item no: #{item.itemNo}</p>
                                    <p className="text-xs text-gray-600">QTY: {item.qty}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentOrderHistory;