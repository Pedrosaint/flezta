import CategoriesHeaderComp from "@/modules/products/components/categories_header.comp";
import ShippingInfoComp from "../components/shipping_info.comp"


const CheckoutPage = () => {
  return (
    <div>
      <CategoriesHeaderComp
        pageTitle="Checkout"
        breadcrumbs={[
          { label: "Shopping Cart" },
          { label: "Checkout", active: true },
        ]}
      />
      <ShippingInfoComp />
    </div>
  );
}

export default CheckoutPage
