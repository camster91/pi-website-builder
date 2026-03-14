/**
 * Curated Image Bank — REAL verified Unsplash URLs
 * Every URL has been verified to return a real image.
 * Organized by industry → usage context.
 */

export interface ImageSet {
  hero: string[]
  services: string[]
  about: string[]
  team: string[]
  background: string[]
}

const UB = 'https://images.unsplash.com'

/** Industry-mapped image collections with real Unsplash photo IDs */
export const IMAGE_BANK: Record<string, ImageSet> = {
  'healthcare': {
    hero: [
      `${UB}/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop`, // hospital interior
      `${UB}/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80&auto=format&fit=crop`, // doctor patient
      `${UB}/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop`, // medical tech
    ],
    services: [
      `${UB}/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop`, // dental
      `${UB}/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop`, // checkup
      `${UB}/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop`, // lab
      `${UB}/photo-1579684385127-1ef15d508118?w=600&q=80&auto=format&fit=crop`, // medical
      `${UB}/photo-1666214280557-f1b5022eb634?w=600&q=80&auto=format&fit=crop`, // healthcare
      `${UB}/photo-1551076805-e1869033e561?w=600&q=80&auto=format&fit=crop`, // wellness
    ],
    about: [
      `${UB}/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop`, // clinic
      `${UB}/photo-1586773860418-d37222d8fce3?w=800&q=80&auto=format&fit=crop`, // modern clinic
    ],
    team: [
      `${UB}/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop`,
      `${UB}/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1587854692152-cbe660dbde88?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'restaurant': {
    hero: [
      `${UB}/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop`, // restaurant interior
      `${UB}/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop`, // fine dining plate
      `${UB}/photo-1552566626-52f8b828add9?w=1200&q=80&auto=format&fit=crop`, // cozy restaurant
    ],
    services: [
      `${UB}/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop`, // dish
      `${UB}/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop`, // pizza
      `${UB}/photo-1467003909585-2f8a72700288?w=600&q=80&auto=format&fit=crop`, // gourmet
      `${UB}/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop`, // food
      `${UB}/photo-1540189549336-e6e99c3679fe?w=600&q=80&auto=format&fit=crop`, // cocktail
      `${UB}/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop`, // chef
    ],
    about: [
      `${UB}/photo-1466978913421-dad2ebd01d17?w=800&q=80&auto=format&fit=crop`, // kitchen
      `${UB}/photo-1428515613728-6b4607e44363?w=800&q=80&auto=format&fit=crop`, // dining
    ],
    team: [
      `${UB}/photo-1577219491135-ce391730fb2c?w=400&q=80&auto=format&fit=crop`, // chef
    ],
    background: [
      `${UB}/photo-1555396273-367ea4eb4db5?w=1400&q=80&auto=format&fit=crop`, // ambiance
    ],
  },

  'saas': {
    hero: [
      `${UB}/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop`, // dashboard
      `${UB}/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop`, // coding
      `${UB}/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop`, // tech office
    ],
    services: [
      `${UB}/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop`, // analytics
      `${UB}/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop`, // business
      `${UB}/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop`, // dashboard
      `${UB}/photo-1518186285589-2f7649de83e0?w=600&q=80&auto=format&fit=crop`, // code
      `${UB}/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80&auto=format&fit=crop`, // team
      `${UB}/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop`, // dev
    ],
    about: [
      `${UB}/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop`, // team work
    ],
    team: [
      `${UB}/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop`,
      `${UB}/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1451187580459-43490279c0fa?w=1400&q=80&auto=format&fit=crop`, // abstract tech
    ],
  },

  'real-estate': {
    hero: [
      `${UB}/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop`, // luxury home
      `${UB}/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop`, // modern house
      `${UB}/photo-1564013799919-ab600027ffc6?w=1200&q=80&auto=format&fit=crop`, // beautiful home
    ],
    services: [
      `${UB}/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop`, // interior
      `${UB}/photo-1600566753086-00f18f6b4fac?w=600&q=80&auto=format&fit=crop`, // kitchen
      `${UB}/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop`, // bathroom
      `${UB}/photo-1600047509807-ba8f99d2cdde?w=600&q=80&auto=format&fit=crop`, // house
      `${UB}/photo-1582268611958-ebfd161ef9cf?w=600&q=80&auto=format&fit=crop`, // apartment
      `${UB}/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format&fit=crop`, // home
    ],
    about: [
      `${UB}/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop`, // handshake
    ],
    team: [
      `${UB}/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1600596542815-ffad4c1539a9?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'fitness': {
    hero: [
      `${UB}/photo-1534438327276-14e5300c3a48?w=1200&q=80&auto=format&fit=crop`, // gym
      `${UB}/photo-1571019614242-c5c5dee9f50b?w=1200&q=80&auto=format&fit=crop`, // workout
      `${UB}/photo-1549060279-7e168fcee0c2?w=1200&q=80&auto=format&fit=crop`, // running
    ],
    services: [
      `${UB}/photo-1581009146145-b5ef050c2e1e?w=600&q=80&auto=format&fit=crop`, // weights
      `${UB}/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop`, // yoga
      `${UB}/photo-1574680096145-d05b474e2155?w=600&q=80&auto=format&fit=crop`, // stretch
      `${UB}/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop`, // crossfit
      `${UB}/photo-1540497077202-7c8a3999166f?w=600&q=80&auto=format&fit=crop`, // cardio
      `${UB}/photo-1552674605-db6ffd4facb5?w=600&q=80&auto=format&fit=crop`, // training
    ],
    about: [
      `${UB}/photo-1593079831268-3381b0db4a77?w=800&q=80&auto=format&fit=crop`, // trainer
    ],
    team: [
      `${UB}/photo-1597347316205-36f6c451902a?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1534438327276-14e5300c3a48?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'local-service': {
    hero: [
      `${UB}/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop`, // handshake
      `${UB}/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop`, // office
      `${UB}/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop`, // meeting
    ],
    services: [
      `${UB}/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop`, // consulting
      `${UB}/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format&fit=crop`, // team meeting
      `${UB}/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop`, // planning
      `${UB}/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop`, // presentation
      `${UB}/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop`, // workshop
      `${UB}/photo-1557804506-669a67965ba0?w=600&q=80&auto=format&fit=crop`, // strategy
    ],
    about: [
      `${UB}/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop`, // team
    ],
    team: [
      `${UB}/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop`,
      `${UB}/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'portfolio': {
    hero: [
      `${UB}/photo-1558655146-9f40138edfeb?w=1200&q=80&auto=format&fit=crop`, // design
      `${UB}/photo-1545235617-9465d2a55698?w=1200&q=80&auto=format&fit=crop`, // creative workspace
      `${UB}/photo-1558618666-fcd25c85f82e?w=1200&q=80&auto=format&fit=crop`, // laptop
    ],
    services: [
      `${UB}/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop`, // web design
      `${UB}/photo-1609921212029-bb5a28e60960?w=600&q=80&auto=format&fit=crop`, // branding
      `${UB}/photo-1561070791-36c11767b26a?w=600&q=80&auto=format&fit=crop`, // UI
      `${UB}/photo-1586717791821-3f44a563fa4c?w=600&q=80&auto=format&fit=crop`, // photography
      `${UB}/photo-1542744094-3a31f272c490?w=600&q=80&auto=format&fit=crop`, // print
      `${UB}/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format&fit=crop`, // social
    ],
    about: [
      `${UB}/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop`,
    ],
    team: [],
    background: [
      `${UB}/photo-1550745165-9bc0b252726f?w=1400&q=80&auto=format&fit=crop`, // abstract
    ],
  },

  'ecommerce': {
    hero: [
      `${UB}/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format&fit=crop`, // shopping
      `${UB}/photo-1472851294608-062f824d29cc?w=1200&q=80&auto=format&fit=crop`, // store
      `${UB}/photo-1555529669-e69e7aa0ba9a?w=1200&q=80&auto=format&fit=crop`, // bags
    ],
    services: [
      `${UB}/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop`, // product
      `${UB}/photo-1505740420928-5e560c06d30e?w=600&q=80&auto=format&fit=crop`, // headphones
      `${UB}/photo-1526170375885-4d8ecf77b99f?w=600&q=80&auto=format&fit=crop`, // camera
      `${UB}/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop`, // shoes
      `${UB}/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop`, // sneaker
      `${UB}/photo-1560343090-f0409e92791a?w=600&q=80&auto=format&fit=crop`, // watch
    ],
    about: [
      `${UB}/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop`, // packaging
    ],
    team: [],
    background: [
      `${UB}/photo-1441984904996-e0b6ba687e04?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'beauty': {
    hero: [
      `${UB}/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop`, // salon
      `${UB}/photo-1522337360788-8b13dee7a37e?w=1200&q=80&auto=format&fit=crop`, // beauty
      `${UB}/photo-1487412947147-5cebf100ffc2?w=1200&q=80&auto=format&fit=crop`, // spa
    ],
    services: [
      `${UB}/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop`, // facial
      `${UB}/photo-1516975080664-ed2fc6a32937?w=600&q=80&auto=format&fit=crop`, // spa
      `${UB}/photo-1562322140-8baeececf3df?w=600&q=80&auto=format&fit=crop`, // nails
      `${UB}/photo-1522337360788-8b13dee7a37e?w=600&q=80&auto=format&fit=crop`, // hair
      `${UB}/photo-1583001308879-5ab4e30d8e5b?w=600&q=80&auto=format&fit=crop`, // skincare
      `${UB}/photo-1487412947147-5cebf100ffc2?w=600&q=80&auto=format&fit=crop`, // relax
    ],
    about: [
      `${UB}/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop`,
    ],
    team: [
      `${UB}/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1507652313519-d4e9174996dd?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'education': {
    hero: [
      `${UB}/photo-1523050854058-8df90110c9f1?w=1200&q=80&auto=format&fit=crop`, // campus
      `${UB}/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop`, // classroom
      `${UB}/photo-1427504494785-3a9ca7044f45?w=1200&q=80&auto=format&fit=crop`, // library
    ],
    services: [
      `${UB}/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop`, // study
      `${UB}/photo-1509062522246-3755977927d7?w=600&q=80&auto=format&fit=crop`, // learning
      `${UB}/photo-1513258496099-48168024aec0?w=600&q=80&auto=format&fit=crop`, // tutoring
      `${UB}/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop`, // group
      `${UB}/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop`, // notebook
      `${UB}/photo-1456513080510-7bf3a84b82f8?w=600&q=80&auto=format&fit=crop`, // books
    ],
    about: [
      `${UB}/photo-1523050854058-8df90110c9f1?w=800&q=80&auto=format&fit=crop`,
    ],
    team: [],
    background: [
      `${UB}/photo-1427504494785-3a9ca7044f45?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'agency': {
    hero: [
      `${UB}/photo-1497215842964-222b430dc094?w=1200&q=80&auto=format&fit=crop`, // agency
      `${UB}/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop`, // creative team
      `${UB}/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop`, // collab
    ],
    services: [
      `${UB}/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1551434678-e076c223a692?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1609921212029-bb5a28e60960?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format&fit=crop`,
    ],
    about: [
      `${UB}/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop`,
    ],
    team: [
      `${UB}/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop`,
      `${UB}/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop`,
      `${UB}/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop`,
    ],
    background: [
      `${UB}/photo-1497215842964-222b430dc094?w=1400&q=80&auto=format&fit=crop`,
    ],
  },

  'nonprofit': {
    hero: [
      `${UB}/photo-1559027615-cd4628902d4a?w=1200&q=80&auto=format&fit=crop`, // community
      `${UB}/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop`, // helping
      `${UB}/photo-1469571486292-0ba58a3f068b?w=1200&q=80&auto=format&fit=crop`, // volunteer
    ],
    services: [
      `${UB}/photo-1532629345422-7515f3d16bb6?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1469571486292-0ba58a3f068b?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1559027615-cd4628902d4a?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1509099836639-18ba1795216d?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1593113598332-cd288d649433?w=600&q=80&auto=format&fit=crop`,
      `${UB}/photo-1488521787991-ed7bbaae773c?w=600&q=80&auto=format&fit=crop`,
    ],
    about: [
      `${UB}/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop`,
    ],
    team: [],
    background: [
      `${UB}/photo-1488521787991-ed7bbaae773c?w=1400&q=80&auto=format&fit=crop`,
    ],
  },
}

/** Fallback images for any unmatched industry */
export const FALLBACK_IMAGES: ImageSet = {
  hero: [
    `${UB}/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop`,
    `${UB}/photo-1497215842964-222b430dc094?w=1200&q=80&auto=format&fit=crop`,
  ],
  services: [
    `${UB}/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop`,
    `${UB}/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format&fit=crop`,
    `${UB}/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop`,
    `${UB}/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop`,
    `${UB}/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop`,
    `${UB}/photo-1557804506-669a67965ba0?w=600&q=80&auto=format&fit=crop`,
  ],
  about: [`${UB}/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop`],
  team: [`${UB}/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop`],
  background: [`${UB}/photo-1451187580459-43490279c0fa?w=1400&q=80&auto=format&fit=crop`],
}

/**
 * Get images for an industry. Falls back to generic images for unknown industries.
 */
export function getImagesForIndustry(industry: string): ImageSet {
  // Normalize industry name
  const key = industry.toLowerCase().replace(/[^a-z-]/g, '')
  
  // Direct match
  if (IMAGE_BANK[key]) return IMAGE_BANK[key]
  
  // Fuzzy match
  const fuzzyMap: Record<string, string> = {
    'dental': 'healthcare', 'medical': 'healthcare', 'clinic': 'healthcare', 'doctor': 'healthcare', 'health': 'healthcare',
    'food': 'restaurant', 'cafe': 'restaurant', 'bar': 'restaurant', 'dining': 'restaurant', 'catering': 'restaurant',
    'tech': 'saas', 'software': 'saas', 'startup': 'saas', 'app': 'saas', 'platform': 'saas',
    'property': 'real-estate', 'realestate': 'real-estate', 'housing': 'real-estate', 'realtor': 'real-estate',
    'gym': 'fitness', 'yoga': 'fitness', 'training': 'fitness', 'sports': 'fitness', 'wellness': 'fitness',
    'salon': 'beauty', 'spa': 'beauty', 'skincare': 'beauty', 'cosmetic': 'beauty',
    'school': 'education', 'tutoring': 'education', 'university': 'education', 'course': 'education',
    'design': 'agency', 'marketing': 'agency', 'creative': 'agency', 'digital': 'agency',
    'freelance': 'portfolio', 'photographer': 'portfolio', 'designer': 'portfolio', 'artist': 'portfolio',
    'shop': 'ecommerce', 'store': 'ecommerce', 'retail': 'ecommerce', 'boutique': 'ecommerce',
    'charity': 'nonprofit', 'foundation': 'nonprofit', 'ngo': 'nonprofit',
    'law': 'local-service', 'legal': 'local-service', 'accounting': 'local-service', 'consulting': 'local-service',
    'plumber': 'local-service', 'electrician': 'local-service', 'contractor': 'local-service', 'cleaning': 'local-service',
  }
  
  for (const [keyword, mapped] of Object.entries(fuzzyMap)) {
    if (key.includes(keyword)) return IMAGE_BANK[mapped] || FALLBACK_IMAGES
  }
  
  return FALLBACK_IMAGES
}
