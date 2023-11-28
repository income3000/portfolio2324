import './App.css';
import Accomplishments from "./components/Accomplishments";
import Bio from "./components/Bio";
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="navbar">
     <NavBar />
      {/* <span><NavLink to='Bio'>Work History</NavLink></span>
      <span><NavLink to='Home'>Skills</NavLink></span>
      <span><NavLink to='Accomplishments'>Projects</NavLink></span> */}
      </header>

      

      <Routes>
      <Route path='Home' element={ <Home /> } /> 
      <Route path='Accomplishments' element={ <Accomplishments /> }/>
      <Route path='Bio' element={<Bio />}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
