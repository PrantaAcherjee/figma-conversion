import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Saved from './pages/Saved';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/saved' element={<Saved/>}></Route>
      </Routes>      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>      
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
