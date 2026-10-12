export type SolutionItem = {
  label?: string;
  text: string;
  bullets?: string[];
  kind?: 'cta' | 'stat' | 'flow';
  steps?: string[];
};

export type SolutionVisual =
  | 'stats'
  | 'product-cards'
  | 'solution-cards'
  | 'timeline'
  | 'network'
  | 'water-network'
  | 'agrivoltaic'
  | 'case-study'
  | 'landscape';

export type SolutionSection = {
  kicker: string;
  title?: string;
  items: SolutionItem[];
  visual?: SolutionVisual;
};

export type SolutionPage = {
  slug: string;
  navLabel: string;
  title: string;
  url: string;
  seoKeyword?: string;
  pageType?: string;
  positioning?: string;
  seoTitle?: string;
  metaDescription?: string;
  h1?: string;
  sections: SolutionSection[];
};

const item = (text: string, label?: string): SolutionItem => ({ label, text });
const bullets = (label: string, text: string, values: string[]): SolutionItem => ({ label, text, bullets: values });

export const solutions: SolutionPage[] = [
  {
    slug: 'hospital-solarization',
    navLabel: 'Hospital Solarization',
    title: 'HOSPITAL SOLARIZATION',
    url: '/solutions/hospital-solarization',
    seoKeyword: 'Hospital Solarization in India',
    seoTitle: 'Hospital Solarization in India | Solar Energy Solutions for Hospitals | Surya Sangam',
    metaDescription: 'Surya Sangam provides hospital solarization solutions across India, covering solar assessment, system design, execution, monitoring and impact management for government and private healthcare facilities.',
    h1: 'Hospital Solarization in India',
    sections: [
      {
        kicker: 'SECTION 01 — HERO',
        items: [
          item('SURYA SANGAM WEBSITE PAGE: HOSPITAL SOLARIZATION', 'Source brief'),
          item('/solutions/hospital-solarization', 'Suggested URL'),
          item('Hospital Solarization in India', 'Primary SEO Keyword'),
          item('Position Surya Sangam as a professional, technology-enabled clean-energy platform for solarizing government and private healthcare infrastructure, supported by demonstrated execution across 10 CHCs / 150 kW in Prayagraj.', 'Page Objective'),
          item('HEALTHCARE ENERGY TRANSITION', 'EYEBROW'),
          item('Hospital Solarization in India', 'Heading'),
          item('Intelligent Solar Energy Solutions for Hospitals & Healthcare Infrastructure', 'Heading / Supporting Copy'),
          item('Surya Sangam enables hospitals and healthcare institutions to transition towards cleaner, more resilient energy infrastructure through solar assessment, system design, project execution, monitoring and impact measurement. From government Community Health Centres to private hospitals and healthcare networks, we build facility-specific solarization strategies designed around operational requirements, energy consumption and long-term sustainability goals.', 'BODY'),
          item('Request a Solar Assessment', 'Primary CTA'),
          item('Talk to Our Energy Team', 'Secondary CTA'),
          item('Use a premium photograph/render of a modern hospital with rooftop solar. Overlay a small proof-of-execution badge: 150 kW Solarized | 10 CHCs | 19 Days', 'Hero Visual Direction'),
        ],
      },
      {
        kicker: '02 — TRUST / PROOF STRIP',
        items: [
          item('Use a horizontal statistics bar immediately below the hero.', 'Direction'),
          item('150 kW Solar Capacity Deployed', 'Stat'),
          item('10 Community Health Centres', 'Stat'),
          item('15 kW Off-Grid System / CHC', 'Stat'),
          item('19 Days Project Execution', 'Stat'),
          item('Prayagraj Uttar Pradesh', 'Stat'),
          item('Proven through the Powering Care healthcare solarization initiative.', 'Small caption'),
        ],
      },
      {
        kicker: '03 — PROBLEM',
        title: 'Healthcare Never Stops. Neither Should Its Energy Infrastructure.',
        items: [
          item('Hospitals operate around the clock. Energy supports everything from lighting and ventilation to diagnostics, refrigeration, IT infrastructure and essential medical systems. Solarization can help healthcare institutions generate clean electricity on-site while supporting:', 'BODY'),
          bullets('Benefits', '', ['Energy cost optimisation', 'Renewable-energy adoption', 'Energy resilience', 'Sustainability objectives', 'Measurable environmental impact']),
          item('Split layout: Left: Hospital image Right: 5 icon cards', 'Visual Split layout'),
          item('Medical Infrastructure', 'Card'),
          item('Critical Loads', 'Card'),
          item('Energy Costs', 'Card'),
          item('Energy Resilience', 'Card'),
          item('Sustainability', 'Card'),
        ],
      },
      {
        kicker: '04 — OUR POSITIONING',
        title: 'Beyond Solar Installation',
        items: [
          item('Hospital solarization is not simply about installing panels. It starts with understanding the facility. Then comes system design, project execution, commissioning, monitoring and impact measurement. Surya Sangam connects the complete journey through a technology-enabled clean-energy ecosystem.', 'BODY'),
          item('ASSESS → DESIGN → EXECUTE → COMMISSION → MONITOR → MEASURE', 'Visual flow'),
        ],
      },
      {
        kicker: '05 — PROVEN EXECUTION',
        title: 'From One CHC to a Larger Healthcare Energy Vision',
        items: [
          item('Surya Sangam has already demonstrated its healthcare solarization capabilities through Powering Care, a project covering 10 Community Health Centres across Prayagraj.', 'BODY'),
          item('Each facility received a 15 kW off-grid solar system, creating a combined deployment of 150 kW. The distributed deployment was executed across the participating facilities within 19 days.', 'BODY'),
          item('10 CHCs × 15 kW Per Facility = 150 kW Total Capacity', 'Large visual numbers'),
          item('19 DAYS', 'Highlight'),
          item('From coordinated project execution to deployment across 10 healthcare facilities.', 'Highlight supporting text'),
          item('View Powering Care →', 'CTA'),
        ],
      },
      {
        kicker: '06 — DIGITAL ECOSYSTEM',
        title: 'One Digital Energy Stack. Every Stage of the Journey.',
        items: [
          item('Use three large cards.', 'Direction'),
          item('01', 'Card'),
          item('SuryaCALC', 'Product'),
          item('Solar Intelligence Before Installation', 'Product heading'),
          item('SuryaCALC supports the assessment and planning stage by bringing together site and energy information to evaluate solar potential, system sizing and project feasibility.', 'Product body'),
          item('Assess → Calculate → Design', 'Product flow'),
          item('Explore SuryaCALC →', 'CTA'),
          item('02', 'Card'),
          item('SuryaNexa', 'Product'),
          item('Digital Execution at Scale', 'Product heading'),
          item('SuryaNexa provides the execution layer for multi-site solar projects, helping coordinate facilities, stakeholders, vendors, assets and project workflows.', 'Product body'),
          item('Coordinate → Execute → Track', 'Product flow'),
          item('Explore SuryaNexa →', 'CTA'),
          item('03', 'Card'),
          item('Surya Impact OS', 'Product'),
          item('Monitor What Happens After Installation', 'Product heading'),
          item('Surya Impact OS provides the post-installation intelligence layer for monitoring solar generation, system performance and environmental impact.', 'Product body'),
          item('Monitor → Measure → Report', 'Product flow'),
          item('Explore Impact OS →', 'CTA'),
        ],
      },
      {
        kicker: '07 — HEALTHCARE SOLUTIONS',
        title: 'Solar Solutions Designed for Healthcare',
        items: [
          item("Every healthcare facility has a different energy profile. Surya Sangam evaluates the facility's requirements before recommending the appropriate configuration.", 'BODY'),
          item('01', 'CARD'),
          item('Rooftop Solar', 'Card'),
          item('Generate clean electricity using available rooftop infrastructure.', 'Card body'),
          item('02', 'CARD'),
          item('Off-Grid Solar', 'Card'),
          item('Independent solar-energy infrastructure for suitable facilities and applications requiring greater energy resilience.', 'Card body'),
          item('03', 'CARD'),
          item('Solar + Battery Storage', 'Card'),
          item('Combine solar generation with energy storage where facility requirements and load profiles justify the configuration.', 'Card body'),
          item('04', 'CARD'),
          item('Energy Intelligence', 'Card'),
          item('Monitor solar generation, performance and environmental impact through digital systems.', 'Card body'),
          item('Final system architecture is determined after technical assessment.', 'Note'),
        ],
      },
      {
        kicker: '08 — WHO WE SERVE',
        title: 'Solarization Across the Healthcare Ecosystem',
        items: [
          item('Use two major visual columns.', 'Direction'),
          bullets('GOVERNMENT HEALTHCARE', '', ['Community Health Centres', 'Primary Healthcare Centres', 'District Hospitals', 'Government Hospitals', 'Medical Colleges', 'Public Healthcare Institutions']),
          bullets('PRIVATE HEALTHCARE', '', ['Multi-speciality Hospitals', 'Nursing Homes', 'Clinics', 'Diagnostic Centres', 'Healthcare Campuses', 'Private Medical Institutions']),
          item('Institutional & Healthcare Networks', 'Below both'),
          item('For organisations managing multiple facilities, Surya Sangam supports structured multi-site solarization programmes with facility-level assessment and project-level monitoring.', 'BODY'),
        ],
      },
      {
        kicker: '09 — HOW IT WORKS',
        title: 'From Assessment to Impact',
        items: [
          item('Create a horizontal process timeline.', 'Direction'),
          item('01 ASSESS — Understand energy consumption, load profile, site conditions and infrastructure. ↓', 'Process'),
          item('02 DESIGN — Develop a facility-specific solar architecture. ↓', 'Process'),
          item('03 EXECUTE — Coordinate deployment through a structured project workflow. ↓', 'Process'),
          item('04 COMMISSION — Test, validate and operationalise the system. ↓', 'Process'),
          item('05 MONITOR — Track solar generation and system performance. ↓', 'Process'),
          item('06 MEASURE — Quantify energy and environmental impact. ↓', 'Process'),
          item('07 SCALE — Expand from individual facilities to healthcare networks.', 'Process'),
        ],
      },
      {
        kicker: '10 — FACILITY-SPECIFIC APPROACH',
        title: 'Designed Around Your Hospital',
        items: [
          item('There is no one-size-fits-all solar system for healthcare. Our assessment considers:', 'BODY'),
          item('Consumption, demand and load patterns.', 'Energy Profile'),
          item('Roof area, orientation, shading and available installation space.', 'Site Conditions'),
          item('Existing electrical systems and distribution requirements.', 'Electrical Infrastructure'),
          item('Critical loads, operating hours and facility-specific requirements.', 'Operational Requirements'),
          item('Cost optimisation, renewable-energy adoption, resilience and sustainability.', 'Energy Objectives'),
          item('Investment requirements, project economics and potential savings.', 'Financial Parameters'),
          item("We don't start with a solar system. We start with the facility.", 'Closing statement'),
        ],
      },
      {
        kicker: '11 — IMPACT MONITORING',
        title: 'Installation Is Not the End.',
        items: [
          item('A solar project should remain measurable after commissioning. With Surya Impact OS, institutions can move from knowing: "What was installed?" to understanding: "What is it delivering?"', 'BODY'),
          item('Display four metrics:', 'Direction'),
          item('Energy generated', 'SOLAR GENERATION'),
          item('Site-wise performance', 'SYSTEM PERFORMANCE'),
          item('Estimated emissions avoided', 'ENVIRONMENTAL IMPACT'),
          item('Facility and programme-level outcomes', 'PROJECT IMPACT'),
        ],
      },
      {
        kicker: '12 — SCALE / VISION',
        title: 'From One Hospital to an Energy Network',
        items: [
          item('The future of healthcare energy is not about solarizing one building at a time. It is about creating connected, measurable and scalable clean-energy infrastructure across healthcare networks. A hospital. A district. A healthcare network. A state-wide programme. Surya Sangam is building the technology and execution ecosystem to support that transition.', 'BODY'),
          item('ASSESS ONE FACILITY. EXECUTE ACROSS A NETWORK. MONITOR EVERY ASSET. MEASURE THE IMPACT.', 'Large statement'),
        ],
      },
      {
        kicker: '13 — WHY SURYA SANGAM',
        items: [
          item('Use six compact cards.', 'Direction'),
          item('Digital intelligence across assessment, execution and impact monitoring.', 'TECHNOLOGY-LED'),
          item('Structured workflows for distributed clean-energy deployment.', 'EXECUTION-FOCUSED'),
          item('Solutions designed around healthcare infrastructure and operational requirements.', 'HEALTHCARE-AWARE'),
          item('Measure generation, performance and environmental outcomes.', 'DATA-DRIVEN'),
          item('Designed to support individual facilities and larger institutional programmes.', 'MULTI-SITE CAPABLE'),
          item("Go beyond installation to measurable energy and environmental impact.", 'IMPACT-ORIENTED'),
        ],
      },
      {
        kicker: '14 — CASE STUDY',
        title: 'POWERING CARE',
        items: [
          item('Solarization of 10 Community Health Centres — Prayagraj', 'Case study'),
          item('Use a large project photograph / map.', 'Direction'),
          item('10 CHCs', 'Metric'),
          item('150 kW', 'Metric'),
          item('15 kW / CHC', 'Metric'),
          item('19 DAYS', 'Metric'),
          item("Powering Care demonstrates Surya Sangam's approach to combining clean-energy infrastructure, digital project workflows and impact monitoring for public healthcare.", 'Supporting text'),
          item('Explore the Powering Care Case Study →', 'CTA'),
        ],
      },
      {
        kicker: '15 — CTA',
        title: 'Ready to Solarize Your Healthcare Facility?',
        items: [
          item('Whether you operate a government health facility, private hospital, diagnostic centre or healthcare network, Surya Sangam can help evaluate your solarization opportunity.', 'BODY'),
          item('Request a Solar Assessment', 'Primary CTA'),
          item('Talk to Surya Sangam', 'Secondary CTA'),
          item('Tell us about your facility, location and energy requirements. Our team will assess the opportunity for you.', 'Supporting microcopy'),
        ],
      },
      {
        kicker: '16 — FINAL BRAND STATEMENT',
        items: [
          item('Large typography with minimal design:', 'Direction'),
          item('POWERING HEALTHCARE. POWERING COMMUNITIES. POWERING THE ENERGY TRANSITION.', 'Brand statement'),
          item('Surya Sangam', 'Brand'),
          item('An Alarth Green platform for intelligent clean-energy transition.', 'Brand'),
        ],
      },
      {
        kicker: 'FRONTEND DESIGN DIRECTION',
        title: 'Overall Experience',
        items: [
          item('The page should feel like a premium ClimateTech / enterprise technology website, not an EPC company website.', 'Direction'),
          item('Premium', 'Design language'), item('Minimal', 'Design language'), item('Institutional', 'Design language'), item('Data-driven', 'Design language'), item('Technology-led', 'Design language'), item('High whitespace', 'Design language'), item('Strong typography', 'Design language'), item('Real project photography', 'Design language'), item('Subtle motion', 'Design language'), item('Interactive statistics', 'Design language'), item('Clean diagrams', 'Design language'), item('Professional iconography', 'Design language'),
          bullets('Avoid', '', ['Generic solar-company visuals', 'Excessive green', 'Stock images of doctors', 'Cartoon solar illustrations', 'Overuse of gradients', 'Too much text above the fold', 'Cheap-looking icons', 'Excessive animation', 'Claims that cannot be substantiated']),
          item('Hero Animated counter: 150 kW → 10 CHCs → 19 Days', 'Recommended Interactive Elements'),
          item('Digital Ecosystem Interactive three-stage animation: SuryaCALC → SuryaNexa → Surya Impact OS', 'Recommended Interactive Elements'),
          item('Powering Care Interactive Prayagraj map showing all 10 CHCs.', 'Recommended Interactive Elements'),
          item('Healthcare Solutions Hover / scroll cards for: Rooftop | Off-Grid | Solar + Storage | Monitoring Impact', 'Recommended Interactive Elements'),
          item('Animated metrics / dashboard-style visual.', 'Recommended Interactive Elements'),
        ],
      },
      {
        kicker: 'SEO IMPLEMENTATION',
        items: [
          item('Hospital Solarization in India | Solar Energy Solutions for Hospitals | Surya Sangam', 'SEO Title'),
          item('Surya Sangam provides hospital solarization solutions across India, covering solar assessment, system design, execution, monitoring and impact management for government and private healthcare facilities.', 'Meta Description'),
          item('Hospital Solarization in India', 'H1'),
          bullets('H2 Keywords', '', ['Solar Energy for Hospitals', 'Hospital Solar Power Solutions', 'Government Hospital Solarization', 'Private Hospital Solar Solutions', 'Healthcare Solar Energy', 'Solar + Battery for Hospitals', 'Off-Grid Solar for Healthcare', 'Hospital Solarization Projects', 'Solar Solutions for Healthcare Infrastructure']),
          item('/solutions/hospital-solarization', 'Suggested URL'),
          item('Link this page to: SuryaCALC, SuryaNexa, Surya Impact OS, Powering Care Case Study, About Surya Sangam, Contact / Solar Assessment', 'Internal Links'),
        ],
      },
      {
        kicker: 'CORE MESSAGE FOR THE DESIGNER',
        items: [
          item('The page should communicate this within the first 10 seconds: Surya Sangam is not merely installing solar panels at hospitals. We are building a technology-enabled infrastructure platform for assessing, executing, monitoring and scaling healthcare solarization across India. And the strongest proof point should be visible immediately: 150 kW Solarized across 10 CHCs 15 kW Off-Grid Systems | 19-Day Execution Proven execution. Technology-led delivery. Built to scale.', 'Core message'),
        ],
      },
    ],
  },
  {
    slug: 'industrial-msme-solarization',
    navLabel: 'Industrial & MSME Solarization',
    title: 'INDUSTRIAL & MSME SOLARIZATION',
    url: '/solutions/industrial-msme-solarization',
    seoKeyword: 'Industrial Solarization in India',
    seoTitle: 'Industrial & MSME Solarization in India | Factory Solar Solutions | Surya Sangam',
    metaDescription: 'Surya Sangam provides end-to-end industrial and MSME solarization solutions for factories and manufacturing units, including rooftop, industrial shed, carport and hybrid solar, financing, execution, monitoring and ESG support.',
    h1: "Solarizing India's Industries & MSMEs",
    sections: [
      { kicker: '01 — HERO', items: [item('INDUSTRIAL ENERGY TRANSITION', 'EYEBROW'), item("Solarizing India's Industries & MSMEs", 'Heading'), item('End-to-End Solar & Energy Solutions for Factories, Manufacturing Units and MSMEs', 'SUBHEAD'), item('Every factory has a different roof, load profile, operating schedule and business requirement. Surya Sangam helps MSMEs assess their facility, identify the right solar architecture, explore financing, execute the project and build a pathway towards broader energy and ESG improvement.', 'BODY'), item('Rooftop | Industrial Shed | Carport | Hybrid | Multi-Site', 'Options'), item('Get an Industrial Solar Assessment', 'PRIMARY CTA'), item('Book a Solar Boardroom', 'SECONDARY CTA'), item('Facility assessment → System design → Financing → Execution → Monitoring → ESG', 'HERO TRUST LINE')] },
      { kicker: '02 — IMMEDIATE VALUE PROPOSITION', title: 'Your Factory Is Not a Standard Solar Project.', items: [item("We don't begin by asking: “How many kW of solar do you want?” We begin by understanding:", 'BODY'), item('Your Energy Consumption, load profile and operating pattern.', 'Your Energy Consumption'), item('Your Infrastructure RCC roof, metal shed, PEB, open area or parking.', 'Your Infrastructure'), item('Your Business Budget, financing, operational priorities and growth plans.', 'Your Business'), item('Your Sustainability Goals Solarization, ESG, ZED and broader sustainability objectives.', 'Your Sustainability Goals'), item('CLARITY BEFORE CAPEX.', 'KEY LINE')] },
      { kicker: '03 — SOLARIZATION OPTIONS', title: 'Solarize Every Suitable Surface', items: [item('Your facility may have more solar potential than just the main rooftop.', 'BODY'), item('For RCC and conventional industrial rooftops.', 'ROOFTOP SOLAR'), item('For PEB and metal-sheet industrial structures, subject to technical and structural assessment.', 'INDUSTRIAL SHED SOLAR'), item('Convert parking areas into productive energy infrastructure.', 'SOLAR CARPORT'), item('Solar + battery + grid / backup architecture where operational requirements justify it.', 'HYBRID SOLAR'), item('Coordinate solar deployment across multiple facilities or industrial locations.', 'MULTI-SITE SOLARIZATION'), item('One facility. Multiple surfaces. One integrated energy strategy.', 'CORE STATEMENT')] },
      { kicker: '04 — THE SURYA SANGAM DIFFERENCE', title: 'We Go Beyond the Solar Quotation.', items: [item('For an MSME, solarization is not simply a panel-and-inverter decision. We help you understand the complete business case.', 'BODY'), item('What does your facility actually need?', 'ASSESS'), item('Which system architecture makes sense?', 'DESIGN'), item('How can the project be structured financially?', 'FINANCE'), item('Who coordinates the project from assessment to commissioning?', 'EXECUTE'), item('What is the system actually delivering?', 'MONITOR'), item('What additional energy, sustainability and certification opportunities exist?', 'UPGRADE')] },
      { kicker: '05 — END-TO-END JOURNEY', title: 'From Factory Assessment to Long-Term Impact', items: [item('Energy consumption, electrical infrastructure, roof and facility conditions.', '01 — ASSESS'), item('Solar capacity, architecture, storage requirements and deployment surfaces.', '02 — DESIGN'), item('Project economics and suitable financing pathways.', '03 — FINANCE'), item('Installation, coordination, commissioning and project management.', '04 — EXECUTE'), item('Generation and system performance.', '05 — MONITOR'), item('Explore technical upgrades, energy improvements, ESG and certification pathways.', '06 — IMPROVE'), item('ASSESS → DESIGN → FINANCE → EXECUTE → MONITOR → IMPROVE', 'VISUAL FLOW')] },
      { kicker: '06 — MSME VALUE BEYOND SOLAR', title: 'Solar Can Be the Beginning of a Larger Upgrade.', items: [item('Once an MSME begins its energy transition, other improvement opportunities can become relevant.', 'BODY'), item('Understand applicable technology-upgradation opportunities alongside energy modernization.', 'TECHNICAL UPGRADATION'), item('Build awareness around the Zero Defect Zero Effect journey: Bronze → Silver → Gold', 'ZED CERTIFICATION'), item('Assess opportunities to reduce dependence on conventional backup systems and improve energy infrastructure.', 'DIESEL / BACKUP OPTIMISATION'), item('Move from ESG awareness towards practical sustainability initiatives and measurable action.', 'ESG READINESS'), item('Begin building an institutional approach to energy, environment and responsible business practices.', 'SUSTAINABILITY INITIATION'), item('Scheme, subsidy, certification and financing eligibility depends on applicable government guidelines, business profile and other prevailing conditions.', 'NOTE')] },
      { kicker: '07 — PROOF OF INDUSTRY ENGAGEMENT', title: 'We Started With the MSME Ecosystem.', items: [item('Before asking MSMEs to invest in solar, Surya Sangam has focused on creating awareness and decision-making clarity.', 'BODY'), item('Indian Industries Association — Ghaziabad — ESG awareness and sustainability engagement.', 'INDUSTRY ENGAGEMENTS'), item('Indian Industries Association — Greater Noida — Industry-focused ESG awareness.', 'INDUSTRY ENGAGEMENTS'), item('Laghu Udyog Bharati — Khurja — MSME sustainability and ESG engagement.', 'INDUSTRY ENGAGEMENTS'), item('Laghu Udyog Bharati — Ghaziabad — ESG awareness with industrial stakeholders.', 'INDUSTRY ENGAGEMENTS'), item('Association of MSME — Tronica City, Loni — MSME-focused sustainability engagement.', 'INDUSTRY ENGAGEMENTS'), item('5+ Industry / MSME Association Engagements', 'PROOF METRICS'), item('10+ Virtual Industrial Solar Consultations', 'PROOF METRICS'), item('Solar Boardroom Ongoing MSME Energy Conversations', 'PROOF METRICS'), item('Our first job is not to sell a solar system. It is to help an MSME owner make an informed energy decision.', 'KEY MESSAGE')] },
      { kicker: '08 — SOLAR BOARDROOM', title: "Don't Buy Solar From a Quotation. Understand It First.", items: [item('Solar Boardroom by Surya Sangam', 'Product'), item('A practical knowledge platform where MSME owners can understand industrial solarization before committing capital.', 'BODY'), bullets('DISCUSS', '', ['How much solar capacity do I actually need?', 'Is my roof suitable?', 'Should I consider a solar carport?', 'Do I need battery storage?', 'What about my DG?', 'What financing options can I explore?', 'What should I expect from the project?', 'How can solar connect with ESG and sustainability?']), item('Watch Solar Boardroom', 'CTA'), item('Book a Consultation', 'CTA')] },
      { kicker: '09 — FINANCING', title: 'Solarization Should Make Business Sense.', items: [item('The right project needs to work technically and financially. Surya Sangam supports MSMEs through:', 'BODY'), item('Project Assessment ↓ System & Cost Understanding ↓ Financial Planning ↓ Loan / Financing Exploration ↓ Project Execution', 'Journey'), item("Don't let the upfront investment prevent you from exploring the right energy solution.", 'KEY LINE'), item('Explore Financing Options', 'CTA')] },
      { kicker: '10 — DIGITAL ENERGY PLATFORM', title: 'Technology Behind the Energy Journey', items: [item('Assess Before You Invest — Understand energy requirements, site conditions and solar potential. Assess → Calculate → Plan', 'SURYACALC'), item('Execute With Structure — Coordinate vendors, stakeholders, assets and project workflows. Coordinate → Execute → Track', 'SURYANEXA'), item('Measure After Installation — Monitor generation, performance and environmental impact. Monitor → Measure → Report', 'SURYA IMPACT OS')] },
      { kicker: '11 — WHY SURYA SANGAM', title: 'Built for MSME Decision-Makers', items: [item('We assess the actual factory—not a standard template.', 'Facility-Specific'), item('Rooftop, industrial shed, carport and other suitable deployment surfaces.', 'Roof-Agnostic'), item('Clarity before capital investment.', 'Advisory-Led'), item('Financing is considered as part of the project journey.', 'Finance-Aware'), item('Digital tools across assessment, execution and monitoring.', 'Technology-Enabled'), item('Solarization can become the first step towards broader sustainability.', 'ESG-Oriented'), item('From first assessment through execution and post-installation monitoring.', 'End-to-End')] },
      { kicker: '12 — VISION', title: 'Solarize the Facility. Modernize the Business.', items: [item("For India's MSMEs, the energy transition can go beyond installing solar panels. It can become a pathway towards:", 'BODY'), item('Solarization → Energy Improvement → Technical Upgradation → ESG → Certification → Sustainable Growth', 'Pathway'), item('SOLARIZE. UPGRADE. CERTIFY. GROW.', 'STATEMENT')] },
      { kicker: '13 — FINAL CONVERSION SECTION', title: "Ready to Understand Your Factory's Solar Potential?", items: [item("Tell us about your facility, energy consumption and business requirements. We'll help you understand:", 'BODY'), item('What can be solarized.', 'BODY'), item('What system may be appropriate.', 'BODY'), item('What financing pathways can be explored.', 'BODY'), item('What the next steps could look like.', 'BODY'), item('Get an Industrial Solar Assessment', 'PRIMARY CTA'), item('Book a Solar Boardroom', 'SECONDARY CTA'), item('Talk to an Energy Expert', 'LOW-FRICTION OPTION')] },
      { kicker: 'SEO', items: [item('Industrial & MSME Solarization in India | Factory Solar Solutions | Surya Sangam', 'SEO TITLE'), item('Surya Sangam provides end-to-end industrial and MSME solarization solutions for factories and manufacturing units, including rooftop, industrial shed, carport and hybrid solar, financing, execution, monitoring and ESG support.', 'META DESCRIPTION'), item("Solarizing India's Industries & MSMEs", 'H1'), bullets('SEO TOPICS', '', ['Industrial Solarization in India', 'Factory Solar Solutions', 'MSME Solarization', 'Industrial Rooftop Solar', 'Factory Rooftop Solar', 'Solar for Manufacturing Units', 'Solar Carport for Factories', 'Hybrid Solar for MSMEs', 'Solar Financing for MSMEs', 'ESG for MSMEs', 'ZED Certification for MSMEs', 'Industrial Energy Solutions'])] },
      { kicker: 'FRONT-END DIRECTION', items: [item('Keep it extremely clean. H1 + one strong paragraph + two CTAs + industrial visual. Do not put the entire list of benefits above the fold.', 'Above the Fold'), item('HERO ↓ YOUR FACTORY IS NOT A STANDARD SOLAR PROJECT ↓ SOLARIZE EVERY SUITABLE SURFACE ↓ BEYOND THE SOLAR QUOTATION ↓ END-TO-END JOURNEY ↓ MSME VALUE BEYOND SOLAR ↓ INDUSTRY ENGAGEMENT PROOF ↓ SOLAR BOARDROOM ↓ FINANCING ↓ DIGITAL ENERGY PLATFORM ↓ WHY SURYA SANGAM ↓ FINAL CTA', 'Recommended Page Flow'), item('The page should not pretend you already have a large industrial project portfolio. Instead, use your current strengths honestly: Industry engagement + MSME advisory + Solar Boardroom + 10+ consultations + technology platform + end-to-end execution capability. That creates a much stronger story: We understand MSMEs before we solarize them. And that is a genuinely differentiated position compared with a website that simply says: “We install rooftop solar for factories.”', 'Most Important Conversion Principle')] },
    ],
  },
  {
    slug: 'infrastructure/government',
    navLabel: 'Government Infrastructure',
    title: 'GOVERNMENT INFRASTRUCTURE',
    url: '/solutions/infrastructure/government',
    seoKeyword: 'Solar Solutions for Government Infrastructure',
    pageType: 'Infrastructure Solution',
    positioning: 'ClimateTech × Public Infrastructure × Energy Transition',
    seoTitle: 'Solar Solutions for Government Infrastructure | Public Sector Solar | Surya Sangam',
    metaDescription: 'Surya Sangam provides clean-energy solutions for government buildings, public institutions and distributed infrastructure, including rooftop, off-grid, hybrid and multi-site solar deployment.',
    h1: "Powering India's Government Infrastructure",
    sections: [
      { kicker: '01 — HERO', items: [item('PUBLIC INFRASTRUCTURE TRANSITION', 'EYEBROW'), item("Powering India's Government Infrastructure", 'SUBHEAD'), item('Clean-Energy Solutions for Government Buildings, Public Institutions and Distributed Infrastructure', 'SUBHEAD'), item('Government infrastructure operates at scale—from offices and schools to healthcare facilities, public utilities and distributed institutional networks. Surya Sangam helps public-sector infrastructure evaluate, deploy and monitor clean-energy systems designed around real operational requirements.', 'BODY'), item('Assess Government Infrastructure', 'PRIMARY CTA'), item('Talk to Our Infrastructure Team', 'SECONDARY CTA'), item('Show a composite public infrastructure environment: Government Building + School + Hospital + Public Utility + Solar Use subtle network lines connecting multiple assets.', 'HERO VISUAL'), item('ASSESS → DESIGN → FINANCE → EXECUTE → MONITOR → SCALE', 'TRUST LINE')] },
      { kicker: '02 — VALUE PROPOSITION', title: 'Public Infrastructure Deserves More Than a Standard Solar System.', items: [item('Government assets often differ in:', 'BODY'), bullets('', '', ['Building structure', 'Energy consumption', 'Operating schedules', 'Ownership', 'Procurement requirements', 'Geographic distribution', 'Funding mechanisms']), item('Surya Sangam approaches each deployment as an infrastructure programme—not simply an installation.', 'BODY'), item('ONE PROGRAMME. MULTIPLE ASSETS. ONE ENERGY STRATEGY.', 'CORE LINE')] },
      { kicker: '03 — GOVERNMENT INFRASTRUCTURE WE SERVE', title: 'From Public Buildings to Distributed Infrastructure', items: [item('Solar and energy solutions for administrative and public office buildings.', 'GOVERNMENT OFFICES'), item('CHCs, hospitals and public healthcare facilities.', 'HEALTHCARE INFRASTRUCTURE'), item('Government schools, colleges, universities and institutional campuses.', 'EDUCATION INFRASTRUCTURE'), item('Energy solutions for infrastructure supporting essential public services.', 'PUBLIC UTILITIES'), item('Public facilities serving local communities.', 'COMMUNITY INFRASTRUCTURE'), item('Coordinate deployment across districts, blocks, institutions or geographically distributed assets.', 'MULTI-SITE GOVERNMENT PROGRAMMES')] },
      { kicker: '04 — SOLARIZATION POSSIBILITIES', title: 'One Public Asset. Multiple Energy Possibilities.', items: [item('Government buildings, schools, hospitals and institutional rooftops.', 'ROOFTOP SOLAR'), item('Parking and covered public areas.', 'SOLAR CARPORTS'), item('Suitable open land associated with public infrastructure.', 'GROUND-MOUNTED SOLAR'), item('Solar + battery + grid / backup for critical facilities.', 'HYBRID SYSTEMS'), item('For suitable locations where grid access or reliability is limited.', 'OFF-GRID SYSTEMS'), item('Coordinate energy systems across multiple public assets.', 'DISTRIBUTED SOLAR')] },
      { kicker: '05 — PROGRAMME-LEVEL APPROACH', title: 'From One Facility to an Infrastructure Programme', items: [item('Large public-sector initiatives often involve multiple locations. Surya Sangam can support a structured journey:', 'BODY'), item('Programme Planning ↓ Site Assessment ↓ Technical Design ↓ Financial Planning ↓ Vendor / Execution Coordination ↓ Commissioning ↓ Monitoring ↓ Impact Reporting', 'Journey'), item('This should be an animated horizontal timeline, not a simple numbered list.', 'DESIGN NOTE')] },
      { kicker: '06 — OUR APPROACH', title: 'Built Around Public Infrastructure Requirements', items: [item('Understand each facility and its energy profile.', 'ASSESS'), item('Develop repeatable technical and operational frameworks.', 'STANDARDISE'), item('Adapt deployment to individual site conditions.', 'LOCALISE'), item('Coordinate implementation across locations.', 'EXECUTE'), item('Track assets and performance centrally.', 'MONITOR'), item('Create structured visibility into programme-level outcomes.', 'REPORT')] },
      { kicker: '07 — MULTI-SITE CONTROL', title: 'From Distributed Assets to One View', items: [item('For large government programmes, visibility becomes as important as installation. Surya Sangam\'s digital approach can help bring together:', 'BODY'), item('Sites · Assets · Generation · Performance · Impact', 'Data'), item('India / state map with multiple project nodes. Clicking a node reveals: Facility → Capacity → Status → Generation → Impact', 'VISUAL CONCEPT'), item('This should be a major visual differentiator on the page.', 'Direction')] },
      { kicker: '08 — DIGITAL INFRASTRUCTURE', title: 'Technology for Infrastructure at Scale', items: [item('Assess → Calculate → Plan Site and energy assessment.', 'SURYACALC'), item('Coordinate → Execute → Track Multi-site project and stakeholder coordination.', 'SURYANEXA'), item('Monitor → Measure → Report Post-installation performance and impact visibility.', 'SURYA IMPACT OS')] },
      { kicker: '09 — FINANCING & PROGRAMME STRUCTURE', title: 'Infrastructure Projects Need More Than Technical Design.', items: [item('Depending on project structure, Surya Sangam can support assessment of:', 'BODY'), bullets('', '', ['Capital expenditure', 'Financing pathways', 'Institutional funding', 'CSR-linked opportunities', 'Government programmes', 'Multi-site deployment economics']), item('Funding, subsidy and financing eligibility remains subject to applicable programme guidelines, procurement requirements and authority approval.', 'Note')] },
      { kicker: '10 — PROVEN EXECUTION APPROACH', title: 'Built for Real Public Infrastructure', items: [item('Where relevant, showcase actual Surya Sangam experience here rather than generic claims.', 'Direction'), item('Powering Care', 'FEATURED CASE STUDY'), item('10 Community Health Centres', 'Case study'), item('150 kW Off-Grid Solar', 'Case study'), item('Prayagraj, Uttar Pradesh', 'Case study'), item('19-Day Deployment', 'Case study'), item('Use this as a large case-study card with: Map → Facilities → Solar → Impact', 'DESIGN'), item('Do not present unrelated projects as government infrastructure proof.', 'Direction')] },
      { kicker: '11 — WHY SURYA SANGAM', title: 'Programme-Level Thinking', items: [item('Not just individual installations.', 'Programme-Level Thinking'), item('Built for distributed infrastructure.', 'Multi-Site Capable'), item('Digital assessment, execution and monitoring.', 'Technology-Enabled'), item('Structured coordination from planning to commissioning.', 'Execution-Focused'), item('Measure generation, performance and environmental outcomes.', 'Impact-Driven'), item('Solutions begin with facility requirements.', 'Infrastructure-Aware')] },
      { kicker: '12 — VISION', title: 'Building the Energy Layer for Public Infrastructure', items: [item("Government infrastructure is one of India's largest opportunities for distributed clean-energy deployment. Surya Sangam aims to connect:", 'BODY'), item('Public Assets → Clean Energy → Digital Monitoring → Measured Impact → Scalable Infrastructure Programmes', 'Flow'), item('POWERING PUBLIC INFRASTRUCTURE. SCALING PUBLIC IMPACT.', 'CORE STATEMENT')] },
      { kicker: '13 — FINAL CTA', title: 'Ready to Plan a Government Energy Programme?', items: [item('Whether it is one facility or a distributed network, Surya Sangam can help assess the right clean-energy pathway.', 'BODY'), item('Start an Infrastructure Assessment', 'CTA'), item('Discuss a Multi-Site Programme', 'CTA'), item('Talk to Our Infrastructure Team', 'CTA')] },
      { kicker: 'SEO', items: [item('Solar Solutions for Government Infrastructure | Public Sector Solar | Surya Sangam', 'SEO TITLE'), item('Surya Sangam provides clean-energy solutions for government buildings, public institutions and distributed infrastructure, including rooftop, off-grid, hybrid and multi-site solar deployment.', 'META DESCRIPTION'), item("Powering India's Government Infrastructure", 'H1'), bullets('SEO TOPICS', '', ['Solar for Government Buildings', 'Government Infrastructure Solarization', 'Public Sector Solar Solutions', 'Solar for Government Schools', 'Solar for Government Hospitals', 'Solar for Public Infrastructure', 'Government Rooftop Solar', 'Off-Grid Solar for Government', 'Multi-Site Government Solar', 'Government Infrastructure Energy Solutions'])] },
      { kicker: 'FRONT-END DIRECTION', items: [item('Use a public infrastructure network, not one building.', 'HERO'), item('Interactive India/state map showing distributed assets.', 'KEY INTERACTION'), item('Powering Care should be visually prominent because it provides actual government/public-health infrastructure proof.', 'CASE STUDY'), item('Institutional + premium + technology-led', 'DESIGN LANGUAGE'), bullets('Avoid', '', ['Political imagery', 'Generic government stock photography', 'Excessive government logos', 'Bureaucratic visual language']), item('The page should feel like a modern infrastructure technology company, not a government contractor website.', 'Direction')] },
    ],
  },
  {
    slug: 'infrastructure/large-scale',
    navLabel: 'Large-Scale Solar',
    title: 'LARGE-SCALE SOLAR',
    url: '/solutions/infrastructure/large-scale',
    seoKeyword: 'Large-Scale Solar Solutions in India',
    pageType: 'Infrastructure / Large-Scale Energy Solution',
    positioning: 'ClimateTech × Utility-Scale Energy × Land × Agrivoltaics',
    seoTitle: 'Large-Scale Solar & Agrivoltaics in India | Land-Based Solar | Surya Sangam',
    metaDescription: 'Surya Sangam explores large-scale solar, ground-mounted, land-based and agrivoltaic energy solutions for suitable agricultural, industrial, institutional and infrastructure sites.',
    h1: 'Solar Beyond the Rooftop',
    sections: [
      { kicker: '01 — HERO', items: [item('LARGE-SCALE ENERGY INFRASTRUCTURE', 'EYEBROW'), item('Solar Beyond the Rooftop', 'SUBHEAD'), item('Large-Scale Solar, Ground-Mounted Energy & Agrivoltaic Solutions for Land-Based Infrastructure', 'SUBHEAD'), item("India's clean-energy transition will require more than rooftops. Surya Sangam explores land-based energy solutions that combine solar generation with infrastructure, agriculture and productive land use. From ground-mounted solar and distributed open-area systems to agrivoltaic applications, we help evaluate how land can become part of the energy transition.", 'BODY'), item('Explore a Large-Scale Solar Project', 'PRIMARY CTA'), item('Talk to Our Energy Team', 'SECONDARY CTA'), item('This should be the most visually impressive hero across the Solutions section. Show: Large solar field + agricultural land + crops + elevated solar structures + farm activity. Subtle digital overlay: LAND → ENERGY → AGRICULTURE → IMPACT', 'HERO VISUAL')] },
      { kicker: '02 — POSITIONING', title: 'The Future of Solar Is Not Limited to Rooftops.', items: [item('India has enormous potential across:', 'BODY'), item('Open Land · Agricultural Land · Industrial Land · Institutional Campuses · Utility-Scale Sites · Distributed Infrastructure', 'Possibilities'), item('The opportunity is not simply to place more panels. It is to design energy systems that work with the land, infrastructure and economic activity around them.', 'BODY'), item('USE LAND. GENERATE ENERGY. CREATE MORE VALUE.', 'CORE STATEMENT')] },
      { kicker: '03 — LARGE-SCALE SOLAR POSSIBILITIES', title: 'Built for Land-Based Energy Deployment', items: [item('Large-scale solar generation on suitable open land.', 'GROUND-MOUNTED SOLAR'), item('Explore the coexistence of agricultural activity and solar generation through elevated or appropriately designed solar structures.', 'AGRIVOLTAICS'), item('Utilise suitable land associated with industrial and manufacturing facilities.', 'INDUSTRIAL OPEN AREAS'), item('Solar deployment across suitable large campuses and institutional estates.', 'INSTITUTIONAL LAND'), item('Multiple smaller land-based installations coordinated as one energy programme.', 'DISTRIBUTED SOLAR'), item('Solar + storage + grid / backup where project requirements justify the architecture.', 'HYBRID ENERGY SYSTEMS')] },
      { kicker: '04 — AGRIVOLTAICS', title: 'When the Same Land Can Produce Food and Energy.', items: [item('Agrivoltaics can create a dual-use model where agricultural activity and solar generation coexist on appropriately designed sites.', 'BODY'), item('Crop cultivation / agricultural activity', 'AGRICULTURE'), item('Renewable energy generation', 'SOLAR'), item('Potentially higher land productivity.', 'DUAL-USE LAND'), bullets('WHAT WE EVALUATE', '', ['Land characteristics', 'Solar resource', 'Agricultural activity', 'Crop compatibility', 'Structure design', 'Panel height and spacing', 'Irrigation requirements', 'Access and maintenance', 'Energy requirements', 'Project economics']), item('Agrivoltaic suitability is highly site-specific. Crop, climate, land-use, structural, environmental and regulatory considerations must be evaluated before deployment.', 'IMPORTANT NOTE')] },
      { kicker: '05 — BEYOND PANEL INSTALLATION', title: 'Land-Based Solar Is an Infrastructure Project.', items: [item('Large-scale projects require more than module selection. We evaluate the wider project environment.', 'BODY'), item('Availability, use, access and suitability.', 'LAND'), item('Generation potential and project requirements.', 'ENERGY'), item('Interconnection, evacuation and electrical infrastructure.', 'GRID'), item('Ground-mounted or elevated architecture.', 'STRUCTURE'), item('Construction, maintenance and operational access.', 'ACCESS'), item('Project cost, financing and long-term viability.', 'ECONOMICS'), item('Land, water, agriculture and ecological considerations.', 'ENVIRONMENT'), item('Applicable permissions, land-use requirements and project conditions.', 'REGULATORY')] },
      { kicker: '06 — LARGE-SCALE PROJECT JOURNEY', title: 'From Land Assessment to Energy Asset', items: [item('Understand the land, project objective and energy requirement.', '01 — DISCOVER'), item('Evaluate site suitability, solar resource and infrastructure.', '02 — ASSESS'), item('Develop ground-mounted, elevated or agrivoltaic architecture.', '03 — DESIGN'), item('Evaluate project economics and financing structures.', '04 — FINANCE'), item('Coordinate project development, approvals and execution planning.', '05 — DEVELOP'), item('Implement the energy infrastructure.', '06 — EXECUTE'), item('Track generation, performance and impact.', '07 — MONITOR'), item('Expand across suitable land parcels or distributed sites.', '08 — SCALE'), item('LAND → ENERGY → INFRASTRUCTURE → IMPACT', 'VISUAL FLOW')] },
      { kicker: '07 — AGRIVOLTAIC EXPERIENCE LAYER', title: 'Designing Energy Systems Around Productive Land', items: [item('For agrivoltaic projects, the solar system must work around the agricultural system—not the other way around.', 'BODY'), item('', 'DESIGN PRINCIPLES'), item('Evaluate whether the proposed solar configuration is compatible with agricultural activity.', 'Crop Compatibility'), item('Consider panel height, spacing and light availability.', 'Light Management'), item('Understand irrigation and water-management requirements.', 'Water & Irrigation'), item('Maintain access for agricultural activity and machinery where required.', 'Farm Operations'), item('Explore opportunities to use generated electricity for irrigation, processing or other productive loads.', 'Energy Use'), item('THE BEST AGRIVOLTAIC PROJECTS ARE DESIGNED FOR BOTH ENERGY AND AGRICULTURE.', 'KEY LINE')] },
      { kicker: '08 — LARGE-SCALE DIGITAL INTELLIGENCE', title: 'From Land Data to Energy Decisions', items: [item('Assess → Calculate → Plan Evaluate site and energy potential.', 'SURYACALC'), item('Coordinate → Develop → Track Coordinate stakeholders, vendors, assets and project workflows.', 'SURYANEXA'), item('Monitor → Measure → Report Track generation, performance, environmental and project impact.', 'SURYA IMPACT OS')] },
      { kicker: '09 — PROJECT ECONOMICS', title: 'Large-Scale Solar Must Work Beyond the Model.', items: [item('Project feasibility depends on more than installed capacity. We consider:', 'BODY'), item('Land → Generation → Grid → CAPEX → Financing → Operations → Revenue / Savings → Long-Term Viability', 'Flow'), item('The objective is not maximum installed capacity. It is the right project for the site.', 'KEY LINE')] },
      { kicker: '10 — ENVIRONMENT & RESPONSIBLE LAND USE', title: 'Scale Should Not Come at the Cost of Context.', items: [item('Large-scale energy deployment must consider the environment around the project. Evaluation may include:', 'BODY'), bullets('', '', ['Land characteristics', 'Agricultural use', 'Water requirements', 'Biodiversity considerations', 'Access and drainage', 'Local infrastructure', 'Community context', 'Applicable environmental and land-use requirements']), item('SCALE RESPONSIBLY. DESIGN INTELLIGENTLY. MEASURE IMPACT.', 'CORE STATEMENT')] },
      { kicker: '11 — WHY SURYA SANGAM', items: [item('Land-Aware Solar design begins with understanding the site.', 'Land-Aware'), item('Digital intelligence from assessment to monitoring.', 'Technology-Enabled'), item('Ground-mounted, elevated, agrivoltaic and hybrid possibilities.', 'Multi-Architecture'), item('Project economics considered from the beginning.', 'Finance-Aware'), item('Grid, access, structures and operations matter alongside solar.', 'Infrastructure-Led'), item('Measure energy and environmental outcomes.', 'Impact-Oriented'), item('Designed to support single sites and larger energy programmes.', 'Scalable')] },
      { kicker: '12 — VISION', title: 'From Land to Energy Infrastructure', items: [item('The future of large-scale solar can connect:', 'BODY'), item('Land → Solar → Agriculture → Infrastructure → Energy Access → Economic Value → Climate Impact', 'Flow'), item('Surya Sangam aims to help create energy systems that are not simply larger—but smarter.', 'BODY'), item('TURN LAND INTO ENERGY INFRASTRUCTURE.', 'CORE STATEMENT')] },
      { kicker: '13 — FINAL CTA', title: 'Have Land With Energy Potential?', items: [item('Whether you are evaluating an open land parcel, agricultural site, industrial campus or large infrastructure project, Surya Sangam can help assess the opportunity.', 'BODY'), item('Explore Your Site', 'PRIMARY CTA'), item('Discuss Agrivoltaics', 'SECONDARY CTA'), item('Talk to Our Energy Team', 'LOW-FRICTION CTA')] },
      { kicker: 'SEO', items: [item('Large-Scale Solar & Agrivoltaics in India | Land-Based Solar | Surya Sangam', 'SEO TITLE'), item('Surya Sangam explores large-scale solar, ground-mounted, land-based and agrivoltaic energy solutions for suitable agricultural, industrial, institutional and infrastructure sites.', 'META DESCRIPTION'), item('Solar Beyond the Rooftop', 'H1'), bullets('SEO TOPICS', '', ['Large-Scale Solar Solutions in India', 'Ground-Mounted Solar', 'Land-Based Solar Solutions', 'Agrivoltaics India', 'Agrivoltaic Solar', 'Solar for Agricultural Land', 'Utility-Scale Solar', 'Large-Scale Solar Projects', 'Solar on Open Land', 'Solar Energy Infrastructure', 'Solar + Agriculture', 'Hybrid Large-Scale Solar', 'Ground-Mounted Solar India'])] },
      { kicker: 'FRONT-END DIRECTION', items: [item('Use an expansive aerial image/video. The visual should immediately communicate: Solar + Land + Agriculture + Scale. Avoid a standard solar-farm stock image with nothing else.', 'HERO'), item('Create an interactive cross-section or 3D-style visual: SOLAR PANELS ───────────────────── ↑ ↑ ↑ sunlight distribution 🌱 🌱 🌱 AGRICULTURAL CROPS ──────────────────────────────── SOIL / LAND. Allow users to toggle: Solar View | Agriculture View | Combined View', 'AGRIVOLTAIC INTERACTION'), item('Create a scroll-driven transition: Rooftop ↓ Industrial Shed ↓ Ground-Mounted ↓ Agrivoltaic ↓ Large-Scale Energy Infrastructure. This can visually connect the page to the broader Surya Sangam Solutions architecture.', 'SCALE VISUAL'), item('Do not position this page as: “We have huge solar farms.” unless actual large-scale project credentials exist. Instead position it as: “We evaluate and develop intelligent land-based clean-energy opportunities.” This keeps the page ambitious while remaining credible.', 'IMPORTANT DESIGN PRINCIPLE')] },
    ],
  },
  {
    slug: 'infrastructure/water',
    navLabel: 'Water Infrastructure',
    title: 'WATER INFRASTRUCTURE',
    url: '/solutions/infrastructure/water',
    seoKeyword: 'Solar Solutions for Water Infrastructure',
    pageType: 'Infrastructure Solution',
    positioning: 'ClimateTech × Water Security × Energy Infrastructure',
    seoTitle: 'Solar Solutions for Water Infrastructure | Pumping & Treatment | Surya Sangam',
    metaDescription: 'Surya Sangam provides clean-energy and solar solutions for water treatment plants, pumping stations, irrigation infrastructure, reservoirs and distributed water systems.',
    h1: "Powering India's Water Infrastructure",
    sections: [
      { kicker: '01 — HERO', items: [item('WATER & ENERGY INFRASTRUCTURE', 'EYEBROW'), item("Powering India's Water Infrastructure", 'SUBHEAD'), item('Solar & Clean-Energy Solutions for Water Treatment, Pumping, Irrigation and Water Management Infrastructure', 'SUBHEAD'), item('Water infrastructure depends on reliable energy. Surya Sangam helps water utilities, treatment facilities, pumping systems, irrigation infrastructure and public water assets transition towards cleaner, more resilient and intelligently managed energy systems.', 'BODY'), item('Assess Your Water Infrastructure', 'PRIMARY CTA'), item('Talk to an Energy Expert', 'SECONDARY CTA'), item('Create a cinematic infrastructure visual showing: Water Treatment Plant + Pumping Infrastructure + Solar + Water Reservoir. Optional subtle data overlay: ENERGY → WATER → RESILIENCE', 'HERO VISUAL'), item('Assess → Design → Finance → Execute → Monitor', 'HERO TRUST LINE')] },
      { kicker: '02 — VALUE PROPOSITION', title: "Water Infrastructure Cannot Stop. Its Energy Shouldn't Either.", items: [item('Water systems often operate critical pumps, treatment equipment, filtration systems and distribution infrastructure. Energy reliability therefore directly affects infrastructure performance. Surya Sangam approaches water infrastructure by understanding:', 'BODY'), item('Consumption, operating schedules and pumping requirements.', 'ENERGY DEMAND'), item('Treatment plants, pump houses, reservoirs and associated facilities.', 'INFRASTRUCTURE'), item('Rooftops, open land, reservoirs and other technically suitable areas.', 'SITE POTENTIAL'), item('Systems where continuity of power is operationally important.', 'CRITICAL LOADS'), item('Cost optimisation, renewable adoption, resilience and sustainability.', 'LONG-TERM OBJECTIVES'), item('POWER THE WATER SYSTEM. NOT JUST THE ROOF.', 'KEY STATEMENT')] },
      { kicker: '03 — WATER INFRASTRUCTURE WE SERVE', title: 'Solarizing the Water Cycle', items: [item('Solar and energy solutions for treatment infrastructure and associated electrical loads.', 'WATER TREATMENT PLANTS'), item('Solutions designed around pumping schedules and energy-intensive operations.', 'PUMPING STATIONS'), item('Clean-energy solutions for distributed water supply infrastructure.', 'WATER SUPPLY SYSTEMS'), item('Solar-powered and hybrid energy configurations for suitable irrigation applications.', 'IRRIGATION INFRASTRUCTURE'), item('Evaluate suitable floating, ground-mounted or adjacent solar opportunities where technically and environmentally appropriate.', 'RESERVOIRS & WATER BODIES'), item('Energy transition solutions for public water infrastructure and distributed assets.', 'MUNICIPAL WATER INFRASTRUCTURE')] },
      { kicker: '04 — SOLARIZATION POSSIBILITIES', title: 'More Than Rooftop Solar', items: [item('Water infrastructure can offer multiple deployment opportunities.', 'BODY'), item('Treatment plants, administrative buildings and pump-house rooftops.', 'ROOFTOP SOLAR'), item('Suitable land within or around infrastructure sites.', 'GROUND-MOUNTED SOLAR'), item('Where parking and covered areas are available.', 'SOLAR CARPORTS'), item('Potential deployment on suitable reservoirs and water bodies, subject to technical, environmental and regulatory assessment.', 'FLOATING SOLAR'), item('Solar + battery + grid / backup configurations for critical infrastructure.', 'HYBRID SYSTEMS'), item('Coordinate energy systems across multiple pumping stations, treatment facilities or water assets.', 'DISTRIBUTED SOLAR')] },
      { kicker: '05 — INFRASTRUCTURE INTELLIGENCE', title: 'We Start With the Water System.', items: [item('The right energy system depends on how the infrastructure operates.', 'BODY'), item('Water demand, energy consumption and operational patterns.', 'ASSESS'), item('Infrastructure, electrical systems and potential solar deployment areas.', 'MAP'), item('Develop an appropriate solar and energy architecture.', 'DESIGN'), item('Evaluate project economics and financing pathways.', 'FINANCE'), item('Coordinate deployment and commissioning.', 'EXECUTE'), item('Track energy generation, performance and impact.', 'MONITOR')] },
      { kicker: '06 — RESILIENCE', title: 'Energy Resilience for Critical Water Infrastructure', items: [item("For critical water assets, the question isn't only: “How much solar can we install?” It is also: “Which systems need to remain operational when the grid doesn't?” Surya Sangam can evaluate:", 'BODY'), bullets('', '', ['Critical-load requirements', 'Battery storage', 'Hybrid architecture', 'Backup integration', 'Distributed energy systems', 'Multi-site energy resilience']), item('CLEANER ENERGY. STRONGER WATER SYSTEMS.', 'CORE LINE')] },
      { kicker: '07 — FINANCING', title: 'Infrastructure Investment Should Be Planned, Not Assumed.', items: [item('Surya Sangam supports assessment of:', 'BODY'), item('Project Cost → Energy Economics → Financing → Execution → Monitoring', 'Flow'), item('Potential project structures may vary based on:', 'BODY'), bullets('', '', ['Government ownership', 'Institutional structure', 'Project scale', 'Financing model', 'Applicable schemes', 'Site conditions']), item('Financing, subsidy and scheme applicability remains subject to applicable guidelines, eligibility and authority approval.', 'Note')] },
      { kicker: '08 — DIGITAL PLATFORM', title: 'Intelligence Across the Infrastructure Lifecycle', items: [item('Assess → Calculate → Plan Evaluate energy requirements and solar potential.', 'SURYACALC'), item('Coordinate → Execute → Track Manage vendors, stakeholders and distributed infrastructure projects.', 'SURYANEXA'), item('Monitor → Measure → Report Track generation, performance and environmental impact.', 'SURYA IMPACT OS')] },
      { kicker: '09 — MULTI-SITE WATER INFRASTRUCTURE', title: 'One Water Network. One Energy Strategy.', items: [item('Large water systems rarely operate from one location. They may include:', 'BODY'), item('Treatment Plant → Pumping Station → Reservoir → Distribution Network → Field Infrastructure', 'Network'), item('Surya Sangam can support a coordinated energy strategy across distributed assets.', 'BODY'), item('Create a network diagram: CENTRAL WATER FACILITY connected to: PUMP 01 | PUMP 02 | RESERVOIR | TREATMENT | DISTRIBUTION with solar/energy icons attached to each asset.', 'VISUAL')] },
      { kicker: '10 — WHY SURYA SANGAM', items: [item('Designed around the actual operation of critical water assets.', 'Infrastructure-Specific'), item('Digital intelligence across assessment, execution and monitoring.', 'Technology-Enabled'), item('Energy planning considers critical loads and continuity.', 'Resilience-Focused'), item('Suitable for distributed water infrastructure networks.', 'Multi-Site Capable'), item('Project economics considered alongside technical design.', 'Finance-Aware'), item('Measure energy generation and sustainability outcomes.', 'Impact-Oriented')] },
      { kicker: '11 — VISION', title: 'From Water Infrastructure to Water-Energy Resilience', items: [item('The future of water infrastructure is not only about moving and treating water. It is also about building resilient energy systems around it.', 'BODY'), item('Energy Assessment → Solarization → Storage → Operational Optimisation → Monitoring → Resilient Water Infrastructure', 'Flow'), item('POWERING WATER. BUILDING RESILIENCE.', 'CORE STATEMENT')] },
      { kicker: '12 — FINAL CTA', title: 'Is Your Water Infrastructure Ready for the Energy Transition?', items: [item('Whether you operate a treatment plant, pumping station, irrigation system, reservoir or distributed water network, Surya Sangam can help evaluate the right clean-energy pathway.', 'BODY'), item('Assess Your Water Infrastructure', 'CTA'), item('Talk to an Energy Expert', 'CTA')] },
      { kicker: 'SEO', items: [item('Solar Solutions for Water Infrastructure | Pumping & Treatment | Surya Sangam', 'SEO TITLE'), item('Surya Sangam provides clean-energy and solar solutions for water treatment plants, pumping stations, irrigation infrastructure, reservoirs and distributed water systems.', 'META DESCRIPTION'), item("Powering India's Water Infrastructure", 'H1'), bullets('SEO TOPICS', '', ['Solar for Water Treatment Plants', 'Solar Pumping Solutions', 'Solar for Water Infrastructure', 'Solar for Irrigation Infrastructure', 'Solar for Water Supply Systems', 'Solar Energy for Pumping Stations', 'Floating Solar for Water Infrastructure', 'Hybrid Solar for Water Infrastructure', 'Renewable Energy for Water Utilities'])] },
      { kicker: 'FRONT-END DIRECTION', items: [item('Large cinematic water infrastructure image/video.', 'HERO'), item('Treatment Plant → Pumping → Reservoir → Irrigation → Distribution. Allow users to select an infrastructure type and reveal the relevant solution.', 'INTERACTIVE SECTION'), item('More infrastructure + water + technology. Avoid generic solar-panel imagery.', 'VISUAL STYLE'), item('The page should communicate: We understand the infrastructure before we design the energy system.', 'DESIGN PRINCIPLE')] },
    ],
  },
  {
    slug: 'education-institutional-solarization',
    navLabel: 'Education & Institutional Solarization',
    title: 'EDUCATION & INSTITUTIONAL SOLARIZATION',
    h1: 'Education & Institutional Solarization',
    url: '/solutions/education-institutional-solarization',
    seoKeyword: 'Education and Institutional Solarization in India',
    seoTitle: 'Education & Institutional Solarization | Solar for Schools, Colleges & Campuses | Surya Sangam',
    metaDescription: 'Solar energy pathways for government schools, colleges, universities and institutional campuses, including suitable institutional rooftops and distributed sites.',
    sections: [
      {
        kicker: 'EDUCATION INFRASTRUCTURE',
        title: 'From Public Buildings to Distributed Infrastructure',
        items: [
          item('Government schools, colleges, universities and institutional campuses.', 'EDUCATION INFRASTRUCTURE'),
          item('Coordinate deployment across districts, blocks, institutions or geographically distributed assets.', 'MULTI-SITE GOVERNMENT PROGRAMMES'),
        ],
      },
      {
        kicker: 'SOLARIZATION POSSIBILITIES',
        title: 'One Public Asset. Multiple Energy Possibilities.',
        items: [
          item('Government buildings, schools, hospitals and institutional rooftops.', 'ROOFTOP SOLAR'),
        ],
      },
      {
        kicker: 'PROGRAMME-LEVEL APPROACH',
        title: 'From One Facility to an Infrastructure Programme',
        items: [
          item('Large public-sector initiatives often involve multiple locations. Surya Sangam can support a structured journey:', 'BODY'),
          item('Programme Planning ↓ Site Assessment ↓ Technical Design ↓ Financial Planning ↓ Vendor / Execution Coordination ↓ Commissioning ↓ Monitoring ↓ Impact Reporting', 'Journey'),
        ],
      },
      {
        kicker: 'OUR APPROACH',
        title: 'Built Around Public Infrastructure Requirements',
        items: [
          item('Understand each facility and its energy profile.', 'ASSESS'),
          item('Develop repeatable technical and operational frameworks.', 'STANDARDISE'),
          item('Adapt deployment to individual site conditions.', 'LOCALISE'),
          item('Coordinate implementation across locations.', 'EXECUTE'),
          item('Track assets and performance centrally.', 'MONITOR'),
          item('Create structured visibility into programme-level outcomes.', 'REPORT'),
        ],
      },
      {
        kicker: 'MULTI-SITE CONTROL',
        title: 'From Distributed Assets to One View',
        items: [
          item("For large government programmes, visibility becomes as important as installation. Surya Sangam's digital approach can help bring together:", 'BODY'),
          item('Sites · Assets · Generation · Performance · Impact', 'Data'),
        ],
      },
      {
        kicker: 'DIGITAL INFRASTRUCTURE',
        title: 'Technology for Infrastructure at Scale',
        items: [
          item('Assess → Calculate → Plan Site and energy assessment.', 'SURYACALC'),
          item('Coordinate → Execute → Track Multi-site project and stakeholder coordination.', 'SURYANEXA'),
          item('Monitor → Measure → Report Post-installation performance and impact visibility.', 'SURYA IMPACT OS'),
        ],
      },
    ],
  },
];

export const placeholderSolutions: SolutionPage[] = [];

const solutionRecords = [...solutions, ...placeholderSolutions];
const solutionMenuOrder = [
  'hospital-solarization',
  'education-institutional-solarization',
  'industrial-msme-solarization',
  'infrastructure/water',
  'infrastructure/government',
  'infrastructure/large-scale',
];

export const allSolutions = solutionMenuOrder
  .map(slug => solutionRecords.find(solution => solution.slug === slug))
  .filter((solution): solution is SolutionPage => Boolean(solution));

export function getSolution(slug: string) {
  return allSolutions.find(solution => solution.slug === slug);
}
