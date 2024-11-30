import './App.css';

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Mission from './pages/Mission';
import Page3 from './pages/Page3';
import Team from './pages/Team';
import Page5 from './pages/Page5';


function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/page5" element={<Page5 />} />


      </Routes>
    </Router>
    
  );
}

export default App;


// Max test text because of reasons