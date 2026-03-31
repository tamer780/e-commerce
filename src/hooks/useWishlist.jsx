import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { wishlistAction } from "../features/wishlist/wishlistSlice";

export function useWishlist(product) {
  const dispatch = useDispatch();

  const { favorite } = useSelector((state) => state.wishlist);

  const inWishlist = product
    ? favorite.some((i) => i.id === product.id)
    : false;

  function handleAddToWishlist() {
    if (!product) return;

    if (inWishlist) {
      toast(`${product.title} is already in the wishlist`);
      return;
    }

    dispatch(wishlistAction.addToWishList(product));
    toast.success(`${product.title} added to wishlist successfully`);
  }

  function handleRemoveFromList() {
    dispatch(wishlistAction.removeFromList(product.id));
  }

  function clearWishlist() {
    dispatch(wishlistAction.clearWishlist());
  }

  return {
    inWishlist,
    handleAddToWishlist,
    handleRemoveFromList,
    clearWishlist,
    favorite,
  };
}
