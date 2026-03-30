import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Layout/navbar/Navbar.jsx";
import Footer from "../components/Layout/footer/Footer.jsx";
import ScrollToTop from "../components/UI/ScrollToTop.jsx";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/UI/PageTransition.jsx";

function MainLayout() {
  const location = useLocation();
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />

      <main
        className="min-h-screen"
        style={{ paddingTop: "var(--navbar-height)" }}
      >
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
