import React from 'react'
import './item-add-form.css'

const ItemAddForm = ({ onAddNew }) => {

  return (
    <div className="item-add-form">
      <button type="button" className="btn btn-outline-secondary float-right" onClick={() => onAddNew('Just for fun')}>
          Add item
      </button>
    </div>
  );
}

export default ItemAddForm;
