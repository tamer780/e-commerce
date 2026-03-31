import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

export function useCart(product) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const inCart = product ? items.some((i) => i.id === product.id) : false;

  function handleAddToCart() {
    if (!product) return;

    if (inCart) {
      toast(`${product.title} is already in the cart`);
      return;
    }
    dispatch(cartAction.addToCart(product));
    toast.success(`${product.title} added to cart successfully`);
  }

  function removeFromCart() {
    dispatch(cartAction.removeFromCart());
  }

  return { inCart, cart: items, handleAddToCart, removeFromCart };
}
