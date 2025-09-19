import Layout from '../components/Layout';
import Link from 'next/link';

const Support = () => {
    return (
        <Layout
            title="Support - Confetti Software"
            description="Get help with Confetti Software apps. Find answers to common questions, contact support, and get assistance with Math Flash, SudokuPlus, and TicTacToe+."
        >
            {/* Hero Section */}
            <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1
                        className="text-3xl sm:text-4xl font-bold text-black mb-4 uppercase"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Support
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">We&apos;re here to help you celebrate every moment</p>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2
                            className="text-2xl font-light text-black mb-8 tracking-wider"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                            }}
                        >
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-3">How do I contact support?</h3>
                            <p className="text-sm text-gray-600">
                                Email us at{' '}
                                <a href="mailto:hello@confettisoftware.com" className="text-black hover:underline font-medium">
                                    hello@confettisoftware.com
                                </a>{' '}
                                and we&apos;ll respond within 24 hours.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-3">Are your apps free?</h3>
                            <p className="text-sm text-gray-600">
                                Math Flash is $0.99, while SudokuPlus and TicTacToe+ are free with optional in-app purchases to remove ads.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-3">Do you collect personal data?</h3>
                            <p className="text-sm text-gray-600">
                                No, we don&apos;t collect any personal data. All our apps are designed with privacy in mind.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-3">What devices are supported?</h3>
                            <p className="text-sm text-gray-600">
                                All our apps work on iPhone, iPad, and Mac with Apple Silicon. They require iOS 18.0 or later.
                            </p>
                        </div>

                        <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                            <h3 className="text-lg font-medium text-black mb-3">How do I report a bug?</h3>
                            <p className="text-sm text-gray-600">
                                Send us an email with details about the issue, including your device model and iOS version. Screenshots help too!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-2xl mx-auto text-center px-4 sm:px-6">
                    <h2
                        className="text-xl font-light text-black mb-6"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Still Need Help?
                    </h2>
                    <p className="text-gray-600 mb-8">We&apos;d love to hear from you. Send us an email and we&apos;ll get back to you as soon as possible.</p>

                    <div className="space-y-4">
                        <a
                            href="mailto:hello@confettisoftware.com"
                            className="inline-block px-8 py-3 backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 hover:text-black transition-all duration-200 rounded-xl"
                        >
                            hello@confettisoftware.com
                        </a>

                        <div className="pt-4">
                            <Link
                                href="/"
                                className="inline-block px-8 py-3 backdrop-blur-sm bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30 hover:text-black transition-all duration-200 rounded-xl"
                            >
                                Back to Our Apps
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Support;
