import { useState } from "react";

export default function ProductImages({ images = [], alt }) {
  const [selected, setSelected] = useState(0);

  if (!images.length)
    return <div className="bg-gray-200 aspect-square rounded-xl" />;

  return (
    <div className="flex flex-col gap-4 mt-32">
      <div className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-gray-50 border">
        <img
          src={images[selected]}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300 p-8"
        />
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-3 overflow-x-auto p-2">
          {images.map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setSelected(i)}
              onClick={() => setSelected(i)}
              className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all 
                ${selected === i ? "border-main scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
            >
              <img
                src={img}
                alt={`${alt} ${i}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
