// "use client";

// import {
//   AddToCartIcon,
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   AshHeartIcon,
//   NegotiateIcon,
//   RedHeartIcon,
// } from "../../../assets/svg/svg_icon";
// import SeatImage from "@/assets/images/seat.png";
// import BeautyImage from "@/assets/images/beauty_skin.png";
// import KidsFashionImage from "@/assets/images/boy.png";
// import AppliancesImage from "@/assets/images/electronic.png";
// import { AnimatePresence, motion } from "framer-motion";
// import { productDetailsRoute } from "@/core/routes/routeNames";
// import Image from "next/image";
// import useTopDealsHook from "../hooks/useTopDeals.hook";


//   const products = [
//     {
//       id: 1,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 102.0,
//       image: SeatImage,
//     },
//     {
//       id: 2,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 102.0,
//       image: SeatImage,
//     },
//     {
//       id: 3,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 100.0,
//       image: SeatImage,
//     },
//     {
//       id: 4,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 102.0,
//       image: SeatImage,
//     },
//     {
//       id: 5,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 102.0,
//       image: SeatImage,
//     },
//     {
//       id: 6,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 234.0,
//       image: SeatImage,
//     },
//     {
//       id: 7,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 345.0,
//       image: SeatImage,
//     },
//     {
//       id: 8,
//       name: "Elegant yellow leather modern design armchair",
//       vendor: "Name of the Vendor",
//       price: 453.0,
//       image: SeatImage,
//     },
//   ];

// export default function TopDealsComp() {
// const {
//   hoveredCard,
//   setHoveredCard,
//   wishlist,
//   floatingHearts,
//   handleWishlistClick,
//   scrollToTopSmooth,
//   router,
//   currentIndex,
//   handleNext,
//   handlePrev,
//   canGoNext,
//   canGoPrev,
// } = useTopDealsHook(products.length);


//   const FloatingHeart = ({ id }: { id: string }) => (
//     <motion.div
//       key={id}
//       initial={{ y: 0, opacity: 1, scale: 0.8 }}
//       animate={{ y: -40, opacity: 0, scale: 1.4 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="absolute top-0 right-7 pointer-events-none"
//     >
//       <RedHeartIcon />
//     </motion.div>
//   );

//   return (
//     <div className="bg-[#032F21] py-12">
//       <div className="container mx-auto px-6 mt-10">
//         <h2 className="text-4xl font-bold text-white mb-8">Top Deals</h2>

//         {/*==== Products Carousel ====*/}
//         <div className="relative">
//           {/*==== Left Arrow ====*/}
//           <button
//             onClick={handlePrev}
//             disabled={!canGoPrev}
//             className={`absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-4 z-10
//     w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-colors cursor-pointer
//     ${canGoPrev ? "bg-secondary-color" : "bg-gray-400 cursor-not-allowed"}
//   `}
//           >
//             <ArrowLeftIcon />
//           </button>

//           {/*==== Products Container ====*/}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 scroll-smooth pb-4 gap-3">
//             {products.slice(currentIndex, currentIndex + 4).map((product) => {
//               const isWishlisted = wishlist.includes(String(product.id));

//               return (
//                 <div
//                   key={product.id}
//                   onMouseEnter={() => setHoveredCard(product.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   className="hrink-0 w-full border border-[#F9FAFB4D] bg-[#FFFFFF]/10 rounded-3xl py-10 px-4 backdrop-blur-md cursor-pointer"
//                 >
//                   <button
//                     onClick={() => handleWishlistClick(String(product.id))}
//                     className="absolute right-8 top-8 z-20 flex items-center justify-center cursor-pointer"
//                   >
//                     {isWishlisted ? <RedHeartIcon /> : <AshHeartIcon />}
//                   </button>

//                   {/* Floating hearts animation */}
//                   <AnimatePresence>
//                     {floatingHearts
//                       .filter((h) => h.id.startsWith(String(product.id)))
//                       .map((h) => (
//                         <FloatingHeart key={h.id} id={h.id} />
//                       ))}
//                   </AnimatePresence>

// {/* Product Image */}
// <div
//   onClick={() => {
//     scrollToTopSmooth();
//     router.push(productDetailsRoute);
//   }}
//   className="rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative w-full h-50"
// >
//   <Image
//     src={product.image}
//     alt={product.name}
//     width={200}
//     height={200}
//     className="object-contain"
//   />
// </div>

