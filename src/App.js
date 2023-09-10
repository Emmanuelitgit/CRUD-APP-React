import React from 'react';
import './style.css';
import { Add } from './Pages/Add';
import { Books } from './Pages/Books';
import { Update } from './Pages/Update';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;


