import Layout from '../components/Layout';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <Layout
            title="Privacy - Confetti Software"
            description="Privacy Policy for Confetti Software apps. Learn how we protect your data and respect your privacy in Math Flash, SudokuPlus, and TicTacToe+."
        >
            {/* Hero Section */}
            <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1
                        className="text-3xl sm:text-4xl font-bold text-black mb-6"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                            textTransform: 'none'
                        }}
                    >
                        Privacy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">Your privacy matters to us</p>
                    <p className="text-sm text-gray-500 mb-12">Last Updated: June 18, 2025</p>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30 mb-8">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Confetti Software, we take your privacy seriously. Our apps, including Math Flash, SudokuPlus, and TicTacToe+, are designed to
                            respect your data.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h2
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Data Collection
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">
                                Some of our apps (including TicTacToe+ and SudokuPlus) display banner ads using Google AdMob. AdMob may collect:
                            </p>
                            <ul className="list-disc list-inside mb-4 text-sm text-gray-600 space-y-2">
                                <li>Advertising Identifier (IDFA)</li>
                                <li>Approximate location (via IP address)</li>
                            </ul>
                            <p className="text-sm text-gray-600">
                                This data is used solely to serve and measure ads. Confetti Software does not collect, store, or share personal data from any of
                                our apps.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h2
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Remove Ads
                            </h2>
                            <p className="text-sm text-gray-600">
                                Apps with ads include a one-time in-app purchase to remove ads permanently. When ads are removed, no advertising data is
                                collected.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h2
                                className="text-xl font-medium text-black mb-4"
                                style={{
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                }}
                            >
                                Contact
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">
                                If you have any questions about our Privacy Policy, please contact us at{' '}
                                <a href="mailto:info@confettisoftware.com" className="text-black hover:underline font-medium">
                                    info@confettisoftware.com
                                </a>
                                .
                            </p>
                        </div>
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

export default PrivacyPolicy;