//   {/* Product Info */}
//   <div className="space-y-3">
//     <h3 className="text-base font-semibold text-white leading-tight">
//       {product.name}
//     </h3>

//     {/* Vendor */}
//     <div className="flex items-center gap-2">
//       <div className="w-6 h-6 bg-white/20 rounded-full"></div>
//       <span className="text-sm text-white/80">
//         {product.vendor}
//       </span>
//     </div>

//     {/* Price */}
//     <div className="text-xl font-medium text-amber-400">
//       ${product.price.toFixed(2)}
//     </div>

//     {/* Hover Action Buttons */}
//     <div
//       className={`
//     absolute left-0 right-0 bottom-2 px-2 transition-all duration-300
//     ${
//       hoveredCard === product.id
//         ? "translate-y-0 opacity-100"
//         : "translate-y-8 opacity-0"
//     }
// `}
//     >
//       <div className="backdrop-blur-lg border border-gray-200 p-3 rounded-2xl bg-white/10">
//         <div className="flex gap-3">
//           <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary-color border border-[#003625] rounded-2xl transition-colors font-medium cursor-pointer">
//             <AddToCartIcon />
//             <span className="text-[13px]  text-secondary-color">
//               Add To Cart
//             </span>
//           </button>

//           <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[#FDA106] bg-tertiary-color rounded-2xl  transition-colors font-medium cursor-pointer">
//             <NegotiateIcon />
//             <span className="text-[13px] gradient-text">
//               Negotiate
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/*==== Right Arrow ====*/}
//           <button
//             onClick={handleNext}
//             disabled={!canGoNext}
//             className={`absolute -right-2 top-1/2 -translate-y-1/2 translate-x-4 z-10
//     w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition-colors cursor-pointer
//     ${canGoNext ? "bg-secondary-color" : "bg-gray-400 cursor-not-allowed"}
//   `}
//           >
//             <ArrowRightIcon />
//           </button>
//         </div>

// {/*==== Category Cards ====*/}
// <div className="flex gap-3 mt-1">
//   {/*==== Beauty, Skin and Cosmetics ====*/}
//   <div className="bg-[#E8EEEE] rounded-3xl p-6 relative overflow-hidden min-h-100 flex flex-col justify-between w-1/2">
//     <div>
//       <p className="text-l text-primary-color mb-1">
//         Fashion Collections
//       </p>
//       <div>
//         <h3 className="text-5xl font-bold text-primary-color mb-2 leading-tight">
//           Beauty, Skin
//           <br />
//           and Cosmetics
//         </h3>
//         <p className="text-lg font-medium mb-4">
//           Figma ipsum component variant main layer.
//           <br />
//           Stroke hand ellipse move.
//         </p>
//       </div>
//       <button className="group w-36.25 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer">
//         <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
//           Shop Now
//         </div>
//       </button>
//     </div>
//     {/* Cosmetics Image */}
//     <div className="absolute right-0">
//       <Image
//         src={BeautyImage}
//         alt="Beauty Products"
//         width={600}
//         height={348}
//         className="h-[378.82px] object-cover"
//       />
//     </div>
//   </div>

//   <div className="flex justify-between w-1/2 gap-3">
//     {/*==== Children's Fashion ====*/}
//     <div className="bg-[#FAF2E9] rounded-3xl p-6 relative overflow-hidden min-h-70 flex flex-col justify-between w-full">
//       {/* Text + Button */}
//       <div className="relative z-10">
//         <p className="text-lg text-primary-color mb-1">Fashion</p>
//         <h3 className="text-4xl font-bold text-primary-color mb-4 leading-tight">
//           Children's
//           <br />
//           Fashion
//         </h3>

//         <button className="group w-35 p-0.5 border border-[#e26e00] rounded-[18px] cursor-pointer">
//           <div className="w-full bg-[#FDA106] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-[#FFF4EA] group-hover:text-[#052214]">
//             Shop Now
//           </div>
//         </button>
//       </div>

//       {/*=== Kids Fashion Image (behind) ===*/}
//       <div className="absolute bottom-0 right-0 z-0">
//         <Image
//           src={KidsFashionImage}
//           alt="Children's Fashion"
//           width={400}
//           height={300}
//           className="object-contain"
//         />
//       </div>
//     </div>

