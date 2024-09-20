// App.js
import React from 'react';
import { ItemProvider } from './context/ItemContext';
import ItemManager from './ItemManager';

const App = () => {
  return (
    <ItemProvider>
      <ItemManager />
    </ItemProvider>
  );
};

export default App;
