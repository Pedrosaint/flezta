export interface ChatUser {
    id: number;
    name: string;
    avatar: string;
    avatarColor: string;
    lastMessage: string;
    timestamp: string;
    hasImage?: boolean;
    location: string;
    lastActive: string;
    initials: string;
}

export interface Message {
    id: number;
    type: "product" | "text" | "negotiation";
    content?: string;
    productName?: string;
    productPrice?: string;
    productImage?: boolean;
    originalPrice?: string;
    newPrice?: string;
    status?: string;
}

export const chatUsers: ChatUser[] = [
    {
        id: 1,
        name: "CashNCarry",
        avatar: "",
        initials: "CC",
        avatarColor: "bg-blue-200 text-blue-700 border-blue-600",
        lastMessage: "Women vintage sweat bla...",
        timestamp: "2 days ago",
        location: "Lagos, Nigeria",
        lastActive: "5mins ago",
    },
    {
        id: 2,
        name: "Offizy Stores",
        avatar: "",
        initials: "OS",
        avatarColor: "bg-purple-200 text-purple-700 border-purple-600",
        lastMessage: "Beachwear light top black...",
        timestamp: "2 days ago",
        hasImage: true,
        location: "Abuja, Nigeria",
        lastActive: "2mins ago",
    },
    {
        id: 3,
        name: "Wearables",
        avatar: "",
        initials: "W",
        avatarColor: "bg-green-200 text-green-700 border-green-600",
        lastMessage: "Vintage Jean suede black...",
        timestamp: "2 days ago",
        hasImage: true,
        location: "Port Harcourt, Nigeria",
        lastActive: "10mins ago",
    },
];

export const chatMessages: Record<number, Message[]> = {
    1: [
        {
            id: 101,
            type: "text",
            content: "Hello CashNCarry, is the vintage sweat still available?",
        }
    ],
    2: [
        {
            id: 1,
            type: "product",
            productName: "Beachwear light top black men's shirt",
            productPrice: "$20.50",
            productImage: true,
        },
        {
            id: 2,
            type: "text",
            content: "Hello, welcome to Offizy Stores\nWhat would you want us to do for you, today?",
        },
        {
            id: 3,
            type: "negotiation",
            originalPrice: "$20.50",
            newPrice: "$15.00",
            status: "Negotiation accepted",
        },
    ],
    3: [
        {
            id: 301,
            type: "text",
            content: "Hi Wearables, I'm interested in the Vintage Jean.",
        }
    ]
};
