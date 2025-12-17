import React from "react";

export default function Product(props) {
  const { allProducts = [] } = props;

  return (
    <div className="pt-40 pb-10 px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
      {allProducts.map((product) => {
        return (
          <div
            id={product.category}
            key={product.id}
            className="product-item flex flex-col h-full bg-white border border-slate-200 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative h-48 m-2.5 overflow-hidden rounded-md flex justify-center items-center bg-gray-50">
              <img
                src={product.image}
                alt="card-image"
                class="max-h-full object-contain"
              />
            </div>
            <div className="p-4 flex-grow">
              <h6 className="mb-2 text-slate-800 text-lg font-semibold line-clamp-2">
                {product.title.replace("Fake: ", "")}
              </h6>
              <p className="text-slate-600 text-sm font-light line-clamp-3">
                {product.description}
              </p>
            </div>
            <div className="p-4 pt-0">
              <button
                className="w-full rounded-md bg-green-500 py-2 text-sm text-white hover:bg-slate-700 transition-all"
                type="button"
              >
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
