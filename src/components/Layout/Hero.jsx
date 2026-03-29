import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../assets/images/banner1.jfif";
import banner2 from "../../assets/images/banner2.jfif";
import banner3 from "../../assets/images/banner3.jfif";
import banner4 from "../../assets/images/banner4.jfif";
import { Link } from "react-router-dom";

function Hero() {
  const slides = [
    { image: banner1, text: "Summer Collection", cta: "Shop Now", path: "/" },
    {
      image: banner2,
      text: "New Tech Gadgets",
      cta: "Explore",
      path: "category/tech-gadgets",
    },
    { image: banner3, text: "Flash Sale", cta: "View Deals", path: "/" },
    { image: banner4, text: "Free Shipping", cta: "Learn More", path: "/" },
  ];

  return (
    <section className="hero-section mt-38">
      <div className="container-custom">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-80 md:h-150 rounded-3xl overflow-hidden shadow-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full group">
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-8 md:px-16">
                  <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 drop-shadow-md">
                    {slide.text}
                  </h2>
                  <Link to={slide.path}>
                    <button className="bg-main text-white w-fit px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
                      {slide.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
