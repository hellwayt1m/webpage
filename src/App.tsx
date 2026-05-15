import React, { useMemo, useState } from 'react';
import { HomePage } from './components/HomePage';
import { CasePage } from './components/CasePage';
import { caseStudies } from './data';

export default function App() {
  const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash || '#home' : '#home');

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectedCase = useMemo(() => {
    if (!hash.startsWith('#case/')) return null;
    const slug = hash.replace('#case/', '');
    return caseStudies.find((item) => item.slug === slug) ?? null;
  }, [hash]);

  if (selectedCase) {
    return <CasePage caseItem={selectedCase} onBack={() => (window.location.hash = '#home')} />;
  }

  return <HomePage />;
}
