/*
 * Service page content.
 *
 * One entry per service drives /services/<slug>/ plus the cards on the
 * services index, the footer column and the homepage grid, so a service is
 * added or reworded in exactly one place.
 *
 * Facts used here come from the client capability statement: 15+ years in
 * Victoria, HIA and MBA members, $20M public liability, registered domestic
 * and commercial builder, based in South Melbourne, and the six documented
 * projects (Brighton, Aberfeldie, Strathmore, Rosebud, Ascot Vale, Mornington).
 * Do not invent numbers beyond those.
 */

export type ServiceSection = {
  eyebrow: string;
  h2: string;
  body: string[];
  bullets: string[];
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Short label for nav, footer and breadcrumbs. */
  navLabel: string;
  /** Full name used in headings and schema. */
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One line under the H1. */
  intro: string;
  chips: string[];
  heroImage: { src: string; alt: string };
  inlineImage: { src: string; alt: string };
  sections: ServiceSection[];
  whyHeading: string;
  pillars: { h3: string; p: string }[];
  faqs: Faq[];
  /** Anchor on the projects page for a build that shows this service off. */
  proof: { label: string; anchor: string };
};

export const SERVICES: Service[] = [
  {
    slug: "new-homes",
    navLabel: "New homes",
    name: "New homes and custom builds",
    h1: "Custom new home builders in Melbourne",
    metaTitle: "Custom New Home Builders Melbourne | Santa'lana",
    metaDescription:
      "Registered Melbourne builders for architecturally designed new homes. Knock down rebuilds and tight access sites. HIA and MBA members.",
    intro:
      "Architecturally designed homes built to the highest standard, from a single storey knock down rebuild to a residence of 80 squares and beyond.",
    chips: ["Registered builder", "15+ years in Victoria", "Fixed price contracts"],
    heroImage: {
      src: "/assets/img/projects/brighton-facade-dusk.jpg",
      alt: "Brighton luxury home at dusk with a natural stone and timber clad facade, white batten fencing and an uplit travertine entry path.",
    },
    inlineImage: {
      src: "/assets/img/projects/brighton-living-dining.jpg",
      alt: "Open plan living and dining in the Brighton home, anchored by a full length stone island bench.",
    },
    sections: [
      {
        eyebrow: "Architectural homes",
        h2: "Architecturally designed residences",
        body: [
          "Most of our new homes start as a set of architectural drawings and a client who wants them built properly. We work from your architect's documentation, price it honestly, and tell you early where a detail will cause trouble on site rather than after it is framed.",
          "Our Brighton residence runs to more than 80 squares, with a natural stone and timber clad facade, custom steelwork, and a double height entry built around a floating staircase and skylight. That is the level of detail we are set up for.",
        ],
        bullets: [
          "Building from your architect's or designer's documentation",
          "Natural stone, timber cladding and custom steelwork",
          "Double height voids, floating stairs and structural glazing",
          "Premium joinery, stone benchtops and bespoke cabinetry",
          "Pools, alfresco areas and full landscaping coordination",
        ],
      },
      {
        eyebrow: "Knock down rebuild",
        h2: "Knock down rebuilds on your existing block",
        body: [
          "If you love your street but not your house, a knock down rebuild gives you a new home without giving up the location. We handle demolition, service disconnections, soil and site testing, permits, and the build itself, so there is one contract and one point of contact.",
          "We will walk the block with you before you commit and give you a realistic read on what the site allows, what the council is likely to accept, and what it will cost to build.",
        ],
        bullets: [
          "Demolition and service disconnection managed for you",
          "Soil tests, site survey and feature survey",
          "Town planning and building permit applications",
          "Single and double storey rebuilds",
          "Staged payment schedule tied to real milestones",
        ],
      },
      {
        eyebrow: "Difficult sites",
        h2: "Tight access and difficult sites",
        body: [
          "Narrow frontages, steep falls, tight rear access and neighbours close on both sides are normal in the inner suburbs. They are a logistics problem, not a reason to compromise the design.",
          "Our Strathmore home was built on a tight access site with serious logistical challenges, and it still came in with the finishes and open plan living the owners wanted. Sequencing, craneage and delivery planning are the difference between a difficult site and a stalled one.",
        ],
        bullets: [
          "Crane and delivery scheduling on constrained blocks",
          "Traffic management and council permits for street occupation",
          "Neighbour notification and dilapidation reports",
          "Retaining, underpinning and difficult excavation",
          "Steep and sloping site construction",
        ],
      },
    ],
    whyHeading: "Why build your new home with Santa'lana",
    pillars: [
      {
        h3: "Registered and insured",
        p: "Registered domestic and commercial builder with licence details publicly listed on the VBA register, plus $20 million in public liability cover.",
      },
      {
        h3: "One builder, all trades",
        p: "We coordinate every trade ourselves. You are not managing a plumber, a sparky and a tiler who have never worked together.",
      },
      {
        h3: "Fixed price before we start",
        p: "An itemised contract and a programme with real dates. Variations are documented and agreed before any work proceeds.",
      },
      {
        h3: "Detail that holds up",
        p: "Fifteen years of high end residential in Victoria means we know which details look good in a render and which ones actually last.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to build a custom home in Melbourne?",
        a: "Most custom homes run 12 to 18 months on site once permits are in hand, depending on size, site conditions and the complexity of the finishes. A large architectural residence with extensive stonework, steel and joinery sits at the longer end. You get a programme with milestone dates before we start, and we tell you early if anything threatens it.",
      },
      {
        q: "Do you build from my architect's plans?",
        a: "Yes, and that is most of our work. We price from your architect's documentation and then work alongside them through construction. We will also flag buildability and cost issues during pricing rather than after you have committed, which is usually where money gets saved.",
      },
      {
        q: "What does it cost per square to build a custom home?",
        a: "It depends almost entirely on the finishes and the site. A straightforward rebuild on a flat block and an architectural residence with natural stone, custom steel and structural glazing are very different numbers. We give you a detailed fixed price after we have seen the plans and the site, not a rate over the phone.",
      },
      {
        q: "Do you handle permits and approvals?",
        a: "We do. Town planning where it is required, building permits, soil and site testing, and the reports that go with them. On a design and build we manage the whole approvals path from concept through to permit.",
      },
      {
        q: "Can you build on a tight or sloping block?",
        a: "Yes. Tight access, narrow frontages and sloping sites are routine for us in the inner suburbs. Our Strathmore build was on a tight access site with major logistical challenges. The work is in the sequencing, craneage and delivery planning, which we sort before we start rather than on the day.",
      },
    ],
    proof: { label: "See the Brighton residence", anchor: "brighton" },
  },

  {
    slug: "duplex",
    navLabel: "Duplex and multi-dwelling",
    name: "Duplex and multi-dwelling developments",
    h1: "Duplex and dual occupancy builders Melbourne",
    metaTitle: "Duplex & Dual Occupancy Builders Melbourne",
    metaDescription:
      "Duplex, dual occupancy and townhouse builders across Melbourne and the Mornington Peninsula. Registered builder, 15+ years, HIA and MBA members.",
    intro:
      "Side by side and dual occupancy developments that get real value out of a site without either residence feeling like the compromise.",
    chips: ["Dual occupancy", "Townhouses", "Investor and owner occupier"],
    heroImage: {
      src: "/assets/img/projects/rosebud-facade-dusk.jpg",
      alt: "Rosebud duplex at dusk with mirrored white and charcoal gabled forms, vertical timber garage doors and a gravel driveway.",
    },
    inlineImage: {
      src: "/assets/img/projects/ascotvale-rear-lawn-dusk.jpg",
      alt: "Ascot Vale duplex from the rear lawn at dusk, with a double height glazed living space lit from inside.",
    },
    sections: [
      {
        eyebrow: "Dual occupancy",
        h2: "Dual occupancy and side by side duplexes",
        body: [
          "A well planned duplex gives you two properties that both feel like a home rather than half of one. Orientation, private outdoor space for each dwelling, and acoustic separation between them are what decide that, and they get resolved long before anyone pours a slab.",
          "We have delivered duplexes from inner city Ascot Vale, where rare rear laneway access allowed secure garaging and private outdoor zones for both homes, through to beachside Rosebud and the Mornington Peninsula.",
        ],
        bullets: [
          "Side by side and front to back configurations",
          "Acoustic and fire separation done properly between dwellings",
          "Separate services, meters and driveway crossovers",
          "Private outdoor space for each residence",
          "Secure garaging, including laneway access where the site allows",
        ],
      },
      {
        eyebrow: "Developers",
        h2: "Small developments and townhouses",
        body: [
          "For a two to four dwelling site, the build cost is only part of the equation. Programme certainty and the quality of the finished product decide what the dwellings sell or rent for, and a stalled site costs more than a slightly higher contract ever would.",
          "We build to a fixed price and a milestone programme, and we keep the site presentable throughout, which matters when you are selling off the plan or walking buyers through before completion.",
        ],
        bullets: [
          "Two to four dwelling developments",
          "Townhouse rows and battle axe blocks",
          "Fixed price contracts and milestone programmes",
          "Finishes specified for the market you are selling into",
          "Staged handover where dwellings complete at different times",
        ],
      },
      {
        eyebrow: "Coastal and bayside",
        h2: "Coastal duplexes on the Peninsula",
        body: [
          "A beachside duplex has to work in February and in July. Our Rosebud build was designed for exactly that, light filled and breezy through summer, with warm textures and clever planning that make it a comfortable winter retreat rather than an empty holiday house.",
          "Our Mornington duplex on Karella Crescent sits in one of the Peninsula's most sought after pockets, with elevated bay views, expansive balconies and premium detailing throughout.",
        ],
        bullets: [
          "Coastal exposure detailing and corrosion resistant fixings",
          "Balconies, decks and outdoor living built for the climate",
          "Cross ventilation and orientation for year round comfort",
          "Elevated sites and bay view planning",
          "Holiday letting and permanent residence specifications",
        ],
      },
    ],
    whyHeading: "Why develop with Santa'lana",
    pillars: [
      {
        h3: "Both halves built properly",
        p: "Neither dwelling gets treated as the lesser one. Same trades, same finishes, same attention on each side of the wall.",
      },
      {
        h3: "Programme you can plan around",
        p: "Milestone dates you can hold a sales campaign or a finance drawdown against, and early warning when something shifts.",
      },
      {
        h3: "Registered for commercial too",
        p: "Registered as both a domestic and a commercial builder, so a mixed or larger development is not outside what we can contract for.",
      },
      {
        h3: "Sites others walk away from",
        p: "Laneway access, battle axe blocks and narrow frontages are normal work for us across the inner suburbs.",
      },
    ],
    faqs: [
      {
        q: "How long does a duplex take to build?",
        a: "Typically 12 to 16 months on site for two dwellings, depending on size, site access and finishes. Both dwellings usually run together rather than one after the other, which is faster than two separate builds and is one of the real advantages of a dual occupancy.",
      },
      {
        q: "Do I need a planning permit for a dual occupancy?",
        a: "Almost always, yes. A second dwelling on a single lot needs town planning approval from your council, and overlays or heritage controls can add conditions. We manage the approvals path and tell you honestly what the site is likely to support before you spend money on documentation.",
      },
      {
        q: "Can the two dwellings be sold separately?",
        a: "Yes, once the titles are subdivided. Subdivision runs alongside construction rather than after it, and your surveyor and conveyancer handle the titles while we handle the build. We make sure the services, crossovers and separations are set up so the subdivision is not held up at the end.",
      },
      {
        q: "Will the two homes share walls and services?",
        a: "A side by side duplex shares a party wall, built with the fire and acoustic separation the code requires, and each dwelling gets its own services, meters and hot water. Done properly you do not hear your neighbour, which is the difference between a duplex that holds value and one that does not.",
      },
      {
        q: "Do you work with developers as well as owner occupiers?",
        a: "Both. Owner occupiers usually want more involvement in finishes and we are happy to work that way. Developers generally want programme certainty and a specification that suits the market, which is a different conversation but the same build quality.",
      },
    ],
    proof: { label: "See the Rosebud duplex", anchor: "rosebud" },
  },

  {
    slug: "renovations",
    navLabel: "Renovations and extensions",
    name: "Renovations and extensions",
    h1: "Home renovations and extensions in Melbourne",
    metaTitle: "Home Renovations & Extensions Melbourne",
    metaDescription:
      "Full scale renovations, rear extensions and second storey additions across Melbourne. Registered builder, 15+ years, heritage sensitive work.",
    intro:
      "Full scale renovations and rear extensions that open a period home up to light and living space without stripping away the character you bought it for.",
    chips: ["Rear extensions", "Second storey", "Heritage sensitive"],
    heroImage: {
      src: "/assets/img/projects/aberfeldie-facade-dusk.jpg",
      alt: "Aberfeldie rear extension at dusk, a charcoal rendered contemporary form with a timber deck and full height glazing.",
    },
    inlineImage: {
      src: "/assets/img/projects/aberfeldie-kitchen.jpg",
      alt: "Bespoke kitchen in the Aberfeldie renovation with a waterfall stone island and integrated appliances.",
    },
    sections: [
      {
        eyebrow: "Extensions",
        h2: "Rear extensions and open plan living",
        body: [
          "The usual problem with a period home is that the front rooms are beautiful and the back of the house is dark, closed in and pointing the wrong way. A rear extension fixes that by putting the living, kitchen and dining where the light and the garden are.",
          "Our Aberfeldie project is a full scale renovation and rear extension that delivered open plan living, soaring ceilings and a sun drenched alfresco area, with the heritage frontage left to do its job at the street.",
        ],
        bullets: [
          "Single and double storey rear extensions",
          "Structural removal of walls for open plan living",
          "Raked and raised ceilings",
          "Stacking and sliding glazing to the garden",
          "Alfresco areas, decking and outdoor kitchens",
        ],
      },
      {
        eyebrow: "Kitchens and bathrooms",
        h2: "Kitchens, bathrooms and bespoke joinery",
        body: [
          "A renovation lives or dies on the rooms you use every day. We build bespoke kitchens with butler's pantries, stone benchtops and integrated appliances, and bathrooms detailed so the waterproofing and falls are right rather than just the tile selection.",
          "Joinery is drawn and made for the space instead of adapted from stock sizes, which is what makes the difference in an older house where nothing is square.",
        ],
        bullets: [
          "Bespoke kitchens and butler's pantries",
          "Natural stone and engineered stone benchtops",
          "Fluted, veneer and custom cabinetry",
          "Full bathroom and ensuite rebuilds with correct waterproofing",
          "Freestanding baths, stone vanities and walk in showers",
        ],
      },
      {
        eyebrow: "Heritage",
        h2: "Heritage and period home work",
        body: [
          "Working on a period home means matching what is already there and knowing when the council will care. Overlays, streetscape controls and the condition of original brickwork, plaster and timber all shape what is possible.",
          "The aim is a house where the new part is clearly new and the old part is still intact, rather than a renovation that leaves both looking confused. Polished timber floors, restored detailing and a contemporary rear addition can sit together comfortably when the junction between them is resolved.",
        ],
        bullets: [
          "Heritage overlay and streetscape compliance",
          "Restoration of original plaster, timber and brickwork",
          "Underpinning and restumping on older foundations",
          "Rewiring, replumbing and insulation upgrades",
          "Second storey additions over an existing footprint",
        ],
      },
    ],
    whyHeading: "Why renovate with Santa'lana",
    pillars: [
      {
        h3: "Licensed trades in your home",
        p: "Every contractor who accesses your home is fully licensed and trained. That is how we protect you, your family and our team.",
      },
      {
        h3: "A site you can live beside",
        p: "Renovations happen around a household. The site gets left tidy, access stays usable, and you know what is happening each week.",
      },
      {
        h3: "Old houses hold surprises",
        p: "We open up carefully and tell you straight away when we find something, with a price before the work proceeds rather than after.",
      },
      {
        h3: "Detail that matches",
        p: "Fifteen years of high end residential means new work that lines up with old work, which is harder than it sounds.",
      },
    ],
    faqs: [
      {
        q: "How long does a rear extension take?",
        a: "A single storey rear extension with a new kitchen and living area generally runs 6 to 9 months on site. A double storey addition or a full renovation of the existing house as well pushes that out. Permits and documentation happen before that and are worth allowing a few months for.",
      },
      {
        q: "Can I live at home during the renovation?",
        a: "Often yes, particularly when the work is confined to the rear. We stage it so you keep a functioning kitchen and bathroom for as long as possible, and we tell you upfront if there is a period where living on site will be genuinely unpleasant. For a full renovation it is usually better to move out.",
      },
      {
        q: "Do I need a permit to renovate?",
        a: "Structural work, extensions, plumbing changes and electrical work need permits. Replacing fixtures or repainting generally does not. If your property is in a heritage overlay, even external changes at the front can need planning approval. We work out what applies during quoting and handle the applications.",
      },
      {
        q: "What happens if you find problems once you open up the walls?",
        a: "In an older house it is not unusual to find rot, old wiring, failed waterproofing or footings that are not what the plans suggest. We show you what we have found, price the fix, and get your agreement before proceeding. Nothing gets quietly added to the invoice.",
      },
      {
        q: "Can you work on a heritage listed or overlay property?",
        a: "Yes. We build to heritage overlay and streetscape requirements regularly across the inner suburbs, and we restore original detailing rather than replacing it where it can be saved. The approvals take longer, so it is worth starting that conversation early.",
      },
    ],
    proof: { label: "See the Aberfeldie renovation", anchor: "aberfeldie" },
  },

  {
    slug: "commercial",
    navLabel: "Office and shop fit-outs",
    name: "Office and shop fit-outs",
    h1: "Commercial and shop fit-out builders Melbourne",
    metaTitle: "Office & Shop Fit-Out Builders Melbourne",
    metaDescription:
      "Registered commercial builder for office, retail and hospitality fit-outs across Melbourne. Staged works around trading hours, make good and refurbishment.",
    intro:
      "Commercial fit-outs finished to the same standard as our homes, delivered to programme and staged around a business that still has to trade.",
    chips: ["Registered commercial builder", "Office and retail", "Staged delivery"],
    heroImage: {
      src: "/assets/img/interiors/stair-steel-bw.jpg",
      alt: "Blackened steel staircase beside full height steel framed glazing in a double height entry.",
    },
    inlineImage: {
      src: "/assets/img/interiors/living-glazing-render.jpg",
      alt: "Interior framed by black steel framed glazing with a fireplace and warm timber floors.",
    },
    sections: [
      {
        eyebrow: "Workplaces",
        h2: "Office fit-outs and refurbishments",
        body: [
          "An office fit-out is judged on whether the space works on the Monday after handover. Power and data in the right places, meeting rooms you can actually hear in, and lighting that suits the way the team works matter more than the render did.",
          "We deliver fit-outs and refurbishments as a registered commercial builder, coordinating the services trades, the joinery and the compliance so you have one contract rather than five.",
        ],
        bullets: [
          "Full and partial office fit-outs",
          "Meeting rooms, acoustic treatment and glazed partitions",
          "Data, power and comms coordination",
          "Custom reception and workstation joinery",
          "Lighting design and mechanical services coordination",
        ],
      },
      {
        eyebrow: "Retail and hospitality",
        h2: "Shopfronts, retail and hospitality",
        body: [
          "Retail and hospitality fit-outs are deadline driven. A lease start date or an opening date is fixed, and the programme has to be built backwards from it with the long lead items ordered early.",
          "We handle shopfront replacement, internal fit-out, and the compliance work that comes with food and beverage spaces, including the coordination with landlords and centre management that usually causes the delays.",
        ],
        bullets: [
          "Shopfront replacement and signage structures",
          "Retail joinery, display and point of sale",
          "Hospitality and food premises compliance",
          "Landlord and centre management coordination",
          "Long lead item procurement planned from the opening date",
        ],
      },
      {
        eyebrow: "Working around trade",
        h2: "Staged works and make good",
        body: [
          "Most commercial work happens around an operating business. That means staged handovers, after hours work where the noise or dust would stop trade, and a site that is safe to have staff and customers beside.",
          "We also do end of lease make good, returning a tenancy to the condition the lease requires without over capitalising on a space you are walking away from.",
        ],
        bullets: [
          "Staged works so the business keeps trading",
          "After hours and weekend programmes",
          "Dust, noise and access management in occupied buildings",
          "End of lease make good works",
          "Tenancy refurbishment between tenants",
        ],
      },
    ],
    whyHeading: "Why fit out with Santa'lana",
    pillars: [
      {
        h3: "Registered commercial builder",
        p: "Registered for commercial work, not a residential builder stepping outside its licence, with $20 million in public liability cover.",
      },
      {
        h3: "Programme driven",
        p: "Fit-outs live and die on dates. We build the programme backwards from your opening or lease date and order long lead items early.",
      },
      {
        h3: "Residential level finish",
        p: "The same joinery and detailing standard we bring to high end homes, which is a noticeable step up in most commercial spaces.",
      },
      {
        h3: "One point of contact",
        p: "We coordinate the services, joinery and compliance trades so you are not chasing five contractors between meetings.",
      },
    ],
    faqs: [
      {
        q: "How long does an office fit-out take?",
        a: "A straightforward tenancy fit-out is often 6 to 12 weeks on site once approvals are in place. Heavier work involving mechanical services, new partitioning or hospitality compliance takes longer. The controlling factor is usually long lead items and landlord approvals rather than the construction itself.",
      },
      {
        q: "Can you work outside business hours?",
        a: "Yes, and for occupied buildings we often have to. Noisy or dusty work goes after hours or on weekends, and we stage the programme so the business keeps trading. Building access rules and any noise restrictions get confirmed with the landlord before we set the programme.",
      },
      {
        q: "Do you handle landlord approvals and building permits?",
        a: "We do. Fit-out approvals through the landlord or centre management, building permits, and the compliance documentation that goes with food premises or changes of use. This is where most fit-out programmes slip, so we start it early.",
      },
      {
        q: "Do you do end of lease make good?",
        a: "Yes. We read the make good clause, price the works it actually requires, and return the tenancy to that condition. It is worth getting a builder to look at this before you negotiate the exit, because make good obligations are often broader than tenants expect.",
      },
      {
        q: "Is a residential builder the right choice for commercial work?",
        a: "It depends on the registration. We hold commercial builder registration as well as domestic, so commercial work sits inside what we are licensed to contract for. The advantage is that the finish standard we are used to in high end homes is above what a lot of commercial fit-outs deliver.",
      },
    ],
    proof: { label: "See our completed projects", anchor: "brighton" },
  },

  {
    slug: "design-build",
    navLabel: "Design and build",
    name: "Design and build",
    h1: "Design and build builders Melbourne",
    metaTitle: "Design & Build Melbourne | Santa'lana Builders",
    metaDescription:
      "One team from concept to handover. Design, documentation, permits and construction managed under a single contract by a registered Melbourne builder.",
    intro:
      "One team from the first sketch to handover, so the design gets tested against a real build budget instead of becoming a drawing nobody can afford.",
    chips: ["Concept to completion", "Permits managed", "Single contract"],
    heroImage: {
      src: "/assets/img/interiors/living-glazing-render.jpg",
      alt: "Living and dining space framed by black steel framed glazing, with a fireplace and warm timber floors.",
    },
    inlineImage: {
      src: "/assets/img/projects/mornington-render-street.jpg",
      alt: "Street elevation render of the Mornington duplex, two mirrored white rendered residences with timber garage doors.",
    },
    sections: [
      {
        eyebrow: "One contract",
        h2: "Design and construction under one roof",
        body: [
          "The usual split is that an architect designs, a builder prices, and the number comes back too high. Months get spent cutting the design back to a budget it was never tested against. Design and build removes that loop by pricing as the design develops.",
          "You get one contract and one point of contact from concept through to handover, which also means nothing falls between your architect, your engineer and your builder.",
        ],
        bullets: [
          "Concept design developed against a real construction budget",
          "Single contract covering design and construction",
          "One point of contact for the whole project",
          "Engineering and consultants coordinated for you",
          "No gap between who drew it and who builds it",
        ],
      },
      {
        eyebrow: "Approvals",
        h2: "Documentation, permits and approvals",
        body: [
          "Between a concept everyone likes and a site you can start on sits the documentation, the engineering and the permits. It is the least visible part of a project and the most common place for months to disappear.",
          "We manage town planning where it is required, building permits, soil and site testing, and the consultant reports that go with them, and we keep the drawings resolved enough that the build is not being designed on site.",
        ],
        bullets: [
          "Town planning applications and council liaison",
          "Building permit applications and documentation",
          "Structural engineering and soil testing",
          "Energy rating and compliance reports",
          "Construction drawings resolved before trades start",
        ],
      },
      {
        eyebrow: "Certainty",
        h2: "A fixed price you can rely on",
        body: [
          "Because the design is priced as it develops, the fixed price at the end of it is based on drawings that are actually resolved rather than assumptions and allowances that get corrected later as variations.",
          "That is the real value of design and build. Cost surprises are least likely when the people pricing the job are the same people who decided how it would be built.",
        ],
        bullets: [
          "Budget tested at every design stage",
          "Fixed price contract on resolved documentation",
          "Fewer allowances, so fewer variations",
          "Itemised pricing you can actually read",
          "Programme with milestone dates from day one",
        ],
      },
    ],
    whyHeading: "Why choose design and build",
    pillars: [
      {
        h3: "Priced as it is drawn",
        p: "Cost gets tested at every stage, so you are not redesigning a project you have already fallen in love with.",
      },
      {
        h3: "Faster to site",
        p: "Design, documentation and early procurement overlap rather than running strictly one after the other.",
      },
      {
        h3: "Nobody to blame",
        p: "One contract means no argument about whether a problem is a design issue or a construction issue. It is ours either way.",
      },
      {
        h3: "Buildable detailing",
        p: "Details are drawn by people who have to build them, which shows up in the finished quality and in the price.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between design and build and hiring an architect?",
        a: "With an architect you hold two separate contracts, one for design and one for construction, and the design is usually priced only once it is finished. With design and build you hold one contract and the cost is tested as the design develops, which is why fewer projects need cutting back late.",
      },
      {
        q: "Can I still use my own architect?",
        a: "Yes. Plenty of our work is built from a client's architect's documentation, and we are happy to come in early to price and advise while they are still designing. Design and build is the option when you would rather not run two contracts at all.",
      },
      {
        q: "When do I get a fixed price?",
        a: "Once the documentation is resolved enough to price properly, typically at the end of design development and before the building permit is issued. You get indicative budgets before that at each design stage, so there are no surprises about the order of magnitude.",
      },
      {
        q: "How long does the design and approvals stage take?",
        a: "For a custom home, commonly 4 to 8 months from first concept to a building permit, longer where town planning is required or the site sits in an overlay. It is worth allowing for properly, because rushing documentation is what causes variations later.",
      },
      {
        q: "Do you handle the engineering and consultants?",
        a: "Yes. Structural engineering, soil testing, energy rating and surveying are all coordinated by us as part of the process, and you deal with one team rather than briefing each consultant yourself.",
      },
    ],
    proof: { label: "See the Mornington duplex", anchor: "mornington" },
  },

  {
    slug: "project-management",
    navLabel: "Project management",
    name: "Construction project management",
    h1: "Construction project management Melbourne",
    metaTitle: "Construction Project Management Melbourne",
    metaDescription:
      "Construction project management from a registered Melbourne builder. Trade coordination, programme control, site safety and clear reporting at every stage.",
    intro:
      "A refined project management system that keeps trades, timelines and budget aligned, and keeps you informed at every stage rather than when something has already slipped.",
    chips: ["Programme control", "Trade coordination", "Site safety"],
    heroImage: {
      src: "/assets/img/projects/strathmore-facade-dusk.jpg",
      alt: "Strathmore custom home at dusk with a gabled white and charcoal facade behind a dark vertical batten fence.",
    },
    inlineImage: {
      src: "/assets/img/projects/brighton-stone-detail.jpg",
      alt: "Stacked slabs of natural stone on site at Brighton, selected before installation.",
    },
    sections: [
      {
        eyebrow: "Programme",
        h2: "Sequencing and programme control",
        body: [
          "Most delays are not one big problem. They are a trade booked before the one in front of it finished, or a material ordered three weeks too late, repeated until the programme has quietly lost a month.",
          "We work to a programme with real milestone dates, book trades against it, and get long lead items ordered early so the site is never waiting on a delivery. When something does move, you hear about it from us rather than noticing an empty site.",
        ],
        bullets: [
          "Milestone programme set before work starts",
          "Trades booked in the right order and held to it",
          "Long lead procurement tracked from the start",
          "Weather and inspection allowances built in",
          "Early warning when a date is at risk",
        ],
      },
      {
        eyebrow: "Budget",
        h2: "Budget and variation control",
        body: [
          "An itemised contract is only useful if the variations are handled the same way. Every change gets documented and priced, and agreed with you before the work proceeds.",
          "Where a decision will move the number, we tell you before you make it rather than after, including when the honest answer is that a detail is not worth what it costs.",
        ],
        bullets: [
          "Itemised contract you can actually read",
          "Variations priced and agreed before work proceeds",
          "Progress claims tied to completed milestones",
          "Cost advice on decisions before they are made",
          "No quiet additions to the final invoice",
        ],
      },
      {
        eyebrow: "On site",
        h2: "Site safety and quality control",
        body: [
          "We place high importance on worksite safety and make sure any contractor accessing your home is fully licensed and trained. That is how we protect you, your family and our team.",
          "Quality control happens through the build rather than at the end. Work gets checked at each stage, which is the only point where fixing it is cheap, and the site gets left tidy because a tidy site is a safer and more accurate one.",
        ],
        bullets: [
          "Licensed and trained contractors only",
          "Site safety management and inductions",
          "Stage by stage quality inspections",
          "Tidy site and managed access",
          "Defect walkthrough and documentation at handover",
        ],
      },
    ],
    whyHeading: "Why our project management works",
    pillars: [
      {
        h3: "Clear communication",
        p: "You get one number to call and a straight answer on it. If a date slips or a cost changes, you hear it from us before you notice it yourself.",
      },
      {
        h3: "Efficient processes",
        p: "Efficient building processes mean your project completes quickly without compromising on quality.",
      },
      {
        h3: "One accountable team",
        p: "Expertise, creativity and a keen eye for detail on every project, from the same team that priced it.",
      },
      {
        h3: "Fifteen years of judgement",
        p: "Knowing which problems matter and which ones solve themselves is what keeps a programme on track.",
      },
    ],
    faqs: [
      {
        q: "What does a project manager actually do on a build?",
        a: "Sets and holds the programme, books and sequences the trades, tracks procurement of long lead items, manages site safety, checks quality at each stage, controls variations, and keeps you informed. On our own builds this is included rather than being a separate service you buy.",
      },
      {
        q: "How often will I hear from you during construction?",
        a: "Regular updates at every milestone, and straight away if something needs a decision from you or a date is at risk. You should never have to drive past the site to find out what is happening.",
      },
      {
        q: "How do you keep a build on budget?",
        a: "An itemised fixed price on resolved documentation, fewer allowances, and variations that are priced and agreed before the work happens. Most budget blowouts come from vague documentation and verbal changes, so we close both off.",
      },
      {
        q: "Who is responsible if a trade does poor work?",
        a: "We are. You hold one contract with us, and we manage the trades. Rectifying substandard work sits with us rather than becoming an argument between subcontractors that you have to referee.",
      },
      {
        q: "What happens at handover?",
        a: "A thorough defect walkthrough with you, a documented list with dates against it, all manuals and compliance documentation handed over, and support that continues after you move in. The relationship does not end at the final payment.",
      },
    ],
    proof: { label: "See the Strathmore build", anchor: "strathmore" },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
