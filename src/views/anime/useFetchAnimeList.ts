import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { parseQueryParams, stringifyQuery } from "utils/query";

import apiClient from 'services/api-client';

export default function useFetchAnimeList(search: string) {
  const client = apiClient();
  const parsedSearch = parseQueryParams(search);


  const qValue = (parsedSearch.q && parsedSearch.q.length >= 3) ? parsedSearch.q : "Ghibli";
  const formatSearch = { limit: 10, page: 1, ...parsedSearch, q: qValue };
  
  const stringifySearch = stringifyQuery(formatSearch);
  const fetcher = useCallback(() => client.anime.getAll(stringifySearch), [client, stringifySearch]);

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
