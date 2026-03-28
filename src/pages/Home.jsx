import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Layout/Hero.jsx";
import CategoryGrid from "../features/categories/CategoryGrid.jsx";
import ProductSlider from "../features/products/ProductSlider.jsx";
import { fetchProductsByMultipleCategories } from "../services/DummyApi.js";

const CATEGORIES = ["laptops", "smartphones"];

export default function Home() {
  const {
    data: categoriesData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["homeProducts"],
    queryFn: () => fetchProductsByMultipleCategories(CATEGORIES),
  });

  if (isPending)
    return <div className="py-20 text-center font-bold">Loading...</div>;
  if (isError)
    return <div className="text-red-500 text-center">{error.message}</div>;

  return (
    <div>
      <Hero />
      <CategoryGrid />
      {categoriesData?.map((item) => (
        <ProductSlider
          key={item.categoryName}
          title={item.categoryName.replace("-", " ")}
          data={item.products}
        />
      ))}
    </div>
  );
}
