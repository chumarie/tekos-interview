import qs from "qs";

export function parseQueryParams(search) {
  return qs.parse(search, { ignoreQueryPrefix: true });
}

/**
 * Returns '' on empty object
 */
export function stringifyQuery(query) {
  return qs.stringify(query, {
    addQueryPrefix: true,
    skipNulls: true,
    arrayFormat: "brackets",
  });
}
