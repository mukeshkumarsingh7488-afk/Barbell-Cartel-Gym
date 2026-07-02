import { BUSINESS } from "../config/business";

export default function About() {
  const about = BUSINESS.about;

  return (
    <>
      <section id="about" className="gym-about">
        <div className="gym-section-head">
          <p>{about.eyebrow}</p>
          <h2>{about.title}</h2>
          <span />
        </div>

        <div className="gym-about-grid">
          <div className="gym-about-image">
            <img src={BUSINESS.images.about} alt={BUSINESS.name} />

            <div className="gym-rating-card">
              <strong>{BUSINESS.rating}★</strong>
              <p>{BUSINESS.totalReviews} Google Reviews</p>
            </div>
          </div>

          <div className="gym-about-content">
            <p className="gym-eyebrow">{about.subtitle}</p>
            <h3>{about.title}</h3>

            <p>{about.text}</p>
            <p>{about.secondText}</p>

            <div className="gym-highlight-list">
              {about.highlights.map((item) => (
                <div className="gym-highlight-card" key={item.title}>
                  <div className="gym-check">✓</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="gym-about-address">
              <strong>{about.addressTitle}</strong>
              <p>{BUSINESS.address}</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.gym-about{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#101010 100%);position:relative;overflow:hidden;}
.gym-section-head{text-align:center;margin-bottom:70px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:900;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}
.gym-about-grid{display:grid;grid-template-columns:520px 1fr;gap:80px;align-items:center;}
.gym-about-image{position:relative;}
.gym-about-image img{width:100%;height:650px;object-fit:cover;border-radius:30px;box-shadow:0 35px 75px rgba(0,0,0,.55);}
.gym-rating-card{position:absolute;left:30px;bottom:30px;padding:18px 24px;border-radius:24px;background:rgba(255,255,255,.1);backdrop-filter:blur(18px);border:1px solid var(--border);}
.gym-rating-card strong{display:block;color:var(--secondary);font-size:38px;font-weight:950;}
.gym-rating-card p{margin-top:8px;color:var(--text);font-size:14px;font-weight:800;}
.gym-eyebrow{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:900;}
.gym-about-content h3{margin:18px 0 28px;color:var(--text);font-size:46px;line-height:1.18;font-weight:950;}
.gym-about-content>p{margin-bottom:20px;color:var(--muted);font-size:17px;line-height:1.9;}
.gym-highlight-list{display:grid;gap:18px;margin-top:40px;}
.gym-highlight-card{display:flex;gap:18px;padding:22px;border-radius:24px;background:rgba(255,255,255,.055);border:1px solid var(--border);transition:.35s;}
.gym-highlight-card:hover{transform:translateY(-6px);border-color:var(--secondary);background:rgba(255,255,255,.08);}
.gym-check{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:950;flex-shrink:0;}
.gym-highlight-card h4{margin-bottom:8px;color:var(--text);font-size:20px;font-weight:950;}
.gym-highlight-card p{color:var(--muted);font-size:15px;line-height:1.7;}
.gym-about-address{margin-top:40px;padding:28px;border-radius:26px;background:linear-gradient(135deg,rgba(255,31,31,.13),rgba(212,175,55,.1));border:1px solid rgba(212,175,55,.25);}
.gym-about-address strong{display:block;margin-bottom:12px;color:var(--secondary);font-size:18px;font-weight:950;}
.gym-about-address p{color:var(--text);line-height:1.8;}
@media(max-width:1100px){.gym-about-grid{grid-template-columns:1fr;gap:50px;}.gym-about-image img{height:520px;}}
@media(max-width:768px){.gym-about{padding:80px 22px;}.gym-section-head{margin-bottom:45px;}.gym-section-head h2{font-size:34px;}.gym-about-content h3{font-size:32px;}.gym-about-image img{height:420px;}.gym-rating-card{left:18px;right:18px;bottom:18px;}.gym-highlight-card{padding:18px;}}
@media(max-width:480px){.gym-about-image img{height:340px;}.gym-about-content h3{font-size:28px;}.gym-section-head h2{font-size:28px;}.gym-check{width:44px;height:44px;font-size:18px;}}
      `}</style>
    </>
  );
}
