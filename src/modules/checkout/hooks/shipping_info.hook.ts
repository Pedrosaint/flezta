import { useState } from "react";
import { useRouter } from "next/navigation";
import { paymentRoute } from "@/core/routes/routeNames";
import ShipmeantImage from "@/assets/images/office_seat.png";
import { DeliveryMethodType, IShippingInfoHook } from "../types/shipping_info.type";

export const useShippingInfoHook = (): IShippingInfoHook => {
    const router = useRouter();
    const [method, setMethod] = useState<DeliveryMethodType>("pickup");
    const [station, setStation] = useState<number>(1);
    const [saveInfo, setSaveInfo] = useState(false);
    const [setAsDefault, setSetAsDefault] = useState(false);
    const [confirmChecked, setConfirmChecked] = useState(false);

    const shipments = [
        {
            id: 1,
            title: "Shipment 1/2",
            method: "Pickup Station",
            deliveryDate: "Delivery between 17th November and 21st November",
            product: {
                name: "Ergonomic Office Chair (x2)",
                price: 620.0,
                image: ShipmeantImage,
            },
        },
        {
            id: 2,
            title: "Shipment 2/2",
            method: "Pickup Station",
            deliveryDate: "Delivery between 17th November and 21st November",
            product: {
                name: "Ergonomic Office Chair (x2)",
                price: 620.0,
                image: ShipmeantImage,
            },
        },
    ];

    const handleProceedToPayment = () => {
        router.push(paymentRoute);
    };

    return {
        method,
        setMethod,
        station,
        setStation,
        saveInfo,
        setSaveInfo,
        setAsDefault,
        setSetAsDefault,
        confirmChecked,
        setConfirmChecked,
        shipments,
        handleProceedToPayment,
    };
};
