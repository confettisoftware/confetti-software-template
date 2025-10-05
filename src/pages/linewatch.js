import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const LineWatchPlus = () => {
    return (
        <Layout
            title="LineWatch+ - Disney Ride Wait Time Alerts | Confetti Software"
            description="LineWatch+ is a mobile app that sends push notifications when Disney ride wait times drop below your threshold. Never wait in long lines again with smart alerts."
        >
            {/* Hero Section */}
            <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="w-28 h-28 mx-auto mb-12 rounded-2xl bg-white/90 border border-white/40 shadow-2xl overflow-hidden sm:backdrop-blur-md sm:bg-white/30">
                        <Image
                            src="/images/linewatch-icon.svg"
                            alt="LineWatch+ App Icon"
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
                        LineWatch+
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">Smart Disney ride wait time alerts</p>
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
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 13h6V7H4v6zM4 5h6V1H4v4z"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Smart Alerts
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Get push notifications when your favorite Disney rides have wait times below your threshold.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Real-Time Data
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Live wait time data from Disney&apos;s official systems keeps you informed of current conditions. Data provided by{' '}
                                <a
                                    href="https://queue-times.com/en-US"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    Queue-Times.com
                                </a>
                                .
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Customizable
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Set custom wait time thresholds for each ride and receive alerts only when it matters to you.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Reliable Notifications
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Built with Apple Push Notification service for reliable, instant alerts delivered right to your device.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Battery Efficient
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Smart background processing ensures minimal battery drain while keeping you informed.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Multiple Parks
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Support for Disney World, Disneyland, and other Disney parks with comprehensive ride coverage.
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
                            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                1
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-medium text-black mb-4"
                                    style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }}
                                >
                                    Choose Your Rides
                                </h3>
                                <p className="text-gray-600">
                                    Select the Disney rides you want to track and set your preferred wait time threshold for each one.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                2
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-medium text-black mb-4"
                                    style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }}
                                >
                                    Enable Notifications
                                </h3>
                                <p className="text-gray-600">Grant permission for push notifications and let LineWatch+ monitor wait times in the background.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                3
                            </div>
                            <div className="flex-1">
                                <h3
                                    className="text-xl font-medium text-black mb-4"
                                    style={{
                                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }}
                                >
                                    Get Smart Alerts
                                </h3>
                                <p className="text-gray-600">
                                    Receive instant notifications when wait times drop below your threshold, so you can head to the ride immediately.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                    <h2
                        className="text-3xl font-light text-black mb-8 tracking-wider"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Coming Soon
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                        LineWatch+ is currently in development. Follow us for updates on when it will be available on the App Store.
                    </p>

                    <div className="space-y-6">
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30 max-w-md mx-auto">
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
                </div>
            </section>

            {/* Attribution Section */}
            <section className="py-12 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                    <p className="text-sm text-gray-600">
                        Wait time data provided by{' '}
                        <a
                            href="https://queue-times.com/en-US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                            Queue-Times.com
                        </a>{' '}
                        • Supporting theme parks worldwide with real-time wait time information
                    </p>
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

export default LineWatchPlus;
