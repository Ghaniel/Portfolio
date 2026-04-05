import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollTo = href => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">GN<span>.</span></div>
          <p>© 2025 Ghaniel Ni'Hat Faturahman. Semua Hak Dilindungi.</p>
          <div className="footer-links">
            {['#home','#skills','#certificates'].map(href => (
              <button key={href} onClick={() => scrollTo(href)} className="footer-link">
                {href.replace('#','').charAt(0).toUpperCase() + href.slice(2)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
