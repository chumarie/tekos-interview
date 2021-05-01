import { useState } from "react";
import type { ReactElement, ChangeEvent } from "react";
import { Grid, Container } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useLocation, useHistory } from "react-router-dom";

import { parseQueryParams, stringifyQuery } from "utils/query";
import Header from "views/header/Header";

import AnimeItem from "./AnimeItem";
import useFetchAnimeList from "./useFetchAnimeList";

export default function AnimeHomePage(): ReactElement {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const parsedSearch = parseQueryParams(search);
  const [query, setQuery] = useState(parsedSearch.q || "");

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleQuerySubmit() {
    const params = stringifyQuery({
      ...parsedSearch,
      page: 1,
      q: query,
    });
    history.push(`${pathname}${params}`);
  }

  const { data, isFetching } = useFetchAnimeList(search);

  if (!data || isFetching) {
    return <Skeleton variant="rect" height={500} />;
  }

  console.log("items", data);
  const { items } = data;

  return (
    <>
      <Header
        query={query}
        onQueryChange={handleQueryChange}
        onQuerySubmit={handleQuerySubmit}
      />
      <Container>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid md={3} sm={4} xs={12} item>
              <AnimeItem {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
