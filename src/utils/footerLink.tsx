import { colors } from '../data';

export function footerLink(text: string) {
  return (
    <div key={text} style={{ color: colors.body, fontSize: 14, marginBottom: 10 }}>
      {text}
    </div>
  );
}
