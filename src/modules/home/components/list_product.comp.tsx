'use client';

import { AddToCartIcon, AshHeartIcon, NegotiateIcon, RedHeartIcon } from "../../../assets/svg/svg_icon";
import newProducts from "../../products/data/products.data";
import useListProductHook from "../hooks/useListProduct.hook";
import { productDetailsRoute } from "../../../core/routes/routeNames";
import { AnimatePresence, motion } from "framer-motion";

const ListProductsComp = () => {
  const {
    hoveredCard,
    setHoveredCard,
    scrollToTopSmooth,
    floatingHearts,
    handleWishlistClick,
    wishlist,
    router,
  } = useListProductHook();


  const FloatingHeart = ({ id }: { id: string }) => (
    <motion.div
      key={id}
      initial={{ y: 0, opacity: 1, scale: 0.8 }}
      animate={{ y: -40, opacity: 0, scale: 1.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 right-7 pointer-events-none"
    >
      <RedHeartIcon />
    </motion.div>
  );


  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => {
            const isWishlisted = wishlist.includes(String(product.id));

            return (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-3xl px-4 py-10 transition-all duration-300 relative"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Wishlist Heart Icon */}
                <button
                  onClick={() => handleWishlistClick(String(product.id))}
                  className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {isWishlisted ? <RedHeartIcon /> : <AshHeartIcon />}
                </button>

                {/* Floating hearts animation */}
                <AnimatePresence>
                  {floatingHearts
                    .filter((h) => h.id.startsWith(String(product.id)))
                    .map((h) => (
                      <FloatingHeart key={h.id} id={h.id} />
                    ))}
                </AnimatePresence>

                {/* Product Image */}
                <div
                  className="mb-6 overflow-hidden flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    scrollToTopSmooth();
                    router.push(productDetailsRoute);
                  }}
                >
                  <img
                    src={product.image.src}
                    alt={product.name}
                    className="h-50 object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {product.name}
                  </h3>

                  {/* Vendor */}
                  <div className="flex items-center gap-2">
                    {/* <div className="w-6 h-6 bg-gray-300 rounded-full" /> */}
                    <span>Condition: New</span>
                    <span className="text-sm text-gray-600">
                      {product.vendor}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-xl font-semibold gradient-text">
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
                    <div className="backdrop-blur-sm border border-gray-200 p-3 rounded-2xl bg-white/10">
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
        </div>
      </div>
    </div>
  );
};

export default ListProductsComp;
