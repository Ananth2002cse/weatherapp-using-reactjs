
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  
  return (
    <div>
    
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
