// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registerscreen from './components/screens/Registerscreen';
import Loginscreen from './components/screens/Loginscreen';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/register' element={<Registerscreen />} />
          <Route path='/login' element={<Loginscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
