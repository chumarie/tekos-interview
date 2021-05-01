import { Grid, Container } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import Header from "views/header/Header";
import AnimeItem from "./AnimeItem";

import useFetchAnimeList from "./useFetchAnimeList";

export default function AnimeHomePage() {
  const { data, isFetching } = useFetchAnimeList();

  if (!data || isFetching) {
    return <Skeleton variant="rect" height={500} />;
  }

  console.log("items", data);
  const { items } = data;

  return (
    <>
      <Header />
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
