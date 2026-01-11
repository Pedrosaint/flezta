/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ProductDescriptionComp from "./product_description.comp";
import ProductReviewComp from "./product_review.comp";
import ProductShippingComp from "./product_shipping.comp";
import CustomerWhoViewedComp from "./customer_who_viewed.comp";
import RecentlyViewedComp from "./recently_viewed.comp";
import useProductOverviewHook from "../hook/useProductOverview.hook";

interface ProductDetailsCompProps {
  product: any;
}

const ProductOverviewComp = ({ product }: ProductDetailsCompProps) => {
  const { activeTab, setActiveTab, tabs } = useProductOverviewHook();

  return (
    <section className="container mx-auto px-6 mt-14 mb-14">
      {/*=== Tabs ===*/}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                pb-3 text-sm font-medium transition-colors relative cursor-pointer
                ${
                  activeTab === tab.key
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-gray-900"
                }
              `}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/*=== Content ===*/}
      {activeTab === "description" && <ProductDescriptionComp />}

      {activeTab === "review" && <ProductReviewComp />}

      {activeTab === "shipping" && <ProductShippingComp />}

      {/*=== Footer ===*/}
      <CustomerWhoViewedComp />
      <RecentlyViewedComp />
    </section>
  );
};

export default ProductOverviewComp;
