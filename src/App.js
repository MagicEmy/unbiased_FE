import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from './components/Create';
import Apply from './components/Apply';

function App() {
  return (
    <div>
      <h1 className="App-header">UNBIASED</h1>
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
