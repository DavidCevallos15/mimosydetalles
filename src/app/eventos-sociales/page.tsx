import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Eventos Sociales y Bodas | Mimos y Detalles',
  description: 'Diseñamos bodas, cumpleaños y celebraciones únicas. El escenario perfecto para tus emociones.',
};

export default function EventosSocialesPage() {
  return (
    <div className={styles.page}>
      {/* Hero Emocional */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">El Escenario Perfecto Para Tus Emociones</h1>
          <p className="animate-fade-in delay-100">
            Diseñamos eventos sociales únicos donde cada detalle cuenta una historia. Bodas, cumpleaños y celebraciones que recordarás para siempre.
          </p>
          <div className="animate-fade-in delay-200">
            <a href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20organizar%20un%20evento%20social..." className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Empieza a planear tu evento
            </a>
          </div>
        </div>
      </section>

      {/* Galería de Eventos */}
      <section className={styles.gallery}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem', textAlign: 'center' }}>Galería de Momentos</h2>
          <div className={styles.masonry}>
            <div className={`${styles.galleryItem} ${styles.tall}`}>Bodas</div>
            <div className={styles.galleryItem}>Cumpleaños</div>
            <div className={`${styles.galleryItem} ${styles.wide}`}>Aniversarios</div>
            <div className={styles.galleryItem}>Bautizos</div>
            <div className={`${styles.galleryItem} ${styles.tall}`}>Baby Showers</div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className={styles.testimonials}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Lo que dicen nuestros clientes</h2>
          <div className={styles.testimonyGrid}>
            <div className={styles.testimonyCard}>
              <p className={styles.quote}>"Hicieron de nuestra boda un sueño hecho realidad. Todo fue perfecto y sin estrés."</p>
              <div className={styles.author}>- María y Carlos</div>
            </div>
            <div className={styles.testimonyCard}>
              <p className={styles.quote}>"El mejor cumpleaños de mi vida. Los detalles y la decoración superaron mis expectativas."</p>
              <div className={styles.author}>- Andrea G.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
