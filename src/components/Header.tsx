import React from 'react';
import { ArrowRight } from 'lucide-react';
import { colors } from '../data';
import { Button } from './Button';

export function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,250,240,0.88)', backdropFilter: 'blur(14px)', borderBottom: `1px solid ${colors.hairline}` }}>
      <div className="page-wrap top-nav" style={{ padding: '16px 24px' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: colors.ink }}>
          <div style={{ width: 40, height: 40, borderRadius: 14, background: colors.teal, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 10, borderRadius: 12, background: colors.canvas }} />
          </div>
          <div>
            <div style={{ fontWeight: 700, lineHeight: 1 }}>hellwaytim</div>
            <div style={{ fontSize: 13, color: colors.muted }}>Создаю веб сайты ддля клиентов</div>
          </div>
        </a>

        <nav className="top-nav-links">
          <a href="#услуги" style={{ color: 'inherit', textDecoration: 'none' }}>Услуги</a>
          <a href="#кейсы" style={{ color: 'inherit', textDecoration: 'none' }}>Кейсы</a>
          <a href="#процесс" style={{ color: 'inherit', textDecoration: 'none' }}>Процесс</a>
          <a href="#цены" style={{ color: 'inherit', textDecoration: 'none' }}>Цены</a>
          <a href="#контакты" style={{ color: 'inherit', textDecoration: 'none' }}>Контакты</a>
        </nav>

        <div className="top-nav-actions">
          <a href="#контакты" style={{ height: 44, padding: '0 16px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: colors.ink, borderRadius: 12, fontSize: 14, fontWeight: 600 }}>
            Написать
          </a>
          <Button href="#контакты">Обсудить проект <ArrowRight size={16} /></Button>
        </div>
      </div>
    </header>
  );
}
