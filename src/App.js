
import './App.css';
import Boddy from './Boddy';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">



      {/*
     <Boddy />
      <Dashboard />
     */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Boddy />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
