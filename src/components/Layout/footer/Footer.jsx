import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
const FOOTER_LINKS = {
  shop: [
    { name: "Men's Collection", path: "/category/men-collection" },
    { name: "Women's Fashion", path: "/category/women-fashion" },
    { name: "Tech & Gadgets", path: "/category/tech-gadgets" },
    { name: "Premium Shoes", path: "/category/premium-shoes" },
  ],
  support: [
    { name: "Order Tracking", path: "/orders" },
    { name: "Shipping Policy", path: "/shipping" },
    { name: "Returns & Refunds", path: "/returns" },
    { name: "FAQs", path: "/faqs" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border-custom pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="text-2xl font-black tracking-tighter italic uppercase text-heading"
            >
              Cartify<span className="text-main">.</span>
            </Link>
            <p className="text-p text-sm leading-relaxed max-w-xs">
              Your one-stop destination for premium fashion, latest tech, and
              lifestyle essentials. Quality guaranteed.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white border border-border-custom rounded-full text-p hover:text-main hover:border-main transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-border-custom rounded-full text-p hover:text-main hover:border-main transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white border border-border-custom rounded-full text-p hover:text-main hover:border-main transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-heading uppercase tracking-widest text-xs mb-6">
              Quick Shop
            </h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-p text-sm hover:text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-heading uppercase tracking-widest text-xs mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-p text-sm hover:text-main transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-heading uppercase tracking-widest text-xs mb-6">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-sm text-p">
                <MapPin size={18} className="text-main shrink-0" />
                <span>Badr City, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-p">
                <Phone size={18} className="text-main shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-p">
                <Mail size={18} className="text-main shrink-0" />
                <span>support@store.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-p font-medium">
            © {currentYear} STORE Inc. All rights reserved.
          </p>
          <div className="flex gap-4 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest text-p">
              Secure Payments
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
