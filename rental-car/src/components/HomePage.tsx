import CTASection from "./CTASection";
import FeaturedCars from "./FeaturedCars";
import SearchForm from "./SearchForm";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">
            Encontre o veiculo ideal para você
          </h1>
          <p className="text-gray-600 mb-8">
            Veja os veiculos disponiveis, para todas as ocasiões.
          </p>
          <SearchForm />
        </div>
      </section>

      <FeaturedCars />
      <CTASection />
    </>
  );
};

export default HomePage;
