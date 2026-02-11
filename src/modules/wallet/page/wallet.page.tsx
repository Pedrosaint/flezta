"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "@/assets/svg/svg_icon";

// Currency configuration
const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  { code: "NGN", symbol: "₦", name: "Nigerian Naira", rate: 1650 },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  { code: "GBP", symbol: "£", name: "British Pound", rate: 0.79 },
];

const WalletPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const walletBalanceUSD = 1750.0;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get current currency details
  const currentCurrency = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0];

  // Convert balance to selected currency
  const convertedBalance = walletBalanceUSD * currentCurrency.rate;

  // Format currency with proper symbol and commas
  const formatCurrency = (amount: number, currency: typeof currentCurrency) => {
    return `${currency.symbol}${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const handleCurrencySelect = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="border border-gray-200 rounded-[20px] bg-white">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 p-4 border-b border-gray-200">
        Wallet
      </h1>

      <div className="p-5">
        <div className="border border-gray-200 rounded-[20px]">
          {/* Wallet Balance Card */}
          <div className="px-8 py-4">
            <div className="">
              <h2 className="text-base font-semibold text-gray-900 mb-4">
                Wallet Balance
              </h2>

              {/* Balance Display */}
              <div className="flex items-start gap-3 mb-1">
                <span className="text-5xl text-gray-900">
                  {formatCurrency(convertedBalance, currentCurrency)}
                </span>

                {/* Currency Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center mt-3 gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    <span>{selectedCurrency}</span>
                    <ArrowDownIcon />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-2xl shadow-lg min-w-[200px] z-50">
                      <div className="py-2">
                        {CURRENCIES.map((currency) => (
                          <button
                            key={currency.code}
                            onClick={() => handleCurrencySelect(currency.code)}
                            className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${selectedCurrency === currency.code
                                ? "bg-gray-50 text-[#003625] font-medium"
                                : "text-gray-700"
                              }`}
                          >
                            <div className="flex flex-col">
                              <span className="font-medium">{currency.code}</span>
                              <span className="text-xs text-gray-500">{currency.name}</span>
                            </div>
                            <span className="text-lg">{currency.symbol}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-600 pt-2">Available balance</p>
            </div>
          </div>
          {/* Top Up Button */}
          <button className="w-full bg-[#003625] text-white py-5 rounded-b-[20px] font-medium flex items-center px-5 gap-2 transition-colors">
            <span>Top Up Wallet</span>
            <ArrowRightIcon stroke="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
