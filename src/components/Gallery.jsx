import { BUSINESS } from "../config/business";

export default function Gallery() {
  const section = BUSINESS.gallery;

  return (
    <>
      <section id="gallery" className="gym-gallery">
        <div className="gym-section-head">
          <p>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <span />
          <h3>{section.text}</h3>
        </div>

        <div className="gym-gallery-grid">
          {section.images.map((image, index) => (
            <div className="gym-gallery-item" key={image}>
              <img src={image} alt={`${BUSINESS.name} Gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <style>{`
.gym-gallery{padding:110px 7%;background:linear-gradient(180deg,var(--bg) 0%,#101010 100%);position:relative;overflow:hidden;}
.gym-section-head{text-align:center;max-width:920px;margin:0 auto 65px;}
.gym-section-head p{color:var(--secondary);text-transform:uppercase;letter-spacing:3px;font-size:14px;font-weight:950;}
.gym-section-head h2{margin-top:18px;color:var(--text);font-size:48px;line-height:1.2;font-weight:950;}
.gym-section-head span{display:block;width:90px;height:4px;background:linear-gradient(90deg,var(--primary),var(--secondary));border-radius:999px;margin:22px auto 0;}
.gym-section-head h3{margin:24px auto 0;color:var(--muted);font-size:18px;font-weight:500;line-height:1.8;max-width:760px;}
.gym-gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.gym-gallery-item{position:relative;border-radius:28px;overflow:hidden;background:var(--card);border:1px solid var(--border);box-shadow:0 24px 55px rgba(0,0,0,.35);transition:.45s;}
.gym-gallery-item:nth-child(1){grid-column:span 2;grid-row:span 2;}
.gym-gallery-item:nth-child(4){grid-column:span 2;}
.gym-gallery-item img{width:100%;height:100%;min-height:280px;object-fit:cover;transition:transform .75s ease,filter .4s ease;}
.gym-gallery-item::before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.62),transparent 58%);opacity:0;transition:.4s;z-index:1;}
.gym-gallery-item::after{content:"";position:absolute;left:22px;bottom:22px;width:55px;height:4px;border-radius:999px;background:linear-gradient(90deg,var(--primary),var(--secondary));opacity:0;transform:translateY(18px);transition:.4s;z-index:2;}
.gym-gallery-item:hover{transform:translateY(-10px);border-color:var(--secondary);box-shadow:0 32px 70px rgba(212,175,55,.14);}
.gym-gallery-item:hover img{transform:scale(1.12);filter:brightness(.88);}
.gym-gallery-item:hover::before,.gym-gallery-item:hover::after{opacity:1;transform:translateY(0);}
@media(max-width:1200px){.gym-gallery-grid{grid-template-columns:repeat(3,1fr);}.gym-gallery-item:nth-child(1),.gym-gallery-item:nth-child(4){grid-column:span 1;grid-row:span 1;}}
@media(max-width:768px){.gym-gallery{padding:80px 22px;}.gym-section-head h2{font-size:34px;}.gym-section-head h3{font-size:16px;}.gym-gallery-grid{grid-template-columns:repeat(2,1fr);gap:16px;}.gym-gallery-item img{min-height:220px;}}
@media(max-width:480px){.gym-section-head h2{font-size:28px;}.gym-gallery-grid{grid-template-columns:1fr;}.gym-gallery-item img{min-height:260px;}.gym-gallery-item{border-radius:22px;}}
      `}</style>
    </>
  );
}
