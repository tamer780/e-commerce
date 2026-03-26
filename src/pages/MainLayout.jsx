import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/navbar/Navbar.jsx";
// import Footer from "./components/layout/Footer";

function MainLayout() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default MainLayout;
