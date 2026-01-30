export interface OrderItem {
    status: string;
    statusColor: string;
    itemNo: string;
    qty: number;
}

export interface Order {
    orderId: string;
    orderDate: string;
    total: number;
    items: OrderItem[];
}

export const useRecentOrderHistoryHook = () => {
    const orders: Order[] = [
        {
            orderId: "024588",
            orderDate: "12th Sep, 2025 - 03:08pm",
            total: 320,
            items: [
                { status: "Processing", statusColor: "text-[#0095FF]", itemNo: "029532", qty: 2 },
                { status: "Shipped", statusColor: "gradient-text", itemNo: "176532", qty: 1 },
                { status: "Confirmed", statusColor: "text-purple-500", itemNo: "006532", qty: 1 },
                { status: "Delivered", statusColor: "text-green-500", itemNo: "426532", qty: 3 },
            ],
        },
        {
            orderId: "024588",
            orderDate: "12th Sep, 2025 - 03:08pm",
            total: 320,
            items: [
                { status: "Shipped", statusColor: "gradient-text", itemNo: "#896532", qty: 1 },
            ],
        },
    ];

    return {
        orders
    };
};
