import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Portafolio de Eventos | Mimos y Detalles',
  description: 'Conoce nuestra galería de proyectos, casos de éxito corporativos y eventos sociales inolvidables.',
};

export default async function PortafolioPage() {
  const supabase = await createClient();
  const { data: portafolio, error } = await supabase
    .from('portafolio')
    .select('*, categorias(nombre)')
    .order('fecha_evento', { ascending: false });

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">Nuestro Portafolio</h1>
          <p className="animate-fade-in delay-100">
            Conoce los eventos y experiencias que hemos hecho realidad.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.grid}>
            {error ? (
              <p>Error cargando el portafolio.</p>
            ) : portafolio && portafolio.length > 0 ? (
              portafolio.map((item) => (
                <div key={item.id} className={styles.portfolioCard}>
                  <div className={styles.portfolioImage} style={item.galeria_imagenes && item.galeria_imagenes.length > 0 ? { backgroundImage: `url(${item.galeria_imagenes[0]})` } : {}}>
                    {(!item.galeria_imagenes || item.galeria_imagenes.length === 0) && '📸'}
                  </div>
                  <div className={styles.portfolioInfo}>
                    <span className={styles.category}>{(item.categorias as any)?.nombre || 'Evento'}</span>
                    <h3>{item.titulo}</h3>
                    <p>{item.descripcion}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>El portafolio se actualizará pronto.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
