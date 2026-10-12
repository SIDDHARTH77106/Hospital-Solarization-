import type { SolutionItem, SolutionPage, SolutionSection, SolutionVisual } from './data';

type VisitorPage = {
  heroLead: string;
  sections: SolutionSection[];
};

const copy = (text: string, label?: string): SolutionItem => ({ text, label });
const stat = (label: string, text: string): SolutionItem => ({ label, text, kind: 'stat' });
const cta = (text: string): SolutionItem => ({ text, kind: 'cta' });
const flow = (text: string): SolutionItem => {
  const steps = text.split(/\s+(?:→|↓)\s+/).map((step) => step.trim()).filter(Boolean);
  return {
    text,
    kind: 'flow',
    steps: steps.length > 1 ? steps : undefined,
  };
};
const section = (kicker: string, title: string, items: SolutionItem[], visual?: SolutionVisual): SolutionSection => ({ kicker, title, items, visual });

/* ─────────────────── HOSPITAL SOLARIZATION ─────────────────── */
const hospital: VisitorPage = {
  heroLead: 'Facility-specific solar for hospitals, critical loads and the communities they serve.',
  sections: [
    section('Healthcare energy transition', 'Cleaner, more resilient power for healthcare', [
      copy('Hospitals run around the clock. Lighting, ventilation, diagnostics, cold-chain storage and IT all need dependable power.'),
      copy('We assess the facility, design the right system, execute the project and measure its performance.'),
      cta('Request a Solar Assessment'),
      cta('Talk to Our Energy Team'),
    ]),
    section('Powering Care', 'Powering Care in numbers', [
      stat('Solar capacity deployed', '150 kW'),
      stat('Community Health Centres', '10'),
      stat('Off-grid system / CHC', '15 kW'),
      stat('Project execution', '19 days'),
      stat('Location', 'Prayagraj, Uttar Pradesh'),
      copy('Powering Care healthcare solarization initiative.'),
    ], 'stats'),
    section('Why it matters', 'Healthcare runs around the clock — energy must keep up', [
      copy('Solarization generates clean power on-site for critical healthcare services.'),
      { label: 'What solar supports', text: '', bullets: ['Lower energy costs', 'Renewable adoption', 'More resilient infrastructure', 'Sustainability goals', 'Measured environmental impact'] },
    ]),
    section('A complete delivery model', 'Beyond installing panels', [
      copy('A complete path from energy assessment to design, installation, commissioning, monitoring and impact measurement.'),
      flow('Assess → Design → Execute → Commission → Monitor → Measure'),
    ], 'timeline'),
    section('Proven execution', 'Powering Care — from one CHC to a wider healthcare vision', [
      copy('Powering Care covered 10 Community Health Centres in Prayagraj. Each received a 15 kW off-grid system.'),
      copy('Together: 150 kW deployed across 10 facilities in 19 days.'),
      stat('Deployment', '10 CHCs × 15 kW per facility = 150 kW'),
      stat('Execution', '19 days across 10 healthcare facilities'),
      flow('150 kW → 10 CHCs → 19 Days'),
      cta('View the Powering Care Case Study'),
    ], 'case-study'),
    section('Digital energy stack', 'One connected platform for every stage', [
      copy('Assess site data, solar potential, system size and feasibility.', 'SuryaCALC — Planning intelligence'),
      flow('Assess → Calculate → Design'),
      copy('Coordinate facilities, stakeholders, vendors and workflows across sites.', 'SuryaNexa — Execution at scale'),
      flow('Coordinate → Execute → Track'),
      copy('Track generation, performance and environmental impact after commissioning.', 'Surya Impact OS — Post-installation intelligence'),
      flow('Monitor → Measure → Report'),
      flow('SuryaCALC → SuryaNexa → Surya Impact OS'),
    ], 'product-cards'),
    section('Healthcare configurations', 'Solar solutions designed around the facility', [
      copy('The configuration follows the facility, its loads and its schedule.'),
      copy('Use available roof space for daytime generation.', 'Rooftop Solar'),
      copy('Independent solar and storage where grid reliability is limited.', 'Off-Grid Solar'),
      copy('Store surplus power for evenings, outages or peak demand.', 'Solar + Battery Storage'),
      copy('Track generation, performance and carbon savings.', 'Energy Intelligence'),
    ], 'solution-cards'),
    section('Who we serve', 'Solarization across the healthcare ecosystem', [
      { label: 'Government healthcare', text: '', bullets: ['CHCs and PHCs', 'District and government hospitals', 'Medical colleges', 'Public healthcare institutions'] },
      { label: 'Private healthcare', text: '', bullets: ['Multi-speciality hospitals', 'Nursing homes and clinics', 'Diagnostic centres', 'Healthcare campuses'] },
      copy('Multi-site programmes combine facility assessments with consolidated monitoring.', 'Institutional and healthcare networks'),
    ], 'solution-cards'),
    section('How it works', 'From assessment to impact', [
      copy('A structured healthcare solarization process moves from facility assessment through network scale.', 'Healthcare delivery workflow'),
      flow('Assess ↓ Design ↓ Execute ↓ Commission ↓ Monitor ↓ Measure ↓ Scale'),
    ], 'timeline'),
    section('Facility-specific planning', 'Designed around your hospital', [
      copy('There is no universal solar system for healthcare. Every assessment considers the specific building and how it operates.'),
      copy('How much electricity the facility uses, when demand peaks and how loads shift through the day.', 'Energy profile'),
      copy('Available roof area, orientation, shading from nearby structures and space for equipment.', 'Site conditions'),
      copy('Existing switchboards, transformers and wiring that the solar system needs to integrate with.', 'Electrical infrastructure'),
      copy('Which loads are critical (such as ICUs, cold storage or diagnostics), how many hours the facility operates and any special power requirements.', 'Operational requirements'),
      copy('Whether the goal is cost reduction, renewable adoption, backup resilience, sustainability compliance — or all of the above.', 'Energy objectives'),
    ], 'solution-cards'),
    section('Impact monitoring', 'Installation is only the beginning', [
      copy('A solar project should remain measurable long after the panels are commissioned. Surya Impact OS helps institutions move from knowing what was installed to understanding what it is delivering.'),
      stat('Solar generation', 'Total energy produced in kWh'),
      stat('System performance', 'Site-by-site output and efficiency'),
      stat('Environmental impact', 'Estimated carbon emissions avoided'),
      stat('Project impact', 'Facility- and programme-level outcomes'),
    ], 'stats'),
    section('Scale and vision', 'From one hospital to an energy network', [
      copy('The future of healthcare energy is not about solarizing one building at a time. It is about creating connected, measurable clean-energy infrastructure across entire healthcare networks — a hospital, a district, a state.'),
      flow('ASSESS ONE FACILITY → EXECUTE ACROSS A NETWORK → MONITOR EVERY ASSET → MEASURE THE IMPACT'),
    ], 'timeline'),
    section('Why Surya Sangam', 'Built for healthcare energy programmes', [
      copy('Digital tools support every stage — from initial assessment through post-installation monitoring.', 'Technology-led'),
      copy('Structured project workflows enable coordinated deployment across multiple facilities.', 'Execution-focused'),
      copy('Solutions are designed around how healthcare facilities actually operate — not around a generic template.', 'Healthcare-aware'),
      copy('Generation, performance and environmental outcomes are tracked with real data.', 'Data-driven'),
      copy('The approach works for a single facility or a network-wide programme.', 'Multi-site capable'),
      copy('The focus extends beyond installation to measurable energy and environmental impact.', 'Impact-oriented'),
    ], 'solution-cards'),
    section('Case study', 'Powering Care — Solarization of 10 Community Health Centres', [
      copy('Powering Care demonstrates Surya Sangam\'s approach to combining clean-energy infrastructure, digital project workflows and impact monitoring for public healthcare.'),
      stat('Facilities', '10 Community Health Centres'),
      stat('Capacity', '150 kW off-grid solar'),
      stat('System size', '15 kW / CHC'),
      stat('Delivery', '19-day deployment'),
      cta('Explore the Powering Care Case Study'),
    ], 'case-study'),
    section('Next step', 'Ready to solarize your healthcare facility?', [
      copy('Whether you operate a government health centre, private hospital, diagnostic centre or healthcare network, Surya Sangam can help evaluate the opportunity.'),
      copy('Tell us about your facility, location and energy requirements. Our team will assess the solar potential for you.'),
      cta('Request a Solar Assessment'),
      cta('Talk to Surya Sangam'),
    ]),
    section('Our commitment', 'Powering healthcare. Powering communities. Powering the energy transition.', [
      copy('Surya Sangam is an Alarth Green platform for intelligent clean-energy transition.'),
    ]),
  ],
};

