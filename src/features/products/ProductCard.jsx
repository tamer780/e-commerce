import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";

const cssIcons =
  "bg-white p-2.5 rounded-full shadow-lg hover:bg-main hover:text-white transition-all duration-200 active:scale-95";

function ProductCard({ product }) {
  const { handleAddToCart, inCart } = useCart(product);
  const { handleAddToWishlist, inWishlist } = useWishlist(product);

  const getIconStyles = (isActive) => `
    p-2.5 rounded-full shadow-lg transition-all duration-200 active:scale-95
    ${
      isActive
        ? "bg-main text-white"
        : "bg-white text-gray-600 hover:bg-main hover:text-white"
    }
  `;

  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <article className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {product.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-main text-white text-[10px] font-bold px-2 py-1 rounded-full">
            -{Math.round(product?.discountPercentage)}%
          </span>
        )}

        <Link to={`/product/${product?.id}`}>
          <img
            src={(product?.images ?? [])[0]}
            alt={product?.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>

        <div className="absolute top-4 -right-12.5 group-hover:right-4 flex flex-col gap-2 transition-all duration-300 ease-in-out z-20">
          <button className={getIconStyles(inCart)} onClick={handleAddToCart}>
            <ShoppingCart size={18} />
          </button>

          <button
            className={getIconStyles(inWishlist)}
            onClick={handleAddToWishlist}
          >
            <Heart size={18} />
          </button>

          <button className={cssIcons}>
            <Eye size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mb-1">
          {product?.category}
        </p>

        <h3 className="text-heading font-bold text-sm truncate mb-2">
          {product?.title}
        </h3>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span className="text-xs text-gray-500 font-medium">
              {product.rating}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <strong className="text-main font-black text-lg">
              ${product.price}
            </strong>
            <del className="text-gray-400 text-xs">${oldPrice}</del>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
