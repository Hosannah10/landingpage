const Testimonials = () => {
    return (
      <section className="py-16 bg-white text-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
            <p className="italic">"This platform changed the way I work. Highly recommended!"</p>
            <h3 className="text-xl font-semibold mt-4">- John Doe</h3>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
            <p className="italic">"Incredible features and top-notch support!"</p>
            <h3 className="text-xl font-semibold mt-4">- Jane Smith</h3>
          </div>
        </div>
      </section>
    );
  };

export default Testimonials;