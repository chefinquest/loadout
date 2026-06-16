import { describe, expect, it } from 'vitest';
import { analyzeProfileVibe, generateLoadout } from '../lib/loadout';

describe('loadout recommendation engine', () => {
  it('classifies a tech founder profile as tactical-operator vibe', () => {
    const vibe = analyzeProfileVibe({
      handle: 'buildlord',
      name: 'Ari',
      bio: 'AI founder, systems thinker, shipping daily. Coffee, keyboards, and late-night launches.',
      tweets: [
        'Debugged infra until 2am, then shipped the new onboarding flow.',
        'Strong opinions on mechanical keyboards and founder-led growth.',
        'Tiny teams can out-execute giants with the right tools.',
      ],
    });

    expect(vibe.primary).toBe('tactical-operator');
    expect(vibe.score).toBeGreaterThan(70);
    expect(vibe.traits).toContain('builder');
  });

  it('returns a Call of Duty style loadout with one item in each equipment slot', () => {
    const loadout = generateLoadout('buildlord');

    expect(loadout.profile.handle).toBe('buildlord');
    expect(loadout.vibe.primary).toBeTruthy();
    expect(loadout.slots.map((slot) => slot.slot)).toEqual([
      'primary',
      'secondary',
      'perk',
      'tactical',
      'lethal',
      'field-upgrade',
    ]);
    expect(loadout.slots.every((slot) => slot.product.name && slot.product.reason)).toBe(true);
  });

  it('falls back to a generic creator profile for unknown handles', () => {
    const loadout = generateLoadout('not-real-yet');

    expect(loadout.profile.handle).toBe('not-real-yet');
    expect(loadout.profile.name).toBe('Mystery Operator');
    expect(loadout.slots).toHaveLength(6);
  });
});
