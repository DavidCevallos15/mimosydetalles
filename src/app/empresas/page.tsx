import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Eventos Corporativos B2B | Mimos y Detalles',
  description: 'Soluciones estratégicas, lanzamientos de producto, ferias y activaciones con resultados medibles para tu empresa.',
};

export default function EmpresasPage() {
  return (
    <div className={styles.page}>
      {/* Hero B2B */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">Eventos Corporativos de Alto Nivel</h1>
          <p className="animate-fade-in delay-100">
            Diseñamos y ejecutamos eventos corporativos enfocados en resultados, KPIs y una logística impecable. Deja tu marca en la mente de tus clientes y colaboradores.
          </p>
          <div className="animate-fade-in delay-200">
            <a href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20una%20cotizaci%C3%B3n%20para%20un%20evento%20corporativo..." className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Solicitar Cotización B2B
            </a>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className={styles.useCases}>
        <div className="container">
          <h2 className="section-title">Casos de Uso</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>🚀</div>
              <h3>Lanzamientos de Producto</h3>
              <p>Activaciones memorables para introducir nuevos productos al mercado con el máximo impacto mediático y comercial.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>🎪</div>
              <h3>Ferias y Congresos</h3>
              <p>Diseño de stands, logística de atención y activaciones para captar leads en eventos masivos.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>🤝</div>
              <h3>Eventos de Integración</h3>
              <p>Fiestas de fin de año, team buildings y aniversarios empresariales diseñados para fortalecer la cultura organizacional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidad Operativa */}
      <section className={styles.logistics}>
        <div className={`container ${styles.logisticsContainer}`}>
          <div className={styles.logisticsContent}>
            <h2>Capacidad Operativa</h2>
            <p>Contamos con la infraestructura, proveedores y equipo humano para ejecutar eventos de cualquier escala.</p>
            <ul className={styles.checkList}>
              <li>✓ Cobertura a nivel nacional</li>
              <li>✓ Gestión integral de proveedores</li>
              <li>✓ Coordinadores de piso el día del evento</li>
              <li>✓ Reporte de resultados post-evento</li>
            </ul>
          </div>
          <div className={styles.logisticsImage}>
            {/* Placeholder */}
            <div className={styles.imagePlaceholder}>Logística en Acción</div>
          </div>
        </div>
      </section>

      {/* Logos de Clientes */}
      <section className={styles.clients}>
        <div className="container text-center">
          <h2>Empresas que confían en nosotros</h2>
          <div className={styles.logoGrid}>
            <div className={styles.logo}>Empresa A</div>
            <div className={styles.logo}>Empresa B</div>
            <div className={styles.logo}>Empresa C</div>
            <div className={styles.logo}>Empresa D</div>
          </div>
        </div>
      </section>
    </div>
  );
}
