import CategoryCard from "./CategoryCard";
import imageMen from "../../assets/images/man.jpg";
import imageWomen from "../../assets/images/women.jpg";
import imageTeck from "../../assets/images/tech.webp";
import imageShose from "../../assets/images/shoses.avif";

const CATEGORIES = [
  {
    id: 1,
    title: "Men's Collection",
    description: "Quality and style for him",
    image: imageMen,
  },
  {
    id: 2,
    title: "Women's Fashion",
    description: "Elegant and modern styles",
    image: imageWomen,
  },
  {
    id: 3,
    title: "Tech & Gadgets",
    description: "Latest electronics and gear",
    image: imageTeck,
  },
  {
    id: 4,
    title: "Premium Shoes",
    description: "Step into comfort",
    image: imageShose,
  },
];

function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom text-center mb-12">
        <span className="text-main font-bold tracking-[0.2em] uppercase text-xs">
          Explore More
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-heading mt-2 uppercase tracking-tight">
          Find everything you need <br /> in one place.
        </h2>
        <div className="w-16 h-1 bg-main mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-full gap-6 px-6">
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            description={cat.description}
            image={cat.image}
          />
        ))}
      </div>
    </section>
  );
}
export default CategoryGrid;
