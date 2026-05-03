'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [message, setMessage] = useState('Hola, me gustaría recibir más información.');

  useEffect(() => {
    if (pathname.includes('/empresas')) {
      setMessage('Hola, me interesa una cotización para un evento corporativo...');
    } else if (pathname.includes('/eventos-sociales')) {
      setMessage('Hola, me interesa organizar un evento social...');
    } else if (pathname.includes('/gift-store')) {
      setMessage('Hola, me interesa un regalo para...');
    } else {
      setMessage('Hola, me gustaría recibir más información.');
    }
  }, [pathname]);

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.95.56 3.78 1.52 5.33L2.01 22l4.82-1.46c1.51.89 3.27 1.41 5.16 1.41 5.52 0 10-4.48 10-10.01S17.53 2.01 12.01 2.01zm0 18.01c-1.63 0-3.15-.42-4.48-1.15l-3.23.98.98-3.17c-.82-1.39-1.28-3.01-1.28-4.73 0-4.42 3.59-8.02 8.01-8.02 4.42 0 8.01 3.6 8.01 8.02s-3.59 8.07-8.01 8.07zm4.27-5.83c-.23-.12-1.38-.68-1.59-.76-.21-.08-.37-.12-.52.12-.15.23-.61.76-.75.92-.14.15-.28.17-.52.05-.23-.12-1-.37-1.89-1.17-.69-.62-1.16-1.39-1.3-1.62-.14-.23-.02-.35.1-.47.11-.11.23-.27.35-.4.12-.14.16-.23.23-.39.08-.16.04-.3-.02-.42-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3s-.84.82-.84 2.01c0 1.19.86 2.34.98 2.5.12.16 1.7 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.38-.56 1.57-1.1.19-.54.19-1 .13-1.1-.06-.11-.22-.17-.45-.29z"/>
      </svg>
    </a>
  );
}
