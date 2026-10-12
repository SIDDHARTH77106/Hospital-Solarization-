'use client';

import { useEffect, useState, type SVGProps } from 'react';
import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';
import { DeferredVideo } from './components/DeferredVideo';
import { Typewriter } from './components/Typewriter';
import { AnnouncementBar, SiteFooter } from './components/SiteChrome';

type IconName = 'arrow' | 'bolt' | 'check' | 'chevron' | 'home' | 'building' | 'community' | 'shield' | 'calculator';

function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
    bolt: <path d="M13 2 4 13h6l-1 9 9-12h-6l1-8Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>,
    building: <><path d="M4 21V4h11v17" /><path d="M15 9h5v12" /><path d="M8 8h3M8 12h3M8 16h3M18 13h1M18 17h1" /></>,
    community: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c.6-3.1 2.4-5 6-5s5.4 1.9 6 5M14 15c2.7-.4 4.6 1.1 5 3.8" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.7-2.9 8.2-7 10-4.1-1.8-7-5.3-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    calculator: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2M8 18h2M14 18h2" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{paths[name]}</svg>;
}

const offerings = [
  { id: 'home', eyebrow: 'HOME SOLAR', title: 'Solar for your home.', copy: 'Clear rooftop savings and subsidy guidance.', image: '/images/surya-home.jpg', alt: 'Indian home with a large rooftop solar installation in morning sunlight', icon: 'home' as IconName, tag: 'Subsidy-ready' },
  { id: 'community', eyebrow: 'COMMUNITY SOLAR', title: 'Shared power. Shared progress.', copy: 'Solar for apartments, institutions and neighbourhoods.', image: '/images/surya-community.jpg', alt: 'Technicians inspecting a community rooftop solar installation', icon: 'community' as IconName, tag: 'Built together' },
  { id: 'business', eyebrow: 'FOR YOUR BUSINESS', title: 'Cut costs. Keep moving.', copy: 'Practical solar for shops, factories and MSMEs.', image: '/images/surya-business.jpg', alt: 'Small Indian manufacturing unit with rooftop solar panels', icon: 'building' as IconName, tag: 'Built to scale' },
] as const;

const partners = ['Govt. of UP', 'StartInUP', 'Startup India', 'UPNEDA', 'PVVNL', 'Climate Collective'];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div data-reveal className={className}>{children}</div>;
}

