import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [contactNumber, setContactNumber] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [useContactAsWhatsApp, setUseContactAsWhatsApp] = useState(false);

  const handleContactNumberChange = (e) => {
    const { value } = e.target;
    setContactNumber(value);
    // Update WhatsApp number if checkbox is checked
    if (useContactAsWhatsApp) {
      setWhatsAppNumber(value);
    }
  };

  const handleCheckboxChange = () => {
    
    setUseContactAsWhatsApp(!useContactAsWhatsApp);
    // Set WhatsApp number to contact number if checkbox is checked
    if (!useContactAsWhatsApp) {
      setWhatsAppNumber(contactNumber);
    } else {
      setWhatsAppNumber('');
    }
  };
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs as they change
    let error = '';
    switch (name) {
      case 'username':
        error = value.length < 3 ? 'Username must be at least 3 characters long' : '';
        alert('Form has errors. Please correct them.');
        break;
      case 'email':
        error = !/\S+@\S+\.\S+/.test(value) ? 'Email address is invalid' : '';
        break;
      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       
    if (contactNumber.length < 7) {
      alert('Contact number must be at least 7 digits long.');
      return;
    }
    // Check if there are any errors
    for (const key in formErrors) {
      if (formErrors[key]) {
        alert('Form has errors. Please correct them.');
        return;
      }
    }

    // Proceed with form submission logic (e.g., send data to server)
    console.log(formData);
  };

  return (
        <div class="container mt-3">
                  <div class="row"> 
                    <div class="col-sm-12 text-white p-3">
                        <h4 className='form-head-title'>Register Now…</h4>
                      <Form onSubmit={handleSubmit}>
                  <Row>
                   <Col>
                  <Form>
                     <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control  type="text" name="username" placeholder='Name *' value={formData.username} onChange={handleChange} required />
                      {formErrors.username && <span>{formErrors.username}</span>}
                     </Form.Group>
                    </Form>
                   </Col>
                   </Row>
                   <Row>
                   <Col>
                    <Form>
                     <Form.Group className="mb-3" controlId="formGroupEmail">
                       <Form.Control type="email" name="email" placeholder='Email *' value={formData.email} onChange={handleChange} required/>
                       {formErrors.email && <span>{formErrors.email}</span>}
                     </Form.Group>
                    </Form>
                   </Col>
                   </Row>
                  <Row>
                   <Col>
                    <Form>
                     <Form.Group as={Col} controlId="formGridState">
                      <Form.Select defaultValue="Select Country *">
                       <option>Select Country *</option>
                       <option>+91</option>
                      </Form.Select>
                     </Form.Group>
                    </Form>
                   </Col>
                   </Row>
                   <Row>
                   <Col className='mt-3'>
                    <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                       <Form.Control type="number" placeholder="Contact Number *" value={contactNumber} onChange={handleContactNumberChange}/>
                     </Form.Group>
                    </Form>
                   </Col>
                   </Row>
                  <Row>
                   <Col>
                    <Form>
                     <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Control type="text" placeholder="WhatApp Contect Numbar*" value={whatsAppNumber}/>
                     </Form.Group>
                    </Form>
                   </Col>
                   </Row>
                   <Row>
                   <Col>
                   <Form.Group as={Col} controlId="formGridState">
                      <Form.Select defaultValue="Select Country *">
                       <option>Current Qulification *</option>
                       <option>CSEC</option>
                       <option>CAPE</option>
                       <option>Completed O levels / Senior Secondary Education</option>
                       <option>Completed O levels / Higher Secondary</option>
                       <option>Grade 12th or a Level</option>
                       <option>Diploma in Science Streams</option>
                       <option>Bachelors in Science Science Streams</option>
                      </Form.Select>
                     </Form.Group>
                   </Col>
                   </Row>
                   <Row>
                   <Col>
                    <Form>
                    <Form.Group className="mb-3 checkbox mt-3">
                     <Form.Check
                       label="Same as Contact Number"
                        feedbackType="invalid"
                        checked={useContactAsWhatsApp}
                        onChange={handleCheckboxChange}
                         />
                    </Form.Group>
                    </Form>
                   </Col>
                  </Row>
                  <Row>
                   <Col>
                    <Form>
                    <Form.Group className="mb-3 checkbox">
                     <Form.Check
                       label=" I agree with Texila’s Terms of Service and Privacy
                        Policy and provide my consent to receive marketing communications from Texila American University."
                        feedbackType="invalid"
                         />
                    </Form.Group>
                    </Form>
                   </Col>
                  </Row>
                   <Row>
                   <Col>
                   </Col>
                   <Col>
                   </Col>
                   </Row>
                   <Row>
                    <Col>
                    <Button type='Submit' className='Form-button mt-4'>Submit</Button>
                    </Col>
                   </Row>
                   </Form>
                    </div> 
                  </div>
                </div>
  );
};
export default ContactForm;