import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allSolutions, getSolution, type SolutionItem, type SolutionPage, type SolutionSection } from '../data';
import { getVisitorPage } from '../visitor-content';
import { SiteHeader } from '../../components/SiteHeader';
import { ScrollRevealInit } from '../../components/ScrollRevealInit';
import { DeferredSolutionVisual } from '../../components/DeferredSolutionVisual';
import { SolutionProgressNav } from '../../components/SolutionProgressNav';
import { DeferredVideo } from '../../components/DeferredVideo';
import { Typewriter } from '../../components/Typewriter';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { AnnouncementBar, SiteFooter } from '../../components/SiteChrome';

type RouteProps = { params: Promise<{ slug: string[] }> };
type HeroProof = { value: number; suffix?: string; label: string };
type HeroVisual = {
  image: string;
  eyebrow: string;
  caption: string;
  stat: string;
  alt: string;
  proof?: HeroProof[];
  heroSupport?: string;
  heroBody?: string;
  primaryCta?: string;
  secondaryCta?: string;
  showMediaOverlay?: boolean;
};

const heroVisuals: Record<string, HeroVisual> = {
  'hospital-solarization': {
    image: '/images/surya-healthcare.jpg',
    eyebrow: 'HEALTHCARE ENERGY TRANSITION',
    caption: 'Power continuity for care',
    stat: '24/7 critical-load planning',
    alt: 'Hospital energy planning and rooftop solar for critical healthcare power',
    proof: [
      { value: 150, suffix: ' kW', label: 'Solarized' },
      { value: 10, label: 'CHCs' },
      { value: 19, label: 'Days' },
    ],
    heroSupport: 'Intelligent Solar Energy Solutions for Hospitals & Healthcare Infrastructure',
    heroBody: 'Surya Sangam enables hospitals and healthcare institutions to transition towards cleaner, more resilient energy infrastructure through solar assessment, system design, project execution, monitoring and impact measurement. From government Community Health Centres to private hospitals and healthcare networks, we build facility-specific solarization strategies designed around operational requirements, energy consumption and long-term sustainability goals.',
    primaryCta: 'Request a Solar Assessment',
    secondaryCta: 'Talk to Our Energy Team',
    showMediaOverlay: false,
  },
  'education-institutional-solarization': { image: '/images/surya-education.jpg', eyebrow: 'CAMPUS ENERGY TRANSITION', caption: 'Learning environments with more resilience', stat: 'Multi-site campus planning', alt: 'Education campus solar planning for schools, colleges and institutional facilities' },
  'industrial-msme-solarization': { image: '/images/surya-business.jpg', eyebrow: 'BUSINESS ENERGY TRANSITION', caption: 'A rooftop that works as hard as you do', stat: 'Designed for operating savings', alt: 'Industrial and MSME rooftop solar planning for business energy savings' },
  'infrastructure/water': { image: '/images/surya-water.jpg', eyebrow: 'WATER ENERGY TRANSITION', caption: 'Keep essential systems moving', stat: 'Treatment + pumping + irrigation', alt: 'Solar energy infrastructure for water treatment, pumping and irrigation' },
  'infrastructure/government': { image: '/images/surya-government.jpg', eyebrow: 'PUBLIC INFRASTRUCTURE TRANSITION', caption: 'One programme. Multiple public assets.', stat: 'Distributed infrastructure view', alt: 'Distributed solar planning for government buildings and public infrastructure' },
  'infrastructure/large-scale': { image: '/images/surya-agrivoltaic.jpg', eyebrow: 'LAND & ENERGY TRANSITION', caption: 'More productivity from the same land', stat: 'Solar + agriculture together', alt: 'Agrivoltaic solar panels sharing land with productive agricultural fields' },
};

