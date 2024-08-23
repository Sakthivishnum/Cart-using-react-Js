import React, { useReducer } from 'react';
import Shirt from './shirt.png';
import Pant from './pant.png';
import Shoe from './shoe.png';
import Watch from './watch.png';

const initialState = { amount1: 0, amount2: 0, amount3: 0, amount4: 0};

function shoppingReducer(state, action) {
  switch (action.category) {
    case 'shirt':
      return { ...state, amount1: state.amount1 + 1 };
    case 'pant':
      return { ...state, amount2: state.amount2 + 1 };
    case 'shoe':
      return { ...state, amount3: state.amount3 + 1 };
    case 'watch':
      return { ...state, amount4: state.amount4 + 1 };
    case 'cancel1':
      return { ...state, amount1: state.amount1 - 1 };
      case 'cancel2':
      return { ...state, amount2: state.amount2 - 1 };
      case 'cancel3':
      return { ...state, amount3: state.amount3 - 1 };
      case 'cancel4':
      return { ...state, amount4: state.amount4 - 1 };
            default:
      throw new Error();
  }
}

function Cart() {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  return (
    <div className="cart">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-5 col-md-6">
            <img src={Shirt} />
            <h3>Price-₹600</h3>
            <h4>Quantity-{state.amount1}</h4>
            <button onClick={() => dispatch({ category: 'shirt' })}>Add</button>
            <button onClick={() => dispatch({ category: 'cancel1'})}>Cancel</button>
          </div>
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <img src={Pant} />
            <h3>Price-₹1000</h3>
            <h4>Quantity-{state.amount2}</h4>
            <button onClick={() => dispatch({ category: 'pant' })}>Add</button>
            <button onClick={() => dispatch({ category: 'cancel2'})}>Cancel</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <img src={Shoe} />
            <h3>Price-₹2000</h3>
            <h4>Quantity-{state.amount3}</h4>
            <button onClick={() => dispatch({ category: 'shoe' })}>Add</button>
            <button onClick={() => dispatch({ category: 'cancel3'})}>Cancel</button>
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <img src={Watch} />
            <h3>Price-₹2000</h3>
            <h4>Quantity-{state.amount4}</h4>
            <button onClick={() => dispatch({ category: 'watch' })}>Add</button>
            <button onClick={() => dispatch({ category: 'cancel4'})}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Finalize() {
  return (
    <div>
      <Cart />
    </div>
  );
}