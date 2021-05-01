import { Grid, Container } from "@material-ui/core";

import Skeleton from "@material-ui/lab/Skeleton";

import Card from "components/Card/Card";
import Header from "views/header/Header";

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
          {items.map(({ title, image_url, synopsis, episodes }) => (
            <Grid md={3} sm={4} xs={12} item>
              <Card
                title={title}
                imgUrl={image_url}
                description={synopsis}
                episodeCount={episodes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
