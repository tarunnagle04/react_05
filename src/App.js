import './App.css';
import ClickCounter from './components/high-order-function/ClickCounter';
import HoverCounter from './components/high-order-function/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
