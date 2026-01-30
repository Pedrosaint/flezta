export interface IShipmentProduct {
    name: string;
    price: number;
    image: { src: string };
}

export interface IShipment {
    id: number;
    title: string;
    method: string;
    deliveryDate: string;
    product: IShipmentProduct;
}

export type DeliveryMethodType = "pickup" | "door";

export interface IShippingInfoHook {
    method: DeliveryMethodType;
    setMethod: (method: DeliveryMethodType) => void;
    station: number;
    setStation: (station: number) => void;
    saveInfo: boolean;
    setSaveInfo: (val: boolean) => void;
    setAsDefault: boolean;
    setSetAsDefault: (val: boolean) => void;
    confirmChecked: boolean;
    setConfirmChecked: (val: boolean) => void;
    shipments: IShipment[];
    handleProceedToPayment: () => void;
}
