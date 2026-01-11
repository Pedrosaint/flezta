import AddBundleComp from "../components/add_bundle.comp";
import CategoriesHeaderComp from "../components/categories_header.comp";
import ProductDetailsComp from "../components/product_details.comp";
import ProductOverviewComp from "../components/product_overview.comp";

const ProductDetailsPage = () => {

    const productData = {
      id: 1,
      name: "Ergonomic Office Chair",
      category: {
        main: "Home & Office",
        sub: "Ergonomic Office Chair",
      },
      price: 350.0,
      // ... other product data
    };

  return (
    <section>
      <CategoriesHeaderComp
        pageTitle="Product Details"
        selectedCategory={productData.category.main}
        productName={productData.name}
        showProductDetails={true}
      />

      <ProductDetailsComp product={productData} />
      <AddBundleComp />
      <ProductOverviewComp product={productData} />
    </section>
  );
};

export default ProductDetailsPage;
