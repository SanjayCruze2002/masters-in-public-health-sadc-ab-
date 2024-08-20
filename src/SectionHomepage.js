import Button from 'react-bootstrap/Button';
import Homenavber from './SectionNavbar';

function Homepage() {
  return (
    <section className='Homepage'>
         <div class="container-fluid"> 
           <div class="row">
            <div class="col-sm-12 bg-navber text-dark">
             <div class="container-fluid"> 
              <div class="row">
                    <div class="col-sm-12">
                    </div>
                  </div>
              </div>
            </div>
           </div>
         </div>
         <div class="container home-content"> 
          <div class="row">
            <div class="col-sm-6 p-3">
             <h1 className='home-content-h1 text-white'>Revolutionize Your Nation <br/> And Locality With The Power <br/> Of A <strong className='text-yellow'>Master Of Public Health</strong></h1>
             <Button className='home-button'>Apply Now!</Button>
            </div>
            <div class="col-sm-6  p-3">
            <img className='banner-img' src='mbchp-banner-01-min.png'/>
            </div>
          </div>
         </div>
    </section>
  );
}

export default Homepage;