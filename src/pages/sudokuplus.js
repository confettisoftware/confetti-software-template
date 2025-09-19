import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const SudokuPlus = () => {
    return (
        <Layout
            title="SudokuPlus - Premium Sudoku Puzzle Game | Confetti Software"
            description="SudokuPlus is the ultimate Sudoku experience with beautiful design and zen-like gameplay. Features multiple difficulties, smart hints, and confetti celebrations for completed puzzles."
        >
            {/* Hero Section */}
            <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="w-28 h-28 mx-auto mb-12 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                        <Image
                            src="/images/sudokuplus-icon.png"
                            alt="SudokuPlus App Icon"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <div
                        className="text-3xl sm:text-4xl mb-6"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                    >
                        <span className="font-bold text-black">Sudoku</span>
                        <span className="font-light text-gray-500">Plus</span>
                    </div>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">Classic puzzle game with modern design</p>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2
                            className="text-2xl font-light text-black mb-8 tracking-wider"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            Features
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Multiple Difficulties</h3>
                            <p className="text-sm text-gray-600">Easy to Expert puzzle sets</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Smart Hints</h3>
                            <p className="text-sm text-gray-600">Helpful hints without spoiling solutions</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Confetti Celebrations</h3>
                            <p className="text-sm text-gray-600">Beautiful animations for completed puzzles</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className="py-20 bg-white">
                <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
                    <h2
                        className="text-xl font-light text-black mb-6"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Available Now
                    </h2>
                    <p className="text-gray-600 mb-8">Download SudokuPlus from the App Store</p>
                    <a
                        href="https://apps.apple.com/us/app/sudokuplus-pure-logic/id6743255151"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-6"
                    >
                        <img
                            src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                            alt="Download on the App Store"
                            className="h-12 w-auto hover:opacity-80 transition-opacity"
                        />
                    </a>
                    <div>
                        <Link
                            href="/"
                            className="inline-block px-8 py-3 backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 hover:text-black transition-all duration-200 rounded-xl"
                        >
                            Back to Our Apps
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SudokuPlus;
