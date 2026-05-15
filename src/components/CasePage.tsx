import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { colors, type CaseStudy } from '../data';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';
import { InfoCard } from './InfoCard';
import { Footer } from './Footer';

export function CasePage({ caseItem, onBack }: { caseItem: CaseStudy; onBack: () => void }) {
  return (
    <div style={{ background: colors.canvas, color: colors.ink, minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <style>{`
        html { scroll-behavior: smooth; }
        .display-font { letter-spacing: -0.04em; }
        .hero-headline { letter-spacing: -0.05em; line-height: 0.98; }
        .page-wrap { max-width: 1280px; margin: 0 auto; }
        .section-pad { padding: 72px 24px; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .case-hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 28px; align-items: center; }
        .case-info-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .case-detail-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 24px; }
        .case-final-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 24px; align-items: start; }
        @media (max-width: 1024px) {
          .case-hero-grid, .case-detail-grid, .case-final-grid { grid-template-columns: 1fr; }
          .case-info-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .section-pad { padding: 56px 16px; }
          .case-info-grid, .grid-2 { grid-template-columns: 1fr; }
          .hero-headline { font-size: 40px !important; }
        }
      `}</style>

      <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,250,240,0.88)', backdropFilter: 'blur(14px)', borderBottom: `1px solid ${colors.hairline}` }}>
        <div className="page-wrap" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: 'none', background: 'transparent', padding: 0, color: colors.ink, cursor: 'pointer', fontSize: 14, fontWeight: 700 }}>
            <ArrowLeft size={18} />
            <span>hellwaytim</span>
          </button>
          <div style={{ color: colors.muted, fontSize: 14 }}>Case page · {caseItem.year}</div>
        </div>
      </header>

      <main>
        <section className="page-wrap section-pad">
          <SectionLabel>Case page · hellwaytim</SectionLabel>
          <div className="case-hero-grid" style={{ marginTop: 18 }}>
            <div>
              <h1 className="display-font hero-headline" style={{ fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 500, margin: '0 0 14px' }}>
                {caseItem.title}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: colors.body, maxWidth: 640, marginBottom: 18 }}>
                {caseItem.subtitle}. Автор — hellwaytim. Это fictional case page, собранная как реалистичный пример процесса, структуры и подачи проекта для клиентов.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                <span style={{ padding: '8px 12px', borderRadius: 9999, background: colors.surfaceCard, fontSize: 13, fontWeight: 600 }}>Автор: hellwaytim</span>
                <span style={{ padding: '8px 12px', borderRadius: 9999, background: colors.surfaceCard, fontSize: 13, fontWeight: 600 }}>{caseItem.tag}</span>
                <span style={{ padding: '8px 12px', borderRadius: 9999, background: colors.surfaceCard, fontSize: 13, fontWeight: 600 }}>{caseItem.year}</span>
              </div>
              <button onClick={onBack} style={{ height: 44, padding: '0 18px', borderRadius: 12, border: `1px solid ${colors.hairline}`, background: colors.canvas, color: colors.ink, fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                <ArrowLeft size={16} /> Назад к портфолио
              </button>
            </div>

            <Card style={{ background: colors.surfaceSoft, padding: 24, minHeight: 430, border: `1px solid ${colors.hairline}` }}>
              <div className="grid-2" style={{ height: '100%' }}>
                <div style={{ borderRadius: 24, background: caseItem.palette[0], minHeight: 180, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 16, borderRadius: 20, border: '1px solid rgba(255,255,255,0.28)' }} />
                </div>
                <div style={{ borderRadius: 24, background: caseItem.palette[1], minHeight: 180, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 16, borderRadius: 20, border: '1px solid rgba(255,255,255,0.28)' }} />
                </div>
                <div style={{ gridColumn: '1 / -1', borderRadius: 24, background: caseItem.palette[2], minHeight: 190, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20, height: 92, borderRadius: 30, background: 'rgba(255,255,255,0.36)' }} />
                  <div style={{ position: 'absolute', top: 20, left: 20, fontSize: 13, fontWeight: 700, background: colors.canvas, borderRadius: 9999, padding: '8px 12px' }}>hellwaytim · case visual</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="page-wrap section-pad" style={{ paddingTop: 0 }}>
          <div className="case-info-grid">
            <InfoCard title="Задача" text={caseItem.challenge} bg={colors.pink} fg={colors.onDark} />
            <InfoCard title="Решение" text={caseItem.solution} bg={colors.teal} fg={colors.onDark} />
            <InfoCard title="Суть" text={caseItem.summary} bg={colors.surfaceCard} fg={colors.ink} />
          </div>
        </section>

        <section className="page-wrap section-pad" style={{ paddingTop: 0 }}>
          <Card style={{ background: colors.surfaceSoft, border: `1px solid ${colors.hairline}`, padding: 32 }}>
            <div className="case-detail-grid">
              <div>
                <SectionLabel>Разбор кейса · hellwaytim</SectionLabel>
                <h2 className="display-font" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 500, letterSpacing: '-0.04em', margin: '16px 0 12px' }}>
                  Что было сделано в проекте
                </h2>
                <p style={{ color: colors.body, fontSize: 16, lineHeight: 1.65 }}>
                  Страница построена как понятная история: сначала проблема, затем решение, затем конкретные элементы, которые помогают пользователю быстрее принять решение.
                </p>
              </div>
              <div style={{ display: 'grid', gap: 14 }}>
                {caseItem.blocks.map((block) => (
                  <div key={block.title} style={{ padding: 20, borderRadius: 20, border: `1px solid ${colors.hairline}`, background: colors.canvas }}>
                    <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{block.title}</div>
                    <div style={{ color: colors.body, fontSize: 15, lineHeight: 1.6 }}>{block.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="page-wrap section-pad" style={{ paddingTop: 0 }}>
          <div className="case-final-grid">
            <Card style={{ background: colors.teal, color: colors.onDark, padding: 28 }}>
              <div style={{ fontSize: 13, opacity: 0.88, marginBottom: 8 }}>Итоговые эффекты</div>
              <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>Что получил клиент</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {caseItem.results.map((result) => (
                  <div key={result} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5 }}>
                    <Check size={18} style={{ marginTop: 1, flexShrink: 0 }} />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card style={{ background: colors.canvas, border: `1px solid ${colors.hairline}`, padding: 28 }}>
              <SectionLabel>Автор</SectionLabel>
              <div style={{ fontSize: 32, fontWeight: 800, marginTop: 16, marginBottom: 10 }}>hellwaytim</div>
              <p style={{ color: colors.body, fontSize: 16, lineHeight: 1.65, margin: 0 }}>
                Автор и дизайнер этого кейса — hellwaytim. Вся подача, структура и визуальная логика нацелены на то, чтобы клиент быстро увидел ценность и захотел оставить заявку.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
