import React, { useEffect, useState } from 'react';

const ConfettiLoader: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check if device is mobile or has reduced motion preference
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768 || 
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(mobile);
        };
        
        const checkReducedMotion = () => {
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            setPrefersReducedMotion(reduced);
        };

        checkMobile();
        checkReducedMotion();

        // Listen for resize events
        window.addEventListener('resize', checkMobile);
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        mediaQuery.addEventListener('change', checkReducedMotion);

        return () => {
            window.removeEventListener('resize', checkMobile);
            mediaQuery.removeEventListener('change', checkReducedMotion);
        };
    }, []);

    // Show simple loader on mobile or if user prefers reduced motion
    if (isMobile || prefersReducedMotion) {
        return (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-sm text-gray-600 font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="relative">
                {/* Confetti pieces spinning around - reduced to 3 pieces for better performance */}
                <div className="relative w-16 h-16">
                    {/* Orange confetti - app shaped */}
                    <div className="absolute w-3 h-3 bg-orange-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(0deg) translateY(-24px)',
                             borderRadius: '2px'
                         }}>
                    </div>
                    
                    {/* Blue confetti - app shaped */}
                    <div className="absolute w-3 h-3 bg-blue-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(120deg) translateY(-24px)',
                             animationDelay: '0.1s',
                             borderRadius: '2px'
                         }}>
                    </div>
                    
                    {/* Purple confetti - app shaped */}
                    <div className="absolute w-3 h-3 bg-purple-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(240deg) translateY(-24px)',
                             animationDelay: '0.2s',
                             borderRadius: '2px'
                         }}>
                    </div>
                </div>
                
                {/* Loading text */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 font-medium">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default ConfettiLoader;
