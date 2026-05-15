import { motion } from 'framer-motion';
import { colors } from '../data';

export function AnimatedHeroArt() {
  return (
    <div
      style={{
        background: colors.surfaceSoft,
        padding: 24,
        overflow: 'hidden',
        position: 'relative',
        minHeight: 560,
        borderRadius: 24,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 15%, rgba(255,77,139,0.10), transparent 28%), radial-gradient(circle at 85% 20%, rgba(26,58,58,0.10), transparent 26%), radial-gradient(circle at 60% 80%, rgba(232,185,74,0.13), transparent 28%)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 13, color: colors.muted, marginBottom: 4 }}>Для тех, кто продаёт услуги</div>
            <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.1 }}>Сайт, который превращает внимание в заявку</div>
          </div>
          <div style={{ width: 78, height: 78, borderRadius: 26, background: colors.canvas, display: 'grid', placeItems: 'center', border: `1px solid ${colors.hairline}` }}>
            <motion.div animate={{ rotate: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              ✦
            </motion.div>
          </div>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ borderRadius: 24, padding: 20, background: colors.lavender, minHeight: 220, position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to top, rgba(255,255,255,0.28), transparent)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 18, right: 18, height: 86, borderRadius: 28, background: '#8d77d8' }} />
            <div style={{ position: 'absolute', bottom: 42, left: 74, width: 152, height: 112, borderRadius: '50% 50% 20% 20%', background: '#a4d4c5', transform: 'rotate(-6deg)' }} />
            <div style={{ position: 'absolute', bottom: 68, left: 148, width: 78, height: 78, borderRadius: '50%', background: colors.canvas }} />
            <div style={{ position: 'absolute', bottom: 30, right: 28, width: 118, height: 154, borderRadius: 36, background: '#f6d0be' }} />
            <div style={{ position: 'absolute', top: 24, left: 18, padding: '8px 12px', background: colors.canvas, borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>
              3D clay hero
            </div>
          </motion.div>

          <div style={{ display: 'grid', gap: 16 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ borderRadius: 24, padding: 20, background: colors.pink, color: colors.onDark, minHeight: 102 }}>
              <div style={{ fontSize: 13, opacity: 0.88, marginBottom: 8 }}>Позиционирование</div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>Ваши услуги выглядят уверенно и дорого</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} style={{ borderRadius: 24, padding: 20, background: colors.teal, color: colors.onDark, minHeight: 102 }}>
              <div style={{ fontSize: 13, opacity: 0.88, marginBottom: 8 }}>Конверсия</div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>Путь к заявке становится очевидным</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
