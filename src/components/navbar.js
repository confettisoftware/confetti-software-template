// src/components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:underline">
          Confetti Software
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {/* Dropdown for Apps */}
          <div className="relative group">
            <button className="hover:underline focus:outline-none">
              Apps
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Link href="/mathflash" className="block px-4 py-2 hover:bg-gray-700">
                Math Flash
              </Link>
              {/* Add more app links here */}
              <Link href="/future-app" className="block px-4 py-2 hover:bg-gray-700">
                Future App
              </Link>
            </div>
          </div>
          {/* Other Links */}
          <Link href="/support" className="hover:underline">
            Support
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
