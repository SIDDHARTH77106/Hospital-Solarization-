'use client';

import { useRef, type MouseEvent, type ReactNode } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  style?: React.CSSProperties;
};

export function TiltCard({
  children,
  className = '',
  maxTilt = 4,
  perspective = 1000,
  style = {},
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const tiltX = -y * maxTilt;
    const tiltY = x * maxTilt;

    card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      data-interaction="tilt"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.45s cubic-bezier(0.2, 0.75, 0.2, 1), box-shadow 0.45s ease',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
