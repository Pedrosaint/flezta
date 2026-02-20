"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import LogoImage from "@/assets/images/website_logo.png";
import {
  ArrowRight,
  BagIcon,
  LoveIcon,
  UserIcon,
  WalletIcon,
} from "../../../assets/svg/svg_icon";
import Link from "next/link";
import { navLinks } from "../../../core/routes/nav_links";
import {
  appRoute,
  cartRoute,
  checkoutRoute,
  paymentRoute,
  sellerIdentityVerificationRoute,
} from "@/core/routes/routeNames";
import {
  IMegaMenuItem,
  IMegaMenuCategory,
  ISubCategory,
} from "./data/mega_menu.data";
import useWebsiteHeaderHook from "../hooks/website_header.hook";

const WebsiteHeaderComponent = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const {
    showMegaMenu,
    setShowMegaMenu,
    wishlistCount,
    cartCount,
    router,
    pathname,
    navItems,
    activeMenuCategories,
    activeSubCategories,
    handleUserIconClick,
    handleCartIconClick,
    isAuthenticated,
    userFullName,
    isDashboard,
    activeCategory,
    setActiveCategory,
    handleNavMouseEnter,
  } = useWebsiteHeaderHook();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
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
              const isActive =
                pathname === nav.path ||
                pathname?.startsWith(`${nav.path}/`) ||
                (nav.name === "Products" &&
                  (pathname === cartRoute ||
                    pathname === checkoutRoute ||
                    pathname === paymentRoute));

              return (
                <Link
                  key={nav.path}
                  href={nav.path}
                  className={`text-lg font-medium transition-colors hover-gradient-text ${isActive ? "gradient-text" : "text-tertiary-color"
                    }`}
                >
                  {nav.name}
                </Link>
              );
            })}
          </nav>

          {/*==== Action Buttons ====*/}
          <div className="flex items-center gap-4">
            <button className="relative text-gray-700 hover:text-emerald-700 cursor-pointer">
              <LoveIcon />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-700 text-white text-[10px] rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {!isDashboard && (
              <button className="relative text-gray-700 hover:text-emerald-700 cursor-pointer">
                <WalletIcon />
              </button>
            )}

            <button
              onClick={handleCartIconClick}
              className="text-gray-700 hover:text-emerald-700 relative cursor-pointer"
            >
              <BagIcon />
              {cartCount > 0 && (
                <span className="absolute top-1.5 -right-0.5 w-4 h-4 bg-emerald-700 text-white text-[10px] border border-white rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleUserIconClick}
                className={`transition-all cursor-pointer ${isDashboard
                    ? "text-[#E26E00] scale-110"
                    : "text-gray-700 hover:text-[#E26E00]"
                  }`}
              >
                <UserIcon stroke="currentColor" />
              </button>

              {hasMounted && isAuthenticated && isDashboard && (
                <div className="flex flex-col items-start -space-y-1">
                  <p className="text-[15px] text-gray-500 font-medium">
                    Welcome back!
                  </p>
                  <p className="text-lg font-bold text-gray-900 leading-tight">
                    {userFullName}
                  </p>
                </div>
              )}
            </div>

            {!isDashboard && (
              <button
                onClick={() => router.push(sellerIdentityVerificationRoute)}
                //  disabled={!isAuthenticated}
                className="w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                <div className="w-45 bg-primary-color text-white py-4 rounded-[14px] font-semibold">
                  Sell Now
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/*==== Category Navigation ====*/}
      {!isDashboard && (
        <div
          className="relative px-4"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="container mx-auto py-3">
            <div className="flex gap-10">
              {navItems.map((item: IMegaMenuItem) => (
                <span
                  key={item.id}
                  onMouseEnter={() => handleNavMouseEnter(item.id)}
                  className="text-sm text-light-color font-medium cursor-pointer hover:text-black"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* ===== Mega Menu ===== */}
          {showMegaMenu && (
            <div
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
            >
              <div className="container mx-auto py-10 flex gap-12">
                {/* Left column (Categories) */}
                <div className="w-1/4 space-y-5 border-r border-gray-200 pr-8">
                  {activeMenuCategories.map((category: IMegaMenuCategory) => {
                    const Icon = category.icon;

                    return (
                      <div
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        className={`text-lg cursor-pointer flex justify-between ${activeCategory === category.id
                            ? "text-[#0C0F16] font-medium"
                            : "text-gray-700 hover:text-[#0C0F16]"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          {Icon && (
                            <Icon
                              stroke={
                                activeCategory === category.id
                                  ? "#003625"
                                  : "#4B5563"
                              }
                              width={24}
                              height={24}
                            />
                          )}
                          <span
                            className={
                              activeCategory === category.id
                                ? "text-primary-color"
                                : ""
                            }
                          >
                            {category.name}
                          </span>
                        </div>

                        <span>
                          <ArrowRight
                            stroke={
                              activeCategory === category.id
                                ? "#003625"
                                : "#4B5563"
                            }
                          />
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Right columns (SubCategories) */}
                <div className="flex-1">
                  <div className="grid grid-cols-3 gap-8">
                    {activeSubCategories.map((sub: ISubCategory) => (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        className="text-gray-700 hover:text-primary-color transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default WebsiteHeaderComponent;
