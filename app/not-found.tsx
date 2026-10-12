import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';
import { AnnouncementBar, SiteFooter } from './components/SiteChrome';

export default function NotFound() {
  return <>
    <AnnouncementBar message="The right solar pathway is still one step away" />
    <SiteHeader currentSlug="solutions" />
    <main className="site-state site-not-found"><div className="site-state-orbit" aria-hidden="true">404</div><p className="ss-kicker"><span className="sun-pip" /> ROUTE NOT FOUND</p><h1>Let&apos;s get you back to <span>sunlight.</span></h1><p>That page is not part of the current Surya Sangam pathway. Explore the solutions directory or return home.</p><div className="site-state-actions"><Link className="ss-button ss-button-yellow" href="/solutions">Explore solutions <span>→</span></Link><Link className="ss-text-link" href="/">Back to home <span>→</span></Link></div></main>
    <SiteFooter variant="solutions" />
  </>;
}
