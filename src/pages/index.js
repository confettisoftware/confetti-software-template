import Layout from '../components/Layout';
import ConfettiAnimation from '../components/ConfettiAnimation';
import StructuredData from '../components/StructuredData';
import Link from 'next/link';
import Image from 'next/image';
import { trackAppStoreClick, trackEmailClick } from '../utils/analytics';

const Home = () => {
    return (
        <Layout
            title="Confetti Software | Fun Apps for iPhone & iPad"
            description="Fun apps for iPhone & iPad. Math Flash, SudokuPlus, and TicTacToe+ on the App Store."
        >
            <StructuredData
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'SoftwareApplication',
                    name: 'Confetti Software',
                    description: 'Educational mobile apps that make learning fun',
                    url: 'https://confettisoftware.com',
                    applicationCategory: 'EducationalApplication',
                    operatingSystem: 'iOS',
                    offers: {
                        '@type': 'Offer',
                        price: '0',
                        priceCurrency: 'USD'
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Confetti Software',
                        url: 'https://confettisoftware.com'
                    }
                }}
            />
            <ConfettiAnimation />

            {/* Apps Section */}
            <section className="py-12 sm:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {/* Math Flash */}
                        <div className="group">
                            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                                <Link href="/mathflash" className="block">
                                    <div className="aspect-square bg-gradient-to-br from-blue-50/50 to-blue-100/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
                                        <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                                            <Image
                                                src="/images/mathflash-icon-optimized.png"
                                                alt="Math Flash App Icon"
                                                width={112}
                                                height={112}
                                                className="w-full h-full object-cover"
                                                priority
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-5 sm:p-7 backdrop-blur-sm bg-white/10 text-center">
                                    <h3 className="text-xl font-medium text-black mb-3" style={{ textTransform: 'none' }}>
                                        Math Flash
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-4">Quick math practice</p>
                                    <a
                                        href="https://apps.apple.com/us/app/math-flash-fast-arithmetic/id6739975541"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                        onClick={() => trackAppStoreClick('Math Flash')}
                                    >
                                        <Image
                                            src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                            alt="Download on the App Store"
                                            width={120}
                                            height={40}
                                            className="h-9 w-auto hover:opacity-80 transition-opacity"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* SudokuPlus */}
                        <div className="group">
                            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                                <Link href="/sudokuplus" className="block">
                                    <div className="aspect-square bg-gradient-to-br from-green-50/50 to-green-100/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
                                        <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                                            <Image
                                                src="/images/sudokuplus-icon-optimized.png"
                                                alt="SudokuPlus App Icon"
                                                width={112}
                                                height={112}
                                                className="w-full h-full object-cover"
                                                priority
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-5 sm:p-7 backdrop-blur-sm bg-white/10 text-center">
                                    <h3 className="text-xl font-medium text-black mb-3" style={{ textTransform: 'none' }}>
                                        SudokuPlus
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-4">Classic puzzle game</p>
                                    <a
                                        href="https://apps.apple.com/us/app/sudokuplus-pure-logic/id6743255151"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                        onClick={() => trackAppStoreClick('SudokuPlus')}
                                    >
                                        <Image
                                            src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                            alt="Download on the App Store"
                                            width={120}
                                            height={40}
                                            className="h-9 w-auto hover:opacity-80 transition-opacity"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* TicTacToe+ */}
                        <div className="group">
                            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                                <Link href="/tictactoe" className="block">
                                    <div className="aspect-square bg-gradient-to-br from-purple-50/50 to-purple-100/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8">
                                        <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl overflow-hidden">
                                            <Image
                                                src="/images/tictactoe-icon-optimized.png"
                                                alt="TicTacToe+ App Icon"
                                                width={112}
                                                height={112}
                                                className="w-full h-full object-cover"
                                                priority
                                                placeholder="blur"
                                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                            />
                                        </div>
                                    </div>
                                </Link>
                                <div className="p-5 sm:p-7 backdrop-blur-sm bg-white/10 text-center">
                                    <h3 className="text-xl font-medium text-black mb-3" style={{ textTransform: 'none' }}>
                                        TicTacToe+
                                    </h3>
                                    <p className="text-sm text-gray-700 mb-4">Classic strategy game</p>
                                    <a
                                        href="https://apps.apple.com/us/app/tictactoe-flux/id6746926512"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                        onClick={() => trackAppStoreClick('TicTacToe+')}
                                    >
                                        <Image
                                            src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                                            alt="Download on the App Store"
                                            width={120}
                                            height={40}
                                            className="h-9 w-auto hover:opacity-80 transition-opacity"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative backdrop-blur-2xl bg-gradient-to-b from-white/20 to-white/5 border-t border-white/30 py-16 overflow-hidden">
                {/* Subtle confetti background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute top-12 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <div className="absolute top-6 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-10 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    {/* Logo Section */}
                    <div className="mb-6">
                        <h3
                            className="font-bold text-black mb-0"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '20px',
                                textTransform: 'none',
                                letterSpacing: '0.01em'
                            }}
                        >
                            Confetti
                        </h3>
                        <p
                            className="font-light text-gray-500 -mt-1"
                            style={{
                                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '11px',
                                letterSpacing: '0.06em'
                            }}
                        >
                            SOFTWARE
                        </p>
                    </div>

                    {/* Contact & Links Section */}
                    <div className="mb-6 space-y-3">
                        <a
                            href="mailto:info@confettisoftware.com"
                            className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors"
                            onClick={trackEmailClick}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span>info@confettisoftware.com</span>
                        </a>
                        <div>
                            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors">
                                Privacy
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-4 border-t border-white/30">
                        <p className="text-xs text-gray-500 tracking-wider">© 2025 Confetti Software. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </Layout>
    );
};

export default Home;
