/**
 * Renders a list of items with options to edit or delete each item.
 *
 * @param {Object[]} items - An array of item objects, each with an `id`, `name`, and `description` property.
 * @param {function} deleteItem - A function to be called when the "Delete" button is clicked for an item.
 * @param {function} handleEdit - A function to be called when the "Edit" button is clicked for an item.
 * @returns {JSX.Element} - A React component that renders the item list.
 */
import React from 'react';

function ItemList({ items, deleteItem, handleEdit }) {
  return (
    <div>
      <h2 className="my-3">To Do List</h2>
      {items.length === 0 && <p>Nothing to do yet. Add some!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>{item.description}</p>
            </div>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
