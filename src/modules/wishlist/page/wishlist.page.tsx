"use client";

import {
  AddToCartIcon,
  NegotiateIcon,
  RedHeartIcon,
} from "@/assets/svg/svg_icon";
import { productDetailsRoute } from "@/core/routes/routeNames";
import useCart from "@/shared/ui/hooks/use_cart.hook";
import { useRouter } from "next/navigation";
import SeatImage from "@/assets/images/seat.png";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  condition: string;
  likes: number;
  image?: string;
}

const WishlistPage = () => {
  const router = useRouter();

  const wishlistItems: WishlistItem[] = [
    {
      id: 1,
      name: "Elegant yellow leather modern design armchair",
      price: 102.0,
      condition: "New",
      likes: 16,
    },
    {
      id: 2,
      name: "Elegant yellow leather modern design armchair",
      price: 102.0,
      condition: "New",
      likes: 16,
    },
    {
      id: 3,
      name: "Elegant yellow leather modern design armchair",
      price: 102.0,
      condition: "New",
      likes: 16,
    },
    {
      id: 4,
      name: "Elegant yellow leather modern design armchair",
      price: 102.0,
      condition: "New",
      likes: 16,
    },
    {
      id: 5,
      name: "Elegant yellow leather modern design armchair",
      price: 102.0,
      condition: "New",
      likes: 16,
    },
    {
      id: 6,
      name: "Elegant yellow leather modern design armchair",
      price: 102.0,
      condition: "New",
      likes: 16,
    },
  ];

  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-[20px] bg-white">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 p-5 border-b border-gray-200">
        Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-5">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-200 rounded-3xl px-4 py-10 transition-all duration-300 relative"
          >
            {/* Heart Icon (already wishlisted - non-interactive) */}
            <div className="absolute top-5 right-4 z-10 flex items-center justify-center gap-2 cursor-default">
              <RedHeartIcon />
              <span className="text-sm font-semibold">{item.likes}</span>
            </div>

            {/* Product Image */}
            <div
              className="mb-6 overflow-hidden flex items-center justify-center cursor-pointer"
              onClick={() => router.push(productDetailsRoute)}
            >
              <div className="h-50 flex items-center justify-center">
                <img src={SeatImage.src} className="h-50 object-contain" />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {item.name}
              </h3>

              {/* Vendor / Condition */}
              <div className="flex items-center gap-2">
                <span>Condition: {item.condition}</span>
              </div>

              {/* Price */}
              <div className="text-xl font-semibold gradient-text">
                ${item.price.toFixed(2)}
              </div>

              {/* Hover Action Buttons (visible on hover) */}
              <div className="absolute left-0 right-0 bottom-2 px-2 transition-all duration-300 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="backdrop-blur-sm border border-gray-200 p-3 rounded-2xl bg-white/10">
                  <div className="flex gap-3">
                    <button
                      onClick={() => addToCart(String(item.id), 1)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary-color border border-[#003625] rounded-2xl transition-colors font-medium cursor-pointer"
                    >
                      <AddToCartIcon />
                      <span className="text-[13px] text-secondary-color">
                        Add To Cart
                      </span>
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[#FDA106] bg-tertiary-color rounded-2xl transition-colors font-medium cursor-pointer">
                      <NegotiateIcon />
                      <span className="text-[13px] gradient-text">
                        Negotiate
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
