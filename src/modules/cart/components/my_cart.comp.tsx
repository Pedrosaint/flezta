"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import {
  AddToCartIcon2,
  DeleteCartIcon,
  DeleteIcon2,
} from "@/assets/svg/svg_icon";
import useMyCartHook from "../hooks/useMyCart.hook";

const MyCartComp = () => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    calculateSubtotal,
    calculateTotal,
    totalItems,
    handleCheckout,
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
              <div className="grid grid-cols-12 gap-4 px-6 py-6 bg-gray-50 border-b border-gray-200 text-xl font-semibold text-gray-700">
                <div className="col-span-4">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-3">Quantity</div>
                <div className="col-span-2">Subtotal</div>
                <div className="col-span-1" />
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 px-4 py-5 items-center"
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
                    <div className="col-span-2">
                      <div className="font-semibold">
                        ${item.price.toFixed(2)}
                      </div>
                      {item.negotiatedPrice && (
                        <div className="text-[16px] text-gray-500">
                          Negotiated ({item.negotiatedPrice.toFixed(2)})
                        </div>
                      )}
                      {item.isStrikethrough && (
                        <div className="text-sm text-gray-500 line-through">
                          ${(item.originalPrice ?? item.price).toFixed(2)}
                        </div>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-3">
                      {item.type.toLowerCase().includes("offer") ? (
                        <div className="flex items-center gap-2">
                          <span className="w-26 h-10 text-center text-xl flex items-center justify-center">
                            <Minus />
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-16 h-10 text-center text-xl border-2 border-gray-300 rounded-xl flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-2 font-semibold">
                      ${calculateSubtotal(item)}
                    </div>

                    {/* Delete */}
                    <div className="col-span-1 flex justify-end">
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

              <div className="flex gap-3 border-t border-gray-200 p-5">
                <button className="group w-75 p-0.5 border border-[#FDA106] backdrop-blur-[10px] rounded-[18px] cursor-pointer">
                  <div className="relative w-full rounded-[14px] overflow-hidden bg-gradient">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#FFF4EA] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="text-[#FDA106] flex gap-2 items-center">
                        <DeleteCartIcon stroke="#FDA106" />
                        Clear Cart
                      </span>
                    </div>

                    {/* Default State */}
                    <div className="relative z-10 py-4 font-semibold flex gap-2 items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                      <DeleteCartIcon />
                      Clear Cart
                    </div>
                  </div>
                </button>

                <button className="group w-75 p-0.5 border border-[#003625] backdrop-blur-[10px] rounded-[18px] cursor-pointer">
                  <div className="relative w-full rounded-[14px] overflow-hidden bg-[#003625]">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#DDFFF4] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <span className="text-[#003625] font-semibold flex gap-2 items-center">
                        <AddToCartIcon2 stroke="#003625" />
                        Continue Shopping
                      </span>
                    </div>

                    {/* Default State */}
                    <div className="relative z-10 py-4 font-semibold flex gap-2 items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                      <AddToCartIcon2 stroke="white" />
                      Continue Shopping
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/*=== Summary ===*/}
          <div className="lg:col-span-1 h-full">
            <div className="bg-white rounded-4xl border border-gray-200  h-full flex flex-col">
              <h2 className="text-xl font-bold mb-3 bg-gray-50 px-5 rounded-t-4xl border-b border-gray-200 py-6 text-gray-700">
                Cart Summary
              </h2>

              <div className="space-y-4 px-5">
                <div className="flex justify-between">
                  <span>Items total ({totalItems})</span>
                  <span className="font-semibold">${calculateTotal()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <div className="mt-40 p-5">
                <button 
                 onClick={handleCheckout}
                className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] cursor-pointer">
                  <div className="w-full bg-primary-color text-white py-4 rounded-[14px] text-center font-semibold">
                    Proceed To Checkout
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

export default MyCartComp;
