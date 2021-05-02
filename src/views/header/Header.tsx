import { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import type { ReactElement, ChangeEvent } from "react";
import { TextField, Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

import { FilterContext } from "contexts/filterProvider";
import { parseQueryParams, stringifyQuery } from "utils/query";

import { HeaderContainer, SearchBox } from "./Header.style";

export default function Header(): ReactElement {
  const { search, pathname } = useLocation();
  const history = useHistory();
  const parsedSearch = parseQueryParams(search);

  const [query, setQuery] = useState(parsedSearch.q || "");
  const { updateFilterDisplay } = useContext(FilterContext);

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

  function handleFilterClick() {
    updateFilterDisplay();
  }
  return (
    <HeaderContainer>
      <Typography variant="h6" noWrap color="secondary">
        TEKFLIX
      </Typography>

      <SearchBox>
        <TextField
          defaultValue={query}
          label="Search"
          size="small"
          color="secondary"
          variant="outlined"
          onChange={handleQueryChange}
        />
        <Button
          color="secondary"
          disableFocusRipple
          onClick={handleQuerySubmit}
        >
          <SearchIcon />
        </Button>
        <Button onClick={handleFilterClick}>
          <SortIcon />
        </Button>
      </SearchBox>
    </HeaderContainer>
  );
}
