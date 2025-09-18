import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => (
    <Layout
        title="About Confetti Software - Apps That Make Every Moment a Celebration"
        description="Learn about Confetti Software's mission to create apps that make every moment a celebration. Founded by Joel Boyd, we specialize in beautifully designed mobile apps."
    >
        {/* Hero Section */}
        <div className="min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h1
                    className="text-5xl sm:text-6xl font-bold text-black mb-4"
                    style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                    }}
                >
                    About
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">Creating apps that make every moment a celebration</p>
            </div>
        </div>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-2xl font-light text-black mb-8 tracking-wider"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Our Mission
                    </h2>
                </div>

                <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        At Confetti Software, we believe that every moment can be a celebration. We create beautifully designed mobile apps that bring joy,
                        engagement, and a sense of wonder to everyday experiences.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Just like confetti brings celebration and joy to special moments, our apps bring excitement and fun to every interaction. We&apos;re
                        owned and operated by Joel Boyd, doing business as Confetti Software.
                    </p>
                </div>
            </div>
        </section>

        {/* Apps Section */}
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-2xl font-light text-black mb-8 tracking-wider"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Our Collection
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Math Flash */}
                    <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                            <img src="/images/mathflash-icon.png" alt="Math Flash App Icon" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-medium text-black mb-3">
                            <Link href="/mathflash" className="hover:text-gray-600 transition-colors">
                                Math Flash
                            </Link>
                        </h3>
                        <p className="text-gray-600 text-sm">Quick math practice that sparks joy</p>
                    </div>

                    {/* SudokuPlus */}
                    <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                            <img src="/images/sudokuplus-icon.png" alt="SudokuPlus App Icon" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-medium text-black mb-3">
                            <Link href="/sudokuplus" className="hover:text-gray-600 transition-colors">
                                SudokuPlus
                            </Link>
                        </h3>
                        <p className="text-gray-600 text-sm">Classic puzzle game with modern design</p>
                    </div>

                    {/* TicTacToe+ */}
                    <div className="text-center backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                            <img src="/images/tictactoe-icon.png" alt="TicTacToe+ App Icon" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-medium text-black mb-3">
                            <Link href="/tictactoe" className="hover:text-gray-600 transition-colors">
                                TicTacToe+
                            </Link>
                        </h3>
                        <p className="text-gray-600 text-sm">Classic strategy game with smart AI</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-2xl font-light text-black mb-8 tracking-wider"
                        style={{
                            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
                        }}
                    >
                        Our Values
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <h3 className="text-xl font-medium text-black mb-3">Celebration</h3>
                        <p className="text-gray-700">
                            We believe every moment can be a celebration. Every app we create is designed to bring joy and wonder to your daily experiences.
                        </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <h3 className="text-xl font-medium text-black mb-3">Quality First</h3>
                        <p className="text-gray-700">
                            We focus on creating a few exceptional apps rather than many mediocre ones. Every detail matters, from the user interface to the
                            overall experience.
                        </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <h3 className="text-xl font-medium text-black mb-3">Innovation</h3>
                        <p className="text-gray-700">
                            We design our apps to encourage curiosity and continuous discovery, helping users develop a positive relationship with technology.
                        </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 rounded-2xl p-8 border border-white/30">
                        <h3 className="text-xl font-medium text-black mb-3">Community</h3>
                        <p className="text-gray-700">
                            We value feedback from our users and are always looking to improve. Your success is our success, and we&apos;re here to support your
                            journey.
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
                    Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">Have questions, feedback, or just want to say hello? We&apos;d love to hear from you!</p>

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
                            Back to Collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default About;
