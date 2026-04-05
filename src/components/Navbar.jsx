import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Sertifikat', href: '#certificates' },
  { label: 'Kontak',     href: '#contact' },
];

const tugasLinks = [
  { label: 'Matematika', href: 'Tugas/mtk.html' },
  { label: 'Pipas I',    href: 'Tugas/pipas1.html' },
  { label: 'Pipas II',   href: 'Tugas/pipas2.html' },
  { label: 'Sejarah',    href: 'Tugas/sejarah.html' },
  { label: 'Sunda',      href: 'Tugas/sunda.html' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState('home');

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-inner container">

        {/* Brand */}
        <a href="#home" className="nav-brand" onClick={e => handleLinkClick(e, '#home')}>
          GN<span>.</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeId === link.href.replace('#','') ? 'active' : ''}`}
              onClick={e => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Tugas dropdown */}
        <div className="nav-dropdown-wrap">
          <button className="dropdown-trigger">
            Tugas Sekolah <span className="arrow">↓</span>
          </button>
          <div className="nav-dropdown">
            {tugasLinks.map(t => (
              <a key={t.href} href={t.href} className="nav-dropdown-item">{t.label}</a>
            ))}
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={e => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
