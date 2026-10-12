'use client';

import Link from 'next/link';
import { useState } from 'react';
import { allSolutions } from '../solutions/data';
import { TiltCard } from './TiltCard';

const solutionVisuals: Record<string, { image: string; label: string; accent: string; summary: string }> = {
  'hospital-solarization': { image: '/images/surya-healthcare.jpg', label: 'Healthcare & critical loads', accent: 'blue', summary: 'Solar for hospitals and critical care.' },
  'education-institutional-solarization': { image: '/images/surya-education.jpg', label: 'Campuses & institutions', accent: 'teal', summary: 'Multi-site solar for schools and campuses.' },
  'industrial-msme-solarization': { image: '/images/surya-business.jpg', label: 'Factories & MSMEs', accent: 'yellow', summary: 'Rooftop and shed solar for working businesses.' },
  'infrastructure/water': { image: '/images/surya-water.jpg', label: 'Water & utilities', accent: 'aqua', summary: 'Reliable energy for treatment and pumping.' },
  'infrastructure/government': { image: '/images/surya-government.jpg', label: 'Public infrastructure', accent: 'navy', summary: 'Solar programmes for civic assets.' },
  'infrastructure/large-scale': { image: '/images/surya-agrivoltaic.jpg', label: 'Land & agrivoltaics', accent: 'green', summary: 'Dual-use solar for land and agriculture.' },
};

const sectors = [
  { label: 'All pathways', value: 'all' },
  { label: 'Sector solutions', value: 'sector' },
  { label: 'Infrastructure', value: 'infrastructure' },
] as const;

export function SolutionDirectory() {
  const [activeSector, setActiveSector] = useState<(typeof sectors)[number]['value']>('all');
  const visibleSolutions = allSolutions.filter((solution) => {
    if (activeSector === 'all') return true;
    const isInfrastructure = solution.slug.includes('/');
    return activeSector === 'infrastructure' ? isInfrastructure : !isInfrastructure;
  });

  return (
    <>
      <div className="pathway-filter" role="tablist" aria-label="Filter solution pathways">
        {sectors.map((sector) => (
          <button
            type="button"
            key={sector.value}
            className={activeSector === sector.value ? 'active' : ''}
            role="tab"
            aria-selected={activeSector === sector.value}
            onClick={() => setActiveSector(sector.value)}
          >
            {sector.label}
          </button>
        ))}
      </div>

      <div className="solution-directory-grid" aria-live="polite">
        {visibleSolutions.map((solution) => {
          const visual = solutionVisuals[solution.slug];
          const isInfrastructure = solution.slug.includes('/');
          const originalIndex = allSolutions.findIndex((item) => item.slug === solution.slug);

          return (
            <TiltCard key={solution.slug} maxTilt={2} className={`directory-card-wrap ${visual.accent}`}>
              <Link href={solution.url} className="directory-card">
                <div className="directory-card-image">
                  <img
                    src={visual.image}
                    alt={visual.label}
                    loading={originalIndex === 0 ? 'eager' : 'lazy'}
                    fetchPriority={originalIndex === 0 ? 'high' : undefined}
                    decoding="async"
                  />
                  <b>{isInfrastructure ? 'INFRASTRUCTURE' : 'SECTOR SOLUTION'}</b>
                </div>
                <div className="directory-card-copy">
                  <p>{visual.label}</p>
                  <h3>{solution.navLabel}</h3>
                  <span>{visual.summary}</span>
                  <div className="directory-card-footer"><small>View pathway</small><i>→</i></div>
                </div>
              </Link>
            </TiltCard>
          );
        })}
      </div>
    </>
  );
}
