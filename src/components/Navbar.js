import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Search data
    const searchData = [
        {
            title: 'Math Flash',
            description: 'Quick math practice that sparks joy',
            url: '/mathflash',
            keywords:
                'math, arithmetic, practice, education, learning, educational, school, kids, children, numbers, calculation, multiplication, division, addition, subtraction'
        },
        {
            title: 'SudokuPlus',
            description: 'Classic puzzle game with modern design',
            url: '/sudokuplus',
            keywords: 'sudoku, puzzle, game, games, logic, brain, mental, challenge, grid, numbers, zen, relaxing, meditation'
        },
        {
            title: 'TicTacToe+',
            description: 'Classic strategy game with smart AI',
            url: '/tictactoe',
            keywords: 'tictactoe, tic tac toe, strategy, game, games, AI, artificial intelligence, X, O, board, classic, fun'
        },
        { title: 'Games', description: 'All our mobile games', url: '/', keywords: 'games, gaming, mobile games, apps, entertainment, fun, play, interactive' },
        {
            title: 'Learning',
            description: 'Educational apps and games',
            url: '/',
            keywords: 'learning, education, educational, school, study, knowledge, skills, development, training'
        },
        { title: 'About', description: 'Learn about Confetti Software', url: '/about', keywords: 'about, company, team, mission, story' },
        { title: 'Support', description: 'Get help and support', url: '/support', keywords: 'support, help, contact, email, assistance, FAQ' },
        { title: 'Contact', description: 'Get in touch with us', url: '/support', keywords: 'contact, email, reach out, get in touch, hello' },
        { title: 'Email', description: 'Send us an email', url: '/support', keywords: 'email, mail, contact, message, hello@confettisoftware.com' }
    ];

    const filteredResults = searchData.filter(
        (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.keywords && item.keywords.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <nav className="backdrop-blur-xl bg-white/80 border-b border-white/30 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center px-4 sm:px-6 py-4 sm:py-6">
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                    className="sm:hidden text-gray-600 hover:text-black transition-colors"
                    aria-label="Toggle mobile menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Left Navigation */}
                <div className="hidden sm:flex items-center space-x-8 flex-1">
                    <Link href="/about" className="text-gray-600 hover:text-black transition-colors text-sm font-medium uppercase">
                        About
                    </Link>

                    {/* Apps Hover Menu */}
                    <div className="relative group">
                        <button className="text-gray-600 hover:text-black transition-colors text-sm font-medium uppercase">
                            Apps
                        </button>

                        <div className="absolute left-0 mt-2 w-48 backdrop-blur-xl bg-white/90 rounded-xl shadow-2xl border border-white/30 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="py-2">
                                <Link
                                    href="/mathflash"
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors rounded-lg mx-2"
                                >
                                    Math Flash
                                </Link>
                                <Link
                                    href="/sudokuplus"
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors rounded-lg mx-2"
                                >
                                    SudokuPlus
                                </Link>
                                <Link
                                    href="/tictactoe"
                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 transition-colors rounded-lg mx-2"
                                >
                                    TicTacToe+
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Centered Logo */}
                <div className="flex-1 flex justify-center">
                    <Link href="/" className="text-center">
                        <h1
                            className="font-bold text-black mb-0"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '32px',
                                textTransform: 'none',
                                letterSpacing: '0.01em'
                            }}
                        >
                            Confetti
                        </h1>
                        <h2
                            className="font-light text-gray-500 -mt-1"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '18px',
                                letterSpacing: '0.06em'
                            }}
                        >
                            SOFTWARE
                        </h2>
                    </Link>
                </div>

                {/* Desktop Right Navigation */}
                <div className="hidden sm:flex items-center space-x-8 flex-1 justify-end">
                    <button 
                        onClick={() => setIsSearchOpen(true)} 
                        className="text-gray-600 hover:text-black transition-colors"
                        aria-label="Open search"
                        title="Search the website"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <Link href="/support" className="text-gray-600 hover:text-black transition-colors text-sm font-medium uppercase">
                        Support
                    </Link>
                </div>

                {/* Mobile Search Button */}
                <button 
                    onClick={() => setIsSearchOpen(true)} 
                    className="sm:hidden text-gray-600 hover:text-black transition-colors"
                    aria-label="Open search"
                    title="Search the website"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div 
                    id="mobile-menu"
                    className="sm:hidden backdrop-blur-xl bg-white/90 border-t border-white/30"
                    role="menu"
                    aria-label="Mobile navigation menu"
                >
                    <div className="px-4 py-4 space-y-4">
                        <Link
                            href="/about"
                            className="block text-gray-600 hover:text-black transition-colors text-sm font-medium uppercase"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/mathflash"
                            className="block text-gray-600 hover:text-black transition-colors text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Math Flash
                        </Link>
                        <Link
                            href="/sudokuplus"
                            className="block text-gray-600 hover:text-black transition-colors text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            SudokuPlus
                        </Link>
                        <Link
                            href="/tictactoe"
                            className="block text-gray-600 hover:text-black transition-colors text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            TicTacToe+
                        </Link>
                        <Link
                            href="/support"
                            className="block text-gray-600 hover:text-black transition-colors text-sm font-medium uppercase"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Support
                        </Link>
                    </div>
                </div>
            )}

            {/* Search Modal */}
            {isSearchOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="search-title"
                >
                    <div className="w-full max-w-2xl backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl border border-white/30">
                        {/* Search Header */}
                        <div className="flex items-center p-6 border-b border-white/30">
                            <h2 id="search-title" className="sr-only">Search</h2>
                            <div className="flex-1 relative">
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search apps and pages..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    autoFocus
                                    aria-label="Search input"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                }}
                                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close search"
                                title="Close search"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Search Results */}
                        <div className="max-h-96 overflow-y-auto">
                            {searchQuery === '' ? (
                                <div className="p-6 text-center text-gray-500">
                                    <p>Start typing to search...</p>
                                </div>
                            ) : filteredResults.length > 0 ? (
                                <div className="py-2">
                                    {filteredResults.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.url}
                                            className="block px-6 py-4 hover:bg-white/50 transition-colors border-b border-white/20 last:border-b-0"
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                        >
                                            <h3 className="text-sm font-medium text-black" style={{ textTransform: 'none' }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-6 text-center text-gray-500">
                                    <p>No results found for &quot;{searchQuery}&quot;</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
