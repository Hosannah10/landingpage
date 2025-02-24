const HeroSection = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white text-center px-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg mb-6">Experience the future of technology with us.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Get Started</button>
        </div>
      </section>
    );
  };

export default HeroSection;