/* ─────────────────── INDUSTRIAL & MSME ─────────────────── */
const industrial: VisitorPage = {
  heroLead: 'Solar and energy solutions for factories and MSMEs, shaped around the roof, loads and business goals.',
  sections: [
    section('Industrial energy transition', "Solarizing India's industries and MSMEs", [
      copy('Roof structure, power use, shifts and finances determine the right system. We connect assessment, design, financing, execution and monitoring.'),
      copy('MSMEs are the backbone of Indian manufacturing.'),
      flow('Facility assessment → System design → Financing → Execution → Monitoring → ESG'),
      cta('Get an Industrial Solar Assessment'),
      cta('Book a Solar Boardroom'),
    ], 'timeline'),
    section('Clarity before capital', 'Your factory is not a standard solar project', [
      copy('Start with what the facility and business actually need.'),
      copy('Usage, peaks and shift patterns.', 'Energy consumption'),
      copy('RCC roofs, metal sheds, PEB structures, yards and parking.', 'Infrastructure'),
      copy('Budget, financing and growth plans.', 'Business context'),
      copy('Solar, ESG and ZED priorities.', 'Sustainability goals'),
    ]),
    section('Solarization options', 'Use every suitable surface', [
      copy('Use every suitable surface, not only the main roof.'),
      copy('Solar on concrete rooftops.', 'Rooftop Solar'),
      copy('Systems for metal-sheet and PEB structures, subject to assessment.', 'Industrial Shed Solar'),
      copy('Solar-covered parking that turns unused space into power.', 'Solar Carport'),
      copy('Solar, storage and grid or backup power for reliability.', 'Hybrid Solar'),
      copy('One coordinated programme across factory locations.', 'Multi-site Solarization'),
    ], 'solution-cards'),
    section('The Surya Sangam difference', 'More than a solar quotation', [
      copy('Solarization should make technical and financial sense.'),
      copy('Define the facility need.', 'Assess'),
      copy('Match the system to the site and budget.', 'Design'),
      copy('Explore loan, lease or purchase options.', 'Finance'),
      copy('Coordinate site work through commissioning.', 'Execute'),
      copy('Track delivery after installation.', 'Monitor'),
      copy('Identify ESG and certification opportunities.', 'Upgrade'),
    ], 'timeline'),
    section('End-to-end journey', 'From factory assessment to long-term impact', [
      copy('Connect assessment, design, financing, execution, monitoring and improvement.'),
      flow('Assess → Design → Finance → Execute → Monitor → Improve'),
    ], 'timeline'),
    section('Beyond solar', 'Solar can start a larger business upgrade', [
      copy('Solar can open the door to broader business improvements.'),
      copy('Explore technology-upgradation schemes.', 'Technical upgradation'),
      copy('ZED certification supports quality and environmental responsibility.', 'ZED certification'),
      copy('Reduce reliance on diesel backup.', 'Diesel and backup optimisation'),
      copy('Use solar as a practical first step toward ESG.', 'ESG readiness'),
      copy('Eligibility depends on current guidelines and business profile.', 'Important note'),
    ], 'solution-cards'),
    section('Business upgrade pathway', 'Solarize the facility. Modernize the business.', [
      copy("For India's MSMEs, solar can lead to energy improvement, ESG, certification and sustainable growth."),
      flow('Solarization → Energy Improvement → Technical Upgradation → ESG → Certification → Sustainable Growth'),
      copy('Solarize. Upgrade. Certify. Grow.'),
    ], 'timeline'),
    section('Industry engagement', 'We started with the MSME ecosystem', [
      copy('Before asking MSMEs to invest in solar, Surya Sangam focused on building awareness and helping factory owners make informed decisions.'),
      copy('ESG awareness and sustainability engagement with the Indian Industries Association in Ghaziabad and Greater Noida, Laghu Udyog Bharati in Khurja and Ghaziabad, and the Association of MSME in Tronica City, Loni.', 'Industry engagements'),
      stat('Engagements', '5+ industry and MSME association events'),
      stat('Consultations', '10+ virtual industrial solar consultations'),
      stat('Solar Boardroom', 'Ongoing MSME energy conversations'),
    ], 'stats'),
    section('Solar Boardroom', "Don't buy solar from a quotation — understand it first", [
      copy('Solar Boardroom is a practical knowledge platform where MSME owners can learn about industrial solarization before committing capital.'),
      { label: 'Questions it helps answer', text: '', bullets: ['How much solar capacity does my factory actually need?', 'Is my roof structurally suitable for panels?', 'Should I consider a solar carport over the parking area?', 'Do I need battery storage, or is grid-tied enough?', 'What about my diesel generator — can solar replace it?', 'What financing options can I explore?', 'How can solar connect with ESG and sustainability goals?'] },
      cta('Watch Solar Boardroom'),
      cta('Book a Consultation'),
    ], 'solution-cards'),
    section('Financing', 'Solarization should make business sense', [
      copy('The right project needs to work technically and financially. Surya Sangam supports MSMEs through a structured path — from understanding the true project cost to exploring loan and financing options.'),
      flow('Project Assessment ↓ System & Cost Understanding ↓ Financial Planning ↓ Loan / Financing Exploration ↓ Project Execution'),
      cta('Explore Financing Options'),
    ], 'timeline'),
    section('Digital energy platform', 'Technology behind the energy journey', [
      copy('Understand energy requirements, site conditions and solar potential before any investment.', 'SuryaCALC — Assess before you invest'),
      flow('Assess → Calculate → Plan'),
      copy('Coordinate vendors, stakeholders, equipment and project workflows across sites.', 'SuryaNexa — Execute with structure'),
      flow('Coordinate → Execute → Track'),
      copy('Monitor energy generation, system performance and environmental impact after installation.', 'Surya Impact OS — Measure what matters'),
      flow('Monitor → Measure → Report'),
    ], 'product-cards'),
    section('Why Surya Sangam', 'Built for MSME decision-makers', [
      copy('Every assessment is based on the actual factory — not a generic template.', 'Facility-specific'),
      copy('Rooftop, industrial shed, carport and other suitable surfaces are all considered.', 'Roof-agnostic'),
      copy('The process is built around clarity before capital commitment.', 'Advisory-led'),
      copy('Financing is treated as part of the project journey, not an afterthought.', 'Finance-aware'),
      copy('Digital tools support assessment, execution and post-installation monitoring.', 'Technology-enabled'),
      copy('Solarization can become the first step toward broader ESG and sustainability goals.', 'ESG-oriented'),
      copy('From first assessment through execution and post-installation monitoring.', 'End-to-end'),
    ], 'solution-cards'),
    section('Next step', "Ready to understand your factory's solar potential?", [
      copy("Tell us about your facility, energy consumption and business requirements. We'll help you understand what can be solarized, which system may be appropriate, what financing pathways exist and what the next steps look like."),
      cta('Get an Industrial Solar Assessment'),
      cta('Book a Solar Boardroom'),
      cta('Talk to an Energy Expert'),
    ]),
  ],
};

