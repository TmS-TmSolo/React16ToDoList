/**
 * Renders a form for creating or updating a to-do list item.
 * 
 * @param {Object} props - The component props.
 * @param {function} props.addItem - A function to add a new to-do list item.
 * @param {function} props.updateItem - A function to update an existing to-do list item.
 * @param {Object} props.currentItem - The currently selected to-do list item, if any.
 * @returns {JSX.Element} The rendered form.
 */
import React, { useState, useEffect } from 'react';

function ItemForm({ addItem, updateItem, currentItem }) {
  const [formData, setFormData] = useState({ name: '', description: '' });

  useEffect(() => {
    if (currentItem) {
      setFormData(currentItem);
    } else {
      setFormData({ name: '', description: '' });
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem) {
      updateItem({ ...formData });
    } else {
      addItem({ ...formData });
    }
    setFormData({ name: '', description: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {currentItem ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
}

export default ItemForm;
