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
                {/* Confetti pieces spinning around - 6 pieces, app-shaped */}
                <div className="relative w-24 h-24">
                    {/* Orange confetti - app shaped */}
                    <div className="absolute w-4 h-4 bg-orange-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(0deg) translateY(-36px)',
                             borderRadius: '3px'
                         }}>
                    </div>
                    
                    {/* Blue confetti - app shaped */}
                    <div className="absolute w-4 h-4 bg-blue-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(60deg) translateY(-36px)',
                             animationDelay: '0.05s',
                             borderRadius: '3px'
                         }}>
                    </div>
                    
                    {/* Purple confetti - app shaped */}
                    <div className="absolute w-4 h-4 bg-purple-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(120deg) translateY(-36px)',
                             animationDelay: '0.1s',
                             borderRadius: '3px'
                         }}>
                    </div>
                    
                    {/* Green confetti - app shaped */}
                    <div className="absolute w-4 h-4 bg-green-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(180deg) translateY(-36px)',
                             animationDelay: '0.15s',
                             borderRadius: '3px'
                         }}>
                    </div>
                    
                    {/* Yellow confetti - app shaped */}
                    <div className="absolute w-4 h-4 bg-yellow-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(240deg) translateY(-36px)',
                             animationDelay: '0.2s',
                             borderRadius: '3px'
                         }}>
                    </div>
                    
                    {/* Pink confetti - app shaped */}
                    <div className="absolute w-4 h-4 bg-pink-500 animate-spin-slow shadow-sm" 
                         style={{
                             top: '50%',
                             left: '50%',
                             transformOrigin: '0 0',
                             transform: 'translate(-50%, -50%) rotate(300deg) translateY(-36px)',
                             animationDelay: '0.25s',
                             borderRadius: '3px'
                         }}>
                    </div>
                </div>
                
                {/* Loading text */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 font-medium">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default ConfettiLoader;