/* ─────────────────── GOVERNMENT INFRASTRUCTURE ─────────────────── */
const government: VisitorPage = {
  heroLead: 'Clean-energy solutions for government buildings, public institutions and distributed infrastructure.',
  sections: [
    section('Public infrastructure transition', "Powering India's government infrastructure", [
      copy('From offices and schools to hospitals and utilities, we plan systems around the real demands of public assets.'),
      flow('ASSESS → DESIGN → FINANCE → EXECUTE → MONITOR → SCALE'),
      cta('Assess Government Infrastructure'),
      cta('Talk to Our Infrastructure Team'),
    ], 'timeline'),
    section('Value proposition', 'Public infrastructure deserves more than a standard solar system', [
      copy('Every deployment is shaped by the asset, programme and procurement context.'),
      { label: 'The assessment considers', text: '', bullets: ['Building condition', 'Energy use and peaks', 'Operating schedules', 'Ownership and procurement', 'Site distribution', 'Funding options'] },
    ]),
    section('Who we serve', 'From public buildings to distributed infrastructure', [
      copy('Administrative offices and public buildings.', 'Government offices'),
      copy('CHCs, district hospitals and public healthcare.', 'Healthcare infrastructure'),
      copy('Schools, colleges, universities and campuses.', 'Education infrastructure'),
      copy('Assets supporting essential public services.', 'Public utilities'),
      copy('Facilities serving local communities.', 'Community infrastructure'),
      copy('Coordinated deployment across distributed assets.', 'Multi-site government programmes'),
    ]),
    section('Solarization possibilities', 'One public asset — multiple energy possibilities', [
      copy('Solar on public and institutional rooftops.', 'Rooftop Solar'),
      copy('Covered parking and public areas.', 'Solar Carports'),
      copy('Open land near public infrastructure.', 'Ground-mounted Solar'),
      copy('Solar, storage and grid or backup power.', 'Hybrid Systems'),
      copy('Independent solar and storage where the grid is weak.', 'Off-grid Systems'),
      copy('Multiple sites managed as one programme.', 'Distributed Solar'),
    ], 'solution-cards'),
    section('Programme approach', 'From one facility to an infrastructure programme', [
      copy('For multi-site programmes, connect planning, assessment, design, financing, execution, monitoring and reporting.'),
      flow('Programme Planning ↓ Site Assessment ↓ Technical Design ↓ Financial Planning ↓ Vendor / Execution Coordination ↓ Commissioning ↓ Monitoring ↓ Impact Reporting'),
    ], 'timeline'),
    section('Our approach', 'Built around public infrastructure requirements', [
      copy('Understand each facility and its energy profile.', 'Assess'),
      copy('Develop repeatable technical and operational frameworks.', 'Standardise'),
      copy('Adapt each deployment to the specific site conditions.', 'Localise'),
      copy('Coordinate implementation across locations.', 'Execute'),
      copy('Track assets and performance centrally.', 'Monitor'),
      copy('Create structured visibility into programme-level outcomes.', 'Report'),
    ], 'timeline'),
    section('Multi-site visibility', 'From distributed assets to one view', [
      copy("One connected view brings together every facility, asset, generation figure, performance metric and impact outcome."),
      flow('Sites · Assets · Generation · Performance · Impact'),
      flow('Facility → Capacity → Status → Generation → Impact'),
    ], 'network'),
    section('Digital infrastructure', 'Technology for infrastructure at scale', [
      copy('Evaluate site conditions and energy information before planning the system.', 'SuryaCALC — Site and energy assessment'),
      flow('Assess → Calculate → Plan'),
      copy('Coordinate multi-site projects, stakeholders and execution workflows.', 'SuryaNexa'),
      flow('Coordinate → Execute → Track'),
      copy('Track post-installation performance and measure environmental impact.', 'Surya Impact OS'),
      flow('Monitor → Measure → Report'),
    ], 'product-cards'),
    section('Financing and programme structure', 'Infrastructure projects need more than technical design', [
      copy('Assessment may cover capex, financing, institutional funding, CSR opportunities and multi-site economics.'),
      copy('Funding, subsidy and financing eligibility remains subject to programme guidelines, procurement requirements and authority approval.', 'Important note'),
    ]),
    section('Proven execution', 'Built for real public infrastructure', [
      copy('Powering Care is a completed government healthcare solarization project that demonstrates the approach in practice.'),
      stat('Facilities', '10 Community Health Centres'),
      stat('Capacity', '150 kW off-grid solar'),
      stat('Location', 'Prayagraj, Uttar Pradesh'),
      stat('Delivery', '19-day deployment'),
      flow('Map → Facilities → Solar → Impact'),
    ], 'case-study'),
    section('Why Surya Sangam', 'Programme-level thinking', [
      copy('The approach goes beyond individual installations to programme-level coordination.', 'Programme-level thinking'),
      copy('Built for infrastructure that is spread across multiple locations.', 'Multi-site capable'),
      copy('Digital tools support assessment, execution and ongoing monitoring.', 'Technology-enabled'),
      copy('Structured coordination from initial planning through to commissioning.', 'Execution-focused'),
      copy('Generation, performance and environmental outcomes are measured with real data.', 'Impact-driven'),
      copy("Every solution begins with understanding the facility's actual requirements.", 'Infrastructure-aware'),
    ]),
    section('Vision', 'Building the energy layer for public infrastructure', [
      copy("Public assets offer a major opportunity for distributed clean energy, digital monitoring and measurable impact."),
      flow('Public Assets → Clean Energy → Digital Monitoring → Measured Impact → Scalable Infrastructure Programmes'),
    ], 'timeline'),
    section('Next step', 'Ready to plan a government energy programme?', [
      copy('Whether it is one facility or a distributed network, Surya Sangam can help assess the right clean-energy pathway.'),
      cta('Start an Infrastructure Assessment'),
      cta('Discuss a Multi-Site Programme'),
      cta('Talk to Our Infrastructure Team'),
    ]),
  ],
};

