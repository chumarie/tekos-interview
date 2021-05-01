import type { ChangeEvent } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useLocation } from "react-router-dom";
import { parseQueryParams } from "utils/query";

import { FilterWrapper } from "./AnimeHomePage.style";

interface Props {
  onOrderByChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
  onStatusChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
  onSortChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
}
export default function AnimeFilter({
  onOrderByChange,
  onStatusChange,
  onSortChange,
}: Props) {
  const { search } = useLocation();
  const parsedSearch = parseQueryParams(search);
  const orderSelect = (
    <Select
      variant="outlined"
      value={parsedSearch["order_by"] || "title"}
      onChange={onOrderByChange}
    >
      <MenuItem value="start_date">Release date</MenuItem>
      <MenuItem value="title">Title</MenuItem>
      <MenuItem value="episodes">Episodes</MenuItem>
      <MenuItem value="rating">Rating</MenuItem>
    </Select>
  );

  const statusSelect = (
    <Select
      variant="outlined"
      value={parsedSearch.status || "airing"}
      onChange={onStatusChange}
    >
      <MenuItem value="airing">Publishing</MenuItem>
      <MenuItem value="completed">Completed</MenuItem>
      <MenuItem value="upcoming">Upcoming</MenuItem>
    </Select>
  );

  const sortSelect = (
    <Select
      variant="outlined"
      value={parsedSearch.sort || "desc"}
      onChange={onStatusChange}
    >
      <MenuItem value="desc">Descending</MenuItem>
      <MenuItem value="asc">Ascending</MenuItem>
    </Select>
  );
  return (
    <FilterWrapper elevation={0}>
      {orderSelect}
      {statusSelect}
      {sortSelect}
    </FilterWrapper>
  );
}
