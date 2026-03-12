"use client";

import Image from "next/image";
import { Minus, } from "lucide-react";
import {
  AddToCartIcon2,
  DeleteCartIcon,
  DeleteIcon2,
} from "@/assets/svg/svg_icon";
import { GradientButton, PrimaryButton } from "@/shared/ui/components/button.ui";
import useMyCartHook from "../hooks/useMyCart.hook";
import { formatNaira } from "@/shared/utils/currency.util";

const MyCartComp = () => {
  const {
    cartItems,
    removeItem,
    calculateSubtotal,
    calculateTotal,
    totalItems,
    handleCheckout,
    statusColor,
  } = useMyCartHook();

  return (
    <div className="py-8 mb-25">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-4xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-10 gap-4 px-6 py-6 bg-gray-50 border-b border-gray-200 text-xl font-semibold text-gray-700">
                <div className="col-span-3">Product</div>
                <div className="col-span-1">Price</div>
                <div className="col-span-1 pl-4">Quantity</div>
                <div className="col-span-1 pl-17">Status</div>
                <div className="col-span-1 pl-28">Subtotal</div>
                <div className="col-span-1" />
              </div>

              <div className="bg-[#FFF4EA] w-full py-4 px-6 border-b border-gray-200">
                <h1>From AbuDhaki Shops - Abuja </h1>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-14 gap-4 px-4 py-5 items-center ${
                      item.status === "Out of stock" ? "opacity-40 pointer-events-none" : ""
                    }`}
                  >
                    {/* Product */}
                    <div className="col-span-4 flex items-center gap-3">
                      <div className="w-10 h-10 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <div className="text-sm flex gap-2">
                          <span className="text-gray-600">{item.type}</span>
                          <span className={`gradient-text font-medium`}>
                            {item.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 pl-5">
                      <div className="font-semibold">
                        {formatNaira(item.price)}
                      </div>
                      {item.negotiatedPrice && (
                        <div className="text-[16px] text-gray-500">
                          Negotiated ({item.negotiatedPrice.toFixed(2)})
                        </div>
                      )}
                      {item.isStrikethrough && (
                        <div className="text-sm text-gray-500 line-through">
                          {formatNaira(item.originalPrice ?? item.price)}
                        </div>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2">
                      {item.type.toLowerCase().includes("offer") ? (
                        <div className="flex items-center gap-2">
                          <span className="w-10 h-10 text-center text-xl flex items-center justify-center">
                            <Minus />
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {/* <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-4 h-4" />
                          </button> */}
                          <span className="w-10 h-10 text-center text-xl border-2 border-gray-300 rounded-xl flex items-center justify-center">
                            {item.quantity}
                          </span>
                          {/* <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                          </button> */}
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    <div className={`col-span-2 ${statusColor[item.status]}`}>
                      {item.status}
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-2 font-semibold">
                      {formatNaira(calculateSubtotal(item))}
                    </div>

                    {/* Delete */}
                    <div className="col-span-2 flex justify-end">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 border-2 border-gray-200 rounded-lg cursor-pointer"
                      >
                        <DeleteIcon2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 pr-52">
                  <span className="text-gray-700">Overall Subtotal</span>
                  <span className="font-semibold">{formatNaira(calculateTotal())}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 pr-52">
                  <span className="text-gray-700">Delivery cost</span>
                  <span className="font-semibold">{formatNaira(62)}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
                  <span className="text-gray-900 font-bold">Total</span>
                  <div className="flex items-center gap-4">
                    <span className="font-bold pr-15">{formatNaira(calculateTotal() + 62)}</span>
                    <PrimaryButton onClick={handleCheckout} size="sm" className="w-28">
                      Checkout Seller
                    </PrimaryButton>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 border-t border-gray-200 p-5">
                <GradientButton className="w-75">
                  <DeleteCartIcon stroke="currentColor" />
                  Clear Cart
                </GradientButton>

                <PrimaryButton className="w-75">
                  <AddToCartIcon2 stroke="currentColor" />
                  Continue Shopping
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/*=== Summary ===*/}
          <div className="lg:col-span-1 self-start">
            <div className="bg-white rounded-4xl border border-gray-200  h-full flex flex-col">
              <h2 className="text-xl font-bold mb-3 bg-gray-50 px-5 rounded-t-4xl border-b border-gray-200 py-6 text-gray-700">
                Cart Summary
              </h2>

              <div className="space-y-4 px-5">
                <div className="flex justify-between text-lg font-bold">
                  <span>Items total ({totalItems})</span>
                  <span className="font-semibold">{formatNaira(calculateTotal())}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>{formatNaira(calculateTotal())}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Delivery cost</span>
                  <span>{formatNaira(calculateTotal())}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatNaira(calculateTotal())}</span>
                </div>
              </div>

              <div className="mt-40 p-5">
                <PrimaryButton onClick={handleCheckout} fullWidth className="">
                  Proceed To Checkout
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartComp;
