// src/components/Layout.js

import Head from 'next/head';
import Script from 'next/script';
import Navbar from './Navbar';
import Link from 'next/link';

const Layout = ({
    children,
    title = 'Confetti Software - Apps That Make Every Moment a Celebration',
    description = 'Creating apps that make every moment a celebration, one confetti piece at a time. Discover our collection of beautifully designed mobile apps.'
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="mobile apps, confetti software, math flash, sudoku plus, tictactoe plus, celebration apps, iOS apps, app store, mobile games, puzzle games"
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
                <meta property="og:image:alt" content="Confetti Software - Apps That Make Every Moment a Celebration" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <link rel="canonical" href="https://confettisoftware.com" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/SF-Pro-Display-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/SF-Pro-Text-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            </Head>
            <div className="min-h-screen bg-white">
                {/* Navigation Bar */}
                <Navbar />

                {/* Main Content */}
                <main>{children}</main>

                {/* Google Analytics */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXXXXX');
                    `}
                </Script>
            </div>
        </>
    );
};

export default Layout;
