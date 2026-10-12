'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SolarMark } from './SolarMark';

type SiteHeaderProps = {
  currentSlug?: string;
};

const sectorSolutions = [
  {
    slug: 'hospital-solarization',
    title: 'Hospital Solarization',
    badge: 'Healthcare',
    desc: '24/7 clinical loads & resilient healthcare systems',
    url: '/solutions/hospital-solarization',
  },
  {
    slug: 'education-institutional-solarization',
    title: 'Education & Institutional',
    badge: 'Campuses',
    desc: 'Schools, colleges & district institutional networks',
    url: '/solutions/education-institutional-solarization',
  },
  {
    slug: 'industrial-msme-solarization',
    title: 'Industrial & MSME',
    badge: 'Industry',
    desc: 'Factory sheds, rooftops & ESG advisory',
    url: '/solutions/industrial-msme-solarization',
  },
];

const infrastructureSolutions = [
  {
    slug: 'infrastructure/water',
    title: 'Water Infrastructure',
    badge: 'Utilities',
    desc: 'Treatment plants, pumping stations & water security',
    url: '/solutions/infrastructure/water',
  },
  {
    slug: 'infrastructure/government',
    title: 'Government Infrastructure',
    badge: 'Public Sector',
    desc: 'Civic buildings & multi-site public programmes',
    url: '/solutions/infrastructure/government',
  },
  {
    slug: 'infrastructure/large-scale',
    title: 'Large-Scale Solar',
    badge: 'Land & Agri',
    desc: 'Dual-use land, agrivoltaics & ground-mounted solar',
    url: '/solutions/infrastructure/large-scale',
  },
];

