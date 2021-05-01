import axios from "axios";
import { TopItem } from "models/top";

import { ANIME_API } from "./constants";

interface GetTopResponse {
  top: TopItem[];
}

interface TopApi {
  getTop: () => Promise<GetTopResponse>;
}

export default function topApi(): TopApi {
  return {
    async getTop(): Promise<GetTopResponse> {
      const response = await axios.get(`${ANIME_API}/top/anime`);
      return response.data;
    },
  };
}
