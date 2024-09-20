import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ItemProvider, useItemContext } from './context/ItemContext';
import useItemFilter from './hooks/useItemFilter';

const App = () => {
  return (
    <ItemProvider>
      <ItemManager />
    </ItemProvider>
  );
};

const ItemManager = () => {
  const { state, dispatch } = useItemContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const searchInputRef = useRef(null);

  const filteredItems = useItemFilter(state.items, searchTerm, sortOption);

  useLayoutEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log('Item list updated:', state.items);
  }, [state.items]);

  const handleAddItem = () => {
    if (name && description) {
      dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name, description } });
      setName('');
      setDescription('');
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div className="container">
      <h1 className="text-white">Dynamic Item Manager</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="mb-3">
        <input
          ref={searchInputRef}
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="form-control mt-2" onChange={(e) => setSortOption(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="description">Sort by Description</option>
        </select>
      </div>

      <ul className="list-group">
        {filteredItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
