import AddBundleComp from "../components/add_bundle.comp";
import CategoriesHeaderComp from "../components/categories_header.comp";
import ProductDetailsComp from "../components/product_details.comp";
import ProductOverviewComp from "../components/product_overview.comp";


const ProductDetailsPage = () => {
  const productData = {
    id: "1",
    name: "Ergonomic Office Chair",
    description: "High-quality ergonomic office chair with lumbar support.",
    price: 350.0,
    rating: 4.5,
    reviewCount: 98,
    imageUrl: "/assets/images/chair.png",
    category: "Home & Office",
    inStock: true,
    sku: "CHAIR-001",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return (
    <section>
      <CategoriesHeaderComp
        pageTitle="Product Details"
        selectedCategory={productData.category}
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