//     {/*==== Home Appliances ====*/}
//     <div className="bg-[#DCE4EA] rounded-3xl p-6 relative overflow-hidden min-h-70 flex flex-col justify-between w-full">
//       <div>
//         <p className="text-lg text-primary-color mb-1">Electronics</p>
//         <h3 className="text-3xl font-bold text-primary-color mb-3 leading-tight">
//           Home Appliances
//         </h3>
//         <button className="group w-35 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer">
//           <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
//             Shop Now
//           </div>
//         </button>
//       </div>
//       {/* Appliances Image */}
//       <div className="absolute right-0 bottom-0">
//         <Image
//           src={AppliancesImage}
//           alt="Appliances"
//           width={250}
//           height={200}
//           className="object-contain"
//         />
//       </div>
//     </div>
//   </div>
// </div>
//       </div>
//     </div>
//   );
// }


































"use client";

import {
  AddToCartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AshHeartIcon,
  NegotiateIcon,
  RedHeartIcon,
} from "../../../assets/svg/svg_icon";
import SeatImage from "@/assets/images/seat.png";
import BeautyImage from "@/assets/images/beauty_skin.png";
import KidsFashionImage from "@/assets/images/boy.png";
import AppliancesImage from "@/assets/images/electronic.png";
import { motion, AnimatePresence } from "framer-motion";
import { productDetailsRoute } from "@/core/routes/routeNames";
import Image from "next/image";
import useTopDealsHook from "../hooks/useTopDeals.hook";

const products = [
  { id: 1, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 102, image: SeatImage },
  { id: 2, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 102, image: SeatImage },
  { id: 3, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 100, image: SeatImage },
  { id: 4, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 102, image: SeatImage },
  { id: 5, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 102, image: SeatImage },
  { id: 6, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 234, image: SeatImage },
  { id: 7, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 345, image: SeatImage },
  { id: 8, name: "Elegant yellow leather modern design armchair", vendor: "Name of the Vendor", price: 453, image: SeatImage },
];

