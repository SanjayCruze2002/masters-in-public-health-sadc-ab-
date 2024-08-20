import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function FAQsection() {
  return (
    <Container fluid className='fAQ'>
      <Row>
        <Col>
        <Row className='Row-FAQ'>
        <Col>
         <h1 className='text-center FAQ-head mt-5'>Frequently Asked Questions</h1>
        </Col>
      </Row>
          <div class="container mt-4">
            <div class="row">
              <div class="col-sm-6  text-white p-3">
               <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What makes Texila’s Master of Public Health (MPH) program unique?</Accordion.Header>
        <Accordion.Body>
        Our MPH program offers unparalleled flexibility. With a dynamic LMS, you can learn anytime, anywhere, supported by dedicated student coordinators for seamless education.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Who can enroll in the Master of Public Health program?</Accordion.Header>
        <Accordion.Body>
        To qualify, you need a Bachelor’s degree in Public Health, Medicine, Nursing, Dentistry, Pharmacy,
         Physiotherapy, Environmental Health, Biomedical Science, Health Science/Education, or Social Work.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Is MPH from TAU Zambia Accredited?</Accordion.Header>
        <Accordion.Body>
        Master of Public health offered by TAU Zambia is approved by Higher Education Authority, Ministry of Higher Education and Health Professions council of Zambia
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
              </div>
              <div class="col-sm-6 text-white p-3">
              <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="4">
        <Accordion.Header>What kind of support can I expect during my studies?</Accordion.Header>
        <Accordion.Body>
        Our student coordinators guide you through every stage, from faculty interactions to project completion. For cutting-edge research, access our rich digital library and e-journals.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What are the benefits of joining Texila’s MPH program?</Accordion.Header>
        <Accordion.Body>
        Join over 1000 passionate students, engage in dynamic block-based learning, and enjoy flexible payment plans. Experience the Texila advantage and redefine health education!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What opportunities will I have after graduation?</Accordion.Header>
        <Accordion.Body>
        Join our alums in the WHO, UN, NGOs, and government ministries. With Texila’s MPH, you’ll lead groundbreaking health initiatives and excel in public health.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              </div> 
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default FAQsection;