import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { parseQueryParams, stringifyQuery } from "utils/query";

import apiClient from 'services/api-client';



export default function useFetchAnimeList(search: string) {
  const client = apiClient();
  const parsedSearch = parseQueryParams(search);
  const defaultSearch = { q: "Ghibli", page: 1, ...parsedSearch };
  
  const stringifySearch = stringifyQuery(defaultSearch)
  
    const fetcher = useCallback(() => {
    return client.anime.getAll(stringifySearch);
  }, [client, stringifySearch]);

  const { data, error, isFetching } = useQuery(
    ['anime-list', stringifySearch],
    fetcher
  );
    
  return {
    data,
    error,
    isFetching
  };
}
