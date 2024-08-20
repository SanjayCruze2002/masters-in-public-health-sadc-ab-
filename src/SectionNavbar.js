import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Homenavber = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  return (
    <>
      <Navbar expand="lg" className='Section-Navber'>
        <Navbar.Brand href="#home">
          <img className='img-logo' src='zm-logo-1.png' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleOffcanvas} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end responsive">
          {/* <Nav className="ml-auto navbar-body-win">
              <Link className='text-navber' to="/Apply Now">Apply Now</Link>
              <Link className='text-navber' to="/Benefits">Benefits</Link>
              <Link className='text-navber' to="/contact">Program Structure</Link>
              <Link className='text-navber' to="/contact">Program Structure</Link>
          </Nav> */}
            <Nav className="ml-auto navbar-body-win">
             <ul>
              <Link className='text-navber' to="/Home">Home</Link>
              <Link className='text-navber' to="/Benefits">Benefits</Link>
              <Link className='text-navber' to="/Program Structure">Program Structure</Link>
              <Link className='text-navber' to="/Apply Now">Apply Now</Link>
             </ul>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={handleOffcanvas} placement="end" className="custom-offcanvas">
       <div className="logo-container">
         <img src="zm-logo-1.png" alt="Logo" className="logo" />
       </div>
        <Offcanvas.Header closeButton className='custom-close-button toggle-navbar-body'>
        </Offcanvas.Header>
        <Offcanvas.Body className='navbar-body toggle-navbar-body'>
          {/* <Nav className="flex-column">
            <Nav.Link className='text-navber text-center mt-2' href="#action1" onClick={handleOffcanvas}>Apply Now</Nav.Link>
            <Nav.Link className='text-navber text-center mt-2' href="#action2" onClick={handleOffcanvas}>Benefits</Nav.Link>
            <Nav.Link className='text-navber text-center mt-2' href="#action4" onClick={handleOffcanvas}>Program Structure</Nav.Link>
            <Nav.Link className='text-navber text-center mt-2' href="#action5" onClick={handleOffcanvas}>Testimonials</Nav.Link>
          </Nav> */}
          <Nav className="flex-column">
             <ul>
              <Link className='text-navber-mobile text-center mt-2' onClick={handleOffcanvas} to="/Home">Home</Link>
              <Link className='text-navber-mobile text-center mt-2' onClick={handleOffcanvas} to="/Benefits">Benefits</Link>
              <Link className='text-navber-mobile text-center mt-2' onClick={handleOffcanvas} to="/contact">Program Structure</Link>
              <Link className='text-navber-mobile text-center mt-2' onClick={handleOffcanvas} to="/Apply Now">Apply Now</Link>
             </ul>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Homenavber;