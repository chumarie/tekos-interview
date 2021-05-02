import { useContext } from "react";
import type { ReactElement, ChangeEvent } from "react";
import { Grid, Container, Box } from "@material-ui/core";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { parseQueryParams, stringifyQuery } from "utils/query";

import { FilterContext } from "contexts/filterProvider";
import PulseModal from "components/PulseLoader/PulseLoader";

import AnimeItem from "./AnimeItem";
import useFetchAnimeList from "./useFetchAnimeList";
import AnimeFilter from "./AnimeFilter";

import { Footer } from "./AnimeHomePage.style";

export default function AnimeHomePage(): ReactElement {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const parsedSearch = parseQueryParams(search);
  const { isFilterDisplay } = useContext(FilterContext);

  const { data, isFetching } = useFetchAnimeList(search);

  function handlePageChange(page: number) {
    const params = stringifyQuery({
      ...parsedSearch,
      page,
    });
    return `${pathname}${params}`;
  }

  function handleOrderByChange(
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) {
    const orderByValue = event.target.value;
    const params = stringifyQuery({
      ...parsedSearch,
      page: 1,
      order_by: orderByValue,
    });
    history.push(`${pathname}${params}`);
  }

  function handleStatusChange(
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) {
    const statusValue = event.target.value;
    const params = stringifyQuery({
      ...parsedSearch,
      page: 1,
      status: statusValue,
    });
    history.push(`${pathname}${params}`);
  }

  function handleSortChange(
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) {
    const sortValue = event.target.value;
    const params = stringifyQuery({
      ...parsedSearch,
      page: 1,
      sort: sortValue,
    });
    history.push(`${pathname}${params}`);
  }

  if (!data || isFetching) {
    return <PulseModal />;
  }

  const { items, totalPages } = data;

  return (
    <>
      <Container component={Box} py="30px">
        {isFilterDisplay && (
          <AnimeFilter
            onSortChange={handleSortChange}
            onStatusChange={handleStatusChange}
            onOrderByChange={handleOrderByChange}
          />
        )}
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid md={3} sm={4} xs={12} item>
              <AnimeItem {...item} />
            </Grid>
          ))}
        </Grid>
        <Footer>
          <Pagination
            page={parsedSearch.page || 1}
            count={totalPages}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={() => handlePageChange(item.page)}
                {...item}
              />
            )}
          />
        </Footer>
      </Container>
    </>
  );
}
