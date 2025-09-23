import '../css/main.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ConfettiLoader from '../components/ConfettiLoader';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768 || 
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        // Only show loader for non-mobile devices or if it's a slow connection
        const handleStart = () => {
            // Skip loader on mobile devices for faster perceived performance
            if (!isMobile) {
                setLoading(true);
            }
        };
        
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router, isMobile]);

    return (
        <>
            {loading && <ConfettiLoader />}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
