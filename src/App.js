import './App.css';

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Footer from './components/Footer/Footer';



// Components
// import Header from './components/Header/Header';
// import GreenArticle from './components/GreenArticle/GreenArticle';
// import Article from './components/Article/Article';
// import Testimonials from './components/Testimonials/Testimonials';
// import CourseSchedule from './components/CourseSchedule/CourseSchedule';
// import JaredSpool from './components/JaredSpool/JaredSpool';
// import Pricing from './components/Pricing/Pricing';
// import VideoSeries from './components/VideoSeries/VideoSeries';
// import Footer from './components/Footer/Footer';


// function App() {
//   return (
//     <div className="App">

//       <Header />
//       < GreenArticle />
//       <Article />
//       <Testimonials />
//       <CourseSchedule />
//       {/* <Calendar /> */}
//       <JaredSpool />
//       <Pricing />
//       <VideoSeries />
//       <Footer />
//       {/*<FloatingComponent /> */}
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />


      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;


// Max test text because of reasons