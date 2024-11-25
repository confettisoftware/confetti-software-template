import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <a className="text-xl font-bold">Confetti Software</a>
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {/* Dropdown for Apps */}
          <div className="relative group">
            <button className="hover:underline">Apps</button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
              <Link href="/mathflash">
                <a className="block px-4 py-2 hover:bg-gray-700">Math Flash</a>
              </Link>
              {/* Add more app links here */}
              <Link href="/future-app">
                <a className="block px-4 py-2 hover:bg-gray-700">Future App</a>
              </Link>
            </div>
          </div>
          {/* Other Links */}
          <Link href="/support">
            <a className="hover:underline">Support</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="hover:underline">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
