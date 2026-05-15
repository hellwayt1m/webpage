import React from 'react';
import { Card } from './Card';

export function InfoCard({
  title,
  text,
  bg,
  fg,
}: {
  title: string;
  text: string;
  bg: string;
  fg: string;
}) {
  return (
    <Card style={{ background: bg, color: fg, padding: 24, minHeight: 250 }}>
      <div style={{ fontSize: 13, opacity: 0.86, marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
        {title}
      </div>
      <div style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.2, marginBottom: 12 }}>hellwaytim</div>
      <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, opacity: 0.96 }}>{text}</p>
    </Card>
  );
}
