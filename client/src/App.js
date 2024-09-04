import './App.css';
import Products from './views/Products';
import AddProducts from './views/AddProduct';

function App() {
  return (
    <div className="App">
      <AddProducts/>
      <Products/>
    </div>
  );
}

export default App;
