import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Navbar } from './components/Navbar';
import { UserDetails } from './components/UserDetails';

function App() {

  return (    
      <div className="App">
        <Router>
          <div className="background-opacity"></div>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>
            <Route path='/Search' element={<Search />}>
            </Route>
            <Route path='/UserDetails' element={<UserDetails />}>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
