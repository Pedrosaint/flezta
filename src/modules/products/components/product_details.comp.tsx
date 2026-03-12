"use client";

import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import {
  AddToCartIcon2,
  ArrowRightIcon,
  AshHeartIcon,
  ChatIcon3,
  RedHeartIcon,
  SecurePaymentIcon,
  VerifiedBadge,
} from "@/assets/svg/svg_icon";
import { RiStarFill } from "react-icons/ri";
import NegotiatePriceModal from "../modal/negotiate_price.modal";
import useProductDetailsHook from "../hook/useProductDetails.hook";
import { useRouter } from "next/navigation";
import { cartRoute } from "@/core/routes/routeNames";
import BuyNowModal from "../modal/buy_now.modal";
import useCart from "@/shared/ui/hooks/use_cart.hook";
import { DarkButton, GradientButton, PrimaryButton } from "@/shared/ui/components/button.ui";
import { AnimatePresence, motion } from "framer-motion";
import { IProduct } from "../types/product.type";
import { formatNaira } from "@/shared/utils/currency.util";

interface ProductDetailsCompProps {
  product: IProduct;
}

const ProductDetailsComp = ({ product }: ProductDetailsCompProps) => {
  const router = useRouter();

  const {
    isNegotiatePriceModal,
    setIsNegotiatePriceModal,
    selectedColor,
    setSelectedColor,
    quantity,
    selectedImage,
    setSelectedImage,
    images,
    colors,
    decreaseQuantity,
    increaseQuantity,
    isBuyNowModal,
    setIsBuyNowModal,
    wishlist,
    handleWishlistClick,
    floatingHearts,
    scrollToTopSmooth,
  } = useProductDetailsHook();

  const { addToCart } = useCart();

  const productId = String(product.id);
  const isWishlisted = wishlist.includes(productId);

  const specifications = [
    { label: "SKU", value: "GE779FD3WOP7NNAFAMZ" },
    { label: "Model", value: "N/A" },
    { label: "Color", value: "Black" },
    { label: "Condition", value: "New" },
    {
      label: "Measurement",
      value: "Height (100cm), Width (45cm), Breadth (60cm)",
    },
    { label: "Main material", value: "Leather" },
    { label: "Weight", value: "25kg" },
  ];

  const FloatingHeart = ({ id }: { id: string }) => (
    <motion.div
      key={id}
      initial={{ y: 0, opacity: 1, scale: 0.8 }}
      animate={{ y: -40, opacity: 0, scale: 1.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 right-53 pointer-events-none"
    >
      <RedHeartIcon />
    </motion.div>
  );

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_0.8fr] gap-5 h-full">
          {/* ==== Left Column - Image Gallery ==== */}
          <div className="lg:col-span-1 h-full">
            <div className="flex gap-2">
              <div className="flex flex-col gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-25 h-29 rounded-[18px] border-2 relative ${
                      selectedImage === index
                        ? "border-[#fda106]"
                        : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover p-1 rounded-[18px]"
                    />
                  </button>
                ))}
              </div>

              <div className="flex-1 relative h-125 border-2 border-gray-200 rounded-[22px]">
                <Image
                  src={images[selectedImage]}
                  alt="Selected"
                  fill
                  className="object-cover p-1 rounded-[22px]"
                />
              </div>
            </div>
          </div>

          {/* ==== Middle Column ==== */}
          <div className="lg:col-span-1 h-full border-r border-gray-200 relative">
            {/* Title + Wishlist */}
            <div className="flex items-start gap-6 mb-4">
              <h1 className="text-4xl font-bold">{product.name}</h1>

              <button
                onClick={() => handleWishlistClick(productId)}
                className="p-2 bg-gray-100 border border-dashed border-gray-300 rounded-lg transition-colors cursor-pointer"
              >
                {isWishlisted ? <RedHeartIcon /> : <AshHeartIcon />}
              </button>
            </div>

            {/* Floating Hearts */}
            <AnimatePresence>
              {floatingHearts
                .filter((h) => h.id.startsWith(productId))
                .map((h) => (
                  <FloatingHeart key={h.id} id={h.id} />
                ))}
            </AnimatePresence>

            {/* Specifications */}
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>

            <div className="grid gap-y-3 text-lg mb-4">
              {specifications.map(({ label, value }) => (
                <div key={label} className="flex gap-20">
                  <span className="w-32 text-gray-500">{label}</span>

                  <span className="font-medium">
                    {Array.isArray(value)
                      ? value.map((c, i) => (
                          <span
                            key={i}
                            className="inline-block w-4 h-4 rounded-full mr-1 border"
                            style={{ backgroundColor: c.code }}
                            title={c.name}
                          />
                        ))
                      : value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="text-4xl font-medium gradient-text mb-3">
              {formatNaira(product.price)}
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Color:</h3>
              <div className="flex gap-2">
                {colors.map((color) => {
                  const isActive = selectedColor === color.name;

                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`
                      w-15 h-9 rounded-[14px] flex items-center justify-center
                      transition-all cursor-pointer
                      ${isActive ? "scale-110" : ""}
                    `}
                      style={{
                        border: isActive
                          ? `1px solid ${color.code}`
                          : "1px solid transparent",
                      }}
                    >
                      {/* INNER COLOR DOT */}
                      <span
                        className="w-13.5 h-7.5 rounded-xl block"
                        style={{ backgroundColor: color.code }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-1">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-16 h-10 text-center text-xl border-2 border-gray-300 rounded-xl flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 border bg-[#DDFFF4] border-[#003625] text-[#003625] rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {/*=== Negotiate Price Button ===*/}
              <DarkButton
                onClick={() => setIsNegotiatePriceModal(true)}
                className="w-auto"
              >
                <div className="flex items-center gap-2 px-2">
                  <ChatIcon3 />
                  Negotiate Price
                </div>
              </DarkButton>

              {/*=== Add To Cart Button ===*/}
              <GradientButton
                onClick={() => {
                  setIsBuyNowModal(true);
                  addToCart(productId, quantity);
                }}
                className="w-45"
              >
                <AddToCartIcon2 stroke="currentColor" />
                Add To Cart
              </GradientButton>

              {/*=== Buy Now Button ===*/}
              <PrimaryButton
                onClick={() => {
                  scrollToTopSmooth();
                  router.push(cartRoute);
                }}
                className="w-45"
              >
                <SecurePaymentIcon stroke="currentColor" />
                Buy Now
              </PrimaryButton>
            </div>
          </div>

          {/*==== Right Column - Seller Info ====*/}
          <div className="w-full max-w-md">
            <div className="rounded-3xl border-2 border-dashed bg-white border-gray-300 p-6 h-130">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Sold by</h2>

              {/* Seller Profile */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      Offizzy Stores
                    </span>
                    <VerifiedBadge />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          <RiStarFill />
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold">4.3</span>
                    <span className="text-sm text-gray-600">(98 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">90%</div>
                  <div className="text-sm text-gray-600">Seller ratings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">
                    Negotiation response
                  </div>
                </div>
              </div>

              {/* More Items Link */}
              <div className="text-center py-3 border border-gray-300 bg-[#F3F4F6] rounded-2xl mb-4 mt-20">
                <button className="w-full text-gray-900 font-medium transition-colors flex items-center gap-2 justify-center cursor-pointer">
                  More Items From This Seller
                  <ArrowRightIcon stroke="black" />
                </button>
              </div>

              {/* Action Button */}
              <DarkButton onClick={() => {}} fullWidth>
                <div className="flex items-center gap-2">
                  <ChatIcon3 />
                  Message Seller
                </div>
              </DarkButton>
            </div>
          </div>
        </div>
      </div>

      {isNegotiatePriceModal && (
        <NegotiatePriceModal onClose={() => setIsNegotiatePriceModal(false)} />
      )}

      <AnimatePresence>
        {isBuyNowModal && (
          <BuyNowModal onClose={() => setIsBuyNowModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetailsComp;
