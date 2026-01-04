import { useState } from "react";

function Hero() {
  const [searchCity, setSearchCity] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchGuests, setSearchGuests] = useState("2");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log("Searching for:", { searchCity, searchDate, searchGuests });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-orange-50 via-red-50 to-orange-50">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 bg-orange-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 bg-red-200 rounded-full w-96 h-96 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="px-4 pt-20 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-32 sm:pb-24">
          <div className="space-y-8 text-center">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Discover & Reserve
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Your Perfect Dining Experience
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 sm:text-xl">
                Find the best restaurants in your area, check real-time
                availability, and secure your table in seconds.
              </p>
            </div>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="max-w-4xl p-6 mx-auto mt-12 bg-white border border-gray-100 shadow-xl rounded-2xl sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3 sm:items-end">
                {/* City Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="e.g., New York, LA"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
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
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                    required
                  />
                </div>

                {/* Guests Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="guests"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Guests
                  </label>
                  <select
                    id="guests"
                    value={searchGuests}
                    onChange={(e) => setSearchGuests(e.target.value)}
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 font-bold text-white transition duration-300 rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 hover:shadow-xl"
              >
                Search Restaurants
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="grid max-w-3xl grid-cols-1 gap-8 pt-12 mx-auto sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10K+</div>
                <p className="mt-1 text-sm text-gray-600">Restaurants</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500K+</div>
                <p className="mt-1 text-sm text-gray-600">Happy Users</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1M+</div>
                <p className="mt-1 text-sm text-gray-600">Bookings Made</p>
              </div>
            </div>
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
