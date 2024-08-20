import ContactForm from "./SectionFormvalidation";

function Formpage() {
  return (
    <div class="container-fluid formpage">                                                                                                                                                                                      
    <div class="row">
        <div class="col-sm-2 empty text-white p-3">
        
        </div>
        <div class="col-sm-5 bg-section-2 p-3">
         <div class="container mt-3">
          <div class="row">
            <h2 className="section2-text-head">Master Of Public Health</h2>
            <p className="Section-text-p mt-4">Elevate your career with a Master’s in Public Health,
                 a renowned professional milestone! Our program prepares you for leadership roles and
                  empowers you with the essential skills to thrive in governmental, non-profit, and
                   private sectors within the dynamic public health landscape. Empower Your Future
                    with Texila’s Master of Public Health Program! Unleash your potential to shape and lead
                     groundbreaking health education initiatives, armed with the administrative, ethical,
                      and professional prowess needed for the forefront of public health excellence!</p>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 p-3">
                <p className="background-yellow bold">On-Campus</p>
                <ul className="ps-5 mt-2 ">
                <li className="blue ">Embark on a 2-year journey to excellence!</li>
                <li className="blue mt-2">Qualify with a Bachelor’s in Public Health, Medicine,
                     Nursing, Dentistry, Pharmacy, Physiotherapy, Environmental Health, Bio-medical Science,
                      Health Science/Education, or Social Work and unlock the door to endless possibilities.</li>
                </ul>
              </div>
             </div>
           </div>
          </div>
         </div>
        </div>
        <div class="col-sm-3 bg-form text-white p-3">
          <div class="container mt-3">
           <div class="row">
            <div class="col-sm-12 Form-bg text-white p-3">
            <ContactForm/>
            </div>
           </div>
         </div>
        </div>
        <div class="col-sm-2 empty text-white p-3">
        </div>
    </div>
  </div>
  );
}

export default Formpage;