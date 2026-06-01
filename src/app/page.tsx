'use client';

import { useState, useEffect, useRef } from 'react';
import { I18N, SUPPORTED, detectLang, type Lang, type Dict } from '@/lib/i18n';

const FORMSPREE = 'https://formspree.io/f/xkoeldew';

export default function Home() {
  const [lang, setLang] = useState<Lang>('de');
  const [dict, setDict] = useState<Dict>(I18N.de);
  const [formMsg, setFormMsg] = useState<{ text: string; type: 'ok' | 'err' | '' }>({ text: '', type: '' });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function applyLang(l: Lang) {
    setLang(l);
    setDict(I18N[l]);
    document.documentElement.lang = l;
    try { localStorage.setItem('td_lang', l); } catch { /* noop */ }
  }

  useEffect(() => { applyLang(detectLang()); }, []);

  useEffect(() => {
    const bar = document.getElementById('progress-bar') as HTMLDivElement | null;
    const onScroll = () => {
      if (!bar) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.10 });
    document.querySelectorAll('.bento .card').forEach((el, i) => {
      el.classList.add('reveal');
      (el as HTMLElement).style.transitionDelay = `${i * 90}ms`;
      obs.observe(el);
    });
    document.querySelectorAll('.safety > *, .dev-card').forEach((el, i) => {
      el.classList.add('reveal');
      (el as HTMLElement).style.transitionDelay = `${i * 110}ms`;
      obs.observe(el);
    });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSending(true);
    setFormMsg({ text: '', type: '' });
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' },
      });
      if (res.ok) { form.reset(); setFormMsg({ text: dict.f_ok, type: 'ok' }); }
      else { setFormMsg({ text: dict.f_err, type: 'err' }); }
    } catch { setFormMsg({ text: dict.f_err, type: 'err' }); }
    finally { setSending(false); }
  }

  return (
    <>
      <div id="progress-bar" aria-hidden="true" />
      <div className="ambient" aria-hidden="true" />

      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="brand" aria-label="TopDrop.ch">
            <span className="brand-text">TopDrop<span className="brand-tld">.ch</span></span>
          </a>
          <nav className="lang-switch" aria-label="Language">
            {SUPPORTED.map(l => (
              <button key={l} type="button" className={lang === l ? 'active' : ''} onClick={() => applyLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="grid-bg" aria-hidden="true" />
          <div className="hero-inner">
            <span className="badge"><span className="dot" />{dict.badge}</span>
            <h1 className="hero-title">TopDrop.ch</h1>
            <p className="hero-sub">{dict.hero_sub}</p>
            <p className="hero-desc">{dict.hero_desc}</p>
            <div className="cta-row">
              <a href="#offer" className="btn btn-primary">{dict.cta_offer}</a>
              <a href="#benefits" className="btn btn-ghost">{dict.cta_learn}</a>
            </div>
            <div className="trust-row">
              {[dict.trust_history, dict.trust_seo, dict.trust_escrow].map(t => (
                <span key={t} className="item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20 6 9 17l-5-5"/></svg>
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section" id="benefits">
          <div className="section-head reveal">
            <div className="eyebrow">{dict.benefits_eyebrow}</div>
            <h2>{dict.benefits_title}</h2>
            <p>{dict.benefits_desc}</p>
          </div>
          <div className="bento">
            <article className="card span-2">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 2"/></svg>
              </div>
              <h3>{dict.b1_h}</h3><p>{dict.b1_d}</p>
            </article>
            <article className="card">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3>{dict.b2_h}</h3><p>{dict.b2_d}</p>
            </article>
            <article className="card">
              <div className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2 4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3z"/></svg>
              </div>
              <h3>{dict.b3_h}</h3><p>{dict.b3_d}</p>
            </article>
            <article className="card span-4">
              <div className="feature-strip">
                <div>
                  <div className="icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  </div>
                  <h3>{dict.b4_h}</h3><p>{dict.b4_d}</p>
                </div>
                <div className="preview" aria-hidden="true">TopDrop.ch</div>
              </div>
            </article>
          </div>
        </section>

        {/* Offer + Safety */}
        <section className="section" id="offer">
          <div className="split">
            <div className="card" style={{ padding: 36 }}>
              <div className="eyebrow reveal">{dict.form_eyebrow}</div>
              <h2 style={{ margin: '6px 0', fontSize: 28, letterSpacing: '-0.02em' }}>{dict.form_title}</h2>
              <p style={{ color: 'var(--muted)', margin: '0 0 24px' }}>{dict.form_desc}</p>
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="field">
                    <label htmlFor="name">{dict.f_name}</label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe / Acme AG" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{dict.f_email}</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.ch" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="amount">{dict.f_amount}</label>
                  <input id="amount" name="amount" type="number" min="1" step="1" required />
                </div>
                <div className="field">
                  <label htmlFor="message">{dict.f_message}</label>
                  <textarea id="message" name="message" rows={4} placeholder="Erzählen Sie uns von Ihrem Projekt..." />
                </div>
                <input type="hidden" name="_subject" value="TopDrop.ch – New Offer" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <button type="submit" disabled={sending} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 15, opacity: sending ? 0.6 : 1 }}>
                  {dict.f_submit}
                </button>
                <div className="form-note">{dict.f_note}</div>
                {formMsg.text && <div className={`form-status ${formMsg.type}`} role="status">{formMsg.text}</div>}
              </form>
            </div>

            <div className="safety">
              <h3>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                {dict.safety_title}
              </h3>
              <p>{dict.safety_desc}</p>
              <div className="partners">
                {['Sedo Escrow', 'Dan.com Escrow', 'AuthCode Transfer'].map(p => (
                  <span key={p} className="partner-chip"><span className="d" />{p}</span>
                ))}
              </div>
              <div className="dev-card">
                <div className="kicker">{dict.dev_kicker}</div>
                <h4>{dict.dev_h}</h4>
                <p>{dict.dev_d}</p>
                <a className="dev-link" href="https://andrzejmich.ch" target="_blank" rel="noopener noreferrer">
                  {dict.dev_cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 17 17 7M9 7h8v8"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>© {new Date().getFullYear()} TopDrop.ch — {dict.footer_rights}</div>
          <div className="right">
            <a href="mailto:info@andrzejmich.ch">{dict.footer_contact}</a>
            <a href="https://andrzejmich.ch" target="_blank" rel="noopener noreferrer" className="accent">andrzejmich.ch</a>
          </div>
        </div>
      </footer>
    </>
  );
}
