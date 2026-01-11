"use client";

import { ChevronDown } from "lucide-react";
import {
  AddToCartIcon,
  AshHeartIcon,
  FilterIcon,
  NegotiateIcon,
} from "../../../assets/svg/svg_icon";
import products from "../data/products.data";
import Pagination from "../../../shared/ui/components/pagination.ui";
import { productDetailsRoute } from "../../../core/routes/routeNames";
import { useRouter } from "next/navigation";
import useCategoriesHook from "../hook/useCategories.hook";
import NegotiatePriceModal from "../modal/negotiate_price.modal";

const CategoriesComp = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) => {
  const router = useRouter();
  const {
    isNegotiatePriceModal,
    setIsNegotiatePriceModal,
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    showCategories,
    setShowCategories,
    showPrice,
    setShowPrice,
    hoveredCard,
    setHoveredCard,
    categories,
    scrollToTopSmooth,
    MIN,
    MAX,
  } = useCategoriesHook();



  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/*==== Filter Sidebar ====*/}
          <div className="lg:col-span-1">
            <div className="bg-primary-color text-white rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Filter</h2>
                <FilterIcon />
              </div>
            </div>

            <div className="bg-white rounded shadow-sm ">
              {/* Categories */}
              <div className="border-b border-gray-200 ">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
                >
                  <h3 className="font-semibold text-gray-900">Categories</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      showCategories ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showCategories && (
                  <div className="px-4 pb-4 space-y-3">
                    {categories.map((category, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="custom-radio"
                        />

                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* ====== Price Filter ======*/}
              <div className="border-t border-gray-200 mt-2">
                <button
                  onClick={() => setShowPrice(!showPrice)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
                >
                  <h3 className="font-semibold text-gray-900">Price</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      showPrice ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showPrice && (
                  <div className="px-4 pb-4">
                    {/* Slider */}
                    <div className="relative h-6 mb-4">
                      {/* Track */}
                      <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 rounded bg-gray-200" />

                      {/* Active Range */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 h-1 rounded bg-emerald-900"
                        style={{
                          left: `${((priceFrom - MIN) / (MAX - MIN)) * 100}%`,
                          width: `${
                            ((priceTo - priceFrom) / (MAX - MIN)) * 100
                          }%`,
                        }}
                      />

                      {/* Min thumb */}
                      <input
                        type="range"
                        min={MIN}
                        max={MAX}
                        value={priceFrom}
                        onChange={(e) =>
                          setPriceFrom(
                            Math.min(Number(e.target.value), priceTo - 100)
                          )
                        }
                        className="price-range z-40"
                      />

                      {/* Max thumb */}
                      <input
                        type="range"
                        min={MIN}
                        max={MAX}
                        value={priceTo}
                        onChange={(e) =>
                          setPriceTo(
                            Math.max(Number(e.target.value), priceFrom + 100)
                          )
                        }
                        className="price-range z-30"
                      />
                    </div>

                    {/* Label */}
                    <div className="text-sm text-gray-700 mb-4">
                      From: ${priceFrom.toLocaleString()} – $
                      {priceTo.toLocaleString()}
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          value={priceFrom}
                          onChange={(e) => setPriceFrom(Number(e.target.value))}
                          className="price-input"
                        />
                      </div>

                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          value={priceTo}
                          onChange={(e) => setPriceTo(Number(e.target.value))}
                          className="price-input"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/*==== Products Grid ====*/}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="bg-primary-color text-white rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">300</span>
                <span className="ml-2">Total products found</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Sort by:</span>
                <select className="bg-white/20  px-4 py-2 rounded-xl border-none focus:outline-none">
                  <option>Select option</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
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
                  <div
                    onClick={() => {
                      scrollToTopSmooth();
                      router.push(productDetailsRoute);
                    }}
                    className="mb-6 overflow-hidden flex items-center justify-center cursor-pointer"
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
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
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
                            onClick={() => setIsNegotiatePriceModal(true)}
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
            {/* ====== Pagination ====== */}
            <Pagination />
          </div>
        </div>
      </div>

      {isNegotiatePriceModal && (
        <NegotiatePriceModal onClose={() => setIsNegotiatePriceModal(false)} />
      )}
    </div>
  );
};

export default CategoriesComp;
