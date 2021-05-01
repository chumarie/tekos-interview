import axios from "axios";
import type {AnimeItem, AnimeDetail} from "models/anime";

import { ANIME_API } from "./constants";

interface GetAllResponse {
  items: AnimeItem[];
  totalPages: number;
}

interface GetOneResponse extends AnimeDetail{};

interface AnimeApi {
  getAll: () => Promise<GetAllResponse>;
  getOne: (id: number) => Promise<GetOneResponse>
}

export default function animeApi(): AnimeApi {
  return {
    async getAll(): Promise<GetAllResponse> {
      const {data: {results, last_page}} = await axios.get(`${ANIME_API}/search/anime?q=Ghibli&page=1`);
      return {items: results, totalPages: last_page};
    },
    async getOne(id: number): Promise<GetOneResponse> {
      const response =  await axios.get(`${ANIME_API}/anime/${id}`);
      return response.data;
    },
  };
}
