'use client';

import { useEffect, useState } from 'react';

type TypewriterProps = {
  phrases: readonly string[];
  className?: string;
  typingSpeed?: number;
  pauseMs?: number;
};

export function Typewriter({ phrases, className = '', typingSpeed = 62, pauseMs = 1500 }: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex] ?? '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCharacterIndex(phrase.length);
      setDeleting(false);
      return;
    }

    const isComplete = characterIndex === phrase.length;
    const delay = isComplete && !deleting ? pauseMs : deleting ? Math.max(typingSpeed / 2, 28) : typingSpeed;

    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
      } else if (deleting && characterIndex === 0) {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      } else {
        setCharacterIndex((index) => index + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterIndex, deleting, pauseMs, phraseIndex, phrases, typingSpeed]);

  return (
    <span className={`typewriter ${className}`.trim()} aria-live="polite" aria-label={phrases[phraseIndex] ?? ''}>
      <span aria-hidden="true">{(phrases[phraseIndex] ?? '').slice(0, characterIndex)}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
