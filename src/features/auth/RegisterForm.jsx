import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/DummyApi";
import { useDispatch } from "react-redux";
import { authAction } from "./authSlice";
import toast from "react-hot-toast";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      dispatch(authAction.setUser(data));
      navigate("/login");
      toast.success("Welcome! Register Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 border rounded-md shadow-md mt-10 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      <Input
        id="username"
        label="User Name"
        type="text"
        placeholder="Enter your first name"
        error={errors.username?.message}
        {...register("username", {
          required: "This field is required",
          minLength: {
            value: 3,
            message: "UserName must be at least 3 characters",
          },
        })}
      />

      <Input
        id="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
        error={errors.lastName?.message}
        {...register("lastName", {
          required: "This field is required",
          minLength: {
            value: 3,
            message: "LastName must be at least 3 Characters",
          },
        })}
      />

      <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
            message: "Password must contain letters and numbers",
          },
        })}
      />

      <Input
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value, formValues) =>
            value === formValues.password || "Passwords do not match",
        })}
      />

      <div className="flex justify-between items-center mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-main text-white rounded hover:bg-main-dark transition"
        >
          {isPending ? "Registering..." : "Register"}
        </button>
        <Link to="/login" className="text-sm text-blue-500 hover:underline">
          Already have an account?
        </Link>
      </div>
    </form>
  );
}

export default RegisterForm;
