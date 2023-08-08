import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [btcQuantity, setBtcQuantity] = useState();
  const [dogeQuantity, setDogeQuantity] = useState();
  const [rippleQuantity, setRippleQuantity] = useState();
   const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

   const handleAddToCart = (coin, quantity) => {
 
    const prices = {
      BTC: 50000,
      DOGE: 0.3,
      RIPPLE: 0.1,
    };

    const amount = quantity * prices[coin];

    const newItem = {
      coin,
      quantity,
      amount,
    };

    setCartItems(prevItems => [...prevItems, newItem]);
    setCartTotal(prevTotal => prevTotal + amount);
  };


  return (
    <div className="App">
      <div >
      <div className='outer'>
        <div className='inner' >
        <div className='divs'><p>BTC</p><p>$25000</p></div>
         <input className='inp'
         placeholder='QTY:'
          type="number"
          step="0.01" 
          min="0" 
          value={btcQuantity}
          onChange={e => setBtcQuantity(parseFloat(e.target.value))}
        />
         <button  className="btn btn-info" onClick={() => handleAddToCart('BTC', btcQuantity)}>Add</button>
         </div>
       <div className='inner'>
       <div className='divs'><p>DOGE</p><p>$0.75</p></div>
         <input className='inp'
         placeholder='QTY:'
          type="number"
          step="0.01"
          min="0"
          value={dogeQuantity}
          onChange={e => setDogeQuantity(parseFloat(e.target.value))}
        />
         <button className="btn btn-info" onClick={() => handleAddToCart('DOGE', dogeQuantity)}>Add</button>
       </div>
        <div className='inner'>
        <div className='divs'><p>RIPPLE</p><p>$1.5</p></div>
          <input className='inp'
          placeholder='QTY:'
          type="number"
          step="0.01"
          min="0"
          value={rippleQuantity}
          onChange={e => setRippleQuantity(parseFloat(e.target.value))}
        />
          <button className="btn btn-info" onClick={() => handleAddToCart('RIPPLE', rippleQuantity)}>Add</button>
        </div>
        </div>

        <div className="cart">
        <h2>MY CART </h2>

        <p>
          {cartItems.map((item, index) => (
            <p key={index}>
              {item.coin}: Quantity: {item.quantity}, Amount: ${item.amount.toFixed(2)}
            </p>
          ))}
        </p>
        <h2>Cart Total: ${cartTotal.toFixed(2)}</h2>
      </div>
    </div>
    </div>
  );
}

export default App;
