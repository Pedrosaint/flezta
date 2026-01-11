import {
  AddToCartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AshHeartIcon,
  NegotiateIcon,
} from "@/assets/svg/svg_icon";
import { products2 } from "../data/products.data";
import useRecentlyViewedHook from "../hook/useRecentlyViewed.hook";

const RecentlyViewedComp = () => {
  const { hoveredCard, setHoveredCard } = useRecentlyViewedHook();
  return (
    <div className="relative mt-10 py-20 border-t-2 border-gray-300">
      <h1 className="text-2xl font-semibold mb-10">Recently Viewed Items</h1>
      {/*==== Left Arrow ====*/}
      <button className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 border border-[#003625] bg-secondary-color rounded-xl flex items-center justify-center transition-colors">
        <ArrowLeftIcon />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {products2.map((product) => (
          <div
            key={product.id}
            className="group bg-white border border-gray-200 rounded-3xl px-4 py-10 transition-all duration-300 relative"
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Wishlist Heart Icon */}
            <button className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors cursor-pointer">
              <AshHeartIcon />
            </button>

            {/* Product Image */}
            <div className="mb-6 overflow-hidden flex items-center justify-center">
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
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">{product.vendor}</span>
              </div>

              {/* Price */}
              <div className="text-xl font-semibold gradient-text">
                ${product.price.toFixed(2)}
              </div>

              {/* Hover Action Buttons */}
              <div
                className={`
                        absolute left-0 right-0 bottom-2 px-2 transition-all duration-300
                        ${
                          hoveredCard === product.id
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

                    <button
                      //   onClick={() => router.push(productDetailsRoute)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-[#FDA106] bg-tertiary-color rounded-2xl  transition-colors font-medium cursor-pointer"
                    >
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

      {/*==== Right Arrow ====*/}
      <button className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 border border-[#003625] bg-secondary-color rounded-xl flex items-center justify-center transition-colors">
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default RecentlyViewedComp;
