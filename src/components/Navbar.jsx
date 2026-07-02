import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS, whatsappBookingLink } from "../config/business";
import Logo from "../assets/logo/logo.jpg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#transformations" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`gym-navbar ${scrolled ? "gym-navbar-scrolled" : ""}`}>
        <div className="gym-nav-container">
          <a href="#home" className="gym-logo" onClick={closeMenu}>
            <span className="gym-logo-frame">
              <img src={Logo} alt={BUSINESS.name} className="gym-logo-img" />
            </span>

            <div className="gym-logo-text">
              <h2>{BUSINESS.shortName}</h2>
              <span>{BUSINESS.category}</span>
            </div>
          </a>

          <nav className="gym-nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={whatsappBookingLink("gym membership")} target="_blank" rel="noreferrer" className="gym-join-btn">
            Join Now
          </a>

          <button type="button" className="gym-menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`gym-mobile-menu ${open ? "show" : ""}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a href={whatsappBookingLink("gym membership")} target="_blank" rel="noreferrer" onClick={closeMenu} className="gym-mobile-btn">
            Join Now
          </a>
        </div>
      </header>

      <style>{`
      .gym-navbar{position:fixed;top:0;left:0;width:100%;z-index:1000;padding:14px 4%;background:transparent;transition:.35s ease;box-sizing:border-box;}
.gym-navbar *{box-sizing:border-box;}
.gym-navbar-scrolled{background:rgba(5,5,5,.88);backdrop-filter:blur(20px);box-shadow:0 14px 45px rgba(0,0,0,.55);border-bottom:1px solid rgba(255,255,255,.08);}
.gym-nav-container{width:100%;max-width:1500px;margin:auto;display:flex;align-items:center;justify-content:space-between;gap:20px;}
.gym-logo{display:flex;align-items:center;gap:13px;min-width:max-content;text-decoration:none;}
.gym-logo-frame{width:56px;height:56px;border-radius:18px;padding:3px;background:linear-gradient(135deg,#ff1f1f,#d4af37);box-shadow:0 0 30px rgba(255,31,31,.28);flex:0 0 auto;}
.gym-logo-img{width:100%;height:100%;border-radius:15px;object-fit:cover;background:#000;border:1px solid rgba(255,255,255,.14);}
.gym-logo:hover .gym-logo-frame{transform:scale(1.05) rotate(-2deg);box-shadow:0 0 42px rgba(255,31,31,.42);transition:.35s;}
.gym-logo-text h2{margin:0;color:#fff;font-size:23px;font-weight:950;line-height:1;letter-spacing:.2px;}
.gym-logo-text span{display:block;margin-top:6px;color:#d4af37;font-size:10.5px;text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;}
.gym-nav-links{display:flex;align-items:center;justify-content:center;gap:27px;flex:1;min-width:0;}
.gym-nav-links a{position:relative;color:#e9e9e9;font-size:14px;font-weight:800;text-decoration:none;transition:.3s;white-space:nowrap;}
.gym-nav-links a:hover{color:#d4af37;}
.gym-nav-links a::after{content:"";position:absolute;left:0;bottom:-9px;width:0;height:2px;background:linear-gradient(90deg,#ff1f1f,#d4af37);border-radius:50px;transition:.3s;}
.gym-nav-links a:hover::after{width:100%;}
.gym-join-btn,.gym-mobile-btn{display:inline-flex;align-items:center;justify-content:center;height:47px;padding:0 24px;border-radius:999px;background:linear-gradient(135deg,#ff1f1f,#d4af37);color:#050505;font-size:14px;font-weight:950;text-decoration:none;transition:.35s;box-shadow:0 15px 35px rgba(255,31,31,.25);white-space:nowrap;flex:0 0 auto;}
.gym-join-btn:hover,.gym-mobile-btn:hover{transform:translateY(-3px);box-shadow:0 22px 45px rgba(255,31,31,.35);}
.gym-menu-btn{display:none;width:48px;height:48px;border-radius:15px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;transition:.3s;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.1);}
.gym-menu-btn:hover{background:#ff1f1f;color:#fff;}
.gym-mobile-menu{position:absolute;top:100%;left:0;width:100%;display:flex;flex-direction:column;gap:14px;padding:0 22px;max-height:0;overflow:hidden;background:rgba(5,5,5,.98);backdrop-filter:blur(22px);border-bottom:1px solid rgba(255,255,255,.08);transition:max-height .4s ease,padding .35s ease;}
.gym-mobile-menu.show{max-height:520px;padding:24px 22px;}
.gym-mobile-menu a{color:#fff;text-decoration:none;font-size:16px;font-weight:800;padding:9px 0;transition:.3s;}
.gym-mobile-menu a:hover{color:#d4af37;padding-left:8px;}
@media(max-width:1240px){.gym-navbar{padding:14px 3%;}.gym-nav-links{gap:20px;}.gym-nav-links a{font-size:13.5px;}.gym-join-btn{height:44px;padding:0 18px;font-size:13px;}.gym-logo-frame{width:52px;height:52px;border-radius:17px;}.gym-logo-text h2{font-size:22px;}}
@media(max-width:980px){.gym-nav-links,.gym-join-btn{display:none;}.gym-menu-btn{display:flex;}.gym-nav-container{gap:12px;}}
@media(min-width:981px){.gym-mobile-menu{display:none;}}
@media(max-width:768px){.gym-navbar{padding:12px 18px;}.gym-nav-container{max-width:100%;}.gym-logo-frame{width:49px;height:49px;border-radius:16px;}.gym-logo-img{border-radius:13px;}.gym-logo-text h2{font-size:21px;}.gym-logo-text span{font-size:10px;letter-spacing:.8px;}.gym-menu-btn{width:46px;height:46px;border-radius:14px;}}
@media(max-width:420px){.gym-navbar{padding:12px 16px;}.gym-logo{gap:11px;}.gym-logo-frame{width:46px;height:46px;border-radius:15px;}.gym-logo-text h2{font-size:20px;}.gym-logo-text span{font-size:9.3px;max-width:210px;overflow:hidden;text-overflow:ellipsis;}.gym-menu-btn{width:44px;height:44px;}}
      `}</style>
    </>
  );
}
