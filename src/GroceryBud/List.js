import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function List({ items, removeItem, editItem }) {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className='grocery-item'>
            <p className='grocery-title'>{title}</p>
            <div className='grocery-btn-container'>
              <button
                type='button'
                className='grocery-edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='grocery-delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
