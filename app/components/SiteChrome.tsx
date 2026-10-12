import Link from 'next/link';

type AnnouncementBarProps = {
  message: string;
  linkLabel?: string;
  href?: string;
};

export function AnnouncementBar({ message, linkLabel = 'Try SuryaCalc →', href = '/#surya-calc' }: AnnouncementBarProps) {
  return <div className="announcement-bar"><span className="announcement-dot" /> <span>{message}</span><Link href={href}>{linkLabel}</Link></div>;
}

type FooterProps = {
  variant?: 'home' | 'solutions' | 'detail';
  pathway?: string;
};

const homeColumns = [
  { title: 'Offerings', links: [['Home Solar', '/#solutions'], ['Community Solar', '/#solutions'], ['For your business', '/#solutions']] },
  { title: 'Resources', links: [['SuryaCalc · AI Estimator', '/#surya-calc'], ['How it works', '/#how-it-works'], ['Clean-energy frameworks', '/solutions']] },
];

const solutionsColumns = [
  { title: 'Offerings', links: [['Home Solar', '/#solutions'], ['Community Solar', '/#solutions'], ['For your business', '/#solutions']] },
  { title: 'Resources', links: [['SuryaCalc · AI Estimator', '/#surya-calc'], ['How it works', '/#how-it-works'], ['Solutions directory', '/solutions']] },
];

export function SiteFooter({ variant = 'home', pathway }: FooterProps) {
  const columns = variant === 'home' ? homeColumns : solutionsColumns;
  const connect = [
    ['customer.support@suryasangam.com', 'mailto:customer.support@suryasangam.com'],
    ['+91 930 377 2737', 'tel:+919303772737'],
    ['Talk to us', '/#contact'],
  ];

  return <footer className="ss-footer" data-footer-variant={variant}>
    <div className="ss-container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo"><span>☼</span><strong>Surya<span>Sangam</span></strong></div>
        <p>{variant === 'detail' ? 'Born in Bharat. Simplifying solar for homes and businesses.' : 'Born in Bharat. Making solar easier for homes and businesses.'}</p>
        <span className="footer-tagline">#SolarForAll</span>
      </div>
      {variant === 'detail' ? <div className="footer-column"><h4>Pathway</h4><span>{pathway}</span><Link href="/solutions">All solutions</Link></div> : columns.map((column) => <div className="footer-column" key={column.title}><h4>{column.title}</h4>{column.links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>)}
      {variant === 'detail' && <div className="footer-column"><h4>Resources</h4><Link href="/#surya-calc">SuryaCalc · AI Estimator</Link><Link href="/#how-it-works">How it works</Link><Link href="/solutions">Solutions directory</Link></div>}
      <div className="footer-column"><h4>Connect</h4>{connect.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
    </div>
    <div className="ss-container footer-bottom"><span>© {new Date().getFullYear()} Surya Sangam. All Rights Reserved.</span><span>Aditya World City, Ghaziabad, Uttar Pradesh</span><span>Privacy · Terms · Vendor policy</span></div>
  </footer>;
}
