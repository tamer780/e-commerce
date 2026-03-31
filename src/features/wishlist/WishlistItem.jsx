import { Trash2, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

function WishlistItem({ product }) {
  const { handleAddToCart } = useCart(product);
  const { handleRemoveFromList } = useWishlist(product);

  return (
    <article className="group flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-4">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-50 shrink-0">
        <img
          src={(product.images ?? [])[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-0.5">
          {product.category}
        </p>

        <h3 className="text-heading font-bold text-sm truncate mb-1">
          {product.title}
        </h3>

        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          <Star size={11} fill="currentColor" />
          <span className="text-xs text-gray-500 font-medium">
            {product.rating}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <strong className="text-main font-black text-base">
            ${product.price}
          </strong>

          <del className="text-gray-400 text-xs">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2,
            )}
          </del>
        </div>
      </div>

      <div className="flex flex-col gap-2 shrink-0">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-main text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>

        <button
          onClick={handleRemoveFromList}
          className="flex items-center justify-center gap-2 border border-gray-200 text-gray-400 text-xs font-semibold px-4 py-2 rounded-full hover:border-red-400 hover:text-red-400 active:scale-95 transition-all duration-200"
        >
          <Trash2 size={14} />
          Remove
        </button>
      </div>
    </article>
  );
}

export default WishlistItem;
