import { BUSINESS } from "../config/business";

export default function Testimonials() {
  const section = BUSINESS.testimonials;

  return (
    <>
      <section id="testimonials" className="gym-testimonials">
        <div className="gym-section-head">
          <p>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <span />
          <h3>{section.subtitle}</h3>
        </div>

        <div className="gym-testimonial-grid">
          {section.reviews.map((item) => (
            <article className="gym-testimonial-card" key={item.name}>
              <div className="gym-stars">★★★★★</div>

              <p>"{item.text}"</p>

              <div className="gym-client">
                <div>{item.name.charAt(0)}</div>
                <span>{item.name}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
.gym-testimonials{padding:110px 7%;background:linear-gradient(180deg,#101010 0%,var(--bg) 100%);position:relative;overflow:hidden;}
.gym-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;font-weight:950;line-height:1.2;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto;}
.gym-section-head h3{color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;margin:auto;}
.gym-testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.gym-testimonial-card{position:relative;padding:34px;border-radius:30px;background:rgba(255,255,255,.055);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);transition:.4s;overflow:hidden;}
.gym-testimonial-card::before{content:"❝";position:absolute;top:16px;right:20px;font-size:72px;color:rgba(255,255,255,.05);}
.gym-testimonial-card:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(255,31,31,.18);}
.gym-stars{color:#FFD54A;font-size:22px;letter-spacing:4px;margin-bottom:20px;}
.gym-testimonial-card p{color:var(--muted);font-size:16px;line-height:1.9;}
.gym-client{display:flex;align-items:center;gap:16px;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.08);}
.gym-client div{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;color:var(--black);font-size:22px;font-weight:950;}
.gym-client span{color:var(--text);font-size:18px;font-weight:900;}
@media(max-width:1100px){.gym-testimonial-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:768px){.gym-testimonials{padding:80px 22px;}.gym-section-head h2{font-size:34px;}.gym-section-head h3{font-size:16px;}.gym-testimonial-grid{grid-template-columns:1fr;gap:22px;}.gym-testimonial-card{padding:26px;}}
@media(max-width:480px){.gym-section-head h2{font-size:28px;}.gym-stars{font-size:18px;letter-spacing:2px;}.gym-testimonial-card p{font-size:15px;}.gym-client div{width:48px;height:48px;font-size:18px;}}
      `}</style>
    </>
  );
}
