import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Home,
  MessageSquare,
} from "lucide-react";

import "../index.css";

// Mock data
const cars = [
  {
    id: 1,
    brand: "Fiat",
    model: "Argo",
    version: "ARGO DRIVE 1.3 FLEX AUT",
    price: 3181.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    brand: "Jeep",
    model: "Commander",
    version: "COMMANDER OVERLAND T270",
    price: 7736.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    brand: "Jeep",
    model: "Compass",
    version: "COMPASS LONGITUDE T270 4X2 1.3 FLEX",
    price: 5695.0,
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more cars as needed
];

const categories = [
  { name: "Hatch", count: 5 },
  { name: "SUV", count: 4 },
  { name: "Sedan", count: 3 },
  { name: "Picape", count: 3 },
];

export default function ListarCarros() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFilters, setExpandedFilters] = useState<string[]>([]);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(cars.length / itemsPerPage);

  const toggleFilter = (filter: string) => {
    setExpandedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const isFilterExpanded = (filter: string) => expandedFilters.includes(filter);

  const paginatedCars = cars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Home size={20} />
          <span>/</span>
          <span>Todos os carros</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-6">Monte sua frota</h2>

              {/* Categories */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("categoria")}
                  className="flex items-center justify-between w-full text-left font-semibold mb-4"
                >
                  <span>Categoria</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform ${
                      isFilterExpanded("categoria") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isFilterExpanded("categoria") && (
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                        <span>{category.name}</span>
                        <span className="text-gray-500 text-sm">
                          ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Filters */}
              {["Combustível", "Marca", "Preço", "Transmissão"].map(
                (filter) => (
                  <div key={filter} className="mb-6">
                    <button
                      onClick={() => toggleFilter(filter)}
                      className="flex items-center justify-between w-full text-left font-semibold mb-4"
                    >
                      <span>{filter}</span>
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform ${
                          isFilterExpanded(filter) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isFilterExpanded(filter) && (
                      <div className="space-y-2">
                        {/* Add filter options here */}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">
                Exibindo {paginatedCars.length} resultado(s)
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Ordenar por:</span>
                <select className="border rounded-lg px-4 py-2 bg-white">
                  <option>Selecione</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
              </div>
            </div>

            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{car.version}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">a partir de</p>
                      <p className="text-2xl font-bold text-orange-500">
                        R$ {car.price.toFixed(2)}/mês*
                      </p>
                      <p className="text-xs text-gray-500">
                        *Valor para o plano de 36 meses com franquia de 1.000km
                        ao mês
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border enabled:hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronLeft size={20} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg border ${
                        currentPage === page
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border enabled:hover:bg-gray-100 disabled:opacity-50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-colors">
        <MessageSquare size={20} />
        <span>Fale com um vendedor</span>
      </button>
    </div>
  );
}