export default function TopDealsComp() {
  const {
    hoveredCard,
    setHoveredCard,
    wishlist,
    floatingHearts,
    handleWishlistClick,
    scrollToTopSmooth,
    router,
    currentIndex,
    handleNext,
    handlePrev,
    canGoNext,
    canGoPrev,
  } = useTopDealsHook(products.length);

  const FloatingHeart = ({ id }: { id: string }) => (
    <motion.div
      key={id}
      initial={{ y: 0, opacity: 1, scale: 0.8 }}
      animate={{ y: -40, opacity: 0, scale: 1.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 right-7 pointer-events-none"
    >
      <RedHeartIcon />
    </motion.div>
  );

  return (
    <div className="bg-[#032F21] py-12">
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold text-white mb-8">Top Deals</h2>

        {/* ===== Carousel Wrapper ===== */}
        <div className="relative mb-7">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-xl flex items-center justify-center
              ${canGoPrev ? "bg-secondary-color cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}
          >
            <ArrowLeftIcon />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 26.5}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="flex gap-3"
            >
              {products.map((product) => {
                const isWishlisted = wishlist.includes(String(product.id));

                return (
                  <div
                    key={product.id}
                    onMouseEnter={() => setHoveredCard(product.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="min-w-[25%] border border-[#F9FAFB4D] bg-white/10 rounded-3xl py-10 px-4 backdrop-blur-md relative"
                  >
                    {/* Wishlist */}
                    <button
                      onClick={() => handleWishlistClick(String(product.id))}
                      className="absolute right-8 top-8 z-20"
                    >
                      {isWishlisted ? <RedHeartIcon /> : <AshHeartIcon />}
                    </button>

                    <AnimatePresence>
                      {floatingHearts
                        .filter((h) => h.id.startsWith(String(product.id)))
                        .map((h) => (
                          <FloatingHeart key={h.id} id={h.id} />
                        ))}
                    </AnimatePresence>

                    {/* Product Image */}
                    <div
                      onClick={() => {
                        scrollToTopSmooth();
                        router.push(productDetailsRoute);
                      }}
                      className="rounded-2xl mb-6 cursor-pointer overflow-hidden flex items-center justify-center relative w-full h-50"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    {/* Product Info */}
                    <div className="space-y-3">
                      <h3 className="text-base font-semibold text-white leading-tight">
                        {product.name}
                      </h3>

                      {/* Vendor */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        <span className="text-sm text-white/80">
                          {product.vendor}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="text-xl font-medium text-amber-400">
                        ${product.price.toFixed(2)}
                      </div>

                      {/* Hover Action Buttons */}
                      <div
                        className={`
                    absolute left-0 right-0 bottom-2 px-2 transition-all duration-300
                    ${hoveredCard === product.id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                          }
                `}
                      >
                        <div className="backdrop-blur-lg border border-gray-200 p-3 rounded-2xl bg-white/10">
                          <div className="flex gap-3">
                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary-color border border-[#003625] rounded-2xl transition-colors font-medium cursor-pointer">
                              <AddToCartIcon />
                              <span className="text-[13px]  text-secondary-color">
                                Add To Cart
                              </span>
                            </button>

                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[#FDA106] bg-tertiary-color rounded-2xl  transition-colors font-medium cursor-pointer">
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
                );
              })}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-xl flex items-center justify-center
              ${canGoNext ? "bg-secondary-color cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}
          >
            <ArrowRightIcon />
          </button>
        </div>


        {/*==== Category Cards ====*/}
        <div className="flex gap-3 mt-1">
          {/*==== Beauty, Skin and Cosmetics ====*/}
          <div className="bg-[#E8EEEE] rounded-3xl p-6 relative overflow-hidden min-h-100 flex flex-col justify-between w-1/2">
            <div>
              <p className="text-l text-primary-color mb-1">
                Fashion Collections
              </p>
              <div>
                <h3 className="text-5xl font-bold text-primary-color mb-2 leading-tight">
                  Beauty, Skin
                  <br />
                  and Cosmetics
                </h3>
                <p className="text-lg font-medium mb-4">
                  Figma ipsum component variant main layer.
                  <br />
                  Stroke hand ellipse move.
                </p>
              </div>
              <button className="group w-36.25 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer">
                <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                  Shop Now
                </div>
              </button>
            </div>
            {/* Cosmetics Image */}
            <div className="absolute right-0">
              <Image
                src={BeautyImage}
                alt="Beauty Products"
                width={600}
                height={348}
                className="h-[378.82px] object-cover"
              />
            </div>
          </div>

          <div className="flex justify-between w-1/2 gap-3">
            {/*==== Children's Fashion ====*/}
            <div className="bg-[#FAF2E9] rounded-3xl p-6 relative overflow-hidden min-h-70 flex flex-col justify-between w-full">
              {/* Text + Button */}
              <div className="relative z-10">
                <p className="text-lg text-primary-color mb-1">Fashion</p>
                <h3 className="text-4xl font-bold text-primary-color mb-4 leading-tight">
                  Children's
                  <br />
                  Fashion
                </h3>

                <button className="group w-35 p-0.5 border border-[#e26e00] rounded-[18px] cursor-pointer">
                  <div className="w-full bg-[#FDA106] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-[#FFF4EA] group-hover:text-[#052214]">
                    Shop Now
                  </div>
                </button>
              </div>

              {/*=== Kids Fashion Image (behind) ===*/}
              <div className="absolute bottom-0 right-0 z-0">
                <Image
                  src={KidsFashionImage}
                  alt="Children's Fashion"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>

            {/*==== Home Appliances ====*/}
            <div className="bg-[#DCE4EA] rounded-3xl p-6 relative overflow-hidden min-h-70 flex flex-col justify-between w-full">
              <div>
                <p className="text-lg text-primary-color mb-1">Electronics</p>
                <h3 className="text-3xl font-bold text-primary-color mb-3 leading-tight">
                  Home Appliances
                </h3>
                <button className="group w-35 p-0.5 border border-[#003625] rounded-[18px] cursor-pointer">
                  <div className="w-full bg-[#003625] text-white py-3 rounded-[14px] text-center font-semibold transition-colors duration-200 group-hover:bg-emerald-100 group-hover:text-[#052214]">
                    Shop Now
                  </div>
                </button>
              </div>
              {/* Appliances Image */}
              <div className="absolute right-0 bottom-0">
                <Image
                  src={AppliancesImage}
                  alt="Appliances"
                  width={250}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
