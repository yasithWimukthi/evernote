import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
