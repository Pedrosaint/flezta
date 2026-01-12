 interface IAddToCartRequesPayload {
    productId: string;
    quantity: number;
}

interface RemoveFromCartRequestType {
    productId: string;
}

interface UpdateCartRequestType {
    productId: string;
    quantity: number;
}

export type { IAddToCartRequesPayload, RemoveFromCartRequestType, UpdateCartRequestType };