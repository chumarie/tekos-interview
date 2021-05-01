import React from "react";

import useFetchAnimeList from "./useFetchAnimeList";
export default function AnimeHomePage() {
  const { data } = useFetchAnimeList();

  console.log("data", data);
  return <div>Anime Page</div>;
}
