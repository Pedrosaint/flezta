import { ChevronRight } from "lucide-react";
import { HomeIcon } from "../../../assets/svg/svg_icon";
import ProductImage from "@/assets/images/product_header.png";
import Image from "next/image";

interface IBreadcrumbItem {
  label: string;
  active?: boolean;
}

interface ICategoriesHeaderCompProps {
  pageTitle: string;
  selectedCategory?: string;
  productName?: string;
  showProductDetails?: boolean;
  breadcrumbs?: IBreadcrumbItem[];
}

const CategoriesHeaderComp = ({
  pageTitle,
  selectedCategory,
  productName,
  breadcrumbs,
  showProductDetails = false,
}: ICategoriesHeaderCompProps) => {
  return (
    <div className="relative h-60 md:h-55 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={ProductImage}
        alt="product"
        fill
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#04241A]/90" />

      <div className="relative z-10 container mx-auto px-6 py-15">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {pageTitle}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm flex-wrap text-white">
          <HomeIcon />
          <ChevronRight className="w-4 h-4 text-gray-300" />

          {/* breadcrumb system */}
          {breadcrumbs && breadcrumbs.length > 0 ? (
            breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={item.active ? "text-white" : "gradient-text"}>
                  {item.label}
                </span>

                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                )}
              </div>
            ))
          ) : (
            <>
              <span className="gradient-text">Category</span>
              <ChevronRight className="w-4 h-4 text-gray-300" />

              {showProductDetails ? (
                <>
                  <span className="gradient-text">{selectedCategory}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                  <span className="text-white">{productName}</span>
                </>
              ) : (
                <span className="text-white">
                  {selectedCategory || "All Products"}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeaderComp;
