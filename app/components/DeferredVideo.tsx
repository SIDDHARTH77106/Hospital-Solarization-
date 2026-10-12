'use client';

import { useEffect, useRef, useState } from 'react';

type DeferredVideoProps = {
  className?: string;
  poster: string;
  src: string;
  ariaHidden?: boolean;
};

export function DeferredVideo({ className, poster, src, ariaHidden = true }: DeferredVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || !('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '320px 0px' });

    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) videoRef.current?.load();
  }, [shouldLoad]);

  return (
    <div ref={shellRef} className="deferred-video-shell">
      <video ref={videoRef} className={className} autoPlay={shouldLoad} muted loop playsInline preload="none" poster={poster} aria-hidden={ariaHidden}>
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
