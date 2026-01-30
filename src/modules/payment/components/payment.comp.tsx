"use client";

import ChairImage from "@/assets/images/office_seat.png"
import { DropdownIcon } from "@/assets/svg/svg_icon";
import Paypal from "@/assets/images/paypal-2.png"
import PaymentModal from "../modal/payment.modal";
import OrderSummaryComp from "./order_summary.comp";
import usePaymentHook from "../hooks/payment.hook";

const PaymentComp = () => {
    const {
        showPaymentModal,
        paymentMethod,
        setPaymentMethod,
        cvv,
        handleCvvChange,
        handlePaymentSubmit,
    } = usePaymentHook();

    return (
      <div className="container mx-auto p-8">
        <h1 className="mb-6 text-3xl font-semibold">Payment</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT */}
          <div className="lg:col-span-2 mb-16">
            <h2 className="mb-4 text-xl font-semibold">
              Select Payment Method
            </h2>

            {/* Credit Card */}
            <div
              className={`border border-[#C4C8CE] mb-4 overflow-hidden ${paymentMethod === "credit-card" ? "bg-[#FFFFFF] rounded-[32px]" : "rounded-[20px]"}`}
            >
              <div
                className={`flex items-center justify-between text-xl font-bold bg-gray-50 px-5 border-b border-gray-200 py-6 text-gray-700 cursor-pointer`}
                onClick={() => setPaymentMethod("credit-card")}
              >
                <label className="flex items-center gap-2 font-medium cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "credit-card"}
                    onChange={() => setPaymentMethod("credit-card")}
                    className="custom-radio"
                  />
                  Credit card
                </label>

                <div className="flex gap-2">
                  <img src={ChairImage.src} alt="Visa" className="h-5" />
                  <img src={ChairImage.src} alt="Mastercard" className="h-5" />
                </div>
              </div>

              <div
                className={`transition-all duration-300 ease-in-out ${paymentMethod === "credit-card" ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"} overflow-hidden space-y-4 px-5`}
              >
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                />

                <input
                  type="text"
                  placeholder="Card on card"
                  className="w-full rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="EXP date (MM/YY)"
                    className="w-full rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={handleCvvChange}
                    className="w-full rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Paypal */}
            <div
              className="mb-3 rounded-[20px] bg-[#F9FAFB] border border-[#C4C8CE] px-6 py-4 cursor-pointer"
              onClick={() => setPaymentMethod("paypal")}
            >
              <label className="flex items-center justify-between font-medium cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="custom-radio"
                  />
                  Paypal
                </div>
                <img src={Paypal.src} alt="Paypal" className="h-10" />
              </label>
            </div>

            {/* Wallet */}
            <div
              className="rounded-[20px] bg-[#F9FAFB] border border-[#C4C8CE] px-6 py-4 cursor-pointer"
              onClick={() => setPaymentMethod("wallet")}
            >
              <label className="flex items-center justify-between font-medium cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "wallet"}
                    onChange={() => setPaymentMethod("wallet")}
                    className="custom-radio"
                  />
                  My wallet
                </div>
                <img src={Paypal.src} alt="Wallet" className="h-10" />
              </label>
            </div>

            {/* Billing Address */}
            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Billing Address</h3>

              <label className="mb-4 flex items-center gap-2 text-sm">
                <input type="checkbox" className="checkbox" />
                Same as my shipping address
              </label>

              <div className="space-y-4 border border-[#C4C8CE] rounded-[32px] py-6 px-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Enter phone number"
                    className="rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                  />
                  <div className="flex items-center justify-between rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm">
                    <span>Select country</span>
                    <DropdownIcon />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-between rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm">
                    <span>Select state</span>
                    <DropdownIcon />
                  </div>
                  <input
                    placeholder="Enter city"
                    className="rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                  />
                </div>

                <input
                  placeholder="Enter house number and street name"
                  className="w-full rounded-[16px] border border-[#C4C8CE] bg-[#F9FAFB] px-4 py-4 text-sm outline-none"
                />
              </div>

              <label className="mt-4 flex items-center gap-2 text-sm">
                <input type="checkbox" className="checkbox" />
                Save my information for future checkout
              </label>
            </div>
          </div>

          {/* RIGHT – ORDER SUMMARY */}
          <OrderSummaryComp onPaymentSubmit={handlePaymentSubmit} />
        </div>

        {/* Modal for successful payment */}
        {showPaymentModal && <PaymentModal />}
      </div>
    );
}

export default PaymentComp
