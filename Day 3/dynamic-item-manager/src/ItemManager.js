
import React, { useState, useEffect } from 'react';
import { useItemContext } from './context/ItemContext';
import useItemFilter from './hooks/useItemFilter';
import ItemForm from './ItemForm';
import SearchAndSort from './SearchAndSort';
import ItemList from './ItemList';

const ItemManager = () => {
  const { state, dispatch } = useItemContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');

  const filteredItems = useItemFilter(state.items, searchTerm, sortOption);

  useEffect(() => {
    console.log('Item list updated:', state.items);
  }, [state.items]);

  const handleAddItem = (newItem) => {
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div className="container">
      <h1 className="text-white">Dynamic Item Manager</h1>
      <ItemForm onAddItem={handleAddItem} />
      <SearchAndSort 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        sortOption={sortOption} 
        setSortOption={setSortOption} 
      />
      <ItemList items={filteredItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default ItemManager;
