import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
    id: number;
    color: string;
    size: number;
    startX: number;
    rotation: number;
    fallDuration: number;
    delay: number;
}

const ConfettiAnimation: React.FC = () => {
    const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Detect if device is mobile or has reduced motion preference
        const isMobile = typeof window !== 'undefined' && 
            (window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        
        const prefersReducedMotion = typeof window !== 'undefined' && 
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Skip animation on mobile or if user prefers reduced motion
        if (isMobile || prefersReducedMotion) {
            return;
        }

        const colors = [
            '#FF9500', // Orange (.orange)
            '#007AFF', // Blue (.blue)
            '#AF52DE', // Purple (.purple)
            '#34C759', // Green (.green)
            '#FFCC00', // Yellow (.yellow)
            '#FF2D92', // Pink (.pink)
            '#32D2FF', // Cyan (.cyan)
        ];

        const generateConfetti = () => {
            // Reduce piece count for better performance
            const pieceCount = 25; // Reduced from 50
            const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
            
            const pieces = Array.from({ length: pieceCount }, (_, i) => ({
                id: i,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4, // 4-12px (reduced from 5-15px)
                startX: Math.random() * screenWidth,
                rotation: Math.random() * 360, // Reduced from 720 degrees
                fallDuration: Math.random() * 0.8 + 1.2, // 1.2-2.0 seconds (reduced)
                delay: Math.random() * 0.2, // 0-0.2 seconds (reduced)
            }));

            setConfettiPieces(pieces);
            setIsVisible(true);
        };

        // Delay animation start to let page load first
        const timer = setTimeout(generateConfetti, 100);
        
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {confettiPieces.map((piece) => {
        const drift = (Math.random() - 0.5) * 20; // -10 to +10px drift like your splash
        return (
          <div
            key={piece.id}
            className="animate-confetti-fall"
            style={{
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              left: `${piece.startX}px`,
              top: '-50px',
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.fallDuration}s`,
              transform: `rotate(${piece.rotation}deg)`,
              borderRadius: `${piece.size * 0.2}px`, // Rounded corners like your splash
              '--drift': `${drift}px`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default ConfettiAnimation;
