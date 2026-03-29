import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { LayoutGrid, User, ChevronDown } from "lucide-react";
import { fetchCategories } from "../../../services/DummyApi";
import { useSelector } from "react-redux";
import LogoutButton from "../../../features/auth/LogoutButton";

const NAVBAR_LINKS = [
  { name: "Home", path: "/" },
  { name: "Clothes", path: "/clothes" },
  { name: "Electronics", path: "/electronics" },
  { name: "Fashion", path: "/fashion" },
];

function BottomNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const {
    data: categories,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isError) {
    return (
      <p className="text-center p-2 text-red-300 text-xs">{error.message}</p>
    );
  }

  return (
    <nav className="bg-surface border-b border-border-custom hidden md:block">
      <div className="mx-20 flex items-center justify-between">
        <div
          className="relative flex items-center gap-2 cursor-pointer group scale-90 origin-left py-4"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-main/10 p-2 rounded-lg group-hover:bg-main group-hover:text-white transition-all text-main">
            <LayoutGrid size={20} />
          </div>

          <div className="flex items-center gap-1 font-bold text-heading text-sm uppercase tracking-tight">
            All Categories
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180 text-main" : "text-p"
              }`}
            />
          </div>

          {isOpen && (
            <ul className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-b-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-main/20">
              {categories?.map((cat) => (
                <li key={cat.slug} onClick={() => setIsOpen(false)}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-main/5 hover:text-main hover:pl-7 transition-all capitalize"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="flex items-center gap-6 text-sm font-semibold text-p">
          {NAVBAR_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`transition-all duration-500 ease-in-out relative py-2 px-1 block
                          ${active ? "text-main -translate-y-0.5" : "text-p hover:text-main hover:-translate-y-0.5"}`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-main rounded-full transition-all duration-500 ease-in-out
              ${active ? "w-full opacity-100" : "w-0 opacity-0"}`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 shrink-0 border-l border-border-custom pl-4 scale-90 origin-right">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center border border-border-custom group-hover:border-main transition-all overflow-hidden">
                  <User size={16} className="text-p group-hover:text-main" />
                </div>
                <span className="text-sm font-bold text-heading group-hover:text-main transition-colors">
                  {user?.username || "user"}
                </span>
              </div>

              <LogoutButton />
            </div>
          ) : (
            <div>
              <Link to="login">
                <button className="text-main font-bold text-sm hover:underline cursor-pointer">
                  Login /
                </button>
              </Link>
              <Link to="register">
                <button className="text-main font-bold text-sm hover:underline cursor-pointer ml-1">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default BottomNavBar;
