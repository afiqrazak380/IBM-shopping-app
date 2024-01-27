import React, { useReducer, createContext } from 'react';

// 5. Reducer Function: Handles state update based on dispatched actions
export const AppReducer = (state, action) => {
  // Initailize an empty array wich will be used to update the 'expenses' array in the state
  let new_expenses = [];

  // Switch statement
  // Checks the 'type' property of the 'action' object to determine which action to perform.
  switch (action.type) {
    //#1
    case 'ADD_QUANTITY':
      let updatedQty = false;
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = expense.quantity + action.payload.quantity;
          updatedQty = true;
        }
        new_expenses.push(expense);
        return true; //?

        /* Code suggested by chatGPT to use 'forEach'
        state.expenses.forEach((expense) => {
          if (expense.name === action.payload.name) {
            expense.quantity = expense.quantity + action.payload.quantity;
            updatedQty = true;
          }
          new_expenses.push(expense);
        });*/
      });
      state.expenses = new_expenses;
      action.type = 'Done';
      return {
        ...state,
      };
    //#2
    case 'RED_QUANTITY':
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = expense.quantity - action.payload.quantity;
        }
        expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
      });
      state.expenses = new_expenses;
      action.type = 'DONE';
      return {
        ...state,
      };
    // state.expenses.map((expense) => {
    //   if (expense.name === action.payload.name) {
    //     expense.quantity = Math.max(
    //       0,
    //       expense.quantity - action.payload.quantity
    //     );
    //   }
    //   // Remove this line
    //   // expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
    // });
    //#3
    case 'DELETE_ITEM':
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = 0;
        }
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = 'DONE';
      return {
        ...state,
      };
    //#4
    case 'CHG_LOCATION':
      action.type = 'DONE';
      state.Location = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

// 1. Initial State: Defines the initial state of the app when it loads
const inititalState = {
  expenses: [
    { id: 'Shirt', name: 'Shirt', quantity: 1, unitprice: 500 },
    { id: 'Jeans', name: 'Jeans', quantity: 2, unitprice: 300 },
    { id: 'Dress', name: 'Dress', quantity: 0.5, unitprice: 400 },
    { id: 'Dinner set', name: 'Dinner set', quantity: 0, unitprice: 600 },
    { id: 'Bags', name: 'Bags', quantity: 0, unitprice: 200 },
  ],
  Location: '£',
};

// 2. Context Creation: Creates the context for components to access the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested (wrapped) components
export const AppProvider = (props) => {
  // 4. State Setup: Sets up the app state using a reducer and initial state
  const [state, dispatch] = useReducer(AppReducer, inititalState);

  // Calculate the total expenses based on quantity and unit price
  const totalExpense = state.expenses.reduce((total, item) => {
    return (total = total + item.unitprice * item.quantity);
  }, 0);

  // Adding new property called 'CartValue' to the 'state' object.
  // 'CartValue' can then be accessed within the components that are connected to this state using the React context.
  state.CartValue = totalExpense;

  // Render JSX element
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        CartValue: state.CartValue,
        dispatch,
        Location: state.Location,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

/* Code Improvement by chatGPT
export const AppReducer = (state, action) => {
    let newExpenses = [];

    switch (action.type) {
        case 'ADD_QUANTITY':
            newExpenses = state.expenses.map(expense =>
                expense.name === action.payload.name
                    ? { ...expense, quantity: expense.quantity + action.payload.quantity }
                    : expense
            );
            return { ...state, expenses: newExpenses, CartValue: calculateTotal(newExpenses) };

        case 'RED_QUANTITY':
            newExpenses = state.expenses.map(expense =>
                expense.name === action.payload.name
                    ? { ...expense, quantity: Math.max(0, expense.quantity - action.payload.quantity) }
                    : expense
            );
            return { ...state, expenses: newExpenses, CartValue: calculateTotal(newExpenses) };

        case 'DELETE_ITEM':
            newExpenses = state.expenses.map(expense =>
                expense.name === action.payload.name ? { ...expense, quantity: 0 } : expense
            );
            return { ...state, expenses: newExpenses, CartValue: calculateTotal(newExpenses) };

        case 'CHG_LOCATION':
            return { ...state, Location: action.payload };

        default:
            return state;
    }
};

const calculateTotal = (expenses) => {
    return expenses.reduce((total, item) => total + item.unitprice * item.quantity, 0);
};

*/