/* ─────────────────── LARGE-SCALE SOLAR ─────────────────── */
const largeScale: VisitorPage = {
  heroLead: "Land-based solar and agrivoltaic pathways for India's energy transition beyond rooftops.",
  sections: [
    section('Large-scale energy infrastructure', 'Solar beyond the rooftop', [
      copy('We explore land-based systems that combine solar generation with agriculture, infrastructure and productive land use.'),
      copy('Options include ground-mounted fields, distributed sites and agrivoltaics—elevated panels that share land with crops.'),
      flow('LAND → ENERGY → AGRICULTURE → IMPACT'),
      cta('Explore a Large-Scale Solar Project'),
      cta('Talk to Our Energy Team'),
    ], 'landscape'),
    section('Positioning', 'The future of solar is not limited to rooftops', [
      copy('Design energy systems that work with open land, agriculture, infrastructure and local economic activity.'),
    ]),
    section('Deployment possibilities', 'Built for land-based energy', [
      copy('Solar fields on suitable open land.', 'Ground-mounted Solar'),
      copy('Elevated panels that share land with crops.', 'Agrivoltaics'),
      copy('Solar on suitable industrial land.', 'Industrial Open Areas'),
      copy('Solar across large institutional estates.', 'Institutional Land'),
      copy('Multiple land-based sites as one programme.', 'Distributed Solar'),
      copy('Solar with storage and grid or backup power.', 'Hybrid Energy Systems'),
    ], 'solution-cards'),
    section('Agrivoltaics', 'When the same land can produce food and energy', [
      copy('Agrivoltaics lets farming and solar generation share one site.'),
      copy('Crops and agricultural activity continue below.', 'Agriculture'),
      copy('Panels generate clean electricity above.', 'Solar'),
      copy('One site can support more total productivity.', 'Dual-use land'),
      { label: 'What we evaluate', text: '', bullets: ['Land and sunlight', 'Crops and shade tolerance', 'Panel height and spacing', 'Irrigation and access', 'Grid connection', 'Economics and financing'] },
      copy('Suitability depends on crops, climate, land rules and structure.', 'Important note'),
    ]),
    section('Beyond panel installation', 'Land-based solar is an infrastructure project', [
      copy('Land-based solar is an infrastructure project.'),
      copy('Availability, access and build suitability.', 'Land'),
      copy('Generation potential and power requirements.', 'Energy'),
      copy('Grid connection and evacuation infrastructure.', 'Grid'),
      copy('Ground-mounted or elevated structures.', 'Structure'),
      copy('Roads, fencing, drainage and access.', 'Access'),
      copy('Cost, financing and long-term viability.', 'Economics'),
      copy('Land, water, agriculture and ecological impact.', 'Environment'),
      copy('Permits and land-use approvals.', 'Regulatory'),
    ], 'solution-cards'),
    section('Project journey', 'From land assessment to energy asset', [
      copy('Project objective, land and energy need.', 'Discover'),
      copy('Site suitability, sunlight and infrastructure.', 'Assess'),
      copy('Ground-mounted, elevated or agrivoltaic design.', 'Design'),
      copy('Project economics and financing.', 'Finance'),
      copy('Approvals and execution planning.', 'Develop'),
      copy('Build and commission the asset.', 'Execute'),
      copy('Generation, performance and impact.', 'Monitor'),
      copy('Expand across suitable sites.', 'Scale'),
      flow('LAND → ENERGY → INFRASTRUCTURE → IMPACT'),
    ], 'timeline'),
    section('Agrivoltaic experience', 'Designing energy systems around productive land', [
      copy('For agrivoltaic projects, the solar system must work around the agricultural system — not the other way around.'),
      copy('Evaluate whether the proposed solar configuration is compatible with agricultural activity.', 'Crop compatibility'),
      copy('Consider panel height, spacing and light availability.', 'Light management'),
      copy('Understand irrigation and water-management requirements.', 'Water & irrigation'),
      copy('Maintain access for agricultural activity and machinery where required.', 'Farm operations'),
      copy('Explore opportunities to use generated electricity for irrigation, processing or other productive loads.', 'Energy use'),
      copy('The best agrivoltaic projects are designed for both energy and agriculture.'),
    ], 'agrivoltaic'),
    section('Digital intelligence', 'From land data to energy decisions', [
      copy('Evaluate site characteristics and energy potential.', 'SuryaCALC — Land and energy assessment'),
      flow('Assess → Calculate → Plan'),
      copy('Coordinate stakeholders, vendors, equipment and project workflows.', 'SuryaNexa'),
      flow('Coordinate → Develop → Track'),
      copy('Track generation, performance, environmental outcomes and project impact.', 'Surya Impact OS'),
      flow('Monitor → Measure → Report'),
    ], 'product-cards'),
    section('Project economics', 'Large-scale solar must work beyond the model', [
      copy('Project feasibility depends on more than installed capacity. The wider project economics and infrastructure need to work for the site.'),
      flow('Land → Generation → Grid → CAPEX → Financing → Operations → Revenue / Savings → Long-Term Viability'),
      copy('The objective is not maximum installed capacity. It is the right project for the site.'),
    ], 'timeline'),
    section('Responsible land use', 'Scale should not come at the cost of context', [
      copy('Large-scale energy deployment must account for the environment and community around the project.'),
      { label: 'Evaluation may include', text: '', bullets: ['Land characteristics and current use', 'Agricultural activity and livelihoods', 'Water requirements and drainage', 'Biodiversity and ecological sensitivity', 'Access roads and local infrastructure', 'Community context and stakeholder engagement', 'Applicable environmental and land-use regulations'] },
    ], 'solution-cards'),
    section('Why Surya Sangam', 'Land-aware, technology-enabled and built to scale', [
      copy('Every project starts with understanding the site — its land, its climate and its context.', 'Land-aware'),
      copy('Digital tools support every stage from assessment through long-term monitoring.', 'Technology-enabled'),
      copy('Ground-mounted, elevated, agrivoltaic and hybrid architectures are all considered.', 'Multi-architecture'),
      copy('Project economics are modelled from the outset, not bolted on later.', 'Finance-aware'),
      copy('Grid connection, access, structures and operations are treated as integral to the project.', 'Infrastructure-led'),
      copy('Energy generation and environmental outcomes are measured, not assumed.', 'Impact-oriented'),
    ]),
    section('Vision', 'From land to energy infrastructure', [
      copy('The future of large-scale solar can connect land, solar, agriculture and infrastructure with broader energy and climate value.'),
      flow('Land → Solar → Agriculture → Infrastructure → Energy Access → Economic Value → Climate Impact'),
      copy('Turn land into energy infrastructure.'),
    ], 'timeline'),
    section('Next step', 'Have land with energy potential?', [
      copy('Whether you are evaluating open land, an agricultural site, an industrial campus or a large infrastructure project, Surya Sangam can help assess the opportunity.'),
      cta('Explore Your Site'),
      cta('Discuss Agrivoltaics'),
      cta('Talk to Our Energy Team'),
    ]),
  ],
};

