import axios from "axios";
import { ANIME_API } from "./constants";

export default function animeApi() {
  return {
    async getAll() {
      const query = await axios.get(ANIME_API);
      return query;
    },
  };
}
