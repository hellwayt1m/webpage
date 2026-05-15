import React from 'react';
import { colors } from '../data';

export function Button({
  children,
  variant = 'primary',
  className = '',
  href = '#контакты',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}) {
  const base: React.CSSProperties = {
    height: 44,
    padding: '0 18px',
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    border: '1px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  if (variant === 'secondary') {
    return (
      <a href={href} className={className} style={{ ...base, background: colors.canvas, color: colors.ink, borderColor: colors.hairline }}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className} style={{ ...base, background: colors.primary, color: colors.onDark }}>
      {children}
    </a>
  );
}