/* ─────────────────── WATER INFRASTRUCTURE ─────────────────── */
const water: VisitorPage = {
  heroLead: 'Clean-energy solutions for water treatment, pumping, irrigation and resilient operation.',
  sections: [
    section('Water and energy infrastructure', "Powering India's water infrastructure", [
      copy('Treatment, pumping, distribution and irrigation all depend on reliable energy. We help water assets transition to cleaner, more resilient power.'),
      flow('ENERGY → WATER → RESILIENCE'),
      flow('Assess → Design → Finance → Execute → Monitor'),
      cta('Assess Your Water Infrastructure'),
      cta('Talk to an Energy Expert'),
    ], 'timeline'),
    section('Value proposition', "Water infrastructure can't stop — its energy shouldn't either", [
      copy('When power fails, the water system fails with it.'),
      copy('Consumption, peaks and pumping schedules.', 'Energy demand'),
      copy('Plants, pump houses, reservoirs and support facilities.', 'Infrastructure'),
      copy('Rooftops, open land and reservoir edges.', 'Site potential'),
      copy('Pumps, filtration and dosing systems that must run.', 'Critical loads'),
      copy('Cost reduction, resilience and sustainability.', 'Objectives'),
    ]),
    section('Who we serve', 'Solarizing the water cycle', [
      copy('Solar for treatment plants and electrical loads.', 'Water treatment plants'),
      copy('Systems shaped around pumping schedules and motor loads.', 'Pumping stations'),
      copy('Clean energy for distributed water networks.', 'Water supply systems'),
      copy('Solar and hybrid power for irrigation.', 'Irrigation infrastructure'),
      copy('Floating, ground-mounted or adjacent solar where suitable.', 'Reservoirs and water bodies'),
      copy('Energy transition for municipal water assets.', 'Municipal water infrastructure'),
    ], 'solution-cards'),
    section('Solarization possibilities', 'More than rooftop solar', [
      copy('Treatment plants, administrative buildings and pump-house rooftops.', 'Rooftop Solar'),
      copy('Suitable open land within or adjacent to infrastructure sites.', 'Ground-mounted Solar'),
      copy('Covered parking areas where available.', 'Solar Carports'),
      copy('Panels installed on floating platforms over reservoirs — subject to technical, environmental and regulatory assessment.', 'Floating Solar'),
      copy('Solar paired with batteries and grid or backup power for critical water infrastructure.', 'Hybrid Systems'),
      copy('Coordinated solar across multiple pumping stations, treatment plants and water assets.', 'Distributed Solar'),
    ], 'solution-cards'),
    section('Infrastructure intelligence', 'Start with the water system', [
      copy('Start with the way the water system operates.'),
      copy('Water demand, energy use and operating patterns.', 'Assess'),
      copy('Infrastructure, electrical systems and deployment areas.', 'Map'),
      copy('The right solar and energy architecture.', 'Design'),
      copy('Project economics and financing pathways.', 'Finance'),
      copy('Deployment and commissioning.', 'Execute'),
      copy('Generation, performance and impact.', 'Monitor'),
    ], 'timeline'),
    section('Resilience', 'Energy resilience for critical water infrastructure', [
      copy('The question is not only how much solar can be installed — it is also which systems must keep running when the grid goes down.'),
      { label: 'Surya Sangam can evaluate', text: '', bullets: ['Critical loads', 'Battery sizing and duration', 'Solar + battery + grid + backup', 'Backup integration', 'Distributed energy across water assets', 'Multi-site resilience'] },
    ], 'solution-cards'),
    section('Financing', 'Infrastructure investment should be planned, not assumed', [
      copy('Assess project cost, energy economics, financing, execution and monitoring.'),
    ], 'timeline'),
    section('Digital platform', 'Intelligence across the infrastructure lifecycle', [
      copy('Evaluate energy requirements and solar potential for the site.', 'SuryaCALC — Water-site energy assessment'),
      flow('Assess → Calculate → Plan'),
      copy('Manage vendors, stakeholders and distributed infrastructure projects.', 'SuryaNexa'),
      flow('Coordinate → Execute → Track'),
      copy('Track generation, system performance and environmental impact over time.', 'Surya Impact OS'),
      flow('Monitor → Measure → Report'),
    ], 'product-cards'),
    section('Multi-site water infrastructure', 'One water network — one energy strategy', [
      copy('Large water systems rarely operate from a single location. A treatment plant feeds pumping stations, which push water to reservoirs, which supply distribution networks, which connect to field infrastructure.'),
      flow('Treatment Plant → Pumping Station → Reservoir → Distribution Network → Field Infrastructure'),
      copy('Surya Sangam can support a coordinated energy strategy that spans the entire network.'),
    ], 'water-network'),
    section('Vision', 'From water infrastructure to water-energy resilience', [
      copy('The future of water infrastructure is not only about moving and treating water. It is also about building resilient energy systems around it.'),
      flow('Energy Assessment → Solarization → Storage → Operational Optimisation → Monitoring → Resilient Water Infrastructure'),
      copy('Powering water. Building resilience.'),
    ], 'timeline'),
    section('Why Surya Sangam', 'Built around how critical water assets operate', [
      copy('Solutions are designed around the actual operation of pumps, treatment systems and distribution networks.', 'Infrastructure-specific'),
      copy('Digital tools support assessment, execution and long-term monitoring.', 'Technology-enabled'),
      copy('Energy planning accounts for critical loads and continuity requirements.', 'Resilience-focused'),
      copy('The approach works for distributed water networks with multiple sites.', 'Multi-site capable'),
      copy('Project economics are considered alongside the technical design.', 'Finance-aware'),
      copy('Energy generation and sustainability outcomes are measured and reported.', 'Impact-oriented'),
    ]),
    section('Next step', 'Is your water infrastructure ready for the energy transition?', [
      copy('Whether you operate a treatment plant, pumping station, irrigation system, reservoir or distributed water network, Surya Sangam can help evaluate the right clean-energy pathway.'),
      cta('Assess Your Water Infrastructure'),
      cta('Talk to an Energy Expert'),
    ]),
  ],
};

