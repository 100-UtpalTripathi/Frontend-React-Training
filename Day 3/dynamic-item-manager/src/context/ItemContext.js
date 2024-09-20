import React, { createContext, useReducer, useContext } from 'react';

const ItemContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem('items')) || [],
};

const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItemsAfterAdd = [...state.items, action.payload];
      localStorage.setItem('items', JSON.stringify(newItemsAfterAdd)); // Updating local storage
      return { ...state, items: newItemsAfterAdd };

    case 'REMOVE_ITEM':
      const newItemsAfterRemove = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('items', JSON.stringify(newItemsAfterRemove)); // Updating local storage
      return { ...state, items: newItemsAfterRemove };

    default:
      return state;
  }
};

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => useContext(ItemContext);
