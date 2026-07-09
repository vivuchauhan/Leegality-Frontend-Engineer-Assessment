import { useState } from "react";

const ProductGallery = ({ product }) => {
  const images =
    product.images?.length > 0
      ? product.images
      : [product.thumbnail];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>

      <div className="overflow-hidden rounded-xl border bg-white p-6 shadow-sm">

        <img
          src={selectedImage}
          alt={product.title}
          className="mx-auto h-[420px] w-full object-contain"
        />

      </div>

      {images.length > 1 && (

        <div className="mt-5 flex gap-3">

          {images.map((image, index) => (

            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-lg border transition ${
                selectedImage === image
                  ? "border-black"
                  : "border-gray-300"
              }`}
            >
              <img
                src={image}
                alt=""
                className="h-20 w-20 object-cover"
              />
            </button>

          ))}

        </div>

      )}

    </div>
  );
};

export default ProductGallery;