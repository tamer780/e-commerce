import { ShoppingCart, Heart } from "lucide-react";
import logoImage from "../../../assets/images/Logo.png";
import SearchBox from "./SearchBox";

function TopNavbar() {
  return (
    <div className="container-custom flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={logoImage}
          alt="logo_for_App_Cartify"
          className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full bg-white  border-2 border-main"
        />
        <h1 className="text-heading font-black text-2xl tracking-tighter uppercase">
          Cartify
        </h1>
      </div>

      <div className="flex-1 max-w-112.5 mx-4">
        <SearchBox />
      </div>

      <div className="flex gap-1">
        <button
          aria-label="Wishlist"
          className="relative p-2 text-heading hover:text-main hover:bg-main/10 rounded-full transition-all cursor-pointer group"
        >
          <Heart
            size={24}
            strokeWidth={1.5}
            className="group-hover:fill-main/20"
          />
          <span className="absolute top-2 right-2 w-2 h-2 bg-main rounded-full border-2 border-white"></span>
        </button>
        <button
          aria-label="Shopping Cart"
          className="relative p-2 text-heading hover:text-main hover:bg-main/10 rounded-full transition-all cursor-pointer"
        >
          <ShoppingCart size={24} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 bg-main text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
            3
          </span>
        </button>
      </div>
    </div>
  );
}

export default TopNavbar;
