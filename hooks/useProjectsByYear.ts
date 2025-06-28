import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface Project {
  id: string;
  app_name: string;
  company_name: string;
  company_logo: string;
  app_logo: string;
  country: string;
  start_date: string;
  end_date: string;
  description: { [key: string]: string };
  media: { type: 'image' | 'video'; url: string }[];
  tags: string[];
}

export const useProjectsByYear = (year: number | null) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!year) {
      setProjects([]);
      return;
    }
    setLoading(true);
    setError(null);
    supabase
      .from('projects')
      .select('*')
      .gte('start_date', `${year}-01-01`)
      .lte('start_date', `${year}-12-31`)
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
          setProjects([]);
        } else {
          setProjects(data || []);
        }
        setLoading(false);
      });
  }, [year]);

  return { projects, loading, error };
}; 