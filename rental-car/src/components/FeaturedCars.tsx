import { Car } from "lucide-react";

const FeaturedCars = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Economy Car */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <Car size={100} className="text-gray-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Economy</h3>
              <p className="text-2xl font-bold mb-4">$35/day</p>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* SUV */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <Car size={100} className="text-gray-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">SUV</h3>
              <p className="text-2xl font-bold mb-4">$55/day</p>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          {/* Luxury */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <Car size={100} className="text-gray-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury</h3>
              <p className="text-2xl font-bold mb-4">$75/day</p>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
