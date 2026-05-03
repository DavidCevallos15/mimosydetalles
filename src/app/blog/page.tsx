import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Blog de Ideas y Tendencias | Mimos y Detalles',
  description: 'Artículos, inspiración y guías prácticas sobre la organización de eventos corporativos, sociales y regalos únicos.',
};

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('fecha_publicacion', { ascending: false });

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className="animate-fade-in">Ideas e Inspiración</h1>
          <p className="animate-fade-in delay-100">
            Descubre las últimas tendencias en eventos, tips de organización y guías para regalos memorables.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.grid}>
            {error ? (
              <p>Error cargando los artículos del blog.</p>
            ) : posts && posts.length > 0 ? (
              posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className={styles.blogCard}>
                  <div className={styles.blogImage} style={post.imagen_portada_url ? { backgroundImage: `url(${post.imagen_portada_url})` } : {}}>
                    {!post.imagen_portada_url && '📝'}
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.blogMeta}>
                      <span>{post.autor || 'Equipo Mimos'}</span>
                      <span>•</span>
                      <span>{new Date(post.fecha_publicacion || post.created_at).toLocaleDateString('es-ES')}</span>
                    </div>
                    <h3>{post.titulo}</h3>
                    <p>{post.contenido.substring(0, 100)}...</p>
                    <span className={styles.readMore}>Leer más &rarr;</span>
                  </div>
                </Link>
              ))
            ) : (
              <p>No hay artículos publicados aún.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
