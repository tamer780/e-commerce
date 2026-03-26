import { LayoutGrid, User, LogOut, ChevronDown } from "lucide-react";

function BottomNavBar() {
  const isAuth = false;

  return (
    <nav className="bg-surface border-b border-border-custom hidden md:block">
      <div className="mx-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group scale-90 origin-left">
          <div className="bg-main/10 p-2 rounded-lg group-hover:bg-main group-hover:text-white transition-all text-main">
            <LayoutGrid size={20} />
          </div>
          <div className="flex items-center gap-1 font-bold text-heading text-sm uppercase tracking-tight">
            All Categories
            <ChevronDown
              size={16}
              className="text-p group-hover:text-main transition-colors"
            />
          </div>
        </div>

        <ul className="flex items-center gap-6 text-sm font-semibold text-p">
          <li className="text-main border-b-2 border-main pb-1 cursor-pointer">
            Home
          </li>
          <li className="hover:text-main cursor-pointer transition-colors">
            Clothes
          </li>
          <li className="hover:text-main cursor-pointer transition-colors">
            Electronics
          </li>
          <li className="hover:text-main cursor-pointer transition-colors">
            Fashion
          </li>
        </ul>

        <div className="flex items-center gap-4 shrink-0 border-l border-border-custom pl-4 scale-90 origin-right">
          {isAuth ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center border border-border-custom group-hover:border-main transition-all overflow-hidden">
                  <User size={16} className="text-p group-hover:text-main" />
                </div>
                <span className="text-sm font-bold text-heading group-hover:text-main transition-colors">
                  Tamer
                </span>
              </div>

              <button className="flex items-center gap-1 text-xs font-bold text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-all cursor-pointer">
                <LogOut size={16} />
                <span className="uppercase">Logout</span>
              </button>
            </div>
          ) : (
            <button className="text-main font-bold text-sm hover:underline cursor-pointer">
              Login / Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default BottomNavBar;
