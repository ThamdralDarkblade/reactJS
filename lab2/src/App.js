import logo from './logo.svg';
import './App.css';
import {MyCounter} from "./components/MyCounter";
import {CounterList} from "./components/CounterList";
import {Cart} from "./components/Cart";
import {Game} from "./components/Game";

const counters = [
  {id: 1, initial:6, min: -5, max:10},
  {id: 2, initial:5},
  {id: 3}
]

const cartItems = [
  {name: "Berserk 1 (Jets Comics)", price:580, min: 1, max:2},
  {name: "Jujutsu Kaisen 20 [Special Edition, w/ 20 pins] (Jump Comics)", price:2700},
  {name: "Chainsaw Man 12 (Jump Comics)", price:440, min: 3, max:10}
]

function App() {
  return (
    <div className="App">
      {MyCounter()}
      {CounterList(counters)}
      {Cart(cartItems)}
      {Game()}
    </div>
  );
}

export default App;
