import animeApi from "./anime";
import topApi from "./top";

interface ApiClient {
  anime: ReturnType<typeof animeApi>;
  top: ReturnType<typeof topApi>;
}

export default function apiClient(): ApiClient {
  return {
    anime: animeApi(),
    top: topApi(),
  };
}
