const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed w-full top-0 shadow-md">
        <div className="text-2xl font-bold">Brand</div>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-blue-400">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    );
  };

export default Navbar;