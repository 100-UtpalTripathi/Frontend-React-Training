// SearchAndSort.js
import React, { useRef, useLayoutEffect } from 'react';

const SearchAndSort = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => {
  const searchInputRef = useRef(null);

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <div className="mb-3">
      <input
        ref={searchInputRef}
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className="form-control mt-2" onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
        <option value="name">Sort by Name</option>
        <option value="description">Sort by Description</option>
      </select>
    </div>
  );
};

export default SearchAndSort;
