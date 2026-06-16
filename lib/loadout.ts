export type TwitterProfile = {
  handle: string;
  name: string;
  avatar?: string;
  bio: string;
  tweets: string[];
  followers?: string;
};

export type Vibe = {
  primary: string;
  label: string;
  score: number;
  traits: string[];
  summary: string;
};

export type Product = {
  name: string;
  brand: string;
  price: string;
  category: string;
  reason: string;
};

export type LoadoutSlot = {
  slot: 'primary' | 'secondary' | 'perk' | 'tactical' | 'lethal' | 'field-upgrade';
  label: string;
  stat: string;
  product: Product;
};

const profiles: Record<string, TwitterProfile> = {
  buildlord: {
    handle: 'buildlord',
    name: 'Ari Vector',
    followers: '42.8K',
    bio: 'AI founder, systems thinker, shipping daily. Coffee, keyboards, and late-night launches.',
    tweets: [
      'Debugged infra until 2am, then shipped the new onboarding flow.',
      'Strong opinions on mechanical keyboards and founder-led growth.',
      'Tiny teams can out-execute giants with the right tools.',
    ],
  },
  cybermuse: {
    handle: 'cybermuse',
    name: 'Mina Vale',
    followers: '118K',
    bio: 'Digital artist, fashion maximalist, synth playlists, cyberpunk references, gallery nights.',
    tweets: [
      'Moodboard: chrome, velvet, rain, neon typography.',
      'If your desk setup has no personality, what are we even doing?',
      'Designing a capsule drop for people who live in night mode.',
    ],
  },
  trailstack: {
    handle: 'trailstack',
    name: 'Cole Ridge',
    followers: '21.3K',
    bio: 'Outdoor gear, ultralight experiments, maps, recovery, and clean data dashboards.',
    tweets: [
      'Best product is the one that survives a storm and still looks good on a desk.',
      'Testing a lighter pack list for a 3-day loop.',
      'Every system needs redundancy: navigation, batteries, snacks.',
    ],
  },
};

const productBank: Record<string, Record<LoadoutSlot['slot'], Product>> = {
  'tactical-operator': {
    primary: {
      name: 'Keychron Q1 HE Magnetic Keyboard',
      brand: 'Keychron',
      price: '$219',
      category: 'Desk weapon',
      reason: 'High-control input for someone who treats shipping like a ranked match.',
    },
    secondary: {
      name: 'Anker Prime 27,650mAh Power Bank',
      brand: 'Anker',
      price: '$179',
      category: 'Portable power',
      reason: 'Keeps the operator online through airport sprints and late deployments.',
    },
    perk: {
      name: 'LMNT Zero-Sugar Electrolyte Pack',
      brand: 'LMNT',
      price: '$45',
      category: 'Focus perk',
      reason: 'Hydration buff for long build sessions without sugar crashes.',
    },
    tactical: {
      name: 'Field Notes Expedition 3-Pack',
      brand: 'Field Notes',
      price: '$14',
      category: 'Quick capture',
      reason: 'Analog backup for sharp ideas before they disappear from the HUD.',
    },
    lethal: {
      name: 'Fellow Carter Move Mug',
      brand: 'Fellow',
      price: '$35',
      category: 'Caffeine ordnance',
      reason: 'Clean, sealed coffee delivery for the all-night launch window.',
    },
    'field-upgrade': {
      name: 'BenQ ScreenBar Halo',
      brand: 'BenQ',
      price: '$179',
      category: 'Desk upgrade',
      reason: 'Reduces visual fatigue while preserving the command-center aesthetic.',
    },
  },
  'neon-creator': {
    primary: {
      name: 'Wacom One 13 Touch',
      brand: 'Wacom',
      price: '$599',
      category: 'Creative weapon',
      reason: 'Direct visual control for high-style feeds and fast concepting.',
    },
    secondary: {
      name: 'Ray-Ban Meta Smart Glasses',
      brand: 'Ray-Ban',
      price: '$299',
      category: 'Capture sidearm',
      reason: 'Hands-free POV capture for gallery nights and street references.',
    },
    perk: {
      name: 'COSRX Advanced Snail 96 Essence',
      brand: 'COSRX',
      price: '$25',
      category: 'Glow perk',
      reason: 'A feed-facing polish buff for someone living under neon.',
    },
    tactical: {
      name: 'Philips Hue Play Gradient Lightstrip',
      brand: 'Philips Hue',
      price: '$179',
      category: 'Mood utility',
      reason: 'Turns any room into a color-graded creative set.',
    },
    lethal: {
      name: 'Le Labo Santal 33',
      brand: 'Le Labo',
      price: '$230',
      category: 'Signature aura',
      reason: 'A recognizable final-hit scent for a maximalist personal brand.',
    },
    'field-upgrade': {
      name: 'Teenage Engineering OB-4',
      brand: 'Teenage Engineering',
      price: '$549',
      category: 'Studio flex',
      reason: 'Object-design speaker energy that doubles as room sculpture.',
    },
  },
  'field-strategist': {
    primary: {
      name: 'Garmin Instinct 2 Solar',
      brand: 'Garmin',
      price: '$399',
      category: 'Navigation weapon',
      reason: 'Rugged tracking for someone who optimizes both trail and dashboard.',
    },
    secondary: {
      name: 'Leatherman Skeletool CX',
      brand: 'Leatherman',
      price: '$90',
      category: 'Utility sidearm',
      reason: 'Minimal, durable problem-solving in pocket form.',
    },
    perk: {
      name: 'Patagonia Houdini Jacket',
      brand: 'Patagonia',
      price: '$109',
      category: 'Mobility perk',
      reason: 'A lightweight weather countermeasure for fast pivots.',
    },
    tactical: {
      name: 'Nitecore NU25 UL Headlamp',
      brand: 'Nitecore',
      price: '$37',
      category: 'Visibility utility',
      reason: 'Tiny headlamp, huge confidence boost when plans run past sunset.',
    },
    lethal: {
      name: 'Aeropress Go Plus',
      brand: 'AeroPress',
      price: '$80',
      category: 'Camp caffeine',
      reason: 'Reliable morale damage against cold mornings and weak hotel coffee.',
    },
    'field-upgrade': {
      name: 'Peak Design Everyday Sling 6L',
      brand: 'Peak Design',
      price: '$120',
      category: 'Carry system',
      reason: 'Modular carry for camera, cables, snacks, and backup plans.',
    },
  },
};

