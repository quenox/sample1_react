import './App.css';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
