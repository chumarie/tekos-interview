import { useCallback } from 'react';
import { useQuery } from 'react-query';

import apiClient from 'services/api-client';

export default function useFetchAnimeList() {
    const client = apiClient();
    
    const fetcher = useCallback(() => {
    return client.anime.getAll();
  }, [client]);

  const { data, error, isFetching } = useQuery(
    ['anime-list'],
    fetcher
  );
    

    
  return {
    data,
    error,
    isFetching
  };
}
