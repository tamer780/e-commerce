import { Search } from "lucide-react";
function SearchBox() {
  return (
    <form
      action=""
      className="flex items-center h-11 bg-surface border border-main rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-main/20 transition-all"
    >
      <input
        type="text"
        className="flex-1 h-full bg-transparent px-5 text-heading outline-none placeholder:text-p/60 text-sm"
      />
      <button
        aria-label="Search"
        type="submit"
        className="w-14 h-full bg-main text-white flex justify-center items-center cursor-pointer hover:bg-main/80 transition-colors"
      >
        <Search size={19} />
      </button>
    </form>
  );
}

export default SearchBox;
