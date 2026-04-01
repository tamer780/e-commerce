import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../../components/UI/Input";
import { currenyFormatter } from "../../utils/formatterPrice";
import useCheckout from "../../hooks/useCheckout";

function CheckoutForm() {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { submitOrder, isPending } = useCheckout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (userData) => {
    const orderData = {
      customer: userData,
      order: items.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      })),
      date: new Date().toISOString(),
    };
    submitOrder(orderData);
  };

  if (items.length === 0) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-md mt-15 w-fit mx-auto">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <p className="text-gray-500">Add some products before checking out.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-15"
    >
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <span className="text-xl font-semibold">
          Total Price: {currenyFormatter.format(totalPrice)}
        </span>
      </header>

      <div className="space-y-4">
        <Input
          label="Full Name"
          id="name"
          type="text"
          error={errors.name?.message}
          {...register("name", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />

        <Input
          label="Street"
          id="street"
          type="text"
          error={errors.street?.message}
          {...register("street", { required: "Street is required" })}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="City"
            id="city"
            type="text"
            error={errors.city?.message}
            {...register("city", { required: "City is required" })}
          />
          <Input
            label="Postal Code"
            id="postal"
            type="text"
            error={errors.postal?.message}
            {...register("postal", {
              required: "Postal code is required",
              pattern: { value: /^\d{5}$/, message: "Must be 5 digits" },
            })}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2 bg-main text-white rounded-md hover:bg-main-hover transition-colors disabled:opacity-50"
        >
          {isPending ? "Placing Order..." : "Submit Order"}
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
