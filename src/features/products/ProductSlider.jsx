import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";

function ProductSlider({ title, data }) {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-heading">
              {title}
            </h2>
            <div className="w-12 h-1 bg-main mt-2"></div>
          </div>
          <p className="hidden md:block text-gray-500 text-sm">
            Discover our most popular products.
          </p>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          loop={data?.length >= 4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper pb-12!"
        >
          {data?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductSlider;
