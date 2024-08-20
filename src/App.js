import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './SectionHomepage';
import Formpage from './SectionFormpage';
import Advantages from './SectionAdvantages';
import Testimonial from './SectionTestimonial';
import SectionAlumini from './SectionAlumini';
import Benefits from './SectionBenefits';
import FAQsection from './SectionFAQ';
import Footer from './SectionFooter';
import Homenavber from './SectionNavbar';


function App() {
  return (
    <>
    <Router>
      <Homenavber/>
     <Routes>
      <Route path="/Home" element={<Homepage/>} />
      <Route path="/Program Structure" element={<Advantages/>} />
      <Route path="/Benefits" element={<Testimonial/>} />
      <Route path="/Apply NOW" element={<Formpage/>} />
     </Routes>
    </Router>
    
    <Formpage/>
    <Advantages/>
    <Testimonial/>
    <SectionAlumini/>
    <Benefits/>
    <FAQsection/>
    <Footer/> 
    </>
  );
}

export default App;
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Homepage from './SectionHomepage';
// import Formpage from './SectionFormpage';
// import Advantages from './SectionAdvantages';
// import Testimonial from './SectionTestimonial';
// import SectionAlumini from './SectionAlumini';
// import Benefits from './SectionBenefits';
// import FAQsection from './SectionFAQ';
// import Footer from './SectionFooter';
// import Homenavber from './SectionNavbar';

// function App() {
//   return (
//     <Router>
//       <Homenavber /> {/* Navbar should appear on every page */}
      
//       <Routes>
//         <Route path="/Home" element={<Homepage />} />
//         <Route path="/Program Structure" element={<Advantages />} />
//         <Route path="/Benefits" element={<Testimonial />} />
//         <Route path="/Apply NOW" element={<Formpage />} />
//         {/* Default route to Homepage */}
//         <Route path="/" element={<Homepage />} />
//       </Routes>
      
//       {/* Sections that should appear on every page */}
//       <SectionAlumini />
//       <Benefits />
//       <FAQsection />
//       <Footer />
//     </Router>
//   );
// }

// export default App;