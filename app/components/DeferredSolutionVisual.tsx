'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import type { SolutionItem, SolutionVisual as SolutionVisualKind } from '../solutions/data';

const SolutionVisual = dynamic(
  () => import('./SolutionVisual').then((module) => module.SolutionVisual),
  { ssr: false },
);

export function DeferredSolutionVisual({ kind, slug, items }: { kind: SolutionVisualKind; slug: string; items: SolutionItem[] }) {
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

  return <div ref={shellRef} className={`solution-visual-lazy-shell visual-${kind}`} data-visual-kind={kind} aria-hidden={!shouldLoad}>{shouldLoad && <SolutionVisual kind={kind} slug={slug} items={items} />}</div>;
}
