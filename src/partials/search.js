import React from "react";

function Search({ query, setQuery }) {
  return (
    <div class="input-group search-bar ">
      <span
        class="input-group-text rounded-0 rounded-end bg-body-secondary border-0 "
        id="search-addon"
      >
        <i class="bi bi-search "></i>
      </span>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        class="form-control bg-body-secondary border-0  rounded-0 rounded-start"
        placeholder="اسم المدرب"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
}

export default Search;
