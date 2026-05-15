import React from 'react';

export function Card({
  children,
  style = {},
  className = '',
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div className={className} style={{ borderRadius: 24, ...style }}>
      {children}
    </div>
  );
}
