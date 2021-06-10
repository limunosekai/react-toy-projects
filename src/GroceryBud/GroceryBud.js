import React, { useEffect, useState } from 'react';
import './grocery.css';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
  let lists = localStorage.getItem('list');
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

function GroceryBud() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      // 유효성 검사
      showAlert(true, 'danger', 'Please Enter value');
    } else if (name && isEditing) {
      // 수정된 아이템
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Value Changed');
    } else {
      // 새로운 아이템
      showAlert(true, 'success', 'Successfully Added!');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearAll = () => {
    showAlert(true, 'danger', 'Empty List');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item Removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='grocery-section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className='grocery-form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='ex) eggs...'
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <button type='submit' className='grocery-submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='grocery-clear-btn' onClick={clearAll}>
            Clear All
          </button>
        </div>
      )}
    </section>
  );
}

export default GroceryBud;
