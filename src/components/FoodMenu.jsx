import { useState } from "react";

function FoodMenu() {
  const foods = [
    {
      id: 1,
      name: "Tapsilog",
      price: "₱150",
      description: "Cured beef, garlic fried rice, and fried egg",
      image: "🍚",
      rating: "4.8",
      reviews: "250",
      available: true,
    },
    {
      id: 2,
      name: "Sisig",
      price: "₱180",
      description: "Chopped pork face, onions, and spices on hot plate",
      image: "🔥",
      rating: "4.9",
      reviews: "320",
      available: true,
    },
    {
      id: 3,
      name: "Sinigang",
      price: "₱160",
      description: "Tamarind-based stew with pork and vegetables",
      image: "🥘",
      rating: "4.7",
      reviews: "280",
      available: true,
    },
    {
      id: 4,
      name: "Adobo",
      price: "₱170",
      description: "Braised chicken in soy and vinegar sauce",
      image: "🍗",
      rating: "4.9",
      reviews: "410",
      available: true,
    },
    {
      id: 5,
      name: "Kare-Kare",
      price: "₱200",
      description: "Peanut-based stew with vegetables and meat",
      image: "🥜",
      rating: "4.8",
      reviews: "195",
      available: true,
    },
    {
      id: 6,
      name: "Lumpiang Shanghai",
      price: "₱120",
      description: "Fried spring rolls with meat and vegetables",
      image: "🌯",
      rating: "4.6",
      reviews: "360",
      available: true,
    },
    {
      id: 7,
      name: "Lechon Kawali",
      price: "₱220",
      description: "Crispy fried pork belly with special sauce",
      image: "🐷",
      rating: "4.9",
      reviews: "580",
      available: true,
    },
    {
      id: 8,
      name: "Pancit Canton",
      price: "₱140",
      description: "Stir-fried egg noodles with meat and vegetables",
      image: "🍜",
      rating: "4.7",
      reviews: "290",
      available: true,
    },
  ];

  const [selectedFood, setSelectedFood] = useState(null);

  const handleReserve = (food) => {
    setSelectedFood(food);
    // Handle reservation logic
    console.log("Reserved:", food.name);
  };

  return (
    <section className="w-full py-2 bg-gradient-to-b from-white to-slate-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Our Special Menu
          </h2>
          <p className="mt-3 text-slate-600">
            Fresh Filipino dishes prepared with authentic recipes and the finest
            ingredients
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {foods.map((food) => (
            <div
              key={food.id}
              className="overflow-hidden transition duration-500 transform bg-white border shadow-lg border-slate-100 group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Food Image Placeholder - Ready for real images */}
              <div className="relative flex items-center justify-center h-56 overflow-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200">
                {/* Image container - Replace with <img> tag when adding actual images */}
                <div className="absolute inset-0 flex items-center justify-center transition duration-300 group-hover:scale-110">
                  <span className="text-7xl opacity-40">{food.image}</span>
                </div>
                {/* Badge overlay */}
                <div className="absolute flex items-center gap-1 px-3 py-1 rounded-full shadow-md top-3 right-3 bg-white/90 backdrop-blur-md">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-bold text-slate-900">
                    {food.rating}
                  </span>
                </div>
              </div>

              {/* Food Details */}
              <div className="p-6 space-y-4">
                {/* Name */}
                <h3 className="text-2xl font-bold transition duration-300 text-slate-900 group-hover:text-slate-700">
                  {food.name}
                </h3>

                {/* Description */}
                <p className="h-12 text-sm leading-relaxed text-slate-600 line-clamp-2">
                  {food.description}
                </p>

                {/* Reviews */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="font-semibold">{food.reviews}</span>
                  <span>reviews</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-200"></div>

                {/* Price and Button */}
                <div className="flex items-end justify-between gap-3 pt-2">
                  <div>
                    <p className="mb-1 text-xs text-slate-500">Price</p>
                    <p className="text-3xl font-bold text-slate-800">
                      {food.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleReserve(food)}
                    className="px-5 py-2 text-white transition duration-300 rounded-lg bg-slate-700 hover:bg-slate-800 hover:-translate-y-1"
                  >
                    Reserve
                  </button>
                </div>

                {/* Availability */}
                <div className="pt-3">
                  {food.available ? (
                    <span className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Available Now
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodMenu;
