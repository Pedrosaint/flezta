import CategoriesHeaderComp from "@/modules/products/components/categories_header.comp"
import MyCartComp from "../components/my_cart.comp"
import WhishlistComp from "../components/wishlist.comp"

const ShoppingCartPage = () => {
  return (
    <div>
      <CategoriesHeaderComp
        pageTitle="Shopping Cart"
        breadcrumbs={[{ label: "Shopping Cart", active: true }]}
      />
      <MyCartComp />
      <WhishlistComp />
    </div>
  );
}

export default ShoppingCartPage
