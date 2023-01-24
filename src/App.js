import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/checkout' element={<Checkout />}/>
          
          <Route path='/login' element={<Login />}/>

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
