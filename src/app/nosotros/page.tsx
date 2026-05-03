import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nuestra Historia y Equipo | Mimos y Detalles',
  description: 'Conoce al equipo apasionado por crear experiencias memorables. Nuestra filosofía de pasión por el detalle y excelencia operativa.',
};

export default function NosotrosPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">Nuestra Historia</h1>
          <p className="animate-fade-in delay-100">
            Somos un equipo apasionado por crear experiencias memorables. Conectamos emociones a través de detalles únicos y eventos diseñados con el corazón.
          </p>
        </div>
      </section>

      {/* Valores de Marca */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem', textAlign: 'center' }}>Nuestros Valores</h2>
          <div className={styles.grid}>
            <div className={styles.valueCard}>
              <div className={styles.icon}>❤️</div>
              <h3>Pasión por el Detalle</h3>
              <p>Creemos que la magia de cualquier evento o regalo reside en los pequeños detalles que demuestran cuidado y dedicación.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>🎯</div>
              <h3>Excelencia Operativa</h3>
              <p>No solo diseñamos momentos hermosos, los ejecutamos con logística impecable y precisión absoluta.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.icon}>💡</div>
              <h3>Innovación Constante</h3>
              <p>Siempre estamos en la búsqueda de las últimas tendencias, materiales y formatos para sorprender a tus invitados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className={styles.teamSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>El Equipo detrás de la Magia</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>Ana Rodríguez</h3>
              <span className={styles.role}>Directora Creativa</span>
              <p>Experta en diseño de experiencias y decoración floral. Su visión es el alma visual de Mimos y Detalles.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>Carlos Mendoza</h3>
              <span className={styles.role}>Director de Operaciones (B2B)</span>
              <p>Especialista en logística y producción para eventos corporativos. Asegura que todo salga a la perfección.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <h3>Sofía Lora</h3>
              <span className={styles.role}>Coordinadora de Gift Store</span>
              <p>Encargada de curar y personalizar cada paquete para que exprese exactamente lo que quieres decir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>¿Listo para crear algo increíble juntos?</h2>
          <p style={{ margin: '1.5rem 0 2rem', color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Ya sea un regalo para una persona especial o un evento para 500 asistentes, estamos aquí para ti.
          </p>
          <Link href="/contacto" className="btn btn-primary">
            Contactar al Equipo
          </Link>
        </div>
      </section>
    </div>
  );
}
