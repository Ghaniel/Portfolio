import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', message: '' });
  const [sending, setSending]   = useState(false);
  const [success, setSuccess]   = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    // Simulasi pengiriman (ganti dengan API nyata jika perlu)
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1400);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-label">— Hubungi Saya</div>
        <h2 className="section-title">Kontak</h2>
        <div className="contact-grid">

          {/* Info */}
          <div className="contact-info">
            <p>
              Punya pertanyaan atau ingin berkolaborasi?
              Jangan ragu untuk menghubungi saya!
            </p>
            <div className="contact-items">
              <ContactItem icon="✉" text="ghanielni'hatfaturahman@smkwikrama.sch.id" />
              <ContactItem icon="☎" text="+62 856 941 546 29" />
              <ContactItem icon="🏫" text="SMK Wikrama Vocational School" />
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input
                id="name" name="name" type="text"
                placeholder="Nama Anda"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email"
                placeholder="email@contoh.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message" name="message"
                placeholder="Tuliskan pesan Anda..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={sending}
            >
              {sending ? 'Mengirim...' : 'Kirim Pesan →'}
            </button>

            {success && (
              <div className="form-success">
                ✓ Pesan terkirim! Terima kasih, Ghaniel akan segera membalas.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="contact-item">
      <span className="ci-icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
