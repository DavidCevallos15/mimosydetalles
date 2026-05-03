import { Metadata } from 'next';
import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase.from('blog_posts').select('titulo, contenido').eq('slug', slug).single();
  
  if (!post) return { title: 'Post no encontrado' };
  
  return {
    title: `${post.titulo} | Mimos y Detalles`,
    description: post.contenido.substring(0, 150) + '...',
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', backgroundColor: 'var(--background)' }}>
      {/* Hero Post */}
      <section style={{ 
        minHeight: '50vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: post.imagen_portada_url ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${post.imagen_portada_url}) center/cover` : 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
            {post.tags?.map((tag: string) => (
              <span key={tag} style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>{post.titulo}</h1>
          <div className="animate-fade-in delay-100" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', fontSize: '0.9rem', color: '#e2e8f0' }}>
            <span>{post.autor || 'Equipo Mimos'}</span>
            <span>•</span>
            <span>{new Date(post.fecha_publicacion || post.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--surface)', flexGrow: 1 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text)', whiteSpace: 'pre-wrap' }}>
            {post.contenido}
          </div>
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-outline">
              &larr; Volver al Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
