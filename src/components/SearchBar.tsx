import React from 'react';
import SearchIcon from '../illustrations/icons/SearchIcon';

const SearchBar = () => {
  return (
    <>
      <div className="flex px-4 py-2 rounded-lg bg-white items-center">
        <input
          type="search"
          placeholder="Search"
          className="outline-none border-none rounded-lg bg-transparent "
        />
        <SearchIcon />
      </div>
    </>
  );
};

export default SearchBar;
