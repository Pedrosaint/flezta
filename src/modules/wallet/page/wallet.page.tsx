"use client";

import React, { useState } from "react";
import { formatDollar } from "@/shared/utils/currency.util";
import { ArrowDownIcon, ArrowRightIcon } from "@/assets/svg/svg_icon";

const WalletPage = () => {
  const [selectedCurrency] = useState("USD");

  const walletBalance = 1750.0;

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
                  {formatDollar(walletBalance)}
                </span>
                <button className="flex items-center mt-3 gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                  <span>{selectedCurrency}</span>
                  <ArrowDownIcon  />
                </button>
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
