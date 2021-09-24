import styles from '../css-codes/counter.css';
import React, {useState} from "react";
import Button from '@material-ui/core/Button';

const Count = () => {
    const [ counter, setCounter ] = useState(25)

    const increment = ()=>  setCounter(counter+1) 
    const decrement = ()=> setCounter(counter-1)

   return (
      <div>
         <div class="count">{counter}</div>
            <Button className="b-inc" variant="contained" color="primary" onClick={increment}>Increment</Button>
            <Button className="b-dec" variant="contained" color="secondary" onClick={decrement}>Decrement</Button>

        <div class="footer">
            <h6>2000031281 Ankit Seth</h6>
        </div>
      </div>
     )
   }

   export default Count;