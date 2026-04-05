import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* decorative background */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow"  aria-hidden="true" />
      <div className="hero-bg-text" aria-hidden="true">PORTFOLIO</div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">✦ SMK Wikrama Vocational School</div>

        <h1 className="hero-title">
          Ghaniel<br />
          <span>Ni'Hat</span><br />
          Faturahman
        </h1>

        <p className="hero-desc">
          Web developer muda yang bersemangat belajar. Sedang mendalami
          HTML, CSS, JavaScript, dan PHP untuk mewujudkan impian.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('skills')}>
            Lihat Skills
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Kontak Saya
          </button>
        </div>
      </div>

      {/* Photo */}
      <div className="hero-image-wrap">
        <div className="hero-ring" aria-hidden="true" />
        <img
          src={process.env.PUBLIC_URL + '/assets/foto.png'}
          alt="Foto Ghaniel Ni'Hat Faturahman"
          className="hero-photo"
          onError={e => {
            // Fallback: tampilkan inisial jika foto tidak ada
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        {/* Fallback initials avatar */}
        <div className="hero-avatar-fallback" style={{display:'none'}}>
          GN
        </div>

        <div className="hero-tag tag-1">HTML 80%</div>
        <div className="hero-tag tag-2">CSS 80%</div>
        <div className="hero-tag tag-3">JS 65%</div>
        <div className="hero-tag tag-4">PHP 75%</div>
      </div>

      {/* Scroll hint */}
      <button className="scroll-hint" onClick={() => scrollTo('about')} aria-label="Scroll ke bawah">
        <span className="scroll-arrow">↓</span>
      </button>
    </section>
  );
}
