import { Suspense } from 'react';
import { LoadoutApp } from '../components/LoadoutApp';

export default function Home() {
  return (
    <Suspense fallback={<main className="shell"><p className="eyebrow">Loading loadout...</p></main>}>
      <LoadoutApp />
    </Suspense>
  );
}
