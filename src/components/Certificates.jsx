import React, { useEffect, useRef } from 'react';
import './Certificates.css';

const certs = [
  {
    num: '01',
    src: process.env.PUBLIC_URL + '/assets/dcd.png',
    alt: 'Sertifikat Dicoding Pemrograman Dasar',
    title: 'Dicoding — Pemrograman Dasar',
  },
  {
    num: '02',
    src: process.env.PUBLIC_URL + '/assets/k3.png',
    alt: 'Sertifikat K3',
    title: 'Keselamatan & Kesehatan Kerja (K3)',
  },
  {
    num: '03',
    src: process.env.PUBLIC_URL + '/assets/js.png',
    alt: 'Sertifikat JavaScript Pemula',
    title: 'Dicoding — JavaScript Pemula',
  },
];

export default function Certificates() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 120);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="certs-section" id="certificates">
      <div className="certs-grid-bg" aria-hidden="true" />
      <div className="container">
        <div className="section-label" style={{ color: 'var(--accent)' }}>— Pencapaian</div>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Sertifikat</h2>
        <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Beberapa sertifikat yang telah saya raih dalam perjalanan belajar.
        </p>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <div
              key={c.num}
              className="cert-card"
              ref={el => (cardRefs.current[i] = el)}
            >
              <div className="cert-badge">{c.num}</div>
              <div className="cert-img-wrap">
                <img src={c.src} alt={c.alt} />
              </div>
              <div className="cert-info">
                <div className="cert-title">{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
