// src/components/Layout.js

import Head from 'next/head';
import Script from 'next/script';
import Navbar from './Navbar';
import Link from 'next/link';

const Layout = ({
    children,
    title = 'Confetti Software | Fun, Simple Apps for iPhone & iPad',
    description = 'Fun, simple apps for iPhone & iPad. Math Flash, SudokuPlus, and TicTacToe+ on the App Store.'
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="mobile apps, confetti software, math flash, sudoku plus, tictactoe plus, iOS apps, app store, mobile games, puzzle games, iPhone apps, iPad apps"
                />
                <meta name="author" content="Confetti Software" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://confettisoftware.com" />
                <meta property="og:image" content="https://confettisoftware.com/images/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Confetti Software | Fun, Simple Apps for iPhone & iPad" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <link rel="canonical" href="https://confettisoftware.com" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Confetti Software',
                            description: 'Fun, simple mobile apps.',
                            url: 'https://confettisoftware.com',
                            logo: 'https://confettisoftware.com/favicon.svg',
                            contactPoint: {
                                '@type': 'ContactPoint',
                                email: 'hello@confettisoftware.com',
                                contactType: 'customer service'
                            },
                            sameAs: ['https://apps.apple.com/us/developer/confetti-software/id6739975540'],
                            hasOfferCatalog: {
                                '@type': 'OfferCatalog',
                                name: 'Mobile Apps',
                                itemListElement: [
                                    {
                                        '@type': 'SoftwareApplication',
                                        name: 'Math Flash',
                                        description: 'Quick math practice',
                                        url: 'https://confettisoftware.com/mathflash',
                                        applicationCategory: 'EducationalApplication',
                                        operatingSystem: 'iOS',
                                        offers: {
                                            '@type': 'Offer',
                                            price: '0',
                                            priceCurrency: 'USD'
                                        }
                                    },
                                    {
                                        '@type': 'SoftwareApplication',
                                        name: 'SudokuPlus',
                                        description: 'Classic puzzle game',
                                        url: 'https://confettisoftware.com/sudokuplus',
                                        applicationCategory: 'GameApplication',
                                        operatingSystem: 'iOS',
                                        offers: {
                                            '@type': 'Offer',
                                            price: '0',
                                            priceCurrency: 'USD'
                                        }
                                    },
                                    {
                                        '@type': 'SoftwareApplication',
                                        name: 'TicTacToe+',
                                        description: 'Classic strategy game',
                                        url: 'https://confettisoftware.com/tictactoe',
                                        applicationCategory: 'GameApplication',
                                        operatingSystem: 'iOS',
                                        offers: {
                                            '@type': 'Offer',
                                            price: '0',
                                            priceCurrency: 'USD'
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>
            <div className="min-h-screen bg-white">
                {/* Navigation Bar */}
                <Navbar />

                {/* Main Content */}
                <main>{children}</main>

                {/* Analytics - Only if GA_MEASUREMENT_ID is provided */}
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                                    page_title: document.title,
                                    page_location: window.location.href
                                });
                    `}
                        </Script>
                    </>
                )}
            </div>
        </>
    );
};

export default Layout;