export function SiteHeader({ currentSlug = '' }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPinned, setDropdownPinned] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressFocusOpenRef = useRef(false);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openSolutions() {
    clearCloseTimer();
    setDropdownOpen(true);
  }

  function closeSolutionsSoon() {
    clearCloseTimer();
    if (dropdownPinned) return;
    closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 140);
  }

  function closeSolutions() {
    clearCloseTimer();
    setDropdownPinned(false);
    setDropdownOpen(false);
  }

  function closeMobileNavigation() {
    setMenuOpen(false);
    setMobileSolutionsOpen(false);
  }

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeSolutions();
      }
    }
    function handleEscape(event: KeyboardEvent) {
        if (event.key === 'Escape') {
          suppressFocusOpenRef.current = true;
          closeSolutions();
          closeMobileNavigation();
          triggerRef.current?.focus();
        }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      clearCloseTimer();
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isSolutionsActive = currentSlug !== '' && currentSlug !== 'home';

  return (
    <header className={`site-header site-header-modern ${menuOpen ? 'is-menu-open' : ''}`} data-current-slug={currentSlug} role="banner">
      <Link href="/" className="brand" aria-label="Surya Sangam - solar solutions, home">
        <span className="brand-mark">
          <SolarMark />
        </span>
        <span className="brand-text">
          SURYA <b>·</b> SANGAM
        </span>
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => (menuOpen ? closeMobileNavigation() : setMenuOpen(true))}
      >
        <span />
        <span />
      </button>

      {/* Desktop & Mobile Navigation */}
      <nav
        id="site-navigation"
        className={`main-nav ${menuOpen ? 'open' : ''}`}
        aria-label="Main site navigation"
      >
        <div className="nav-primary-links">
          <Link href="/#top" onClick={closeMobileNavigation}>
            Home
          </Link>
          <Link href="/#how-it-works" onClick={closeMobileNavigation}>
            How it works
          </Link>
          <Link href="/#surya-calc" onClick={closeMobileNavigation}>
            SuryaCalc
          </Link>

          {/* Desktop Solutions Dropdown */}
          <div
            className={`solutions-nav-container ${dropdownOpen ? 'is-open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutionsSoon}
            onFocus={() => {
              if (suppressFocusOpenRef.current) {
                suppressFocusOpenRef.current = false;
                return;
              }
              openSolutions();
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                closeSolutionsSoon();
              }
            }}
          >
            <button
              type="button"
              ref={triggerRef}
              className={`solutions-nav-trigger ${isSolutionsActive ? 'active-parent' : ''}`}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="solutions-menu"
              onClick={() => {
                if (dropdownPinned) {
                  closeSolutions();
                  return;
                }
                setDropdownPinned(true);
                openSolutions();
              }}
              onKeyDown={(event) => {
                if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  if (!dropdownOpen) openSolutions();
                  if (event.key === 'ArrowDown') {
                    window.setTimeout(() => dropdownRef.current?.querySelector<HTMLAnchorElement>('.dropdown-item')?.focus(), 0);
                  }
                }
              }}
            >
              <span>Solutions</span>
              <span className={`dropdown-caret ${dropdownOpen ? 'caret-rotated' : ''}`} aria-hidden="true">
                ⌄
              </span>
              {isSolutionsActive && <span className="active-parent-indicator" aria-hidden="true" />}
            </button>

            {dropdownOpen && (
              <div
                id="solutions-menu"
                className="solutions-dropdown-panel"
                role="menu"
                aria-label="Solutions Menu"
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutionsSoon}
              >
                <div className="dropdown-glow-orbit" aria-hidden="true" />
                <div className="dropdown-inner-grid">
                  <div className="dropdown-column">
                    <p className="dropdown-column-title">
                      <span className="dropdown-column-dot" /> SECTOR SOLUTIONS
                    </p>
                    <div className="dropdown-links-list">
                      {sectorSolutions.map((item) => {
                        const isActive = currentSlug === item.slug;
                        return (
                          <Link
                            key={item.slug}
                            href={item.url}
                            className={`dropdown-item ${isActive ? 'is-active' : ''}`}
                            role="menuitem"
                            onClick={() => {
                              closeSolutions();
                              closeMobileNavigation();
                            }}
                          >
                            <div className="dropdown-item-top">
                              <span className="dropdown-item-title">{item.title}</span>
                              <span className="dropdown-item-badge">{item.badge}</span>
                            </div>
                            <span className="dropdown-item-desc">{item.desc}</span>
                            <span className="dropdown-underline" aria-hidden="true" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="dropdown-column">
                    <p className="dropdown-column-title">
                      <span className="dropdown-column-dot dot-infra" /> INFRASTRUCTURE PATHWAYS
                    </p>
                    <div className="dropdown-links-list">
                      {infrastructureSolutions.map((item) => {
                        const isActive = currentSlug === item.slug;
                        return (
                          <Link
                            key={item.slug}
                            href={item.url}
                            className={`dropdown-item ${isActive ? 'is-active' : ''}`}
                            role="menuitem"
                            onClick={() => {
                              closeSolutions();
                              closeMobileNavigation();
                            }}
                          >
                            <div className="dropdown-item-top">
                              <span className="dropdown-item-title">{item.title}</span>
                              <span className="dropdown-item-badge badge-infra">{item.badge}</span>
                            </div>
                            <span className="dropdown-item-desc">{item.desc}</span>
                            <span className="dropdown-underline" aria-hidden="true" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="dropdown-footer">
                  <Link
                    href="/solutions"
                    className="dropdown-footer-link"
                    onClick={() => {
                      closeSolutions();
                      closeMobileNavigation();
                    }}
                  >
                    <span className="footer-link-text">Browse All Clean-Energy Frameworks</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Accordion for Solutions */}
        <div className="mobile-solutions-accordion">
          <button
            type="button"
            className={`mobile-solutions-toggle ${mobileSolutionsOpen ? 'is-expanded' : ''}`}
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            aria-expanded={mobileSolutionsOpen}
          >
            <span>Solutions &amp; Frameworks</span>
            <span className="accordion-icon">{mobileSolutionsOpen ? '−' : '+'}</span>
          </button>

          {mobileSolutionsOpen && (
            <div className="mobile-solutions-list">
              <p className="mobile-group-label">SECTOR SOLUTIONS</p>
              {sectorSolutions.map((item) => (
                <Link
                  key={item.slug}
                  href={item.url}
                  className={`mobile-solution-link ${currentSlug === item.slug ? 'is-active' : ''}`}
                  onClick={closeMobileNavigation}
                >
                  <span className="mobile-link-name">{item.title}</span>
                  <span className="mobile-link-badge">{item.badge}</span>
                </Link>
              ))}

              <p className="mobile-group-label" style={{ marginTop: '14px' }}>
                INFRASTRUCTURE PATHWAYS
              </p>
              {infrastructureSolutions.map((item) => (
                <Link
                  key={item.slug}
                  href={item.url}
                  className={`mobile-solution-link ${currentSlug === item.slug ? 'is-active' : ''}`}
                  onClick={closeMobileNavigation}
                >
                  <span className="mobile-link-name">{item.title}</span>
                  <span className="mobile-link-badge badge-infra">{item.badge}</span>
                </Link>
              ))}

              <Link
                href="/solutions"
                className="mobile-all-solutions-link"
                onClick={closeMobileNavigation}
              >
                <span>View All Solutions Overview</span>
              </Link>
            </div>
          )}
        </div>

        <a
          className="nav-contact"
          href="mailto:customer.support@suryasangam.com"
          onClick={closeMobileNavigation}
        >
          Talk to us
        </a>
      </nav>
    </header>
  );
}
