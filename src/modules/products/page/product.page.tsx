import { useState } from "react";
import CategoriesComp from "../components/categories.comp";
import CategoriesHeaderComp from "../components/categories_header.comp";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section>
      <CategoriesHeaderComp
        pageTitle={selectedCategory || "All Products"}
        selectedCategory={selectedCategory}
      />

      <CategoriesComp
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  );
};

export default ProductPage;
