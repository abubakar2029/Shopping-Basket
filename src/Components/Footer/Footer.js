const Footer = () => {
  return (
    <div className="bg-sky-700 mt-2  py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-white">
          <div>
            <p className="text-lg mb-2">Shopping Cart - Project_4</p>
            <div className="mt-4">
              <a href="#" className="text-white mr-4 hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-white mr-4 hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white pt-2">
        <p className="text-center text-white">
          Made with <span className="text-red-400 text-lg">&#9829;</span> by Abu
          Bakar
        </p>
      </div>
    </div>
  );
};

export { Footer };
