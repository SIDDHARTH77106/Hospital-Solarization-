'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {}, []);
  return <main className="site-state site-error"><div className="site-state-orbit" aria-hidden="true">☼</div><p className="ss-kicker"><span className="sun-pip" /> TEMPORARY SIGNAL LOSS</p><h1>We&apos;re reconnecting your <span>solar pathway.</span></h1><p>Something interrupted this view. Try again or continue from the solutions directory.</p><div className="site-state-actions"><button className="ss-button ss-button-yellow" type="button" onClick={() => reset()}>Try again <span>↻</span></button><Link className="ss-text-link" href="/solutions">Browse solutions <span>→</span></Link></div></main>;
}
