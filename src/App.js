import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
        <Nav/>
        <Home/>
    </div>
  );
}

export default App;
