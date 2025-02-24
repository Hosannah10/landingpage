const Contact = () => {
    return (
      <section className="py-16 bg-gray-900 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded-lg text-gray-900" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded-lg text-gray-900" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded-lg text-gray-900 h-32"></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">Send Message</button>
        </form>
      </section>
    );
  };

  export default Contact;