export interface OrderItem {
    id: string; // Add ID for items
    status: "Processing" | "Shipped" | "Order Confirmed" | "Delivered" | "Cancelled";
    itemNo: string;
    qty: number;
    price: number;
    productName: string;
    date: string;
    image?: string;
}

export interface Order {
    orderId: string;
    orderDate: string;
    total: number;
    progress: number;
    items: OrderItem[];
    paymentMethod: string;
    subtotal: number;
    shippingFee: number;
    billingAddress: {
        name: string;
        street: string;
        email: string;
        phone: string;
    };
    shippingAddress: {
        name: string;
        street: string;
        email: string;
        phone: string;
    };
}

export const ordersData: Order[] = [
    {
        orderId: "024588",
        orderDate: "12th Sep, 2025 - 03:08pm",
        total: 700.5,
        subtotal: 650,
        shippingFee: 50.5,
        progress: 80,
        paymentMethod: "Paypal",
        billingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000",
        },
        shippingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000",
        },
        items: [
            { id: "i1", status: "Processing", itemNo: "#029532", qty: 2, price: 300, productName: "Modern Architectural Fabric", date: "Tuesday 16th Dec, 2025" },
            { id: "i2", status: "Shipped", itemNo: "#176532", qty: 1, price: 200, productName: "Silk Blend Texture", date: "Tuesday 16th Dec, 2025" },
            { id: "i3", status: "Order Confirmed", itemNo: "#006532", qty: 1, price: 150, productName: "Cotton Voile Print", date: "Tuesday 16th Dec, 2025" },
        ],
    },
    {
        orderId: "024589",
        orderDate: "15th Sep, 2025 - 10:30am",
        total: 500,
        subtotal: 450,
        shippingFee: 50,
        progress: 100,
        paymentMethod: "Master card",
        billingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000",
        },
        shippingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000",
        },
        items: [
            { id: "i4", status: "Delivered", itemNo: "#426532", qty: 3, price: 150, productName: "Linen Look Fabric", date: "Tuesday 16th Dec, 2025" },
        ],
    },
    {
        orderId: "024590",
        orderDate: "20th Sep, 2025 - 04:15pm",
        total: 250.5,
        subtotal: 200,
        shippingFee: 50.5,
        progress: 0,
        paymentMethod: "Visa Card",
        billingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000",
        },
        shippingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000",
        },
        items: [
            { id: "i5", status: "Cancelled", itemNo: "#006532", qty: 1, price: 200, productName: "Damask Pattern Loom", date: "Tuesday 16th Dec, 2025" },
        ],
    }
];

export const getStatusColor = (status: string) => {
    switch (status) {
        case "Processing": return "bg-[#0095FF]";
        case "Shipped": return "bg-[#E26E00]";
        case "Order Confirmed": return "bg-[#7B61FF]";
        case "Delivered": return "bg-[#077D58]";
        case "Cancelled": return "bg-[#D24545]";
        default: return "bg-gray-500";
    }
};

export const getStatusTextColor = (status: string) => {
    switch (status) {
        case "Processing": return "text-blue-500";
        case "Shipped": return "gradient-text"; // Custom gradient handling
        case "Order Confirmed": return "text-purple-500";
        case "Delivered": return "text-green-500";
        case "Cancelled": return "text-red-500";
        default: return "text-gray-500";
    }
};
