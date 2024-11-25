const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <a href="/" className="text-xl font-bold">Confetti Software</a>

                {/* Links */}
                <div className="flex items-center space-x-4">
                    {/* Dropdown for Apps */}
                    <div className="relative group">
                        <button className="hover:underline">Apps</button>
                        <div className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded shadow-lg">
                            <a href="/mathflash" className="block px-4 py-2 hover:bg-gray-700">Math Flash</a>
                            {/* Add more app links as needed */}
                            <a href="/future-app" className="block px-4 py-2 hover:bg-gray-700">Future App</a>
                        </div>
                    </div>
                    {/* Other Links */}
                    <a href="/support" className="hover:underline">Support</a>
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
