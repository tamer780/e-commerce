import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { authAction } from "./authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutPage = () => {
    dispatch(authAction.logout());
    toast.success("See you soon!");
    navigate("/login", { replace: true });
  };
  return (
    <button
      onClick={logoutPage}
      aria-label="Logout"
      className="flex items-center gap-1 text-xs font-bold text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-all cursor-pointer"
    >
      <LogOut size={16} />
      <span className="uppercase">Logout</span>
    </button>
  );
}

export default LogoutButton;
