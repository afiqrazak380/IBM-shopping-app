import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
  // Obtain 'dispatch' function from 'AppContext'
  const { dispatch } = useContext(AppContext);

  // Define local variable state
  const [name, setName] = useState('');
  const [quantity, setQuantitty] = useState('');
  const [action, setAction] = useState('');

  // Create event handler
  const submitEvent = () => {
    // Define 'item' object
    const item = {
      name: name,
      quantity: parseInt(quantity),
    };

    // Dispatch object based on action type
    if (action === 'Reduce') {
      dispatch({
        type: 'REDUCE_QUANTITY',
        payload: item,
      });
    } else {
      dispatch({
        type: 'ADD_QUANTITY',
        payload: item,
      });
    }
  };

  return (
    <>
      <div className='row'>
        <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
          <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect01'>
              Items
            </label>
          </div>
          <span></span>
          <select
            name='custom-select'
            id='inputGroupSelect01'
            onChange={(e) => setName(e.target.value)}
          >
            <option defaultValue>Choose</option>
            <option value='Shirt' name='shirt'>
              Shirt
            </option>
            <option value='Dress' name='Dress'>
              Dress
            </option>
            <option value='Jeans' name='Jeans'>
              Jeans
            </option>
            <option value='Blouse' name='Blouse'>
              Blouse
            </option>
            <option value='Bags' name='Bags'>
              Bags
            </option>
          </select>

          <div className='input-group-prepend' style={{ marginLeft: '4rem' }}>
            <label className='input-group-text' htmlFor='inputGroupSelet02'>
              Quantity
            </label>
          </div>

          <select
            className='custom-select'
            id='inputGroupSelect02'
            onChange={(e) => setAction(e.target.value)}
          >
            <option defaultValue value='Add' name='Add'>
              Add
            </option>
            <option value='Reduce' name='Reduce'>
              Reduce
            </option>
          </select>

          <span
            className='eco'
            style={{ marginLeft: '2rem', marginRight: '8px' }}
          ></span>

          <input
            required
            type='number'
            id='cost'
            value={quantity}
            style={{ size: 10 }}
            onChange={(e) => setQuantitty(e.target.value)}
          />

          <button className='btn btn-primary' onClick={submitEvent}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemSelected;
