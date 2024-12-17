import { Calendar, MapPin } from "lucide-react";

const SearchForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Pick-up Location"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="date"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
        Procure o carro que você precisa
      </button>
    </div>
  );
};

export default SearchForm;
