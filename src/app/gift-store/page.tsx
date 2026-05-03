import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Gift Store y Regalos Exclusivos | Mimos y Detalles',
  description: 'Descubre nuestra selección de regalos exclusivos y paquetes personalizados. El regalo perfecto a un solo clic.',
};

export default async function GiftStorePage() {
  const supabase = await createClient();
  const { data: productos, error } = await supabase
    .from('productos_gifts')
    .select('*')
    .eq('en_stock', true)
    .order('created_at', { ascending: false });

  return (
    <div className={styles.page}>
      {/* Hero Store */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">El Regalo Perfecto a un Clic</h1>
          <p className="animate-fade-in delay-100">
            Descubre nuestra selección de regalos exclusivos y paquetes personalizados. Sorprende a tus seres queridos con detalles que emocionan.
          </p>
        </div>
      </section>

      {/* Catálogo Visual */}
      <section className={styles.catalog}>
        <div className="container">
          
          <div className={styles.filters}>
            <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
            <button className={styles.filterBtn}>Cumpleaños</button>
            <button className={styles.filterBtn}>Aniversario</button>
            <button className={styles.filterBtn}>Agradecimiento</button>
          </div>

          <div className={styles.grid}>
            {error ? (
              <p>Error cargando los productos.</p>
            ) : productos && productos.length > 0 ? (
              productos.map((prod) => (
                <div key={prod.id} className={styles.productCard}>
                  <div className={styles.productImage} style={prod.imagen_url ? { backgroundImage: `url(${prod.imagen_url})`, backgroundSize: 'cover', backgroundPosition: 'center', fontSize: 0 } : {}}>
                    {!prod.imagen_url && '🎁'}
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{prod.nombre}</h3>
                    <p>{prod.descripcion}</p>
                    <div className={styles.productActions}>
                      <span className={styles.price}>${prod.precio}</span>
                      <a href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20producto%20${prod.nombre}...`} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No hay productos disponibles por el momento.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
