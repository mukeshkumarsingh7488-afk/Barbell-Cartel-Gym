import { PhoneCall } from "lucide-react";
import { BUSINESS, callLink, whatsappBookingLink } from "../config/business";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      <div className="gym-floating-actions">
        <a href={whatsappBookingLink("gym membership")} target="_blank" rel="noreferrer" className="gym-floating-btn gym-whatsapp" aria-label={`${BUSINESS.floatingButtons.whatsappText} ${BUSINESS.name}`}>
          <FaWhatsapp size={28} />
        </a>

        <a href={callLink} className="gym-floating-btn gym-call" aria-label={`${BUSINESS.floatingButtons.callText} ${BUSINESS.name}`}>
          <PhoneCall size={24} />
        </a>
      </div>

      <style>{`
.gym-floating-actions{position:fixed;right:24px;bottom:24px;display:flex;flex-direction:column;gap:14px;z-index:9999;}
.gym-floating-btn{width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff;box-shadow:0 18px 40px rgba(0,0,0,.4);transition:.35s;position:relative;overflow:hidden;font-size:28px;font-weight:950;}
.gym-floating-btn:hover{transform:translateY(-6px) scale(1.08);}
.gym-whatsapp{background:linear-gradient(135deg,#25D366,#128C7E);animation:gymPulse 2.4s infinite;}
.gym-call{background:linear-gradient(135deg,var(--primary),var(--secondary));color:var(--black);}
.gym-floating-btn::before{content:"";position:absolute;inset:0;background:rgba(255,255,255,.18);opacity:0;transition:.35s;}
.gym-floating-btn:hover::before{opacity:1;}
@keyframes gymPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55);}70%{box-shadow:0 0 0 18px rgba(37,211,102,0);}100%{box-shadow:0 0 0 0 rgba(37,211,102,0);}}
@media(max-width:768px){.gym-floating-actions{right:18px;bottom:18px;gap:12px;}.gym-floating-btn{width:54px;height:54px;font-size:25px;}}
@media(max-width:480px){.gym-floating-btn{width:50px;height:50px;font-size:23px;}}
      `}</style>
    </>
  );
}
