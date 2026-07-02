import { BUSINESS, whatsappBookingLink } from "../config/business";

export default function Programs() {
  return (
    <>
      <section id="programs" className="gym-programs">
        <div className="gym-section-head">
          <p>{BUSINESS.programsSection.eyebrow}</p>
          <h2>{BUSINESS.programsSection.title}</h2>
          <span />
          <h3>{BUSINESS.programsSection.text}</h3>
        </div>

        <div className="gym-program-grid">
          {BUSINESS.programs.map((item) => (
            <article className="gym-program-card" key={item.title}>
              <div className="gym-program-number">0{BUSINESS.programs.indexOf(item) + 1}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>

              <a href={whatsappBookingLink(item.title)} target="_blank" rel="noreferrer">
                {BUSINESS.hero.primaryButton}
              </a>
            </article>
          ))}
        </div>
      </section>

      <style>{`
.gym-programs{padding:110px 7%;background:linear-gradient(180deg,#101010 0%,var(--bg) 100%);position:relative;overflow:hidden;}
.gym-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}
.gym-section-head h3{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}
.gym-program-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.gym-program-card{position:relative;padding:34px 30px;border-radius:28px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);overflow:hidden;transition:.4s;}
.gym-program-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top right,rgba(255,31,31,.18),transparent 42%);opacity:.75;pointer-events:none;}
.gym-program-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(255,31,31,.18);}
.gym-program-number{position:relative;z-index:1;width:56px;height:56px;border-radius:18px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:950;margin-bottom:26px;}
.gym-program-card h4{position:relative;z-index:1;color:var(--text);font-size:25px;font-weight:950;margin-bottom:14px;}
.gym-program-card p{position:relative;z-index:1;color:var(--muted);font-size:15px;line-height:1.8;margin-bottom:26px;}
.gym-program-card a{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 20px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(212,175,55,.35);color:var(--secondary);font-size:14px;font-weight:950;transition:.35s;}
.gym-program-card a:hover{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);transform:translateY(-3px);}
@media(max-width:1100px){.gym-program-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:768px){.gym-programs{padding:80px 22px;}.gym-section-head{margin-bottom:45px;}.gym-section-head h2{font-size:34px;}.gym-section-head h3{font-size:16px;}.gym-program-grid{grid-template-columns:1fr;gap:22px;}.gym-program-card{padding:28px 24px;}}
@media(max-width:480px){.gym-section-head h2{font-size:28px;}.gym-program-card h4{font-size:22px;}}
      `}</style>
    </>
  );
}
