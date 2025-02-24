const Features = () => {
    return (
      <section className="py-16 bg-gray-100 text-gray-900 text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
            <p>Experience cutting-edge technology that makes your work easier.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
            <p>Seamless integration with your existing tools and workflows.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
            <p>Top-notch security to protect your data and privacy.</p>
          </div>
        </div>
      </section>
    );
  };

export default Features;