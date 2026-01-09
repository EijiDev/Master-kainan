import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Hero() {
  const [searchFood, setSearchFood] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchQuantity, setSearchQuantity] = useState("2");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login", { state: { from: { pathname: "/reservation" } } });
      return;
    }
    // Navigate to reservation page with search parameters
    navigate("/reservation", {
      state: { searchFood, searchDate, searchQuantity },
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 rounded-full bg-slate-200 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-0 left-0 rounded-full bg-slate-300 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="px-4 pt-20 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-32 sm:pb-24">
          <div className="space-y-8 text-center">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reserve Your Favorite
                <span className="block text-white">Master Food</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300 sm:text-xl">
                Order authentic Filipino dishes - Tapsilog, Sisig, Sinigang, and
                more. Reserve your meals in advance and enjoy fresh, delicious
                food.
              </p>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="max-w-4xl p-6 mx-auto mt-12 bg-white border border-gray-100 shadow-xl rounded-2xl sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3 sm:items-end">
                {/* Food Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="food"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Dish
                  </label>
                  <input
                    id="food"
                    type="text"
                    placeholder="e.g., Tapsilog, Sisig"
                    value={searchFood}
                    onChange={(e) => setSearchFood(e.target.value)}
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>

                {/* Date Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>

                {/* Quantity Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    value={searchQuantity}
                    onChange={(e) => setSearchQuantity(e.target.value)}
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Order" : "Orders"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 font-bold text-white transition duration-300 rounded-lg shadow-lg bg-slate-700 hover:bg-slate-800 hover:shadow-xl"
              >
                {isAuthenticated ? "Reserve Now" : "Login to Reserve"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
    </section>
  );
}

export default Hero;
