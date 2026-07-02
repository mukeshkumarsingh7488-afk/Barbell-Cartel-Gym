import { BUSINESS, whatsappBookingLink } from "../config/business";

export default function Transformations() {
  const section = BUSINESS.transformations;

  return (
    <>
      <section id="transformations" className="gym-transform">
        <div className="gym-section-head">
          <p>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <span />
          <h3>{section.text}</h3>
        </div>

        <div className="gym-transform-grid">
          {section.cards.map((item, index) => (
            <article className="gym-transform-card" key={item.title}>
              <strong>0{index + 1}</strong>
              <h4>{item.title}</h4>
              <p>{item.text}</p>

              <a href={whatsappBookingLink(item.title)} target="_blank" rel="noreferrer">
                {BUSINESS.membership.primaryButton}
              </a>
            </article>
          ))}
        </div>
      </section>

      <style>{`
.gym-transform{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#101010 100%);position:relative;overflow:hidden;}
.gym-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}
.gym-section-head h3{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}
.gym-transform-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;}
.gym-transform-card{position:relative;padding:34px 28px;border-radius:28px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);overflow:hidden;transition:.4s;}
.gym-transform-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(212,175,55,.16),transparent 45%);pointer-events:none;}
.gym-transform-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(212,175,55,.14);}
.gym-transform-card strong{position:relative;z-index:1;display:block;color:var(--secondary);font-size:42px;font-weight:950;line-height:1;margin-bottom:24px;}
.gym-transform-card h4{position:relative;z-index:1;color:var(--text);font-size:24px;font-weight:950;margin-bottom:14px;}
.gym-transform-card p{position:relative;z-index:1;color:var(--muted);font-size:15px;line-height:1.8;margin-bottom:26px;}
.gym-transform-card a{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 20px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(212,175,55,.35);color:var(--secondary);font-size:14px;font-weight:950;transition:.35s;}
.gym-transform-card a:hover{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);transform:translateY(-3px);}
@media(max-width:1200px){.gym-transform-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:768px){.gym-transform{padding:80px 22px;}.gym-section-head{margin-bottom:45px;}.gym-section-head h2{font-size:34px;}.gym-section-head h3{font-size:16px;}.gym-transform-grid{grid-template-columns:1fr;gap:22px;}.gym-transform-card{padding:28px 24px;}}
@media(max-width:480px){.gym-section-head h2{font-size:28px;}.gym-transform-card h4{font-size:22px;}.gym-transform-card strong{font-size:36px;}}
      `}</style>
    </>
  );
}
