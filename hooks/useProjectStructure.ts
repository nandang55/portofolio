import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useProjectStructure = () => {
  const [structure, setStructure] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStructure = async () => {
    try {
      setLoading(true);
      setError(null);

      // Ambil beberapa sample data untuk melihat struktur
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .limit(5);

      if (error) {
        throw error;
      }

      setStructure(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat mengambil struktur tabel');
      console.error('Structure error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStructure();
  }, []);

  return {
    structure,
    loading,
    error,
    refetch: fetchStructure
  };
}; 