/* ────────── EDUCATION & INSTITUTIONAL (sourced from Government Infrastructure PDF) ────────── */
const education: VisitorPage = {
  heroLead: 'Solar pathways for schools, colleges, universities and connected institutional campuses.',
  sections: [
    section('Education infrastructure', 'From individual campuses to connected institutional networks', [
      copy('Plan energy for individual campuses and wider public infrastructure networks.'),
      copy('Coordinate deployment across districts, blocks and distributed campuses.', 'Multi-site programmes'),
      cta('Assess Your Institutional Campus'),
      cta('Talk to Our Infrastructure Team'),
    ], 'network'),
    section('Solarization possibilities', 'One institutional asset — multiple energy possibilities', [
      copy('Rooftop solar shaped by area, structure and shading.', 'Institutional rooftops'),
      copy('Solar on parking, bus bays and sports structures.', 'Solar carports'),
      copy('Ground-mounted fields where campus land allows.', 'Ground-mounted solar'),
      copy('Solar and battery systems where the grid is limited.', 'Off-grid systems'),
      copy('Solar, storage and grid power for critical campus loads.', 'Hybrid systems'),
    ], 'solution-cards'),
    section('Programme approach', 'From one campus to an institutional energy programme', [
      copy('For multi-campus programmes, connect planning, assessment, design, financing, execution, monitoring and reporting.'),
      flow('Programme Planning ↓ Site Assessment ↓ Technical Design ↓ Financial Planning ↓ Vendor / Execution Coordination ↓ Commissioning ↓ Monitoring ↓ Impact Reporting'),
    ], 'timeline'),
    section('Our approach', 'Built around public-infrastructure requirements', [
      copy('Buildings, energy profile and schedule.', 'Assess'),
      copy('Repeatable frameworks across sites.', 'Standardise'),
      copy('Deployment adapted to each campus.', 'Localise'),
      copy('Implementation across institutions.', 'Execute'),
      copy('Assets and performance in one view.', 'Monitor'),
      copy('Programme-level energy, savings and impact.', 'Report'),
    ], 'timeline'),
    section('Multi-site visibility', 'From distributed campuses to one view', [
      copy('One connected view for every campus, asset, generation figure and impact metric.'),
      flow('Sites · Assets · Generation · Performance · Impact'),
    ], 'network'),
    section('Digital infrastructure', 'Technology for institutional energy at scale', [
      copy('Evaluate each campus and its energy characteristics before designing the system.', 'SuryaCALC — Campus assessment and planning'),
      flow('Assess → Calculate → Plan'),
      copy('Coordinate stakeholders, vendors, equipment and multi-site workflows across institutions.', 'SuryaNexa'),
      flow('Coordinate → Execute → Track'),
      copy('Track post-installation performance and measure environmental impact across the programme.', 'Surya Impact OS'),
      flow('Monitor → Measure → Report'),
    ], 'product-cards'),
    section('Financing and structure', 'Education programmes need more than technical design', [
      copy('Assessment may cover capex, financing, institutional funding, CSR opportunities and multi-site economics.'),
      copy('Funding, subsidy and financing eligibility remains subject to programme guidelines, procurement requirements and authority approval.', 'Important note'),
    ]),
    section('Why Surya Sangam', 'Institutional-scale thinking for education', [
      copy('Approaching campuses not as isolated rooftop projects, but as coordinated institutional programmes.', 'Programme-level thinking'),
      copy('Designed to support schools, colleges and universities across districts or entire university systems.', 'Multi-site capable'),
      copy('Integrated digital intelligence from solar potential calculation through post-commissioning tracking.', 'Technology-enabled'),
      copy('Structured vendor, equipment and installation workflows tailored to academic calendars.', 'Execution-focused'),
      copy('Verified generation, institutional electricity savings and environmental metrics tracked continuously.', 'Impact-driven'),
      copy('Systems planned around educational loads, lab hours and campus safety requirements.', 'Campus-aware'),
    ], 'solution-cards'),
    section('Institutional vision', 'Building clean energy into educational infrastructure', [
      copy('Educational institutions represent one of the most visible and impactful opportunities for clean-energy leadership, providing sustainable power while demonstrating climate stewardship to students and communities.'),
    ]),
    section('Next step', 'Ready to plan an institutional energy programme?', [
      copy('Whether it is one school campus or a state-wide network of colleges, Surya Sangam can help assess the right clean-energy pathway.'),
      cta('Start an Institutional Assessment'),
      cta('Discuss a Multi-Campus Programme'),
      cta('Talk to Our Infrastructure Team'),
    ]),
  ],
};

const visitorPages: Record<string, VisitorPage> = {
  'hospital-solarization': hospital,
  'industrial-msme-solarization': industrial,
  'infrastructure/government': government,
  'infrastructure/large-scale': largeScale,
  'infrastructure/water': water,
  'education-institutional-solarization': education,
};

export function getVisitorPage(solution: SolutionPage): VisitorPage {
  return visitorPages[solution.slug] ?? {
    heroLead: solution.title,
    sections: solution.sections,
  };
}
