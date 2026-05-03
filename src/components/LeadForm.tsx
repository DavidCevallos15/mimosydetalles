'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function LeadForm({ origen = 'General' }: { origen?: string }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo_evento: 'No especificado',
    mensaje: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const { error } = await supabase.from('leads').insert([
      {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        tipo_evento: formData.tipo_evento,
        mensaje: formData.mensaje,
        origen: origen
      }
    ]);

    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', tipo_evento: 'No especificado', mensaje: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#ecfdf5', color: '#065f46', borderRadius: '12px' }}>
        <h3>¡Gracias por contactarnos!</h3>
        <p>Hemos recibido tu información. Un asesor se comunicará contigo muy pronto.</p>
        <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '1rem' }}>Enviar otro mensaje</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
      <div>
        <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre completo *</label>
        <input required type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Correo electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="telefono" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Teléfono *</label>
          <input required type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        </div>
      </div>

      <div>
        <label htmlFor="tipo_evento" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Tipo de evento / Interés</label>
        <select id="tipo_evento" name="tipo_evento" value={formData.tipo_evento} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white' }}>
          <option value="No especificado">Selecciona una opción</option>
          <option value="B2B - Corporativo">Evento Corporativo (B2B)</option>
          <option value="B2C - Social">Evento Social (B2C)</option>
          <option value="Gift Store">Tienda de Regalos</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Mensaje</label>
        <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}></textarea>
      </div>

      {status === 'error' && <p style={{ color: '#ef4444' }}>Ocurrió un error al enviar el mensaje. Intenta nuevamente.</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ marginTop: '1rem' }}>
        {status === 'submitting' ? 'Enviando...' : 'Solicitar información'}
      </button>
    </form>
  );
}