const slots: Array<{ slot: LoadoutSlot['slot']; label: string; stat: string }> = [
  { slot: 'primary', label: 'Primary', stat: 'Main weapon' },
  { slot: 'secondary', label: 'Secondary', stat: 'Backup gear' },
  { slot: 'perk', label: 'Perk', stat: 'Passive buff' },
  { slot: 'tactical', label: 'Tactical', stat: 'Utility' },
  { slot: 'lethal', label: 'Lethal', stat: 'Signature hit' },
  { slot: 'field-upgrade', label: 'Field Upgrade', stat: 'Power move' },
];

function textFor(profile: TwitterProfile) {
  return `${profile.bio} ${profile.tweets.join(' ')}`.toLowerCase();
}

export function analyzeProfileVibe(profile: TwitterProfile): Vibe {
  const text = textFor(profile);
  const signals = {
    'tactical-operator': ['ai', 'founder', 'systems', 'shipping', 'debugged', 'infra', 'keyboards', 'execute', 'tools', 'growth', 'launch'],
    'neon-creator': ['artist', 'fashion', 'synth', 'cyberpunk', 'moodboard', 'chrome', 'velvet', 'neon', 'designing', 'capsule', 'night mode'],
    'field-strategist': ['outdoor', 'gear', 'ultralight', 'maps', 'recovery', 'storm', 'pack', 'loop', 'redundancy', 'navigation', 'batteries'],
  } as const;

  const scores = Object.entries(signals).map(([vibe, words]) => ({
    vibe,
    hits: words.filter((word) => text.includes(word)).length,
  }));
  const best = scores.sort((a, b) => b.hits - a.hits)[0];
  const primary = best.hits > 0 ? best.vibe : 'tactical-operator';
  const score = Math.min(98, 58 + best.hits * 6);

  if (primary === 'neon-creator') {
    return {
      primary,
      label: 'Neon Creator',
      score,
      traits: ['aesthetic', 'taste-led', 'culture radar'],
      summary: 'A visual main character with high signal taste and night-drive energy.',
    };
  }

  if (primary === 'field-strategist') {
    return {
      primary,
      label: 'Field Strategist',
      score,
      traits: ['prepared', 'durable', 'systems-minded'],
      summary: 'A practical optimizer who wants gear that survives the actual mission.',
    };
  }

  return {
    primary,
    label: 'Tactical Operator',
    score,
    traits: ['builder', 'focused', 'execution-biased'],
    summary: 'A shipping-first operator who likes precision tools, caffeine, and leverage.',
  };
}

export function getMockProfile(handle: string): TwitterProfile {
  const normalized = handle.replace('@', '').trim().toLowerCase();
  return (
    profiles[normalized] ?? {
      handle: normalized || 'anonymous',
      name: 'Mystery Operator',
      followers: '??',
      bio: 'Unknown signal. Creator energy, curious taste, probably lurking before the next big drop.',
      tweets: [
        'Need a better everyday setup.',
        'The algorithm knows too much but somehow not enough.',
        'Low-key obsessed with useful objects that look good.',
      ],
    }
  );
}

export function generateLoadout(handle: string) {
  const profile = getMockProfile(handle);
  const vibe = analyzeProfileVibe(profile);
  const products = productBank[vibe.primary] ?? productBank['tactical-operator'];

  return {
    profile,
    vibe,
    slots: slots.map((slot) => ({ ...slot, product: products[slot.slot] })),
  };
}

export const sampleHandles = Object.values(profiles).map((profile) => profile.handle);
