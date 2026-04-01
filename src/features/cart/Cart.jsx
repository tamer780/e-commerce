import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { currenyFormatter } from "../../utils/formatterPrice";

function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const isEmpty = items.length === 0;

  const navigate = useNavigate();

  return (
    <div className="container-custom flex items-center justify-center py-16 sm:py-24">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-border-custom p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-heading pb-4 mb-6 border-b border-border-custom">
          Order Summary
        </h2>

        <div className="min-h-16 text-center">
          {isEmpty ? (
            <p className="py-12 text-p text-base">Your Cart is Empty</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-border-custom">
          <div className="flex justify-between items-center mb-6">
            <span className="text-p font-medium text-lg">Total:</span>
            <span className="text-2xl font-bold text-heading">
              {currenyFormatter.format(totalPrice)}
            </span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-main text-white py-4 rounded-lg font-bold text-lg hover:bg-main/90 active:scale-[.98] transition-all duration-200 shadow-md shadow-main/20 cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
