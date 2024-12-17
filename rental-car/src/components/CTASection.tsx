const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
        <p className="mb-8 text-gray-300">
          Book your car now and enjoy the freedom of the open road
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
