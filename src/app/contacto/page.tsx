import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contacto | Mimos y Detalles',
  description: 'Habla con nuestros asesores para cotizar tu próximo evento corporativo, celebración social o regalo corporativo.',
};

export default function ContactoPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
      <section style={{ backgroundColor: 'var(--surface)', padding: '4rem 0', flexGrow: 1 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h1 className="animate-fade-in" style={{ fontSize: '2.5rem' }}>Hablemos sobre tu próximo evento</h1>
            <p className="animate-fade-in delay-100" style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Llena el formulario o contáctanos directamente. Nuestro equipo de asesores está listo para hacer realidad tus ideas.
            </p>
            
            <div className="animate-fade-in delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>📍 Ubicación</strong>
                <span>Oficina Principal, Ciudad</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>📞 Teléfono / WhatsApp</strong>
                <span>+1 234 567 890</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>✉️ Correo</strong>
                <span>contacto@mimosydetalles.com</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in delay-300" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Déjanos tus datos</h2>
            <LeadForm origen="Pagina Contacto" />
          </div>

        </div>
      </section>
    </div>
  );
}
