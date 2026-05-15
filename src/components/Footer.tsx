import React from 'react';
import { colors } from '../data';
import { footerLink } from '../utils/footerLink';

const footerTitle: React.CSSProperties = { fontSize: 14, fontWeight: 700, marginBottom: 12 };

export function Footer() {
  return (
    <footer style={{ background: colors.surfaceSoft, borderTop: `1px solid ${colors.hairline}` }}>
      <div className="page-wrap" style={{ padding: '40px 24px 24px' }}>
        <div className="footer-grid">
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>hellwaytim</div>
            <p style={{ color: colors.body, fontSize: 15, lineHeight: 1.65, maxWidth: 420 }}>
              Создаю персональные портфолио и сайты для клиентов, которым важны стиль, смысл и продажи.
            </p>
          </div>
          <div>
            <div style={footerTitle}>Навигация</div>
            {footerLink('Услуги')}
            {footerLink('Кейсы')}
            {footerLink('Цены')}
          </div>
          <div>
            <div style={footerTitle}>Форматы</div>
            {footerLink('Лендинг')}
            {footerLink('Портфолио')}
            {footerLink('Сайт услуги')}
          </div>
          <div>
            <div style={footerTitle}>Связь</div>
            {footerLink('Telegram')}
            {footerLink('Email')}
            {footerLink('Instagram')}
          </div>
        </div>
        <div style={{ height: 1, background: colors.hairline, marginBottom: 20 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, color: colors.muted, fontSize: 14, flexWrap: 'wrap' }}>
          <span>© 2026 hellwaytim. Сделано в тёплой кремовой системе.</span>
          <span>Создаю веб сайты для клиентов · hellwaytim</span>
        </div>
      </div>
    </footer>
  );
}
