import { BUSINESS, callLink, mapLink } from "../config/business";

export default function Contact() {
  const section = BUSINESS.contact;

  const googleMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery || BUSINESS.address)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const phone = form.get("phone");
    const message = form.get("message");

    const text = `Hello ${BUSINESS.name}

Name : ${name}

Phone : ${phone}

Message : ${message}`;

    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

    e.target.reset();
  };

  return (
    <>
      <section id="contact" className="gym-contact">
        <div className="gym-section-head">
          <p>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <span />
          <h3>{section.text}</h3>
        </div>

        <div className="gym-contact-grid">
          <div className="gym-contact-info">
            <div className="gym-contact-card">
              <h4>{section.directionText}</h4>
              <a href={mapLink} target="_blank" rel="noreferrer">
                {BUSINESS.address}
              </a>
            </div>

            <div className="gym-contact-card">
              <h4>{section.callText}</h4>
              <a href={callLink}>+91 {BUSINESS.phone}</a>
            </div>

            <div className="gym-contact-card">
              <h4>{BUSINESS.openingHours}</h4>
              <p>{BUSINESS.locationShort}</p>
            </div>

            <div className="gym-contact-card map">
              <iframe title={BUSINESS.name} src={googleMapUrl} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          <div className="gym-contact-form">
            <h4>{section.formTitle}</h4>
            <p>{section.text}</p>

            <form onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder={section.namePlaceholder} required />
              <input name="phone" type="tel" placeholder={section.phonePlaceholder} required />
              <textarea name="message" rows="5" placeholder={section.messagePlaceholder} />

              <button type="submit">{section.submitText}</button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
.gym-contact{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#101010 100%);}
.gym-contact *{box-sizing:border-box;}
.gym-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;font-weight:950;line-height:1.2;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto;}
.gym-section-head h3{color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;margin:auto;}
.gym-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
.gym-contact-info{display:flex;flex-direction:column;gap:22px;}
.gym-contact-card{padding:28px;border-radius:26px;background:rgba(255,255,255,.055);border:1px solid var(--border);transition:.35s;}
.gym-contact-card:hover{transform:translateY(-6px);border-color:var(--secondary);}
.gym-contact-card h4{margin-bottom:12px;color:var(--text);font-size:22px;font-weight:950;}
.gym-contact-card p,.gym-contact-card a{color:var(--muted);font-size:16px;line-height:1.8;word-break:break-word;}
.gym-contact-card a:hover{color:var(--secondary);}
.gym-contact-card iframe{width:100%;height:320px;border:0;border-radius:18px;display:block;}
.gym-contact-card.map{padding:10px;}
.gym-contact-form{padding:38px;border-radius:30px;background:rgba(255,255,255,.055);border:1px solid var(--border);}
.gym-contact-form h4{font-size:34px;color:var(--text);font-weight:950;margin-bottom:12px;}
.gym-contact-form>p{color:var(--muted);line-height:1.8;margin-bottom:28px;}
.gym-contact-form form{display:flex;flex-direction:column;gap:18px;}
.gym-contact-form input,.gym-contact-form textarea{width:100%;padding:16px 18px;border-radius:16px;border:1px solid var(--border);background:rgba(255,255,255,.06);color:var(--text);font-size:15px;outline:none;transition:.3s;}
.gym-contact-form textarea{resize:vertical;}
.gym-contact-form input::placeholder,.gym-contact-form textarea::placeholder{color:var(--muted);}
.gym-contact-form input:focus,.gym-contact-form textarea:focus{border-color:var(--secondary);box-shadow:0 0 0 4px rgba(212,175,55,.12);}
.gym-contact-form button{margin-top:8px;padding:17px;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-size:16px;font-weight:950;transition:.35s;}
.gym-contact-form button:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(255,31,31,.28);}
@media(max-width:1100px){.gym-contact-grid{grid-template-columns:1fr;gap:45px;}.gym-contact-card iframe{height:280px;}}
@media(max-width:768px){.gym-contact{padding:80px 22px;}.gym-section-head h2{font-size:34px;}.gym-section-head h3{font-size:16px;}.gym-contact-form{padding:26px;}.gym-contact-form h4{font-size:28px;}.gym-contact-card{padding:22px;}.gym-contact-card iframe{height:240px;}}
@media(max-width:480px){.gym-contact{padding:70px 18px;}.gym-section-head h2{font-size:28px;}.gym-contact-form{padding:22px 18px;border-radius:24px;}.gym-contact-form h4{font-size:24px;}.gym-contact-form input,.gym-contact-form textarea{padding:14px 16px;font-size:14px;}.gym-contact-form button{padding:14px 12px;font-size:14px;}}
      `}</style>
    </>
  );
}
