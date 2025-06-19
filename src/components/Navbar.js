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
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              <Link href="/mathflash" className="block px-4 py-2 hover:bg-gray-700">
                Math Flash
              </Link>
              <Link href="/sudokuplus" className="block px-4 py-2 hover:bg-gray-700">
                SudokuPlus
              </Link>
              <Link href="/tictactoe" className="block px-4 py-2 hover:bg-gray-700">
                TicTacToe+
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
