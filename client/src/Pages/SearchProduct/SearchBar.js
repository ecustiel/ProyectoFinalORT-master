import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Busqueda"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
