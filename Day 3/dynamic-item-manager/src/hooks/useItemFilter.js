import { useMemo } from 'react';

const useItemFilter = (items, searchTerm, sortOption) => {
  return useMemo(() => {
    let filteredItems = items;

    if (searchTerm) {
      filteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'name') {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'description') {
      filteredItems.sort((a, b) => a.description.localeCompare(b.description));
    }

    return filteredItems;
  }, [items, searchTerm, sortOption]);
};

export default useItemFilter;
