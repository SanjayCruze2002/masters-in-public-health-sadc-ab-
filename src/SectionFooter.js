import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function  Footer() {
  return (
    <Container fluid className='footer bg-dark text-white'>
      <Row>
        <Col>
        <p className='text-center footer-text mt-2'>© 2024 Texila American University. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;