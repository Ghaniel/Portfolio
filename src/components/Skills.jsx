import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  {
    name: 'HTML',
    pct: 80,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h24l-2.2 24.6L16 31l-9.8-2.4L4 4z" fill="#E34F26"/>
        <path d="M16 28.6l7.9-2.2L25.6 8H16v20.6z" fill="#EF652A"/>
        <path d="M16 13.4h-4.2l-.3-3.4H16V6.6H8l.8 9.4H16v-2.6zm0 9.4-3.9-1.1-.3-2.7H8.6l.5 5.8L16 27v-4.2z" fill="#fff"/>
        <path d="M16 13.4v2.6h3.9l-.4 4.3-3.5 1v4.2l6.8-1.9.8-10.2H16zm0-6.8v3.4h7.4l.2-3.4H16z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    pct: 80,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h24l-2.2 24.6L16 31l-9.8-2.4L4 4z" fill="#1572B6"/>
        <path d="M16 28.6l7.9-2.2L25.6 8H16v20.6z" fill="#33A9DC"/>
        <path d="M16 13.8h4.1l.3-3.4H16V7H24.4l-.8 9.4h-7.6v-2.6zm.1 9-3.9-1.1-.3-2.7H8.7l.5 5.8L16 27v-4.2z" fill="#fff"/>
        <path d="M16 13.8v2.6h3.7l-.4 4.3-3.3 1v4.2l6.7-1.9.7-10.2H16zm0-6.8v3.4h7.3l.2-3.4H16z" fill="#EBEBEB"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    pct: 65,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2h28v28H2z" fill="#F7DF1E"/>
        <path d="M20.8 24.4c.5.8 1.1 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.5.5 3.2 1.8l-1.7 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.5 1 1.5 1.4l.6.3c2 .8 3.1 1.7 3.1 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.4l1.8-1zm-9.5.2c.3.6.6 1.1 1.4 1.1.7 0 1.2-.3 1.2-1.4V18h2.2v6.4c0 2.3-1.3 3.4-3.3 3.4-1.8 0-2.8-1-3.3-2l1.8-1.2z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: 'PHP',
    pct: 75,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3 3 8.5v7c0 7.2 5.5 13.9 13 15.5C23.5 29.4 29 22.7 29 15.5v-7L16 3z" fill="#8993BE"/>
        <path d="M16 3v28c7.5-1.6 13-8.3 13-15.5v-7L16 3z" fill="#4F5B93"/>
        <path d="M11.5 13h9v1.5h-7V16h6.5v4.5h-9V19h7v-1.5h-6.5V13z" fill="#fff"/>
      </svg>
    ),
  },
];

export default function Skills() {
  const cardRefs = useRef([]);
  const fillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add('visible');
            const fill = fillRefs.current[i];
            if (fill) fill.style.animationPlayState = 'running';
          }, i * 100);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.2 }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-label">— Kemampuan</div>
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card"
              ref={el => (cardRefs.current[i] = el)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    ref={el => (fillRefs.current[i] = el)}
                    style={{ '--w': `${skill.pct}%`, animationPlayState: 'paused' }}
                  />
                </div>
                <div className="skill-pct">{skill.pct}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
