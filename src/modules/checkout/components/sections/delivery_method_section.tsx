import { DateIcon, LocationIcon } from "@/assets/svg/svg_icon";
import { DeliveryMethodType, IShipment } from "../../types/shipping_info.type";

interface DeliveryMethodSectionProps {
    method: DeliveryMethodType;
    setMethod: (method: DeliveryMethodType) => void;
    station: number;
    setStation: (station: number) => void;
    shipments: IShipment[];
    confirmChecked: boolean;
    setConfirmChecked: (val: boolean) => void;
}

const DeliveryMethodSection = ({
    method,
    setMethod,
    station,
    setStation,
    shipments,
    confirmChecked,
    setConfirmChecked,
}: DeliveryMethodSectionProps) => {
    return (
        <div className="space-y-6 max-w-xl">
            <h2 className="text-xl font-bold">Delivery Method</h2>

            {/* Pickup Station Option */}
            <div className="space-y-2">
                <label
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => setMethod("pickup")}
                >
                    <input
                        type="radio"
                        checked={method === "pickup"}
                        onChange={() => setMethod("pickup")}
                        className={method === "pickup" ? "custom-radio" : "radio"}
                    />
                    <div>
                        <p className="font-medium">Pickup Station (From $5.99)</p>
                        <p className="text-sm text-gray-500">
                            Delivery between 17th November and 21st November
                        </p>
                    </div>
                </label>
            </div>

            {/* Stations */}
            {method === "pickup" && (
                <div className="space-y-4">
                    <p className="text-sm font-medium">Select from the Stations near You</p>

                    {[1, 2].map((id) => (
                        <button
                            key={id}
                            onClick={() => setStation(id)}
                            className={`w-full rounded-[20px] border p-4 text-left transition cursor-pointer ${station === id ? "border-[#FDA106] bg-[#FFF4EA]" : "border-gray-200"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <p className="font-medium">FLEZTA Pickup station one</p>
                                <span
                                    className={`text-xs px-2 py-1 rounded ${station === id
                                        ? "bg-gradient text-white border border-[#FDA106]"
                                        : "bg-[#FFF4EA]"
                                        }`}
                                >
                                    <h1 className={`${station === id ? "text-white" : "gradient-text"}`}>
                                        $5.00
                                    </h1>
                                </span>
                            </div>

                            <div className="flex gap-2 text-sm text-gray-900 mt-3">
                                <LocationIcon />
                                This will be the location
                            </div>

                            <div className="flex gap-2 text-sm text-gray-900 mt-1">
                                <DateIcon />
                                Open from Mon–Fri, 8am – 6pm and Sat, 9am–6pm
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {/* Door Delivery */}
            <div className="pt-2">
                <label
                    className="flex items-start gap-3 cursor-pointer"
                    onClick={() => setMethod("door")}
                >
                    <input
                        type="radio"
                        checked={method === "door"}
                        onChange={() => setMethod("door")}
                        className={method === "door" ? "custom-radio" : "radio"}
                    />
                    <div>
                        <p className="font-medium">Door Delivery (From $15.99)</p>
                        <p className="text-sm text-gray-900">
                            Delivery between 15th November and 19th November
                        </p>
                    </div>
                </label>
            </div>

            {/* Shipments List */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-220">
                    {shipments.map((shipment) => (
                        <div key={shipment.id} className="w-full">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {shipment.title}
                            </h3>
                            <div className="bg-white rounded-4xl border-2 border-gray-200">
                                <div className="p-4 pb-4 bg-gray-50 rounded-t-4xl">
                                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                                        {shipment.method}
                                    </h4>
                                    <p className="text-sm text-gray-600">{shipment.deliveryDate}</p>
                                </div>
                                <div className="border-t border-gray-200"></div>
                                <div className="p-4 pt-5">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={shipment.product.image.src}
                                            alt={shipment.product.name}
                                            className="w-13 h-13 rounded-md object-cover shrink-0"
                                        />
                                        <div>
                                            <h5 className="font-medium text-gray-900 mb-1">
                                                {shipment.product.name}
                                            </h5>
                                            <p className="text-gray-600 font-medium">
                                                ${shipment.product.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Confirmation Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={confirmChecked}
                        onChange={(e) => setConfirmChecked(e.target.checked)}
                        className="checkbox"
                    />
                    <span className="text-base text-gray-900 leading-relaxed">
                        Confirm delivery details before proceeding to make payment.
                    </span>
                </label>
            </div>
        </div>
    );
};

export default DeliveryMethodSection;
