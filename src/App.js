import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './assets/logo.png'
import Create from './components/Create';
import Apply from './components/Apply';

function App() {
  return (
    <div>
      <img src={logo} className="logo"/>
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/apply/:jobToken" element={<Apply/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
