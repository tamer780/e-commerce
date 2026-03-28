import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/navbar/Navbar.jsx";
import Footer from "../components/Layout/footer/Footer.jsx";
import ScrollToTop from "../components/UI/ScrollToTop.jsx";

function MainLayout() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
