import CartValue from './components/1. CartValue';
import ExpenseList from './components/3. ExpenseList';
import ItemSelected from './components/4. ItemSelected';
import { AppProvider } from './context/AppContext';
import Location from './components/5. Location';

function App() {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-5 text-center'>Shopping App</h1>
        <div className='row mt-3'>
          <div className='col'>
            <CartValue />
          </div>
          <div className='col'>
            <Location />
          </div>
        </div>
        <h3 className='mt-3'>Shopping Cart</h3>
        <div className='row'>
          <div className='col-sm'></div>
          <ExpenseList />
        </div>
        <h3 className='mt-3'>Add Items</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ItemSelected />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

//

<div className='container'>
  <h1 className='mt-3'>Shopping App</h1>
  <div className='row mt-3'>
    <div className='col-sm'>
      <CartValue />
    </div>
    <div className='col-sm'>
      <Location />
    </div>
  </div>
  <h3 className='mt-3'>Shopping Cart</h3>
  <div className='row '>
    <div className='col-sm'>
      <ExpenseList />
    </div>
  </div>
  <h3 className='mt-3'>Add Items</h3>
  <div className='row mt-3'>
    <div className='col'>
      <ItemSelected />
    </div>
  </div>
</div>;
