'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateLoadout, sampleHandles } from '../lib/loadout';

function normalizeHandle(value: string) {
  return value.replace('@', '').trim().toLowerCase() || 'buildlord';
}

export function LoadoutApp() {
  const searchParams = useSearchParams();
  const initialHandle = normalizeHandle(searchParams.get('handle') || 'buildlord');
  const [handle, setHandle] = useState(initialHandle);
  const [draftHandle, setDraftHandle] = useState(initialHandle);
  const loadout = useMemo(() => generateLoadout(handle), [handle]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextHandle = normalizeHandle(draftHandle);
    setHandle(nextHandle);
    setDraftHandle(nextHandle);

    const url = new URL(window.location.href);
    url.searchParams.set('handle', nextHandle);
    window.history.replaceState(null, '', url.toString());
  }

  function pickHandle(nextHandle: string) {
    setHandle(nextHandle);
    setDraftHandle(nextHandle);
    const url = new URL(window.location.href);
    url.searchParams.set('handle', nextHandle);
    window.history.replaceState(null, '', url.toString());
  }

  return (
    <main className="shell">
      <section className="hero">
        <div>
          <p className="eyebrow">LOADOUT // SOCIAL RECON</p>
          <h1>Drop a Twitter handle. Get a product loadout that matches their vibe.</h1>
          <p className="lede">
            Mocked X profile intel becomes a COD-style recommendation screen with primary gear,
            perks, tacticals, lethals, and field upgrades.
          </p>
        </div>
        <form className="handleForm" onSubmit={submit}>
          <label htmlFor="handle">Twitter / X handle</label>
          <div className="inputRow">
            <span>@</span>
            <input
              id="handle"
              name="handle"
              placeholder="buildlord"
              value={draftHandle}
              onChange={(event) => setDraftHandle(event.target.value)}
            />
            <button type="submit">Analyze</button>
          </div>
          <p>
            Try:{' '}
            {sampleHandles.map((sampleHandle) => (
              <button className="sampleHandle" type="button" key={sampleHandle} onClick={() => pickHandle(sampleHandle)}>
                @{sampleHandle}
              </button>
            ))}
          </p>
        </form>
      </section>

      <section className="briefing">
        <div className="profileCard">
          <div className="avatar">{loadout.profile.name.slice(0, 2).toUpperCase()}</div>
          <div>
            <p className="callsign">@{loadout.profile.handle}</p>
            <h2>{loadout.profile.name}</h2>
            <p>{loadout.profile.bio}</p>
            <div className="profileStats">
              <span>{loadout.profile.followers} followers</span>
              <span>{loadout.profile.tweets.length} signal samples</span>
            </div>
          </div>
        </div>

        <div className="vibeCard">
          <div className="vibeTop">
            <p className="eyebrow">VIBE CLASS</p>
            <strong>{loadout.vibe.score}% match</strong>
          </div>
          <h2>{loadout.vibe.label}</h2>
          <p>{loadout.vibe.summary}</p>
          <div className="traitRow">
            {loadout.vibe.traits.map((trait) => <span key={trait}>{trait}</span>)}
          </div>
        </div>
      </section>

      <section className="loadoutPanel" aria-label="Recommended product loadout">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">MULTIPLAYER LOADOUT</p>
            <h2>Recommended kit</h2>
          </div>
          <div className="rankBadge">LVL {Math.round(loadout.vibe.score / 3)}</div>
        </div>

        <div className="slots">
          {loadout.slots.map((slot, index) => (
            <article className={`slot slot-${slot.slot}`} key={slot.slot}>
              <div className="slotIndex">{String(index + 1).padStart(2, '0')}</div>
              <div className="slotContent">
                <div className="slotMeta">
                  <span>{slot.label}</span>
                  <em>{slot.stat}</em>
                </div>
                <h3>{slot.product.name}</h3>
                <p className="brand">{slot.product.brand} · {slot.product.category} · {slot.product.price}</p>
                <p>{slot.product.reason}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="signalGrid">
        {loadout.profile.tweets.map((tweet) => (
          <blockquote key={tweet}>“{tweet}”</blockquote>
        ))}
      </section>
    </main>
  );
}
