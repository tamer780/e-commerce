import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import WishlistItem from "./wishlistItem";
import { useWishlist } from "../../hooks/useWishlist";

function Wishlist() {
  const { clearWishlist, favorite: wishlistItems } = useWishlist();

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-heading font-black text-2xl">
          My Wishlist :
          <span className="ml-2 text-s text-gray-400 font-medium">
            {wishlistItems.length}
          </span>
        </h2>

        <button
          onClick={clearWishlist}
          className="text-xs text-gray-400 hover:text-red-400 transition-colors duration-200 font-medium"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {wishlistItems.map((product) => (
          <WishlistItem key={product.id} product={product} />
        ))}

        {wishlistItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart size={48} className="text-gray-200 mb-4" />

            <h3 className="text-heading font-bold text-lg mb-1">
              Your wishlist is empty
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Start adding products you love
            </p>

            <Link
              to="/"
              className="bg-main text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-200"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;
