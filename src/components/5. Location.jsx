import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_LOCATION',
      payload: val,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='locationSelect'>Location:</label>
      {
        <select
          name='Location'
          id='locationSelect'
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option value='£'>UK (£)</option>
          <option value='₹'>India (₹)</option>
          <option value='€'>Europe (€)</option>
          <option value='CAD'>Canada (CAD)</option>
        </select>
      }
    </div>
  );
};

export default Location;
