import React from "react";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Cards from "./Cards";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  let filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter((item) => categories.includes(item.category));

  const renderProduct = filteredItems.map((product) => {
    return (
      <Cards
        key={product.id}
        product={product}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <div className="pt-20">
      <Banner title={title} bgImage={bgImage} />

      <div 
      className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-9 py-10 sm:py-16 md:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
