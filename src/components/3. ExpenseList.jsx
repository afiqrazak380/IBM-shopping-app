import React, { useContext } from 'react';
import ExpenseItem from './2. ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <>
      <table className='table table-striped mt-3'>
        <thead className='table-dark'>
          <tr>
            {/* scope='col' indicate that the header cells is the heading for a collum of data cells */}
            <th scope='col'>Items</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Unit Price</th>
            <th scope='col'>Items Price</th>
            <th scope='col'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              quantity={expense.quantity}
              unitprice={expense.unitprice}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
