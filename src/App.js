import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './component/AddProduct/AddProduct';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import ManageInventories from './component/ManageInventories/ManageInventories';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Signup from './component/Signup/Signup';
import Update from './component/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/inventory/:id' element={<RequireAuth><Inventory/></RequireAuth> }></Route>
          <Route path='/product' element={<RequireAuth><ManageInventories/></RequireAuth>}></Route>
          <Route path='/add' element={<AddProduct />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
    </div>
  );
}

export default App;
