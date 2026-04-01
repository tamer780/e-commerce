import { Trash, Plus, Minus } from "lucide-react";
import { useDispatch } from "react-redux";
import { cartAction } from "./cartSlice";
import { currenyFormatter } from "../../utils/formatterPrice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <article className="flex gap-4 bg-surface p-4 mb-4 rounded-xl border border-border-custom group relative">
      <figure className="w-24 h-24 shrink-0 bg-white rounded-lg border border-border-custom p-2 overflow-hidden">
        <img
          src={item.images}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </figure>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="font-bold text-heading text-sm sm:text-base line-clamp-1">
              {item.title}
            </h3>
            <p className="text-main font-bold text-sm mt-1">
              {currenyFormatter.format(item.price)}
            </p>
          </div>

          <button
            onClick={() => dispatch(cartAction.removeFromCart(item.id))}
            aria-label="Remove item"
            className="shrink-0 p-1 rounded-md text-p hover:text-red-500 transition-colors duration-150 cursor-pointer  mt-10"
          >
            <Trash size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <div className="inline-flex items-center bg-white border border-border-custom rounded-full px-2 py-1 shadow-sm">
            <button
              onClick={() => dispatch(cartAction.decreaseItem(item.id))}
              aria-label="Decrease quantity"
              className="p-1 text-heading hover:text-main transition-colors duration-150 cursor-pointer"
            >
              <Minus size={14} strokeWidth={3} />
            </button>

            <span className="px-3 font-bold text-sm min-w-6 text-center text-heading">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(cartAction.addToCart(item))}
              aria-label="Increase quantity"
              className="p-1 text-heading hover:text-main transition-colors duration-150 cursor-pointer"
            >
              <Plus size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
