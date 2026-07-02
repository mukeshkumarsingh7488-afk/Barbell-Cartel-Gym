import { BUSINESS, callLink, mapLink } from "../config/business";
import Logo from "../assets/logo/logo.jpg";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = {
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  youtube: <FaYoutube />,
  twitter: <FaXTwitter />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="gym-footer">
        <div className="gym-footer-wrap">
          <div className="gym-footer-grid">
            <div className="gym-footer-brand">
              <div className="gym-footer-head">
                <img src={Logo} alt={BUSINESS.name} />
                <div>
                  <h3>{BUSINESS.name}</h3>
                  <span>{BUSINESS.category}</span>
                </div>
              </div>

              <p>{BUSINESS.footer.text}</p>

              <div className="gym-footer-social">
                {Object.entries(BUSINESS.social || {}).map(([name, url]) =>
                  url ? (
                    <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}>
                      {socialIcons[name]}
                    </a>
                  ) : null
                )}
              </div>
            </div>

            <div className="gym-footer-col">
              <h4>Quick Links</h4>
              {BUSINESS.nav.items.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="gym-footer-col">
              <h4>{BUSINESS.programsSection.eyebrow}</h4>
              {BUSINESS.programs.slice(0, 6).map((item) => (
                <a key={item.title} href="#programs">
                  {item.title}
                </a>
              ))}
            </div>

            <div className="gym-footer-col">
              <h4>{BUSINESS.contact.eyebrow}</h4>
              <a href={mapLink} target="_blank" rel="noreferrer">
                {BUSINESS.address}
              </a>
              <a href={callLink}>+91 {BUSINESS.phone}</a>
              <p>{BUSINESS.openingHours}</p>
            </div>
          </div>

          <div className="gym-footer-bottom">
            <p>
              © {year} {BUSINESS.name}. {BUSINESS.footer.copyright}
            </p>
            <p>
              Designed & Developed by <strong>BR30 Web Services</strong>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
.gym-footer{padding:52px 7% 16px;background:var(--bg);border-top:1px solid rgba(212,175,55,.18);}
.gym-footer-wrap{max-width:1500px;margin:auto;}
.gym-footer-grid{display:grid;grid-template-columns:1.45fr 1fr 1fr 1.45fr;gap:55px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,.08);}
.gym-footer-head{display:flex;align-items:center;gap:14px;}
.gym-footer-head img{width:58px;height:58px;object-fit:cover;border-radius:18px;border:2px solid rgba(255,255,255,.14);}
.gym-footer-head h3{color:var(--text);font-size:24px;font-weight:950;line-height:1.1;}
.gym-footer-head span{display:block;margin-top:5px;color:var(--secondary);font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;}
.gym-footer-brand p{max-width:380px;margin-top:22px;color:var(--muted);font-size:16px;line-height:1.75;}
.gym-footer-social{display:flex;gap:12px;margin-top:22px;flex-wrap:wrap;}
.gym-footer-social a{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(212,175,55,.25);color:var(--secondary);font-size:21px;transition:.35s;}
.gym-footer-social a:hover{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);transform:translateY(-4px);}
.gym-footer-col h4{margin-bottom:18px;color:var(--secondary);font-size:20px;font-weight:950;}
.gym-footer-col a,.gym-footer-col p{display:block;margin-bottom:13px;color:var(--muted);font-size:15px;line-height:1.7;transition:.3s;}
.gym-footer-col a:hover{color:var(--secondary);transform:translateX(5px);}
.gym-footer-bottom{padding-top:14px;display:flex;align-items:center;justify-content:space-between;gap:18px;}
.gym-footer-bottom p{color:#9f9f9f;font-size:13px;line-height:1.6;}
.gym-footer-bottom strong{color:var(--secondary);}
@media(max-width:1180px){.gym-footer-grid{grid-template-columns:repeat(2,1fr);gap:40px;}}
@media(max-width:768px){.gym-footer{padding:42px 22px 14px;}.gym-footer-grid{grid-template-columns:1fr 1fr;gap:28px 18px;}.gym-footer-brand,.gym-footer-col:last-child{grid-column:1/-1;}.gym-footer-head img{width:52px;height:52px;}.gym-footer-head h3{font-size:21px;}.gym-footer-brand p{font-size:15px;}.gym-footer-social a{width:42px;height:42px;font-size:19px;}.gym-footer-col h4{font-size:18px;}.gym-footer-col a,.gym-footer-col p{font-size:14px;}.gym-footer-bottom{flex-direction:column;text-align:center;gap:4px;}}
@media(max-width:480px){.gym-footer-grid{grid-template-columns:1fr;}.gym-footer-brand,.gym-footer-col:last-child{grid-column:auto;}.gym-footer-head h3{font-size:20px;}}
@media(max-width:480px){.gym-footer-grid{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:24px 16px!important;}.gym-footer-brand{grid-column:1/-1!important;}.gym-footer-col:nth-child(2),.gym-footer-col:nth-child(3){grid-column:auto!important;}.gym-footer-col:last-child{grid-column:1/-1!important;margin-top:8px!important;}.gym-footer-head h3{font-size:20px!important;}.gym-footer-brand p{font-size:14px!important;}.gym-footer-col h4{font-size:17px!important;margin-bottom:12px!important;}.gym-footer-col a,.gym-footer-col p{font-size:14px!important;line-height:1.6!important;margin-bottom:10px!important;}}
      `}</style>
    </>
  );
}
