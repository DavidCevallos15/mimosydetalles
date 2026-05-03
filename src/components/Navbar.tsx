import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Mimos y Detalles
        </Link>
        <div className={styles.links}>
          <Link href="/empresas" className={styles.link}>Empresas</Link>
          <Link href="/eventos-sociales" className={styles.link}>Eventos Sociales</Link>
          <Link href="/gift-store" className={styles.link}>Gift Store</Link>
          <Link href="/portafolio" className={styles.link}>Portafolio</Link>
          <Link href="/nosotros" className={styles.link}>Nosotros</Link>
          <Link href="/blog" className={styles.link}>Ideas</Link>
          <Link href="/contacto" className={styles.link}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
