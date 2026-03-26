import Hero from "../components/Layout/Hero.jsx";
import CategoryGrid from "../features/categories/CategoryGrid.jsx";
import ProductSlider from "../features/products/ProductSlider.jsx";

import imageProduct from "../assets/images/man.jpg";

export default function Home() {
  const MOCK_PRODUCTS = [
    {
      id: 101,
      title: "Premium Wireless Headphones",
      category: "Electronics",
      price: 199.99,
      discountPercentage: 15,
      rating: 4.8,
      thumbnail: imageProduct,
    },
    {
      id: 102,
      title: "Minimalist Leather Watch",
      category: "Accessories",
      price: 85.0,
      discountPercentage: 10,
      rating: 4.5,
      thumbnail: imageProduct,
    },
    {
      id: 103,
      title: "Modern Canvas Sneakers",
      category: "Shoes",
      price: 60.0,
      discountPercentage: 0, // تجربة منتج بدون خصم
      rating: 4.2,
      thumbnail: imageProduct,
    },
    {
      id: 104,
      title: "Ergonomic Office Chair - Special Edition",
      category: "Furniture",
      price: 250.0,
      discountPercentage: 25,
      rating: 4.9,
      thumbnail: imageProduct,
    },
    {
      id: 105,
      title: "Smart Fitness Tracker",
      category: "Tech",
      price: 45.99,
      discountPercentage: 5,
      rating: 4.0,
      thumbnail: imageProduct,
    },
  ];

  return (
    <div>
      <Hero />
      <CategoryGrid />
      <ProductSlider title="Featured Products" data={MOCK_PRODUCTS} />
    </div>
  );
}
