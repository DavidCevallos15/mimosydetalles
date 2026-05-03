export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          autor: string | null
          contenido: string
          created_at: string
          fecha_publicacion: string | null
          id: string
          imagen_portada_url: string | null
          slug: string
          tags: string[] | null
          titulo: string
        }
        Insert: {
          autor?: string | null
          contenido: string
          created_at?: string
          fecha_publicacion?: string | null
          id?: string
          imagen_portada_url?: string | null
          slug: string
          tags?: string[] | null
          titulo: string
        }
        Update: {
          autor?: string | null
          contenido?: string
          created_at?: string
          fecha_publicacion?: string | null
          id?: string
          imagen_portada_url?: string | null
          slug?: string
          tags?: string[] | null
          titulo?: string
        }
        Relationships: []
      }
      categorias: {
        Row: {
          created_at: string
          descripcion: string | null
          id: string
          nombre: string
          slug: string
        }
        Insert: {
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre: string
          slug: string
        }
        Update: {
          created_at?: string
          descripcion?: string | null
          id?: string
          nombre?: string
          slug?: string
        }
        Relationships: []
      }
      clientes: {
        Row: {
          created_at: string
          es_caso_exito: boolean | null
          id: string
          logo_url: string | null
          nombre_empresa: string
          sitio_web: string | null
        }
        Insert: {
          created_at?: string
          es_caso_exito?: boolean | null
          id?: string
          logo_url?: string | null
          nombre_empresa: string
          sitio_web?: string | null
        }
        Update: {
          created_at?: string
          es_caso_exito?: boolean | null
          id?: string
          logo_url?: string | null
          nombre_empresa?: string
          sitio_web?: string | null
        }
        Relationships: []
      }
      faq: {
        Row: {
          contexto: string | null
          created_at: string
          id: string
          pregunta: string
          respuesta: string
        }
        Insert: {
          contexto?: string | null
          created_at?: string
          id?: string
          pregunta: string
          respuesta: string
        }
        Update: {
          contexto?: string | null
          created_at?: string
          id?: string
          pregunta?: string
          respuesta?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          email: string | null
          estado: string | null
          fecha_contacto: string | null
          id: string
          mensaje: string | null
          nombre: string
          origen: string | null
          telefono: string | null
          tipo_evento: string | null
        }
        Insert: {
          email?: string | null
          estado?: string | null
          fecha_contacto?: string | null
          id?: string
          mensaje?: string | null
          nombre: string
          origen?: string | null
          telefono?: string | null
          tipo_evento?: string | null
        }
        Update: {
          email?: string | null
          estado?: string | null
          fecha_contacto?: string | null
          id?: string
          mensaje?: string | null
          nombre?: string
          origen?: string | null
          telefono?: string | null
          tipo_evento?: string | null
        }
        Relationships: []
      }
      portafolio: {
        Row: {
          categoria_id: string | null
          cliente_id: string | null
          created_at: string
          descripcion: string | null
          es_destacado: boolean | null
          fecha_evento: string | null
          galeria_imagenes: string[] | null
          id: string
          slug: string
          titulo: string
          video_url: string | null
        }
        Insert: {
          categoria_id?: string | null
          cliente_id?: string | null
          created_at?: string
          descripcion?: string | null
          es_destacado?: boolean | null
          fecha_evento?: string | null
          galeria_imagenes?: string[] | null
          id?: string
          slug: string
          titulo: string
          video_url?: string | null
        }
        Update: {
          categoria_id?: string | null
          cliente_id?: string | null
          created_at?: string
          descripcion?: string | null
          es_destacado?: boolean | null
          fecha_evento?: string | null
          galeria_imagenes?: string[] | null
          id?: string
          slug?: string
          titulo?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portafolio_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portafolio_cliente_id_fkey"
            columns: ["cliente_id"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
        ]
      }
      productos_gifts: {
        Row: {
          created_at: string
          descripcion: string | null
          en_stock: boolean | null
          id: string
          imagen_url: string | null
          nombre: string
          ocasion: string | null
          precio: number
          slug: string
        }
        Insert: {
          created_at?: string
          descripcion?: string | null
          en_stock?: boolean | null
          id?: string
          imagen_url?: string | null
          nombre: string
          ocasion?: string | null
          precio: number
          slug: string
        }
        Update: {
          created_at?: string
          descripcion?: string | null
          en_stock?: boolean | null
          id?: string
          imagen_url?: string | null
          nombre?: string
          ocasion?: string | null
          precio?: number
          slug?: string
        }
        Relationships: []
      }
      servicios: {
        Row: {
          categoria_id: string | null
          contenido_detallado: string | null
          created_at: string
          descripcion_corta: string | null
          id: string
          imagen_principal_url: string | null
          slug: string
          titulo: string
        }
        Insert: {
          categoria_id?: string | null
          contenido_detallado?: string | null
          created_at?: string
          descripcion_corta?: string | null
          id?: string
          imagen_principal_url?: string | null
          slug: string
          titulo: string
        }
        Update: {
          categoria_id?: string | null
          contenido_detallado?: string | null
          created_at?: string
          descripcion_corta?: string | null
          id?: string
          imagen_principal_url?: string | null
          slug?: string
          titulo?: string
        }
        Relationships: [
          {
            foreignKeyName: "servicios_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonios: {
        Row: {
          calificacion: number | null
          cargo_empresa: string | null
          categoria_id: string | null
          comentario: string
          created_at: string
          foto_autor_url: string | null
          id: string
          nombre_autor: string
        }
        Insert: {
          calificacion?: number | null
          cargo_empresa?: string | null
          categoria_id?: string | null
          comentario: string
          created_at?: string
          foto_autor_url?: string | null
          id?: string
          nombre_autor: string
        }
        Update: {
          calificacion?: number | null
          cargo_empresa?: string | null
          categoria_id?: string | null
          comentario?: string
          created_at?: string
          foto_autor_url?: string | null
          id?: string
          nombre_autor?: string
        }
        Relationships: [
          {
            foreignKeyName: "testimonios_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "categorias"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
