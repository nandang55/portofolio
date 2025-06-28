import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useProjectYears = () => {
  const [years, setYears] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectYears = async () => {
    try {
      setLoading(true);
      setError(null);

      // Mengambil start_date dan end_date dari tabel projects
      const { data, error } = await supabase
        .from('projects')
        .select('start_date, end_date')
        .order('start_date', { ascending: true });

      if (error) {
        throw error;
      }

      // Ekstrak tahun dari start_date dan end_date
      const allYears: number[] = [];
      
      data?.forEach(item => {
        if (item.start_date) {
          const startYear = new Date(item.start_date).getFullYear();
          allYears.push(startYear);
        }
        if (item.end_date) {
          const endYear = new Date(item.end_date).getFullYear();
          allYears.push(endYear);
        }
      });

      // Filter nilai yang valid dan ambil yang unik
      const validYears = allYears.filter(year => !isNaN(year) && year > 1900);
      const uniqueYears = [...new Set(validYears)];
      const sortedYears = uniqueYears.sort((a, b) => b - a); // Sort descending (newest first)

      setYears(sortedYears);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat mengambil data tahun');
      console.error('Supabase error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectYears();
  }, []);

  return {
    years,
    loading,
    error,
    refetch: fetchProjectYears
  };
}; 