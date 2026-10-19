'use client';

import { useState, type ReactNode } from 'react';
import type { SolutionItem, SolutionVisual } from '../solutions/data';
import { AnimatedCounter } from './AnimatedCounter';

type SolutionVisualProps = {
  kind: SolutionVisual;
  slug: string;
  items: SolutionItem[];
};

function labelledItems(items: SolutionItem[]) {
  return items.filter((item) => item.label && item.kind !== 'cta' && item.kind !== 'stat');
}

function VisualHeading({ children }: { children: ReactNode }) {
  return <p className="solution-visual-heading">{children}</p>;
}

function StatValue({ text }: { text: string }) {
  const match = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <strong>{text}</strong>;
  return <strong><AnimatedCounter value={Number(match[1])} suffix={match[2]} /></strong>;
}

function StatsVisual({ items }: { items: SolutionItem[] }) {
  const stats = items.filter((item) => item.kind === 'stat');
  if (!stats.length) return null;
  return (
    <div className="solution-visual-stat-grid" aria-label="Key project facts">
      {stats.map((item) => (
        <div className="solution-visual-stat" key={`${item.label}-${item.text}`}>
          <span>{item.label}</span>
          <StatValue text={item.text} />
        </div>
      ))}
    </div>
  );
}

function PoweringCareVisual({ items }: { items: SolutionItem[] }) {
  const [active, setActive] = useState(0);
  const sites = [
    ['CHC 01', '16%', '22%'], ['CHC 02', '35%', '14%'], ['CHC 03', '59%', '22%'], ['CHC 04', '78%', '34%'], ['CHC 05', '69%', '59%'],
    ['CHC 06', '48%', '73%'], ['CHC 07', '24%', '66%'], ['CHC 08', '12%', '48%'], ['CHC 09', '39%', '42%'], ['CHC 10', '84%', '72%'],
  ] as const;
  const selected = sites[active];
  return (
    <div className="powering-care-visual">
      <div className="powering-care-map" role="region" aria-label="Powering Care map of 10 Community Health Centres in Prayagraj">
        <span className="powering-care-map-label">PRAYAGRAJ / POWERING CARE</span>
        <span className="powering-care-map-axis" aria-hidden="true" />
        {sites.map(([name, left, top], index) => (
          <button type="button" className={active === index ? 'is-active' : ''} style={{ left, top }} onClick={() => setActive(index)} key={name} aria-label={`${name}, 15 kW off-grid system`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <div className="powering-care-map-detail"><strong>{selected[0]}</strong><span>Prayagraj, Uttar Pradesh · 15 kW off-grid system</span></div>
      <StatsVisual items={items} />
    </div>
  );
}

function CaseStudyVisual({ items, slug }: { items: SolutionItem[]; slug: string }) {
  return slug === 'hospital-solarization' ? <PoweringCareVisual items={items} /> : <StatsVisual items={items} />;
}

function ProductCardsVisual({ items }: { items: SolutionItem[] }) {
  const products = ['SuryaCALC', 'SuryaNexa', 'Surya Impact OS']
    .map((name) => {
      const detail = items.find((item) => item.label?.startsWith(name));
      return detail ? { name, heading: detail.label?.split(' — ')[1] ?? '', detail: detail.text } : null;
    })
    .filter(Boolean) as { name: string; heading: string; detail: string }[];
  const [active, setActive] = useState(0);

  if (!products.length) return null;
  const activeProduct = products[active];
  const flows = ['Assess → Calculate → Design', 'Coordinate → Execute → Track', 'Monitor → Measure → Report'];
  return (
    <div className="product-ecosystem" aria-label="Digital energy ecosystem">
      <div className="product-ecosystem-tabs" role="tablist" aria-label="Digital energy stages">
        {products.map((product, index) => (
          <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)} key={product.name}>
            <span>0{index + 1}</span>{product.name}
          </button>
        ))}
      </div>
      <div className="product-ecosystem-stage" role="tabpanel" aria-live="polite">
        <VisualHeading>Stage 0{active + 1}</VisualHeading>
        <h3>{activeProduct.name}</h3>
        <p className="product-ecosystem-subheading">{activeProduct.heading}</p>
        <p>{activeProduct.detail}</p>
        <strong>{flows[active]}</strong>
      </div>
      <div className="product-ecosystem-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / products.length) * 100}%` }} /></div>
    </div>
  );
}

function SolutionCardsVisual({ items }: { items: SolutionItem[] }) {
  const cards = labelledItems(items).filter((item) => !/important note|^note$/i.test(item.label ?? '')).slice(0, 8);
  const bulletItem = items.find((item) => item.bullets?.length);
  const cardItems: SolutionItem[] = cards.length
    ? cards
    : (bulletItem?.bullets ?? []).map((bullet) => ({ label: bullet, text: '' }));
  const [active, setActive] = useState(0);
  if (!cardItems.length) return null;
  return (
    <div className={`solution-visual-card-grid ${cardItems.length === 2 ? 'two-card-grid' : ''}`}>
      {cardItems.map((item, index) => (
        <article className={`solution-visual-card ${active === index ? 'is-active' : ''}`} key={`${item.label}-${item.text}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} tabIndex={0}>
          <VisualHeading>{item.label}</VisualHeading>
          {item.text && <p>{item.text}</p>}
          {item.bullets && (
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function TimelineVisual({ items }: { items: SolutionItem[] }) {
  const steps = items.flatMap((item) => item.kind === 'flow' && item.steps ? item.steps : item.label ? [item.label] : [])
    .filter((step) => !/direction|visual/i.test(step));
  if (!steps.length) return null;
  return (
    <div className="solution-visual-timeline" aria-label="Process timeline">
      {steps.map((step, index) => {
        const label = step.replace(/^\d+\s+—\s*/i, '').replace(/\s+—.*$/, '').trim();
        return <div className="solution-visual-timeline-step" key={`${step}-${index}`}><span className="solution-visual-timeline-node">{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong></div>;
      })}
    </div>
  );
}

function NetworkVisual({ water = false, education = false }: { water?: boolean; education?: boolean }) {
  const nodes = water
    ? ['Treatment Plant', 'Pumping Station', 'Reservoir', 'Irrigation', 'Distribution']
    : education
    ? ['Government Schools', 'Colleges', 'Universities', 'Institutional Campuses']
    : ['Facility', 'Capacity', 'Status', 'Generation', 'Impact'];
  const details = water
    ? [
        'Treatment plants and their associated electrical loads.',
        'Pumping schedules, motor loads and energy-intensive operations.',
        'Floating, ground-mounted or adjacent installations where appropriate.',
        'Solar-powered and hybrid configurations for agricultural irrigation.',
        'Clean-energy solutions for distributed water-supply networks.',
      ]
    : education
    ? [
        'Government schools evaluated as part of connected institutional programmes.',
        'College campuses planned around their buildings and energy profile.',
        'University systems supported through coordinated multi-site planning.',
        'Institutional campuses brought into one programme-level view.',
      ]
    : [
        'Facility-level infrastructure view.',
        'Planned solar capacity view.',
        'Deployment and operating status view.',
        'Solar generation and performance view.',
        'Measured energy and environmental impact view.',
      ];
  const [active, setActive] = useState(0);
  const center = water ? 'WATER ENERGY NETWORK' : education ? 'INSTITUTIONAL NETWORK' : 'PUBLIC INFRASTRUCTURE';
  return (
    <div className={`solution-visual-network ${water ? 'is-water' : ''}`} role="region" aria-label={`${center} diagram`}>
      <div className="network-lines" aria-hidden="true" />
      <div className="network-center"><span>ENERGY VIEW</span><strong>{center}</strong></div>
      <div className="network-nodes">
        {nodes.map((node, index) => (
          <button type="button" className={active === index ? 'is-active' : ''} onClick={() => setActive(index)} key={node} style={{ ['--node-index' as string]: index }}>
            {node}
          </button>
        ))}
      </div>
      <div className="network-detail"><strong>{nodes[active]}</strong><span>{details[active]}</span></div>
    </div>
  );
}

function AgrivoltaicVisual() {
  const [mode, setMode] = useState<'solar' | 'agriculture' | 'combined'>('combined');
  return (
    <div className={`solution-visual-agrivoltaic is-${mode}`}>
      <div className="agrivoltaic-controls" role="tablist" aria-label="Agrivoltaic view">
        {(['solar', 'agriculture', 'combined'] as const).map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={mode === value}
            className={mode === value ? 'is-active' : ''}
            onClick={() => setMode(value)}
          >
            {value === 'solar' ? 'Solar View' : value === 'agriculture' ? 'Agriculture View' : 'Combined View'}
          </button>
        ))}
      </div>
      <div className="agrivoltaic-scene" aria-label="Solar panels and agricultural crops sharing land">
        <div className="agrivoltaic-sun" aria-hidden="true" />
        <div className="agrivoltaic-panels"><span>SOLAR PANELS</span></div>
        <div className="agrivoltaic-crops"><span>AGRICULTURAL CROPS</span></div>
        <div className="agrivoltaic-soil"><span>SOIL / LAND</span></div>
      </div>
    </div>
  );
}

function LandscapeVisual() {
  return (
    <div className="solution-visual-landscape" role="img" aria-label="Land-based solar and agricultural energy landscape">
      <div className="landscape-sun" aria-hidden="true" />
      <div className="landscape-horizon" aria-hidden="true" />
      <div className="landscape-array" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <div className="landscape-field" aria-hidden="true" />
    </div>
  );
}

export function SolutionVisual({ kind, slug, items }: SolutionVisualProps) {
  return (
    <div className={`solution-section-visual visual-${kind}`} data-visual-kind={kind} data-solution-slug={slug}>
      {kind === 'stats' && <StatsVisual items={items} />}
      {kind === 'case-study' && <CaseStudyVisual items={items} slug={slug} />}
      {kind === 'product-cards' && <ProductCardsVisual items={items} />}
      {kind === 'solution-cards' && <SolutionCardsVisual items={items} />}
      {kind === 'timeline' && <TimelineVisual items={items} />}
      {kind === 'network' && <NetworkVisual education={slug === 'education-institutional-solarization'} />}
      {kind === 'water-network' && <NetworkVisual water />}
      {kind === 'agrivoltaic' && <AgrivoltaicVisual />}
      {kind === 'landscape' && <LandscapeVisual />}
    </div>
  );
}
