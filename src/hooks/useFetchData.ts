import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabaseClient';

export function useFetchData<T>(tableName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      const { data: result, error: fetchError } = await supabase
        .from(tableName)
        .select('*');
      
      if (fetchError) {
        setError(fetchError.message);
      } else {
        setData(result as T[]);
      }
      
      setLoading(false);
    };

    fetchData();
  }, [tableName]);

  return { data, loading, error };
}