const detailMedia: Record<string, string[]> = {
  'hospital-solarization': ['/images/surya-healthcare.jpg', '/images/surya-consultation.jpg', '/images/surya-community.jpg'],
  'education-institutional-solarization': ['/images/surya-education.jpg', '/images/surya-community.jpg', '/images/surya-home.jpg'],
  'industrial-msme-solarization': ['/images/surya-business.jpg', '/images/surya-community.jpg', '/images/surya-consultation.jpg'],
  'infrastructure/water': ['/images/surya-water.jpg', '/images/surya-business.jpg', '/images/surya-agrivoltaic.jpg'],
  'infrastructure/government': ['/images/surya-government.jpg', '/images/surya-education.jpg', '/images/surya-community.jpg'],
  'infrastructure/large-scale': ['/images/surya-agrivoltaic.jpg', '/images/surya-water.jpg', '/images/surya-business.jpg'],
};

const layoutVariants: Record<string, { name: string; label: string }> = {
  'hospital-solarization': { name: 'clinical', label: 'Clinical pathway' },
  'education-institutional-solarization': { name: 'campus', label: 'Campus pathway' },
  'industrial-msme-solarization': { name: 'industrial', label: 'Industrial pathway' },
  'infrastructure/water': { name: 'utility', label: 'Utility pathway' },
  'infrastructure/government': { name: 'civic', label: 'Civic pathway' },
  'infrastructure/large-scale': { name: 'landscape', label: 'Landscape pathway' },
};

function readSlug(parts: string[]) { return parts.join('/'); }

export function generateStaticParams() { return allSolutions.map((solution) => ({ slug: solution.slug.split('/') })); }

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(readSlug(slug));
  if (!solution) return {};
  const visual = heroVisuals[solution.slug] ?? heroVisuals['hospital-solarization'];
  const title = solution.seoTitle ?? `${solution.seoKeyword ?? solution.navLabel} | Surya Sangam`;
  const description = solution.metaDescription ?? `${solution.navLabel} solutions from Surya Sangam, covering assessment, design, execution, monitoring and measurable impact.`;
  const canonical = solution.url;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 } },
    openGraph: { title, description, url: canonical, siteName: 'Surya Sangam', type: 'website', images: [{ url: visual.image, alt: visual.alt }] },
    twitter: { card: 'summary_large_image', title, description, images: [visual.image] },
  };
}

