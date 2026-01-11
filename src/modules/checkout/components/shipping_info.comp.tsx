"use client";

import { useState } from "react";
import { DateIcon, DefaultIcon, DropdownIcon, LocationIcon } from "@/assets/svg/svg_icon";
import ShipmeantImage from "@/assets/images/office_seat.png";
import PhoneInput from "@/shared/ui/components/phone_input.ui";


const ShoppingInfoComp = () => {
    const [method, setMethod] = useState<"pickup" | "door">("pickup");
    const [station, setStation] = useState<number>(1);;
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

  return (
    <div className="py-8 mb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 border-r border-gray-200 px-6">
            <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>

            {/*=== Saved Address ===*/}
            <div className="rounded-4xl mb-6 border border-gray-200 max-w-4xl">
              <div className="flex justify-between rounded-t-4xl px-5 bg-[#F3F4F6] border-b border-gray-200">
                <h3 className="text-xl font-bold py-5 text-gray-700">
                  Saved Shipping Information
                </h3>
                <button className="gradient-text text-lg font-medium">
                  Change Address
                </button>
              </div>

              <div className="px-5 py-4 text-xl bg-[#F9FAFB] rounded-b-4xl">
                <p className="font-medium">Otor John Stephen</p>
                <p className="text-gray-600 text-lg">
                  38 Asheli, James Street, Jabi Abuja
                </p>

                <div className="flex gap-4 text-lg text-gray-600">
                  <span>myemail@address@gmail.com</span>
                  <span>08130000000</span>
                </div>

                <button className="text-[#077D58] text-[17px] flex items-center gap-1 mt-2">
                  <DefaultIcon />
                  Default address
                </button>
              </div>
            </div>

            {/*=== New Shipping Form ===*/}
            <div className="bg-white rounded-2xl mb-6 max-w-3xl">
              <h3 className="font-semibold text-lg mb-6">
                OR Enter another shipping information
              </h3>

              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                  />
                </div>

            <div>
              <PhoneInput />
            </div>

              </div>

              {/* Country / State / Zip */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Country
                  </label>
                  <div className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none flex justify-between items-center">
                    <span>Select country</span>
                    <span>
                      <DropdownIcon />
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    State
                  </label>
                  <div className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none flex justify-between items-center">
                    <span>Select state</span>
                    <span>
                      <DropdownIcon />
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Zip code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Street address
                </label>
                <input
                  type="text"
                  placeholder="Enter street address"
                  className="w-full h-13 px-4 border border-gray-300 rounded-2xl focus:outline-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex gap-8">
                <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="checkbox"
                  />
                  Save this information for next time
                </label>

                <label className="flex items-center gap-3 font-medium text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={setAsDefault}
                    onChange={(e) => setSetAsDefault(e.target.checked)}
                    className="checkbox"
                  />
                  Set as default shipping address
                </label>
              </div>
            </div>

            {/*=== Delivery Method ===*/}
            <div className="bg-white space-y-6 max-w-xl">
              {/* Title */}
              <h2 className="text-xl font-bold">Delivery Method</h2>

              {/* === Pickup Station Option === */}
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

              {/*=== Stations ===*/}
              {method === "pickup" && (
                <div className="space-y-4">
                  <p className="text-sm font-medium">
                    Select from the Stations near You
                  </p>

                  {/*=== Station 1 ===*/}
                  <button
                    onClick={() => setStation(1)}
                    className={`w-full rounded-[20px] border p-4 text-left transition cursor-pointer ${
                      station === 1
                        ? "border-[#FDA106] bg-[#FFF4EA]"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-medium">FLEZTA Pickup station one</p>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          station === 1
                            ? "bg-gradient text-white border border-[#FDA106]"
                            : "bg-[#FFF4EA]"
                        }`}
                      >
                        <h1
                          className={`${
                            station === 1 ? "text-white" : "gradient-text"
                          }`}
                        >
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

                  {/*=== Station 2 ===*/}
                  <button
                    onClick={() => setStation(2)}
                    className={`w-full rounded-[20px] border p-4 text-left transition cursor-pointer ${
                      station === 2
                        ? "border-[#FDA106] bg-[#FFF4EA]"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <p className="font-medium">FLEZTA Pickup station one</p>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          station === 2
                            ? "bg-gradient text-white border border-[#FDA106]"
                            : "bg-[#FFF4EA]"
                        }`}
                      >
                        <h1
                          className={`${
                            station === 2 ? "text-white" : "gradient-text"
                          }`}
                        >
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
                </div>
              )}

              {/*=== Door Delivery ===*/}
              <div className="pt-2">
                <label
                  className="flex items-start gap-3 cursor-pointer"
                  onClick={() => setMethod("door")}
                >
                  {/* Custom radio */}
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

              {/*=== Confirmation ===*/}
              {
                <div className="">
                  {/* Shipment Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-220">
                    {shipments.map((shipment) => (
                      <div key={shipment.id} className=" w-full">
                        {" "}
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {shipment.title}
                        </h3>
                        <div className="bg-white rounded-4xl border-2 border-gray-200">
                          {/* Header */}
                          <div className="p-4 pb-4 bg-gray-50 rounded-t-4xl">
                            <h4 className="text-xl font-bold text-gray-900 mb-1">
                              {shipment.method}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {shipment.deliveryDate}
                            </p>
                          </div>
                          {/* Divider */}
                          <div className="border-t border-gray-200"></div>
                          {/* Product */}
                          <div className="p-4 pt-5">
                            <div className="flex items-center gap-4">
                              <img
                                src={shipment.product.image.src}
                                alt={shipment.product.name}
                                className="w-13 h-13 rounded-md object-cover shrink-0"
                              />
                              <div>
                                <h5 className="font-mediu, text-gray-900 mb-1">
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
                      Confirm delivery details before proceeding to make
                      payment.
                    </span>
                  </label>
                </div>
              }
            </div>
          </div>

          {/*=== Right Column ===*/}
          <div className="lg:col-span-1 mt-13">
            <div className="bg-white rounded-4xl border border-gray-200 sticky top-6 h-full max-h-125">
              <h2 className="text-xl font-bold bg-gray-50 px-5 rounded-t-4xl border-b border-gray-200 py-6 text-gray-700">
                Cart Summary
              </h2>

              <div className="space-y-4 p-6">
                <div className="flex justify-between">
                  <span>Items total(8)</span>
                  <span className="font-semibold">$1,950.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span className="font-semibold">$5.99</span>
                </div>

                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$1,905.99</span>
                </div>
              </div>

              <div className="mt-35 p-5">
                <button className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer">
                  <div className="w-full bg-primary-color text-white py-4 rounded-[14px] text-center font-semibold">
                    Proceed To Payment
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingInfoComp;
