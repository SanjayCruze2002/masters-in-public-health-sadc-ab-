import Button from 'react-bootstrap/Button';

function Benefits() {
    return (
      <div class="container-fluid testimonial">
       <div class="row">
        <div class="col-sm-12 text-white p-3">
         <div class="container">
          <div class="row">
           <div class="col-sm-6 text-white p-3">
               <h2 className="Benefits-header">Unlock the Texila Advantage</h2>
               <ul className="uldesign_list">
                <li className="mt-4">Join a diverse community of students form around the globe</li>
                <li className="mt-2">Experience the flexibility of online programs matching on-campus excellence.</li>
                <li className="mt-2">Engage in an interactive curriculum with dynamic block-based learning.</li>
                <li className="mt-2">Attain an internationally recognized degree</li>
                <li className="mt-2">Discover your true potential as a business professional</li>
                <li className="mt-2">Immerse yourself in state-of-the-art infrastructure.</li>
                <li className="mt-2">Benefit from internship placement assistance.</li>
                <li className="mt-2">Enjoy a flexible payment plan and so much more! Your pathway to success begins here!</li>
               </ul>
               <Button className='btn-section3 ms-3 mt-3'>Apply Now</Button>
           </div>
           <div class="col-sm-6 text-white p-3">
           <img className='Benefits-img' src='doctor-men-5-02-min.png'/>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
    );
  }
  
  export default Benefits;