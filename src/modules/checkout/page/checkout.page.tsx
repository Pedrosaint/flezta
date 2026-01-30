"use client";

import CategoriesHeaderComp from "@/modules/products/components/categories_header.comp";
import { useShippingInfoHook } from "../hooks/shipping_info.hook";
import SavedAddressCard from "../components/sections/saved_address_card";
import NewShippingForm from "../components/sections/new_shipping_form";
import DeliveryMethodSection from "../components/sections/delivery_method_section";
import CartSummarySidebar from "../components/sections/cart_summary_sidebar";

const CheckoutPage = () => {
  const {
    method,
    setMethod,
    station,
    setStation,
    saveInfo,
    setSaveInfo,
    setAsDefault,
    setSetAsDefault,
    shipments,
    confirmChecked,
    setConfirmChecked,
    handleProceedToPayment,
  } = useShippingInfoHook();

  return (
    <div>
      <CategoriesHeaderComp
        pageTitle="Checkout"
        breadcrumbs={[
          { label: "Shopping Cart" },
          { label: "Checkout", active: true },
        ]}
      />

      <div className="py-8 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 border-r border-gray-200 px-6">
              <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>

              <SavedAddressCard />

              <NewShippingForm
                saveInfo={saveInfo}
                setSaveInfo={setSaveInfo}
                setAsDefault={setAsDefault}
                setSetAsDefault={setSetAsDefault}
              />

              <DeliveryMethodSection
                method={method}
                setMethod={setMethod}
                station={station}
                setStation={setStation}
                shipments={shipments}
                confirmChecked={confirmChecked}
                setConfirmChecked={setConfirmChecked}
              />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 mt-13">
              <CartSummarySidebar handleProceedToPayment={handleProceedToPayment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
