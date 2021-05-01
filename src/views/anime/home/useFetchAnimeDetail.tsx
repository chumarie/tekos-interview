import { useCallback } from "react";
import { useQuery } from "react-query";

import apiClient from "services/api-client";

export default function useFetchAnimeDetail(id: number) {
  const client = apiClient();

  const fetcher = useCallback(() => {
    return client.anime.getOne(id);
  }, [client, id]);

  const { data, error, isFetching } = useQuery(["anime-item"], fetcher);

  return {
    data: data,
    error,
    isFetching,
  };
}
