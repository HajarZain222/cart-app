import { Route, Routes } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Cart from './components/Cart';
import Products from './components/Products';

//  hajora-app.surge.sh 

function App() {

  return (
    <div className="App">
      <AppNavBar />
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
