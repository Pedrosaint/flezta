"use client";

import { Search } from "lucide-react";
import LogoImage from "@/assets/images/website_logo.png";
import { ArrowRight, BagIcon, LoveIcon, UserIcon } from "../../../assets/svg/svg_icon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "../../../core/routes/nav_links";
import { appRoute, cartRoute, checkoutRoute } from "@/core/routes/routeNames";
import { useState } from "react";
import megaMenuContent, { megaMenuIcons } from "./data/mega_menu.data";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/stores/store";

const WebsiteHeaderComponent = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeLeftItem, setActiveLeftItem] = useState<string | undefined>();
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.items.length
  );

  const router = useRouter();
  const pathname = usePathname();
  const categories = [
    "Electronics",
    "Fashion",
    "Phones & Tablets",
    "Laptops",
    "Appliances",
    "Health",
    "Home & Office",
    "Accessories",
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/*==== Logo ====*/}
          <img
            onClick={() => router.push(appRoute)}
            src={LogoImage.src}
            alt="logo"
            className="w-20 h-20 cursor-pointer"
          />

          {/*==== Search Bar ====*/}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">
              <input
                type="text"
                placeholder="Search for a product"
                className="flex-1 px-4 py-4 focus:outline-none"
              />
              <button className="px-3 text-gray-400">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/*==== Navigation Links ====*/}
          <nav className="flex items-center gap-8 text-lg font-medium text-tertiary-color">
            {navLinks.map((nav) => {
              // Check if pathname starts with nav.path (for nested routes like /products/details/[id])
              // Also consider cart page as part of products
              const isActive =
                pathname === nav.path ||
                pathname.startsWith(`${nav.path}/`) ||
                (nav.name === "Products" &&
                  (pathname === cartRoute || pathname === checkoutRoute));

              return (
                <Link
                  key={nav.path}
                  href={nav.path}
                  className={`text-lg font-medium transition-colors hover-gradient-text ${
                    isActive ? "gradient-text" : "text-tertiary-color"
                  }`}
                >
                  {nav.name}
                </Link>
              );
            })}
          </nav>

          {/*==== Action Buttons ====*/}
          <div className="flex items-center gap-4">
            <button className="relative text-gray-700 hover:text-emerald-700">
              <LoveIcon />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-700 text-white text-[10px] rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => router.push(cartRoute)}
              className="text-gray-700 hover:text-emerald-700 relative cursor-pointer"
            >
              <BagIcon />
              <span className="absolute top-1.5 -right-0.5 w-4 h-4 bg-emerald-700 text-white text-[10px] border border-white rounded-full flex items-center justify-center">
                8
              </span>
            </button>

            <button className="text-gray-700 hover:text-emerald-700">
              <UserIcon />
            </button>
            <button className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              <div className="w-45 bg-primary-color text-white py-4 rounded-[14px] font-semibold">
                Sell Now
              </div>
            </button>
          </div>
        </div>
      </div>

      {/*==== Category Navigation ====*/}
      <div
        className="relative px-4"
        onMouseEnter={() => setShowMegaMenu(true)}
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <div className="container mx-auto py-3">
          <div className="flex gap-10">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-sm text-light-color font-medium cursor-pointer hover:text-black"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* ===== Mega Menu (STATIC UI from screenshot) ===== */}
        {showMegaMenu && (
          <div
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
            className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
          >
            <div className="container mx-auto py-10 flex gap-12">
              {/* Left column */}
              <div className="w-1/4 space-y-5 border-r border-gray-200 pr-8">
                {Object.keys(megaMenuContent).map((item) => {
                  const Icon = megaMenuIcons[item];
                  const isActive = activeLeftItem === item;

                  return (
                    <div
                      key={item}
                      onMouseEnter={() => setActiveLeftItem(item)}
                      className={`text-lg cursor-pointer flex justify-between ${
                        activeLeftItem === item
                          ? "text-[#0C0F16] font-medium"
                          : "text-gray-700 hover:text-[#0C0F16]"
                      }`}
                    >
                      <p className="flex gap-3">
                        {Icon && (
                          <Icon stroke={isActive ? "#0C0F16" : "#4B5563"} />
                        )}
                        {item}
                      </p>
                      <span>
                        <ArrowRight />
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Right columns */}
              <div className="flex gap-24">
                <div className="space-y-3">
                  {activeLeftItem &&
                    megaMenuContent[activeLeftItem]?.col1?.map((item, i) => (
                      <p
                        key={i}
                        className={`cursor-pointer ${
                          i === 0
                            ? "font-semibold"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        {item}
                      </p>
                    ))}
                </div>

                <div className="space-y-3">
                  {activeLeftItem &&
                    megaMenuContent[activeLeftItem]?.col2?.map((item, i) => (
                      <p
                        key={i}
                        className="text-gray-700 hover:text-black cursor-pointer"
                      >
                        {item}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default WebsiteHeaderComponent;
