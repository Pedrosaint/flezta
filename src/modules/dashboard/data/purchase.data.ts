// src/data/purchase.data.ts

export interface PurchaseStep {
    label: string;
    completed: boolean;
}

export interface Purchase {
    id: string;
    productName: string;
    image: string | null;
    estimatedArrival: string;
    currentStep: number;
    steps: PurchaseStep[];
}

const recentPurchases: Purchase[] = [
    {
        id: "024588",
        productName: "The name of the product",
        image: null,
        estimatedArrival: "Friday 9th January 2026",
        currentStep: 3,
        steps: [
            { label: "Order placed", completed: true },
            { label: "Order Confirmed", completed: true },
            { label: "Waiting to be Shipped", completed: true },
            { label: "Order shipped", completed: true },
            { label: "Available for pickup", completed: false },
            { label: "Delivered", completed: false },
        ],
    },
    {
        id: "024589",
        productName: "Another product",
        image: null,
        estimatedArrival: "Monday 12th January 2026",
        currentStep: 1,
        steps: [
            { label: "Order placed", completed: true },
            { label: "Order Confirmed", completed: true },
            { label: "Waiting to be Shipped", completed: false },
            { label: "Order shipped", completed: false },
            { label: "Available for pickup", completed: false },
            { label: "Delivered", completed: false },
        ],
    },
    {
        id: "024590",
        productName: "Third product",
        image: null,
        estimatedArrival: "Thursday 15th January 2026",
        currentStep: 0,
        steps: [
            { label: "Order placed", completed: true },
            { label: "Order Confirmed", completed: false },
            { label: "Waiting to be Shipped", completed: false },
            { label: "Order shipped", completed: false },
            { label: "Available for pickup", completed: false },
            { label: "Delivered", completed: false },
        ],
    },
    {
        id: "024591",
        productName: "Fourth product",
        image: null,
        estimatedArrival: "Tuesday 9th January 2026",
        currentStep: 4,
        steps: [
            { label: "Order placed", completed: true },
            { label: "Order Confirmed", completed: true },
            { label: "Waiting to be Shipped", completed: true },
            { label: "Order shipped", completed: true },
            { label: "Available for pickup", completed: true },
            { label: "Delivered", completed: false },
        ],
    },
    {
        id: "024592",
        productName: "Fifth product",
        image: null,
        estimatedArrival: "Wednesday 12th January 2026",
        currentStep: 5,
        steps: [
            { label: "Order placed", completed: true },
            { label: "Order Confirmed", completed: true },
            { label: "Waiting to be Shipped", completed: true },
            { label: "Order shipped", completed: true },
            { label: "Available for pickup", completed: true },
            { label: "Delivered", completed: true },
        ],
    },
];

export default recentPurchases;
