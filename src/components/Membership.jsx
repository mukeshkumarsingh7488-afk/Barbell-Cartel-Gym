import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";

export default function Membership() {
  const section = BUSINESS.membership;

  return (
    <>
      <section id="membership" className="gym-membership">
        <div className="gym-section-head">
          <p>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <span />
          <h3>{section.text}</h3>
        </div>

        <div className="gym-plan-grid">
          {section.plans.map((plan) => (
            <article className="gym-plan-card" key={plan.name}>
              <h4>{plan.name}</h4>
              <strong>{plan.price}</strong>

              <div className="gym-plan-features">
                {plan.features.map((feature) => (
                  <p key={feature}>✓ {feature}</p>
                ))}
              </div>

              <a href={whatsappBookingLink(plan.name)} target="_blank" rel="noreferrer">
                {section.primaryButton}
              </a>
            </article>
          ))}
        </div>

        <div className="gym-membership-cta">
          <h3>{section.title}</h3>
          <p>{section.text}</p>

          <div>
            <a href={whatsappBookingLink("membership plan")} target="_blank" rel="noreferrer">
              {section.primaryButton}
            </a>
            <a href={callLink}>{section.secondaryButton}</a>
          </div>
        </div>
      </section>

      <style>{`
.gym-membership{padding:110px 7%;background:linear-gradient(180deg,#101010 0%,var(--bg) 100%);position:relative;overflow:hidden;}
.gym-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}
.gym-section-head h3{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}
.gym-plan-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.gym-plan-card{padding:34px 30px;border-radius:30px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);transition:.4s;}
.gym-plan-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(255,31,31,.16);}
.gym-plan-card h4{color:var(--text);font-size:26px;font-weight:950;margin-bottom:14px;}
.gym-plan-card strong{display:block;color:var(--secondary);font-size:34px;font-weight:950;margin-bottom:24px;}
.gym-plan-features{display:grid;gap:12px;margin-bottom:28px;}
.gym-plan-features p{color:var(--muted);font-size:15px;font-weight:700;}
.gym-plan-card a{display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 22px;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);font-size:14px;font-weight:950;transition:.35s;}
.gym-plan-card a:hover{transform:translateY(-3px);box-shadow:0 18px 35px rgba(255,31,31,.28);}
.gym-membership-cta{margin-top:62px;padding:40px 34px;border-radius:32px;background:linear-gradient(135deg,rgba(255,31,31,.14),rgba(212,175,55,.1));border:1px solid rgba(212,175,55,.25);text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.35);}
.gym-membership-cta h3{color:var(--text);font-size:36px;font-weight:950;margin-bottom:14px;}
.gym-membership-cta p{max-width:720px;margin:0 auto 28px;color:var(--muted);font-size:16px;line-height:1.8;}
.gym-membership-cta div{display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;}
.gym-membership-cta a{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 24px;border-radius:999px;font-size:14px;font-weight:950;transition:.35s;}
.gym-membership-cta a:first-child{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);}
.gym-membership-cta a:last-child{border:1px solid rgba(212,175,55,.45);color:var(--secondary);background:rgba(255,255,255,.06);}
.gym-membership-cta a:hover{transform:translateY(-3px);}
@media(max-width:1100px){.gym-plan-grid{grid-template-columns:1fr;}}
@media(max-width:768px){.gym-membership{padding:80px 22px;}.gym-section-head h2{font-size:34px;}.gym-section-head h3{font-size:16px;}.gym-plan-card{padding:28px 24px;}.gym-membership-cta{margin-top:46px;padding:30px 20px;}.gym-membership-cta h3{font-size:26px;}}
@media(max-width:480px){.gym-section-head h2{font-size:28px;}.gym-plan-card h4{font-size:23px;}.gym-plan-card strong{font-size:28px;}.gym-membership-cta div{flex-direction:column;}.gym-membership-cta a{width:100%;}}
      `}</style>
    </>
  );
}