function SolutionStructuredData({ solution, visual, title, description }: { solution: SolutionPage; visual: { image: string; alt: string }; title: string; description: string }) {
  const canonical = `https://suryasangam.com${solution.url}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: 'en-IN',
        isPartOf: { '@type': 'WebSite', name: 'Surya Sangam', url: 'https://suryasangam.com' },
        primaryImageOfPage: { '@type': 'ImageObject', url: `https://suryasangam.com${visual.image}`, caption: visual.alt },
      },
      {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: solution.navLabel,
        serviceType: solution.seoKeyword ?? solution.navLabel,
        description,
        url: canonical,
        image: `https://suryasangam.com${visual.image}`,
        provider: { '@type': 'Organization', name: 'Surya Sangam', url: 'https://suryasangam.com' },
        areaServed: { '@type': 'Country', name: 'India' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Solutions', item: 'https://suryasangam.com/solutions' },
          { '@type': 'ListItem', position: 2, name: solution.navLabel, item: canonical },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}

function isInternalMetadata(content: SolutionItem) {
  return content.label === 'Suggested URL' || content.label === 'Primary SEO Keyword' || content.label === 'Source brief' || content.label === 'Page Objective' || content.label === 'FRONT-END DIRECTION' || content.label === 'DESIGN NOTE' || content.label === 'SEO TOPICS' || content.text.startsWith('/');
}

function visitorHeading(section: SolutionSection) {
  if (section.title) return section.title;
  const sourceHeading = section.items.find((item) => item.label === 'Heading' || item.label === 'SUBHEAD');
  if (sourceHeading?.text) return sourceHeading.text;
  return cleanSectionKicker(section.kicker);
}

function cleanSectionKicker(kicker: string) {
  return kicker.replace(/^SECTION\s+\d+\s+—\s*/i, '').replace(/^\d+\s+—\s*/, '').trim();
}

const hospitalSectionKeywords: Record<string, string> = {
  '03 — PROBLEM': 'Solar Energy for Hospitals · Healthcare Solar Energy',
  '05 — PROVEN EXECUTION': 'Hospital Solarization Projects',
  '06 — DIGITAL ECOSYSTEM': 'Hospital Solar Power Solutions',
  '07 — HEALTHCARE SOLUTIONS': 'Solar + Battery for Hospitals · Off-Grid Solar for Healthcare · Solar Solutions for Healthcare Infrastructure',
  '08 — WHO WE SERVE': 'Government Hospital Solarization · Private Hospital Solar Solutions',
};

function CtaLabel({ text }: { text: string }) {
  return <>{text}{text.trim().endsWith('→') ? null : <> <span>→</span></>}</>;
}

function HeroCopy({ visual, title, heroLead }: { visual: HeroVisual; title: string; heroLead: string }) {
  return <div className="solution-detail-hero-copy">
    <p className="ss-kicker"><span className="sun-pip" /> {visual.eyebrow}</p>
    <h1>{title}</h1>
    <p>{visual.heroSupport ?? heroLead}</p>
    {visual.heroBody && <p className="hero-detail-body">{visual.heroBody}</p>}
    <div className="detail-hero-actions">
      <a className="ss-button ss-button-yellow" href="mailto:customer.support@suryasangam.com">{visual.primaryCta ?? 'Start an assessment'} <span>→</span></a>
      <a className="ss-text-link" href={visual.secondaryCta ? '#section-2' : '#section-1'}>{visual.secondaryCta ?? 'Explore the pathway'} <span>{visual.secondaryCta ? '→' : '↓'}</span></a>
    </div>
    {!visual.heroBody && <div className="detail-hero-stat"><strong>{visual.stat}</strong><span>Built around your facility and priorities.</span></div>}
    {!visual.heroBody && <div className="detail-typewriter"><span className="signal-dot" /><Typewriter phrases={['ASSESS THE FACILITY', 'DESIGN THE SYSTEM', 'MEASURE THE IMPACT']} /></div>}
  </div>;
}

function HeroMedia({ visual }: { visual: HeroVisual }) {
  return <div className="solution-detail-hero-media">
    {!visual.proof && <div className="detail-hero-orbit" aria-hidden="true" />}
    <img src={visual.image} alt={visual.alt} fetchPriority="high" decoding="async" />
    {visual.proof && <div className="clinical-proof-badge" aria-label="Proof of execution">{visual.proof.map((item) => <span key={`${item.value}-${item.label}`}><AnimatedCounter value={item.value} suffix={item.suffix} /> {item.label}</span>)}</div>}
    {visual.showMediaOverlay !== false && <div className="detail-media-overlay"><span>{visual.eyebrow}</span><strong>{visual.caption}</strong></div>}
  </div>;
}

function SolutionDetailHero({ variant, visual, title, heroLead }: { variant: string; visual: HeroVisual; title: string; heroLead: string }) {
  const copy = <HeroCopy visual={visual} title={title} heroLead={heroLead} />;
  const media = <HeroMedia visual={visual} />;
  return <section className={`solution-detail-hero solution-detail-hero-${variant}`}>
    <div className={`ss-container solution-detail-hero-layout hero-layout-${variant}`}>
      {variant === 'campus' ? <><div className="hero-campus-intro">{copy}</div><div className="hero-campus-stage">{media}</div></> : null}
      {variant === 'industrial' ? <><div className="hero-industrial-stage">{media}</div><div className="hero-industrial-copy">{copy}</div></> : null}
      {variant === 'utility' ? <><div className="hero-utility-copy">{copy}</div><div className="hero-utility-stage">{media}</div></> : null}
      {variant === 'civic' ? <><div className="hero-civic-copy">{copy}</div><div className="hero-civic-stage">{media}</div></> : null}
      {variant === 'landscape' ? <><div className="hero-landscape-stage">{media}</div><div className="hero-landscape-copy">{copy}</div></> : null}
      {variant === 'clinical' ? <><div className="hero-clinical-copy" data-reveal>{copy}</div><div className="hero-clinical-stage" data-reveal>{media}</div></> : null}
    </div>
  </section>;
}

function Section({ section, index, solutionSlug, variant }: { section: SolutionSection; index: number; solutionSlug: string; variant: string }) {
  const visibleItems = section.items
    .filter((content) => !isInternalMetadata(content))
    .filter((content) => content.kind !== 'cta' && content.kind !== 'flow')
    .filter((content) => {
      if (solutionSlug !== 'hospital-solarization') return true;
      if (section.visual === 'stats' || section.visual === 'case-study') return content.kind !== 'stat';
      if (section.visual === 'product-cards' || section.visual === 'solution-cards') return !content.label;
      return true;
    });
  const visual = section.visual;
  const sectionCtas = section.items.filter((content) => content.kind === 'cta');
  const sectionNumber = solutionSlug === 'hospital-solarization' ? index + 2 : index + 1;
  const keywordLine = solutionSlug === 'hospital-solarization' ? hospitalSectionKeywords[section.kicker] : undefined;
  return <section className={`solution-section ss-detail-section section-index-${sectionNumber} section-layout-${variant} section-visual-${visual ?? 'text'}`} id={`section-${sectionNumber}`} data-reveal><div className="ss-container solution-section-inner"><div className="solution-section-head"><p className="ss-kicker"><span className="sun-pip" /> {cleanSectionKicker(section.kicker)}</p><h2>{visitorHeading(section)}</h2>{keywordLine && <p className="solution-section-keywords">{keywordLine}</p>}</div><div className="solution-section-body">{visual && <DeferredSolutionVisual kind={visual} slug={solutionSlug} items={section.items} />}<div className="solution-detail-items">{visibleItems.map((content, itemIndex) => <div className={`solution-item ${content.bullets ? 'has-bullets' : ''}`} key={`${content.label ?? 'item'}-${itemIndex}`}>{content.label && <p className="solution-label">{content.label}</p>}{content.text && <p className={content.kind === 'stat' ? 'solution-stat' : undefined}>{content.text}</p>}{content.bullets && <ul>{content.bullets.map((value) => <li key={value}>{value}</li>)}</ul>}</div>)}</div>{sectionCtas.length > 0 && <div className="solution-section-actions">{sectionCtas.map((content) => <a className="ss-button ss-button-yellow" href="mailto:customer.support@suryasangam.com" key={content.text}><CtaLabel text={content.text} /></a>)}</div>}</div></div></section>;
}

function Placeholder({ solution }: { solution: SolutionPage }) {
  return <main className="solution-page placeholder-page ss-solution-detail"><div className="ss-container placeholder-shell"><p className="ss-kicker"><span className="sun-pip" /> SOLUTIONS DIRECTORY</p><h1>{solution.title}</h1><div className="placeholder-card"><p className="solution-label">SOURCE BRIEF IN PROGRESS</p><p>This route is reserved for the full brief. Explore the other active solution pathways while this page is being prepared.</p><Link href="/solutions" className="ss-button ss-button-yellow">View all pathways <span>→</span></Link></div></div></main>;
}

export default async function SolutionPageRoute({ params }: RouteProps) {
  const { slug } = await params;
  const solution = getSolution(readSlug(slug));
  if (!solution) notFound();
  const visitorPage = getVisitorPage(solution);
  const isHospital = solution.slug === 'hospital-solarization';
  const customerSections = isHospital
    ? visitorPage.sections
    : visitorPage.sections
      .filter((section) => section.kicker !== 'SEO')
      .filter((section) => !/why surya sangam|our commitment|vision|next step|solar boardroom/i.test(section.title ?? ''))
      .slice(0, 7);
  const heroCtas = visitorPage.sections[0]?.items.filter((item) => item.kind === 'cta').slice(0, 2) ?? [];
  const visual = heroVisuals[solution.slug] ?? heroVisuals['hospital-solarization'];
  const pageClass = `solution-page-${solution.slug.replaceAll('/', '-')}`;
  const layout = layoutVariants[solution.slug] ?? layoutVariants['hospital-solarization'];

  const gallery = detailMedia[solution.slug] ?? detailMedia['hospital-solarization'];
  const [firstSection, ...remainingSections] = customerSections;
  const contentSections = isHospital ? remainingSections : customerSections;
  const contentSectionOffset = isHospital ? 1 : 0;
  const pageTitle = solution.seoTitle ?? `${solution.seoKeyword ?? solution.navLabel} | Surya Sangam`;
  const pageDescription = solution.metaDescription ?? `${solution.navLabel} solutions from Surya Sangam, covering assessment, design, execution, monitoring and measurable impact.`;
  const relatedSolutions = allSolutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <ScrollRevealInit />
      <AnnouncementBar message="Find the right solar pathway for your place" />
      <SiteHeader currentSlug={solution.slug} />
      {solution.sections.length === 0 ? <Placeholder solution={solution} /> : (
        <main className={`solution-page ss-solution-detail ${pageClass} solution-layout-${layout.name}`}>
          <SolutionStructuredData solution={solution} visual={visual} title={pageTitle} description={pageDescription} />
          <nav className="ss-container solution-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/solutions">Solutions</Link><span aria-hidden="true">/</span><span aria-current="page">{solution.navLabel}</span>
          </nav>
          <SolutionDetailHero variant={layout.name} visual={visual} title={solution.h1 ?? solution.title} heroLead={visitorPage.heroLead} />
          {isHospital && firstSection && <Section section={firstSection} index={0} solutionSlug={solution.slug} variant={layout.name} />}
          <SolutionProgressNav label={solution.navLabel} />
          <section className="solution-media-section" aria-label={`${solution.navLabel} media gallery`}>
            <div className={`solution-media-ribbon ss-container media-ribbon-${layout.name}`}>
              {gallery.map((image, index) => (
                <div className="solution-media-tile" key={image}>
                  <img src={image} alt={index === 0 ? visual.alt : `${solution.navLabel} clean-energy project visual`} loading="lazy" decoding="async" />
                  {index === 1 && <DeferredVideo poster={image} src="https://cdn.coverr.co/videos/coverr-aerial-view-of-solar-panels-1575/1080p.mp4" />}
                </div>
              ))}
            </div>
          </section>
          <div className={`solution-content solution-detail-content solution-content-${layout.name}`}>
            {contentSections.map((section, index) => <Section section={section} index={index + contentSectionOffset} solutionSlug={solution.slug} variant={layout.name} key={`${section.kicker}-${index}`} />)}
          </div>
          {!isHospital && <section className="related-solutions">
            <div className="ss-container">
              <p className="ss-kicker"><span className="sun-pip" /> RELATED PATHWAYS</p>
              <h2>Explore related solar pathways</h2>
              <div className="related-solutions-grid">
                {relatedSolutions.map((item) => <Link href={item.url} key={item.slug}><span>{item.navLabel}</span><strong>Explore pathway <b>→</b></strong></Link>)}
              </div>
            </div>
          </section>}
          {!isHospital && <section className="solution-detail-cta">
            <div className="ss-container detail-cta-grid">
              <div>
                <p className="ss-kicker light"><span className="sun-pip" /> TAKE THE NEXT STEP</p>
                <h2>Ready to plan solar for <span>{solution.navLabel.toLowerCase()}?</span></h2>
                <p>Tell us about your facility. We&apos;ll help model the right clean-energy pathway.</p>
              </div>
              <div className="detail-cta-actions">
                {heroCtas.length > 0 ? heroCtas.map((item) => <a className="ss-button ss-button-yellow" href="mailto:customer.support@suryasangam.com" key={item.text}>{item.text} <span>→</span></a>) : <a className="ss-button ss-button-yellow" href="mailto:customer.support@suryasangam.com">Talk to our team <span>→</span></a>}
                <Link className="ss-text-link light-link" href="/solutions">Browse all pathways <span>→</span></Link>
              </div>
            </div>
          </section>}
        </main>
      )}
      <SiteFooter variant="detail" pathway={solution.navLabel} />
    </>
  );
}
