import type { Metadata } from 'next';
import { SiteHeader } from '../components/SiteHeader';
import { DeferredVideo } from '../components/DeferredVideo';
import { AnnouncementBar, SiteFooter } from '../components/SiteChrome';
import { SolutionDirectory } from '../components/SolutionDirectory';

export const metadata: Metadata = {
  title: 'Solar Solutions for Every Rooftop, Campus & Infrastructure | Surya Sangam',
  description: 'Explore Surya Sangam pathways for homes, businesses, institutions, water infrastructure, public assets and agrivoltaic systems.',
};

export default function SolutionsIndex() {
  return (
    <>
      <AnnouncementBar message="Explore the right solar pathway for your place" />
      <SiteHeader currentSlug="solutions" />
      <main className="solution-page solutions-index-page ss-solutions-index">
        <section className="solutions-directory-hero">
          <div className="ss-container solutions-directory-grid">
            <div className="solutions-directory-copy">
              <p className="ss-kicker"><span className="sun-pip" /> SOLUTIONS DIRECTORY · CALCULATE · CONSULT · SWITCH ON</p>
              <h1>Find the solar path that fits <span>your world.</span></h1>
              <p>From rooftops to district programmes, find your next step.</p>
              <div className="directory-actions"><a className="ss-button ss-button-yellow" href="/#surya-calc">Calculate your savings <span>→</span></a><a className="ss-text-link" href="#pathways">Browse pathways <span>↓</span></a></div>
            </div>
            <div className="directory-hero-panel"><DeferredVideo className="directory-hero-video" poster="/images/surya-education.jpg" src="https://cdn.coverr.co/videos/coverr-aerial-view-of-solar-panels-1575/1080p.mp4" /><div className="directory-hero-panel-sun">☼</div><div className="directory-hero-panel-copy"><strong>clean-energy<br />pathways</strong><small>for homes, organisations &amp; infrastructure</small></div><div className="directory-hero-lines" /></div>
          </div>
          <div className="ss-container directory-proof"><span>facility-specific</span><span>technology-enabled</span><span>built to scale</span></div>
        </section>

        <section className="pathways-section" id="pathways">
          <div className="ss-container"><div className="pathways-heading"><div><p className="ss-kicker">CHOOSE YOUR PATHWAY</p><h2>Clean energy, made <span>specific.</span></h2></div><p>Match a pathway to your place and energy needs.</p></div><SolutionDirectory /></div>
        </section>

        <section className="solution-principles"><div className="ss-container principles-grid"><div><p className="ss-kicker light"><span className="sun-pip" /> THE SURYA SANGAM APPROACH</p><h2>From <span>sunlight to impact.</span></h2><p>Assess, design, deliver and measure.</p></div><div className="principle-list"><div><span>Understand the place</span><p>Start with the facility.</p></div><div><span>Design the system</span><p>Match technology to the asset.</p></div><div><span>Measure the outcome</span><p>Track savings and impact.</p></div></div></div></section>

        <section className="solution-directory-cta"><div className="ss-container directory-cta-inner"><div><p className="ss-kicker">NOT SURE WHERE TO START?</p><h2>Tell us about your <span>place.</span></h2><p>We&apos;ll help you find the right solar pathway.</p></div><div className="directory-cta-actions"><a className="ss-button ss-button-yellow" href="mailto:customer.support@suryasangam.com">Talk to Surya Sangam <span>→</span></a><a className="ss-text-link" href="tel:+919303772737">+91 930 377 2737</a></div></div></section>
      </main>
      <SiteFooter variant="solutions" />
    </>
  );
}
