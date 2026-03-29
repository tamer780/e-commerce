import { Link } from "react-router-dom";

function CategoryCard({ image, title, description, slug }) {
  return (
    <article className="group cursor-pointer relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <figure className="aspect-square overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </figure>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">
          {title}
        </h3>
        <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        <Link to={`/category/${slug}`}>
          <button className="bg-main text-white text-xs font-bold px-6 py-2 rounded-full w-fit hover:bg-white hover:text-main transition-colors uppercase tracking-widest cursor-pointer">
            Shop Now
          </button>
        </Link>
      </div>
    </article>
  );
}

export default CategoryCard;
