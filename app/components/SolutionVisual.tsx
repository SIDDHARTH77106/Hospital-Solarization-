'use client';

import { useState, type ReactNode } from 'react';
import type { SolutionItem, SolutionVisual } from '../solutions/data';

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

function StatsVisual({ items }: { items: SolutionItem[] }) {
  const stats = items.filter((item) => item.kind === 'stat');
  if (!stats.length) return null;
  return (
    <div className="solution-visual-stat-grid" aria-label="Key project facts">
      {stats.map((item) => (
        <div className="solution-visual-stat" key={`${item.label}-${item.text}`}>
          <span>{item.label}</span>
          <strong>{item.text}</strong>
        </div>
      ))}
    </div>
  );
}

function CaseStudyVisual({ items }: { items: SolutionItem[] }) {
  return <StatsVisual items={items} />;
}

function ProductCardsVisual({ items }: { items: SolutionItem[] }) {
  const products = ['SuryaCALC', 'SuryaNexa', 'Surya Impact OS']
    .map((name) => {
      const detail = items.find((item) => item.label?.startsWith(name));
      return detail ? { name, detail: detail.text } : null;
    })
    .filter(Boolean) as { name: string; detail: string }[];

  if (!products.length) return null;
  return (
    <div>
      <div className="solution-visual-card-grid product-card-grid">
        {products.map((product) => (
          <article className="solution-visual-card product-card" key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function SolutionCardsVisual({ items }: { items: SolutionItem[] }) {
  const cards = labelledItems(items).filter((item) => item.label !== 'Important note').slice(0, 6);
  const bulletItem = items.find((item) => item.bullets?.length);
  const cardItems: SolutionItem[] = cards.length
    ? cards
    : (bulletItem?.bullets ?? []).map((bullet) => ({ label: bullet, text: '' }));
  if (!cardItems.length) return null;
  return (
    <div className={`solution-visual-card-grid ${cardItems.length === 2 ? 'two-card-grid' : ''}`}>
      {cardItems.map((item) => (
        <article className="solution-visual-card" key={`${item.label}-${item.text}`}>
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
      {kind === 'case-study' && <CaseStudyVisual items={items} />}
      {kind === 'product-cards' && <ProductCardsVisual items={items} />}
      {kind === 'solution-cards' && <SolutionCardsVisual items={items} />}
      {kind === 'network' && <NetworkVisual education={slug === 'education-institutional-solarization'} />}
      {kind === 'water-network' && <NetworkVisual water />}
      {kind === 'agrivoltaic' && <AgrivoltaicVisual />}
      {kind === 'landscape' && <LandscapeVisual />}
    </div>
  );
}
