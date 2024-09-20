import React from 'react';

const ItemList = ({ items, onRemoveItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => onRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
