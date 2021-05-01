import axios from "axios";
import { ANIME_API } from "./constants";

interface AnimeApi {
  getAll: () => any;
}

export default function animeApi(): AnimeApi {
  return {
    async getAll() {
      const query = await axios.get(ANIME_API);
      return query;
    },
  };
}
