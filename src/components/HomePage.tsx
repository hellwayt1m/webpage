import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { colors, caseStudies, pricing, services } from '../data';
import { SectionLabel } from './SectionLabel';
import { Card } from './Card';
import { Button } from './Button';
import { AnimatedHeroArt } from './AnimatedHeroArt';
import { Footer } from './Footer';
import { Header } from './Header';

const inputStyle: React.CSSProperties = {
  height: 48,
  borderRadius: 14,
  border: `1px solid ${colors.hairline}`,
  background: colors.canvas,
  padding: '0 16px',
  fontSize: 15,
  outline: 'none',
  color: colors.ink,
  width: '100%',
  fontFamily: 'inherit',
};

const submitStyle: React.CSSProperties = {
  height: 50,
  borderRadius: 14,
  border: 'none',
  background: colors.primary,
  color: colors.onDark,
  fontSize: 15,
  fontWeight: 700,
  cursor: 'pointer',
  width: '100%',
  transition: 'transform 180ms ease, opacity 180ms ease',
};

export function HomePage() {
  return (
    <div>
      <Header />

      <main>
        <section className="page-wrap section-pad">
          <div className="hero-grid">
            <div>
              <SectionLabel>
                Портфолио веб-дизайнера · hellwaytim
              </SectionLabel>

              <h1
                className="display-font hero-headline"
                style={{
                  fontSize: 'clamp(40px, 6vw, 72px)',
                  fontWeight: 500,
                  margin: '18px 0',
                  color: colors.ink,
                }}
              >
                Сайты, которые выглядят дорого и помогают продавать услуги.
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: colors.body,
                  maxWidth: 620,
                  marginBottom: 28,
                }}
              >
                Я, Умаров Тимур, создаю персональные портфолио,
                лендинги и сайты для экспертов, студий и малого бизнеса.
                В основе — тёплый визуал, сильная структура
                и интерфейс, который делает заявку естественным следующим шагом.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBottom: 22,
                }}
              >
                <Button href="#контакты">
                  Оставить заявку <ArrowRight size={16} />
                </Button>

                <Button variant="secondary" href="#кейсы">
                  Смотреть кейсы
                </Button>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 12,
                  color: colors.muted,
                  fontSize: 14,
                }}
              >
                {['UX / UI', 'Анимация', 'Лендинги', 'hellwaytim'].map(
                  (item) => (
                    <div
                      key={item}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 9999,
                        background: colors.surfaceCard,
                      }}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <AnimatedHeroArt />
          </div>
        </section>

        <section
          id="услуги"
          className="page-wrap section-pad"
          style={{ paddingTop: 0 }}
        >
          <div style={{ marginBottom: 24 }}>
            <SectionLabel>Услуги</SectionLabel>

            <h2
              className="display-font"
              style={{
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                margin: '16px 0 12px',
              }}
            >
              Упаковка, дизайн и запуск — в одном процессе.
            </h2>

            <p
              style={{
                maxWidth: 760,
                fontSize: 17,
                lineHeight: 1.65,
                color: colors.body,
              }}
            >
              hellwaytim работает как дизайнер и веб-автор:
              не просто рисует страницы, а собирает смысл,
              структуру и визуал, чтобы сайт выглядел цельно
              и убедительно для ваших клиентов.
            </p>
          </div>

          <div className="grid-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  style={{
                    background: service.bg,
                    color: service.fg,
                    padding: 28,
                    minHeight: 240,
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 16,
                      background: 'rgba(255,255,255,0.22)',
                      display: 'grid',
                      placeItems: 'center',
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      margin: '0 0 10px',
                      lineHeight: 1.15,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      opacity: 0.92,
                      margin: 0,
                    }}
                  >
                    {service.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          id="кейсы"
          className="page-wrap section-pad"
          style={{ paddingTop: 0 }}
        >
          <div
            className="case-detail-grid"
            style={{ marginBottom: 24 }}
          >
            <div>
              <SectionLabel>Кейсы</SectionLabel>

              <h2
                className="display-font"
                style={{
                  fontSize: 'clamp(34px, 4vw, 56px)',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  margin: '16px 0 12px',
                }}
              >
                Три fictional case pages с живой подачей.
              </h2>
            </div>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: colors.body,
                margin: 0,
              }}
            >
              Каждый кейс — отдельная страница с историей,
              задачей, решением и результатом.
              Во всех точках подпись автора — hellwaytim.
            </p>
          </div>

          <div className="case-grid">
            {caseStudies.map((item, idx) => {
              const palette = [
                colors.surfaceCard,
                colors.surfaceStrong,
                colors.surfaceSoft,
              ][idx % 3];

              return (
                <Card
                  key={item.slug}
                  style={{
                    background: palette,
                    padding: 24,
                    border: `1px solid ${colors.hairline}`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 16,
                      marginBottom: 18,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: colors.muted,
                      }}
                    >
                      {item.tag}
                    </span>

                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        background: [
                          colors.pink,
                          colors.teal,
                          colors.ochre,
                        ][idx % 3],
                      }}
                    />
                  </div>

                  <div
                    style={{
                      height: 170,
                      borderRadius: 24,
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.15))',
                      border: '1px solid rgba(10,10,10,0.06)',
                      position: 'relative',
                      overflow: 'hidden',
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 18,
                        left: 18,
                        right: 18,
                        height: 90,
                        borderRadius: 22,
                        background: item.palette[0],
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      margin: '0 0 10px',
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: colors.body,
                      margin: 0,
                    }}
                  >
                    {item.summary}
                  </p>

                  <div style={{ marginTop: 16 }}>
                    <a
                      href={`#case/${item.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        color: colors.ink,
                        fontSize: 14,
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Открыть кейс <ArrowRight size={16} />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section
          id="цены"
          className="page-wrap section-pad"
          style={{ paddingTop: 0 }}
        >
          <div style={{ marginBottom: 24 }}>
            <SectionLabel>Цены</SectionLabel>

            <h2
              className="display-font"
              style={{
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                margin: '16px 0 12px',
              }}
            >
              Пакеты под разные задачи и бюджеты.
            </h2>
          </div>

          <div className="pricing-grid">
            {pricing.map((tier) => (
              <Card
                key={tier.name}
                className="soft-shadow"
                style={{
                  background: tier.featured
                    ? colors.teal
                    : colors.canvas,
                  color: tier.featured
                    ? colors.onDark
                    : colors.ink,
                  padding: 28,
                  border: tier.featured
                    ? 'none'
                    : `1px solid ${colors.hairline}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {tier.name}
                    </h3>

                    <p
                      style={{
                        fontSize: 14,
                        opacity: 0.82,
                        margin: '8px 0 0',
                      }}
                    >
                      {tier.note}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    marginBottom: 18,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {tier.price}
                </div>

                <div
                  style={{
                    display: 'grid',
                    gap: 10,
                    marginBottom: 22,
                  }}
                >
                  {tier.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        fontSize: 15,
                        lineHeight: 1.5,
                      }}
                    >
                      <Check
                        size={18}
                        style={{ marginTop: 1, flexShrink: 0 }}
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#контакты"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    height: 44,
                    padding: '0 16px',
                    borderRadius: 12,
                    background: tier.featured
                      ? colors.canvas
                      : colors.primary,
                    color: tier.featured
                      ? colors.ink
                      : colors.onDark,
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Выбрать пакет <ArrowRight size={16} />
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="контакты"
          className="page-wrap section-pad"
          style={{ paddingTop: 0 }}
        >
          <Card
            style={{
              background: colors.surfaceSoft,
              padding: 32,
              border: `1px solid ${colors.hairline}`,
            }}
          >
            <div className="hero-grid">
              <div>
                <SectionLabel>Контакты</SectionLabel>

                <h2
                  className="display-font"
                  style={{
                    fontSize: 'clamp(34px, 4vw, 56px)',
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                    margin: '16px 0 12px',
                  }}
                >
                  Давайте соберём сайт,
                  который будет продавать вашу услугу.
                </h2>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: colors.body,
                    marginBottom: 24,
                    maxWidth: 620,
                  }}
                >
                  Напишите, чем вы занимаетесь,
                  какой нужен формат сайта и какой результат
                  для вас важнее.
                </p>
              </div>

              <div
                style={{
                  background: colors.canvas,
                  border: `1px solid ${colors.hairline}`,
                  borderRadius: 24,
                  padding: 24,
                }}
              >
                <div style={{ display: 'grid', gap: 14 }}>
                  <label
                    style={{
                      display: 'grid',
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Ваше имя
                    </span>

                    <input
                      placeholder="Например, Анна"
                      style={inputStyle}
                    />
                  </label>

                  <label
                    style={{
                      display: 'grid',
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Контакт
                    </span>

                    <input
                      placeholder="Telegram / email"
                      style={inputStyle}
                    />
                  </label>

                  <label
                    style={{
                      display: 'grid',
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      Что нужно сделать
                    </span>

                    <textarea
                      placeholder="Расскажите про проект и задачи"
                      rows={5}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: 124,
                        paddingTop: 12,
                        paddingBottom: 12,
                      }}
                    />
                  </label>

                  <button
                    style={{
                      ...submitStyle,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                    }}
                  >
                    Отправить запрос <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}