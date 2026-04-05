import React, { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { num: '17',  label: 'Tahun' },
  { num: '3+',  label: 'Sertifikat' },
  { num: '4',   label: 'Tech Skills' },
  { num: '∞',   label: 'Semangat Belajar' },
];

export default function About() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    cardsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-label">— Tentang Saya</div>
        <div className="about-grid">

          <div className="about-text">
            <h2>Saya siapa?</h2>
            <p>
              Halo! Nama saya <strong>Ghaniel Ni'Hat Faturahman</strong>, siswa berusia 17 tahun
              dari SMK Wikrama Vocational School. Saya punya semangat besar untuk belajar dunia
              pemrograman web dan ingin terus berkembang demi membanggakan orang tua saya.
            </p>
            <p>
              Saya senang bereksperimen dengan desain web, mempelajari teknologi baru,
              dan mencoba mewujudkan ide-ide kreatif lewat kode.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="stat-card"
                ref={el => (cardsRef.current[i] = el)}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
