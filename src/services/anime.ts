import axios from "axios";
import type {Anime} from "models/anime";

import { ANIME_API } from "./constants";

interface GetAllResponse {
  items: Anime[];
  totalPages: number;
}

interface AnimeApi {
  getAll: () => Promise<GetAllResponse>;
}

export default function animeApi(): AnimeApi {
  return {
    async getAll(): Promise<GetAllResponse> {
      const {data: {results, last_page}} = await axios.get(ANIME_API);
      return {items: results, totalPages: last_page};
    },
  };
}
