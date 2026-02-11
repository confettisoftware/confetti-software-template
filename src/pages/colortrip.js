import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const ColorTrip = () => {
    return (
        <Layout
            title="ColorTrip - Dye Recipes from Any Color | Confetti Software"
            description="ColorTrip: dye recipes from any color for tie-dye and fiber. Pick a color, get a recipe. Color picker from wheel or photo, instant recipes in parts and teaspoons, dye library, harmony tools."
        >
            {/* Hero Section */}
            <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="w-28 h-28 mx-auto mb-12 rounded-2xl bg-white/90 border border-white/40 shadow-2xl overflow-hidden sm:backdrop-blur-md sm:bg-white/30">
                        <Image
                            src="/images/colortrip-icon.png"
                            alt="ColorTrip App Icon"
                            width={112}
                            height={112}
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
                        ColorTrip
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">Tie-dye color mixer</p>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl font-light text-black mb-8 tracking-wider"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            Features
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Color Picker
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Choose from the color wheel or grab a color from a photo. Works in RGB or RYB so you get recipes that match how you mix.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Instant Recipes
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Get recipes in parts and teaspoons, scaled to your bottle size and dye intensity. No guesswork, just mix and go.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Dye Library
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Recipes use only the dyes you own. The app suggests other dyes you could add to improve the match.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30 md:col-span-2 lg:col-span-1 lg:col-start-2">
                            <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Harmony Tools
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Explore complementary and analogous palettes so your colors work together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2
                            className="text-3xl font-light text-black mb-8 tracking-wider"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            How It Works
                        </h2>
                    </div>

                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                1
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-medium text-black mb-4"
                                    style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }}
                                >
                                    Pick a color
                                </h3>
                                <p className="text-gray-600">
                                    Use the wheel or a photo.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                2
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-medium text-black mb-4"
                                    style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }}
                                >
                                    Set your setup
                                </h3>
                                <p className="text-gray-600">
                                    Bottle size, intensity, and which dyes you have.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                3
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-medium text-black mb-4"
                                    style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }}
                                >
                                    Get the recipe
                                </h3>
                                <p className="text-gray-600">
                                    Parts, teaspoons, and optional dye suggestions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section - Coming Soon */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
                    <h2
                        className="text-2xl font-light text-black mb-6"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Coming Soon
                    </h2>
                    <p className="text-gray-600 mb-8">ColorTrip is in development. Follow us for updates on when it will be available on the App Store.</p>
                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30 max-w-md mx-auto inline-block">
                        <div className="w-16 h-16 bg-gray-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3
                            className="text-lg font-medium text-black mb-2"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            App Store
                        </h3>
                        <p className="text-sm text-gray-600">Coming soon to iOS</p>
                    </div>
                </div>
            </section>

            {/* Back to Apps Section */}
            <section className="py-20 bg-white">
                <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
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

export default ColorTrip;
