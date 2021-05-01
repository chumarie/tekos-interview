import animeApi from "./anime";

interface ApiClient {
  anime: ReturnType<typeof animeApi>;
}

export default function apiClient(): ApiClient {
  return {
    anime: animeApi(),
  };
}
