/**
 * The main React component for the Item Manager application.
 * It manages the state of the items, and provides functionality to add, update, and delete items.
 * It also renders the ItemForm and ItemList components to handle the user interface.
 */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const addItem = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setCurrentItem(null); // Close the update form
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    setCurrentItem(itemToEdit);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">To Do List Manager</h1>
      <ItemForm
        addItem={addItem}
        updateItem={updateItem}
        currentItem={currentItem}
      />
      <ItemList
        items={items}
        deleteItem={deleteItem}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
