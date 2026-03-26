import BottomNavBar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm bg-white">
      <div className="border-b border-border-custom/50">
        <TopNavbar />
      </div>
      <BottomNavBar />
    </header>
  );
}

export default Navbar;
