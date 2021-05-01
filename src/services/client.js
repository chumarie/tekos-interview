import animeApi from "./anime";

export default function client() {
  return {
    anime: animeApi(),
  };
}
