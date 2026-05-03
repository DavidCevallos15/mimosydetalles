import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">Experiencias y Detalles que Dejan Huella</h1>
          <p className="animate-fade-in delay-100">
            Somos especialistas en crear momentos inolvidables. Desde eventos corporativos de alto impacto hasta regalos personalizados que conectan emociones.
          </p>
          <div className={`${styles.heroActions} animate-fade-in delay-200`}>
            <a href="https://wa.me/1234567890?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n." className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Habla con un asesor
            </a>
            <Link href="#rutas" className="btn btn-outline">
              Explora nuestros servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Selector de Audiencia */}
      <section id="rutas" className={styles.routes}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Qué estás buscando hoy?</h2>
          <div className={styles.grid}>
            
            <Link href="/empresas" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                {/* Placeholder for image */}
                <div className={styles.cardImageB2b}></div>
              </div>
              <div className={styles.cardContent}>
                <h3>Eventos Corporativos</h3>
                <p>Soluciones estratégicas, lanzamientos, ferias y activaciones con resultados medibles.</p>
                <span className={styles.cardAction}>Cotizar evento &rarr;</span>
              </div>
            </Link>

            <Link href="/eventos-sociales" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImageSocial}></div>
              </div>
              <div className={styles.cardContent}>
                <h3>Eventos Sociales</h3>
                <p>Bodas, cumpleaños y celebraciones. Creamos el ambiente perfecto para tus emociones.</p>
                <span className={styles.cardAction}>Inspirarme &rarr;</span>
              </div>
            </Link>

            <Link href="/gift-store" className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImageGift}></div>
              </div>
              <div className={styles.cardContent}>
                <h3>Gift Store</h3>
                <p>Regalos únicos y personalizados para sorprender a esa persona especial.</p>
                <span className={styles.cardAction}>Ver catálogo &rarr;</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className={styles.differentiators}>
        <div className="container">
          <div className={styles.diffGrid}>
            <div className={styles.diffItem}>
              <div className={styles.diffIcon}>🌟</div>
              <h4>Producción Integral</h4>
              <p>Nos encargamos de todo de principio a fin para que tú solo disfrutes.</p>
            </div>
            <div className={styles.diffItem}>
              <div className={styles.diffIcon}>🎨</div>
              <h4>Talento Creativo</h4>
              <p>Diseños exclusivos y propuestas personalizadas que reflejan tu esencia.</p>
            </div>
            <div className={styles.diffItem}>
              <div className={styles.diffIcon}>⚡</div>
              <h4>Rapidez y Logística</h4>
              <p>Entregas puntuales y capacidad operativa para grandes y pequeños volúmenes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className={styles.workflow}>
        <div className="container">
          <h2 className={styles.sectionTitle}>¿Cómo trabajamos?</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4>Brief</h4>
              <p>Cuéntanos tu idea, necesidades y presupuesto.</p>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4>Propuesta</h4>
              <p>Te enviamos una cotización y diseño personalizado.</p>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4>Confirmación</h4>
              <p>Afinamos detalles y cerramos el plan de acción.</p>
            </div>
            <div className={styles.stepLine}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h4>Entrega</h4>
              <p>Ejecutamos el evento o entregamos el regalo perfecto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
