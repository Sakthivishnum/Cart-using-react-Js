import react from 'react';
import ReactDOM from 'react-dom';
import Finalize from './cart'
import './cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Shopping(){
  return(
    <div>
      <Finalize/>
    </div>)
}
ReactDOM.render(<Shopping/>,document.getElementById('root'));