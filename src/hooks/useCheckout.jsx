import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../services/DummyApi";
import { cartAction } from "../features/cart/cartSlice";
import { wishlistAction } from "../features/wishlist/wishlistSlice";
import toast from "react-hot-toast";

function useCheckout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: placeOrder,
    onSuccess: () => {
      dispatch(cartAction.clearCart());
      dispatch(wishlistAction.clearWishlist());

      toast.success("Order placed successfully");

      navigate("/");
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong, please try again.";

      toast.error(message);
    },
  });

  const submitOrder = (data) => {
    mutate(data);
  };

  return {
    submitOrder,
    isPending,
  };
}

export default useCheckout;
