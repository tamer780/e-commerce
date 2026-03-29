import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/DummyApi";
import { authAction } from "./authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(
        authAction.setCredentials({
          user: data,
          token: data.accessToken,
        }),
      );

      toast.success("Welcome back! Login Successful");
      reset();
      navigate("/", { replace: true });
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
      className="flex flex-col gap-4 w-full max-w-sm mx-auto p-6 border rounded-md shadow-md mt-10 bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center ">Login</h2>
        <p className="text-sm text-gray-500 mt-1">
          Please enter your account details
        </p>
      </div>

      <Input
        id="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        error={errors.username?.message}
        {...register("username", {
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters",
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
          minLength: { value: 6, message: "Password is to short" },
        })}
      />

      <div className="flex justify-between items-center ">
        {isError && (
          <div className="bg-red-100 text-red-600 p-2 rounded text-sm  border border-red-200 text-center">
            {error.message}
          </div>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-main text-white rounded hover:bg-main-dark transition cursor-pointer"
        >
          {isPending ? "Loading..." : "Login"}
        </button>

        <button
          type="button"
          className="text-sm text-blue-500 hover:underline cursor-pointer"
        >
          Forget password?
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
