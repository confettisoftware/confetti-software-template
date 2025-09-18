import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isAppsOpen, setIsAppsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="backdrop-blur-xl bg-white/80 border-b border-white/30 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-6 py-4 sm:py-6">
                {/* Mobile Menu Button */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden text-gray-600 hover:text-black transition-colors">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Search Button */}
                <button className="sm:hidden text-gray-600 hover:text-black transition-colors ml-auto">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>

                {/* Desktop Left Navigation */}
                <div className="hidden sm:flex items-center space-x-8 flex-1">
                    <Link href="/about" className="text-gray-600 hover:text-black transition-colors font-medium">
                        About
                    </Link>

                    {/* Apps Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsAppsOpen(!isAppsOpen)}
                            className="text-gray-600 hover:text-black transition-colors font-medium flex items-center"
                        >
                            Apps
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isAppsOpen && (
                            <div className="absolute left-0 mt-2 w-48 backdrop-blur-xl bg-white/90 rounded-xl shadow-2xl border border-white/30 z-50">
                                <div className="py-2">
                                    <Link
                                        href="/mathflash"
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors rounded-lg mx-2"
                                        onClick={() => setIsAppsOpen(false)}
                                    >
                                        Math Flash
                                    </Link>
                                    <Link
                                        href="/sudokuplus"
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors rounded-lg mx-2"
                                        onClick={() => setIsAppsOpen(false)}
                                    >
                                        SudokuPlus
                                    </Link>
                                    <Link
                                        href="/tictactoe"
                                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors rounded-lg mx-2"
                                        onClick={() => setIsAppsOpen(false)}
                                    >
                                        TicTacToe+
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Centered Logo */}
                <div className="flex-1 flex justify-center">
                    <Link href="/" className="text-center">
                        <h1
                            className="text-xl sm:text-3xl font-bold text-black mb-0 tracking-tight uppercase"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            CONFETTI
                        </h1>
                        <h2
                            className="text-xs sm:text-lg font-light text-gray-500 tracking-wider -mt-1"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            SOFTWARE
                        </h2>
                    </Link>
                </div>

                {/* Desktop Right Navigation */}
                <div className="hidden sm:flex items-center space-x-8 flex-1 justify-end">
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <Link href="/support" className="text-gray-600 hover:text-black transition-colors font-medium">
                        Support
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden backdrop-blur-xl bg-white/90 border-t border-white/30">
                    <div className="px-4 py-4 space-y-4">
                        <Link
                            href="/about"
                            className="block text-gray-600 hover:text-black transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/mathflash"
                            className="block text-gray-600 hover:text-black transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Math Flash
                        </Link>
                        <Link
                            href="/sudokuplus"
                            className="block text-gray-600 hover:text-black transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            SudokuPlus
                        </Link>
                        <Link
                            href="/tictactoe"
                            className="block text-gray-600 hover:text-black transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            TicTacToe+
                        </Link>
                        <Link
                            href="/support"
                            className="block text-gray-600 hover:text-black transition-colors font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Support
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
