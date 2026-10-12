'use client';

export function SolarMark({ className = '' }: { className?: string }) {
  return (
    <span className={`solar-mark ${className}`} aria-hidden="true">
      <i /><i /><i /><i /><i /><i /><i /><i />
    </span>
  );
}
