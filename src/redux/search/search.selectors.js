import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectQuery = createSelector(
  [selectSearch],
  (search) => search.query
);
