import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";

export default function Hero() {
  return (
    <>
      <section id="home" className="gym-hero">
        <div className="gym-hero-bg" />
        <div className="gym-hero-glow glow-one" />
        <div className="gym-hero-glow glow-two" />

        <div className="gym-hero-content">
          <p className="gym-eyebrow">{BUSINESS.hero.badge}</p>

          <h1>
            {BUSINESS.hero.title}
            <span>{BUSINESS.hero.highlight}</span>
          </h1>

          <p className="gym-hero-text">{BUSINESS.hero.subtitle}</p>

          <div className="gym-hero-actions">
            <a href={whatsappBookingLink("gym membership")} target="_blank" rel="noreferrer" className="gym-primary-btn">
              Join Now
            </a>

            <a href={callLink} className="gym-outline-btn">
              Call Gym
            </a>
          </div>

          <div className="gym-hero-stats">
            {BUSINESS.hero.stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.gym-hero{min-height:100vh;padding:150px 7% 90px;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;background:#050505;box-sizing:border-box;}
.gym-hero *{box-sizing:border-box;}
.gym-hero-bg{position:absolute;inset:0;background:linear-gradient(rgba(5,5,5,.56),rgba(5,5,5,.94)),url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85") center/cover no-repeat;transform:scale(1.04);}
.gym-hero-glow{position:absolute;width:380px;height:380px;border-radius:50%;filter:blur(90px);opacity:.35;pointer-events:none;}
.glow-one{top:10%;left:-110px;background:#ff1f1f;}
.glow-two{right:-130px;bottom:8%;background:#d4af37;opacity:.22;}
.gym-hero-content{position:relative;z-index:2;width:100%;max-width:1080px;margin:auto;animation:gymHeroFade .9s ease both;}
.gym-eyebrow{display:inline-block;margin-bottom:22px;color:#d4af37;font-size:14px;font-weight:900;letter-spacing:3px;text-transform:uppercase;}
.gym-hero h1{margin:0;color:#fff;font-size:clamp(42px,7.5vw,98px);line-height:1.02;font-weight:950;letter-spacing:1px;text-transform:uppercase;text-shadow:0 22px 65px rgba(0,0,0,.65);}
.gym-hero h1 span{display:block;margin-top:10px;background:linear-gradient(135deg,#ff1f1f,#d4af37);-webkit-background-clip:text;background-clip:text;color:transparent;}
.gym-hero-text{max-width:850px;margin:28px auto 38px;color:#e6e6e6;font-size:19px;line-height:1.85;}
.gym-hero-actions{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;margin-bottom:50px;}
.gym-primary-btn,.gym-outline-btn{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 32px;border-radius:999px;font-size:16px;font-weight:950;text-decoration:none;transition:.35s;box-sizing:border-box;}
.gym-primary-btn{background:linear-gradient(135deg,#ff1f1f,#d4af37);color:#050505;box-shadow:0 20px 42px rgba(255,31,31,.28);}
.gym-primary-btn:hover{transform:translateY(-4px);box-shadow:0 28px 55px rgba(255,31,31,.42);}
.gym-outline-btn{border:1px solid rgba(212,175,55,.65);color:#fff;background:rgba(255,255,255,.06);backdrop-filter:blur(14px);}
.gym-outline-btn:hover{transform:translateY(-4px);background:#d4af37;color:#050505;}
.gym-hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:800px;margin:auto;}
.gym-hero-stats div{padding:21px;border-radius:24px;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.13);backdrop-filter:blur(18px);box-shadow:0 18px 45px rgba(0,0,0,.25);}
.gym-hero-stats strong{display:block;color:#d4af37;font-size:31px;font-weight:950;}
.gym-hero-stats span{display:block;margin-top:6px;color:#d8d8d8;font-size:14px;font-weight:700;}
@keyframes gymHeroFade{from{opacity:0;transform:translateY(35px);}to{opacity:1;transform:translateY(0);}}
@media(max-width:768px){.gym-hero{min-height:auto;padding:150px 22px 72px;align-items:flex-start;}.gym-hero h1{font-size:42px;line-height:1.08;}.gym-eyebrow{font-size:12px;letter-spacing:2px;line-height:1.5;}.gym-hero-text{font-size:16px;line-height:1.75;margin-bottom:34px;}.gym-hero-actions{flex-direction:column;gap:15px;margin-bottom:34px;width:100%;}.gym-primary-btn,.gym-outline-btn{width:min(100%,360px);min-height:48px;font-size:15px;}.gym-hero-stats{grid-template-columns:1fr;gap:14px;width:100%;max-width:360px;}.gym-hero-stats div{padding:18px 16px;}}
@media(max-width:480px){.gym-hero{padding:142px 18px 60px;}.gym-hero h1{font-size:34px;}.gym-hero-text{font-size:15px;}.gym-primary-btn,.gym-outline-btn{max-width:320px;min-height:46px;font-size:14px;}.gym-hero-stats{max-width:320px;}.gym-hero-stats strong{font-size:26px;}}
      `}</style>
    </>
  );
}
