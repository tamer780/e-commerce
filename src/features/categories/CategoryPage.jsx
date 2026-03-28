import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchProductsByMultipleCategories } from "../../services/DummyApi";
import ProductCard from "../products/ProductCard";
import CategoryPageSkeleton from "./CategoryPageSkeleton";

const CATEGORY_MAP = {
  "men-collection": ["mens-shirts", "mens-shoes", "mens-watches"],
  "women-fashion": [
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
    "womens-jewellery",
    "womens-watches",
    "tops",
    "beauty",
  ],
  "tech-gadgets": ["smartphones", "laptops", "tablets"],
  "premium-shoes": ["mens-shoes", "womens-shoes"],
};

function CategoryPage() {
  const { categorySlug } = useParams();

  const categoriesToFetch = CATEGORY_MAP[categorySlug] || [categorySlug];

  const { data, isLoading } = useQuery({
    queryKey: ["category", categorySlug],
    queryFn: () => fetchProductsByMultipleCategories(categoriesToFetch),
  });

  if (isLoading) return <CategoryPageSkeleton />;

  const allProducts = data?.flatMap((cat) => cat.products) || [];

  console.log(categorySlug);

  return (
    <div className="container-custom">
      <header className="mt-36">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
          {categorySlug?.replace("-", " ")}
        </h1>
        <div className="w-20 h-1.5 bg-main m-2"></div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