export default function Home() {
  const [activeOffering, setActiveOffering] = useState(0);
  const [mode, setMode] = useState<'residential' | 'commercial'>('residential');
  const [pincode, setPincode] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [calcMessage, setCalcMessage] = useState('');
  const [calcStatus, setCalcStatus] = useState<'idle' | 'error'>('idle');
  const [isLocating, setIsLocating] = useState(false);

  function clearCalcMessage() {
    if (calcMessage || calcStatus !== 'idle') {
      setCalcMessage('');
      setCalcStatus('idle');
    }
  }

  function handleCalculate() {
    const normalizedPincode = pincode.replace(/\D/g, '');
    const normalizedBill = Number(monthlyBill.replace(/,/g, '').trim());

    if (!/^\d{6}$/.test(normalizedPincode)) {
      setCalcStatus('error');
      setCalcMessage('Enter a valid six-digit Indian pincode.');
      return;
    }

    if (!Number.isFinite(normalizedBill) || normalizedBill <= 0) {
      setCalcStatus('error');
      setCalcMessage('Enter your monthly electricity bill as a positive amount.');
      return;
    }

    setCalcStatus('error');
    setCalcMessage(`The ${mode} savings estimator is not configured yet. A calculation formula or estimator API is required before a reliable result can be shown.`);
  }

  function handleLocate() {
    if (!('geolocation' in navigator)) {
      setCalcStatus('error');
      setCalcMessage('Location is unavailable in this browser. Enter your pincode manually.');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLocating(false);
        setCalcStatus('error');
        setCalcMessage('Location permission was granted, but pincode lookup is not configured. Enter your pincode manually.');
      },
      (error) => {
        setIsLocating(false);
        setCalcStatus('error');
        setCalcMessage(error.code === error.PERMISSION_DENIED ? 'Location permission was denied. Enter your pincode manually.' : 'Location could not be determined. Enter your pincode manually.');
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 },
    );
  }

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) { elements.forEach((element) => element.classList.add('is-visible')); return; }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    elements.forEach((element, index) => { element.style.setProperty('--delay', `${(index % 4) * 70}ms`); observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  const active = offerings[activeOffering];

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <AnnouncementBar message="Solar made simple, from quote to installation" linkLabel="Try SuryaCalc →" href="/#surya-calc" />
      <SiteHeader currentSlug="home" />

      <main id="main">
        <section className="ss-hero" id="top">
          <div className="ss-container ss-hero-grid">
            <Reveal className="ss-hero-copy">
              <p className="ss-kicker"><span className="sun-pip" /> POWERING INDIA&apos;S SOLAR REVOLUTION</p>
              <h1>Transparent &amp; cost-effective <span>solar solutions.</span></h1>
              <p className="ss-hero-lede">Affordable rooftop solar for homes and businesses—clear savings and a cleaner future.</p>
              <div className="ss-actions"><a className="ss-button ss-button-yellow" href="#surya-calc">Calculate your savings <Icon name="arrow" /></a><a className="ss-text-link" href="#how-it-works">How it works <Icon name="arrow" /></a></div>
              <div className="ss-hero-proof"><span><Icon name="check" /> Verified installer network</span><span><Icon name="check" /> Subsidy guidance</span></div>
              <div className="hero-signal"><span className="signal-dot" /><Typewriter phrases={['ASSESS YOUR ROOFTOP', 'DESIGN THE RIGHT FIT', 'SWITCH ON WITH CONFIDENCE']} /></div>
            </Reveal>
            <Reveal className="ss-hero-media"><img src="/images/surya-home.jpg" alt="Indian home with a rooftop solar installation in golden sunlight" fetchPriority="high" decoding="async" /><div className="ss-image-badge"><span className="badge-icon"><Icon name="bolt" /></span><span><strong>Power your home</strong><small>with the sun</small></span></div><div className="ss-image-caption"><span>HOME SOLAR</span><b>More sun. Less bill.</b></div></Reveal>
          </div>
          <div className="ss-container hero-scroll"><span>Trusted by people building a brighter Bharat</span><span className="scroll-line" /><a href="#trust">Scroll to explore <Icon name="arrow" /></a></div>
        </section>

        <section className="media-journey-strip" aria-label="Solar journey media">
          <div className="ss-container media-journey-grid">
            <div className="media-journey-card media-journey-video">
              <DeferredVideo poster="/images/surya-home.jpg" src="https://cdn.coverr.co/videos/coverr-aerial-view-of-solar-panels-1575/1080p.mp4" />
              <span className="media-play-orbit">☼</span>
            </div>
            <div className="media-journey-card"><img src="/images/surya-community.jpg" alt="Community solar installation viewed across an Indian city rooftop" loading="lazy" decoding="async" /></div>
            <div className="media-journey-card"><img src="/images/surya-business.jpg" alt="Business rooftop solar installation above a working workshop" loading="lazy" decoding="async" /></div>
            <div className="media-journey-card"><img src="/images/surya-consultation.jpg" alt="Solar consultation at a bright home table" loading="lazy" decoding="async" /></div>
          </div>
        </section>

        <section className="trust-strip" id="trust"><div className="ss-container trust-inner"><p className="ss-kicker">TRUSTED ECOSYSTEM</p><div className="partner-marquee" aria-label="Trusted ecosystem partners"><div className="partner-list partner-marquee-track">{[...partners, ...partners].map((partner, index) => <span key={`${partner}-${index}`} aria-hidden={index >= partners.length}><i />{partner}</span>)}</div></div></div></section>

        <section className="calc-section" id="surya-calc"><div className="ss-container calc-grid"><Reveal className="calc-copy"><p className="ss-kicker light"><span className="sun-pip" /> SURYACALC · SOLAR SUBSIDY &amp; ROI</p><h2>See what your rooftop can do.</h2><p>Estimate your system, subsidy and savings.</p><div className="calc-points"><span><Icon name="calculator" /> Simple estimate</span><span><Icon name="shield" /> Clear guidance</span></div><a className="ss-button ss-button-white" href="#contact">Get an advanced quote <Icon name="arrow" /></a></Reveal><Reveal className="calc-card"><div className="calc-card-top"><span className="calc-card-title"><span className="calc-sun">☼</span> SuryaCalc</span><span className="calc-live"><i /> live estimate</span></div><div className="calc-tabs" role="tablist" aria-label="Property type"><button className={mode === 'residential' ? 'active' : ''} onClick={() => { setMode('residential'); clearCalcMessage(); }} role="tab" aria-selected={mode === 'residential'}><Icon name="home" /> Residential</button><button className={mode === 'commercial' ? 'active' : ''} onClick={() => { setMode('commercial'); clearCalcMessage(); }} role="tab" aria-selected={mode === 'commercial'}><Icon name="building" /> Commercial</button></div><div className="calc-field"><label htmlFor="pincode">Location</label><div className="input-row"><input id="pincode" value={pincode} onChange={(event) => { setPincode(event.target.value.replace(/\D/g, '').slice(0, 6)); clearCalcMessage(); }} placeholder="Enter pincode" inputMode="numeric" autoComplete="postal-code" aria-invalid={calcStatus === 'error' ? 'true' : undefined} /><button type="button" onClick={handleLocate} disabled={isLocating}>{isLocating ? 'Locating…' : 'Locate'}</button></div><small>For sunlight and subsidy details.</small></div><div className="calc-field"><label htmlFor="bill">Average monthly bill</label><div className="input-row"><span className="input-prefix">₹</span><input id="bill" value={monthlyBill} onChange={(event) => { setMonthlyBill(event.target.value.replace(/[^\d,]/g, '')); clearCalcMessage(); }} placeholder={mode === 'residential' ? '2,000' : '12,000'} inputMode="decimal" autoComplete="off" aria-invalid={calcStatus === 'error' ? 'true' : undefined} /><span className="input-suffix">/ month</span></div></div><div className="calc-preview" aria-live="polite"><span>Potential savings</span><strong>{calcStatus === 'error' ? 'Unavailable' : '—'}</strong><div className="preview-meter"><span style={{ width: '0%' }} /></div><small>{calcMessage || 'Enter your details to request an estimate.'}</small></div><button type="button" className="calc-submit" onClick={handleCalculate}>Calculate my estimate <Icon name="arrow" /></button></Reveal></div></section>

        <section className="offerings-section" id="solutions"><div className="ss-container"><Reveal className="section-intro"><div><p className="ss-kicker">OUR OFFERINGS</p><h2>Discover your <span>perfect fit.</span></h2></div><p>Choose a solar path for your home, community or business.</p></Reveal><Reveal className="offering-layout"><div className="offering-list">{offerings.map((offering, index) => <button className={`offering-tab ${activeOffering === index ? 'active' : ''}`} key={offering.id} onClick={() => setActiveOffering(index)}><span className="offering-tab-icon"><Icon name={offering.icon} /></span><span><small>{offering.eyebrow}</small><strong>{offering.title}</strong></span><Icon name="chevron" /></button>)}</div><article className={`offering-feature offering-feature-${active.id}`}><img key={active.id} src={active.image} alt={active.alt} loading="lazy" decoding="async" /><div className="offering-overlay"><div><span className="offering-tag">{active.tag}</span><h3>{active.title}</h3><p>{active.copy}</p></div><a href="#contact" aria-label={`Learn more about ${active.eyebrow.toLowerCase()}`}><Icon name="arrow" /></a></div></article></Reveal></div></section>

        <section className="steps-section" id="how-it-works"><div className="ss-container"><Reveal className="section-intro centered"><div><p className="ss-kicker">YOUR SOLAR JOURNEY</p><h2>Simple, swift, <span>smart.</span></h2></div><p>A clear path from estimate to installation.</p></Reveal><div className="steps-grid"><Reveal className="step-card"><div className="step-icon"><Icon name="calculator" /></div><h3>Calculate</h3><p>See your rooftop&apos;s solar potential.</p><a href="#surya-calc">Start with SuryaCalc <Icon name="arrow" /></a></Reveal><Reveal className="step-card"><div className="step-icon"><Icon name="community" /></div><h3>Consult</h3><p>Compare systems, subsidies and next steps.</p><a href="#contact">Talk to an expert <Icon name="arrow" /></a></Reveal><Reveal className="step-card"><div className="step-icon"><Icon name="bolt" /></div><h3>Switch on</h3><p>Install with support from start to finish.</p><a href="#contact">Make it real <Icon name="arrow" /></a></Reveal></div></div></section>

        <section className="story-section"><div className="ss-container story-grid"><Reveal className="story-media"><img src="/images/surya-consultation.jpg" alt="Solar advisor explaining a rooftop plan to a homeowner" loading="lazy" decoding="async" /><span>Clarity at every step</span></Reveal><Reveal className="story-copy"><p className="ss-kicker">WHY SURYA SANGAM</p><h2>Clean energy feels better when the journey is <span>human.</span></h2><p>Verified partners, subsidy support and a clear next step.</p><div className="story-facts"><div><span>Verified partners</span></div><div><span>Subsidy support</span></div><div><span>End-to-end guidance</span></div></div><a className="ss-text-link" href="#contact">Meet the Surya Sangam way <Icon name="arrow" /></a></Reveal></div></section>

        <section className="news-section"><div className="ss-container"><Reveal className="section-intro"><div><p className="ss-kicker">FROM THE SUNROOM</p><h2>Ideas for a <span>brighter future.</span></h2></div><Link className="ss-text-link" href="/solutions">View all resources <Icon name="arrow" /></Link></Reveal><div className="news-grid"><article className="news-card news-feature"><div className="news-art"><div className="news-sun" /><div className="news-panel" /><span>SMART ENERGY TIPS</span></div><div className="news-body"><small>Surya SmartHub · 06 min read</small><h3>What rooftop solar means for everyday homes.</h3><a href="#contact">Read story <Icon name="arrow" /></a></div></article><article className="news-card"><small>SOLAR BASICS</small><h3>Understand your savings without the jargon.</h3><a href="#surya-calc">Explore SuryaCalc <Icon name="arrow" /></a></article><article className="news-card yellow-card"><small>COMMUNITY</small><h3>Many rooftops. One brighter future.</h3><a href="#solutions">See the possibilities <Icon name="arrow" /></a></article></div></div></section>

        <section className="contact-section ss-contact" id="contact"><div className="ss-container contact-grid"><Reveal><p className="ss-kicker light"><span className="sun-pip" /> READY TO MAKE THE SWITCH?</p><h2>Turn sunlight into <span>something useful.</span></h2><p>Tell us about your home or business. We&apos;ll help with the next step.</p><div className="ss-actions"><a className="ss-button ss-button-yellow" href="mailto:customer.support@suryasangam.com">Talk to Surya Sangam <Icon name="arrow" /></a><a className="contact-phone" href="tel:+919303772737">+91 930 377 2737</a></div></Reveal><div className="contact-orbit" aria-hidden="true"><div className="contact-orbit-sun">☼</div><span>POWER<br />YOUR<br />DAY</span></div></div></section>
      </main>

      <SiteFooter variant="home" />
    </>
  );
}
