import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Tag, Star, Heart, AlertCircle } from "lucide-react";

import ProductImages from "./ProductImages";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

import { fetchProductById } from "../../services/DummyApi";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { currenyFormatter } from "../../utils/formatterPrice";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: item,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  const { handleAddToCart, inCart } = useCart(item);
  const { handleAddToWishlist, inWishlist } = useWishlist(item);

  const hasDiscount = item?.discountPercentage > 0;

  const originalPrice = hasDiscount
    ? (item.price / (1 - item.discountPercentage / 100)).toFixed(2)
    : null;

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isError || !item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-red-500 gap-2">
        <AlertCircle size={40} />
        <p className="font-bold">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pb-8 grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImages images={item.images ?? []} alt={item.title} />

      <div className="flex flex-col gap-6 justify-center">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-main bg-main/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            <Tag size={14} /> {item.category}
          </span>

          <h1 className="text-3xl font-black text-gray-900 leading-tight">
            {item.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={18} fill="currentColor" />
              <span className="font-bold text-gray-700">{item.rating}</span>
            </div>

            <span className="text-gray-300">|</span>

            <span
              className={`text-sm font-semibold ${
                item.stock < 10 ? "text-red-500" : "text-emerald-600"
              }`}
            >
              {item.stock} units available
            </span>
          </div>
        </div>

        <div className="flex items-end gap-3">
          <span className="text-4xl font-black text-main">
            {currenyFormatter.format(item.price)}
          </span>

          {hasDiscount && (
            <div className="flex flex-col mb-1">
              <span className="text-red-500 text-xs font-bold">
                -{Math.round(item.discountPercentage)}%
              </span>
              <del className="text-gray-400 text-sm font-medium">
                {currenyFormatter.format(originalPrice)}
              </del>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Brand
            </span>
            <span className="text-gray-800 font-medium">
              {item.brand || "Generic"}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Description
            </span>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-main text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-main/20 active:scale-[0.98] transition-all"
          >
            <ShoppingCart size={20} />
            {inCart ? "Item in Cart" : "Add to Cart"}
          </button>

          <button
            onClick={handleAddToWishlist}
            className={`p-4 border-2 rounded-xl transition-all group ${
              inWishlist
                ? "bg-red-50 border-red-200 text-red-500"
                : "border-gray-100 hover:bg-red-50 hover:border-red-200 hover:text-red-500"
            }`}
          >
            <Heart
              size={20}
              className={
                inWishlist
                  ? "fill-red-500"
                  : "group-hover:fill-red-500 fill-none"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
