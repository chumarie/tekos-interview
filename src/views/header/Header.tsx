import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import type { ReactElement, ChangeEvent } from "react";
import { TextField, Button } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

import { parseQueryParams, stringifyQuery } from "utils/query";

import { HeaderContainer, InputSearch, SearchBox } from "./Header.style";

export default function Header(): ReactElement {
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

  return (
    <HeaderContainer>
      <Typography variant="h6" noWrap>
        Tekflix
      </Typography>
      <SearchBox>
        <TextField
          size="small"
          label="Search"
          variant="outlined"
          onChange={handleQueryChange}
        />
        <Button color="primary" onClick={handleQuerySubmit} variant="outlined">
          <SearchIcon />
        </Button>
      </SearchBox>
    </HeaderContainer>
  );
}
