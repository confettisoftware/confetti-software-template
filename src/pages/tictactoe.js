import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const TicTacToePlus = () => {
    return (
        <Layout
            title="TicTacToe+ - Modern Strategy Game with Smart AI | Confetti Software"
            description="TicTacToe+ is a classic strategy game perfected with modern design and smooth gameplay. Features smart AI, statistics tracking, and ad-free options for uninterrupted gaming."
        >
            {/* Hero Section */}
            <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="w-32 h-32 mx-auto mb-12 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                        <Image
                            src="/images/tictactoe-icon.png"
                            alt="TicTacToe+ App Icon"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <h1
                        className="text-3xl sm:text-4xl font-bold text-black mb-6"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                            textTransform: 'none'
                        }}
                    >
                        TicTacToe+
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">Classic strategy game with smart AI</p>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Modern Design</h3>
                            <p className="text-sm text-gray-600">Beautiful animated gradients and clean UI</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Smart AI</h3>
                            <p className="text-sm text-gray-600">Intelligent AI with adjustable difficulty</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Track Stats</h3>
                            <p className="text-sm text-gray-600">Monitor wins, streaks, and improvement</p>
                        </div>
                        <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-2">Ad-Free Option</h3>
                            <p className="text-sm text-gray-600">One-time purchase for uninterrupted gaming</p>
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
                    <p className="text-gray-600 mb-8">Download TicTacToe+ from the App Store</p>
                    <a href="https://apps.apple.com/us/app/tictactoe-flux/id6746926512" target="_blank" rel="noopener noreferrer" className="inline-block mb-6">
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

export default TicTacToePlus;
