import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import ManageInventories from './component/ManageInventories/ManageInventories';
import Signup from './component/Signup/Signup';
import Update from './component/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
          <Route path='/inventory/:id' element={<Inventory/>}></Route>
          <Route path='/product' element={<ManageInventories/>}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
    </div>
  );
}

export default App;
