import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
  const { expenses, Location } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  return (
    <div className='alert alert-primary'>
      <span>
        Cart Value: {Location} <span>{totalExpense}</span>
      </span>
    </div>
  );
};

export default CartValue;
