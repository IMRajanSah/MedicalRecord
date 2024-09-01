import './addCustomer.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


import FloatingLabel from 'react-bootstrap/FloatingLabel';
function AddCustomer() {
    return (
      <div className='add-customer'>
        <div className='customer-title'>
          <p>Register New Customer</p>
        </div>
        <div className='customerForm'>
          <Form>
            <Row className='mb-3'>
              <Col>
                <p>Link Customer with Agent</p>
                <FloatingLabel label='Agent ID*'>
                  <Form.Control type='number' placeholder='' required />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Form.Label>Customer Details</Form.Label>
              <Col>
                <FloatingLabel label='Name*'>
                  <Form.Control type='text' placeholder='' required />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label='Address*'>
                  <Form.Control type='text' placeholder='' required />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label='Mobile Number*'>
                  <Form.Control type='tel' placeholder='' required />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col>
                <FloatingLabel label='Total Amount*'>
                  <Form.Control type='number' placeholder='' required />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label='Amount Paid*'>
                  <Form.Control type='number' placeholder='' required />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label='Applied Country*'>
                  <Form.Control type='tel' placeholder='' required />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col>
                <FloatingLabel label='Height'>
                  <Form.Control type='number' placeholder='' />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label='Weight'>
                  <Form.Control type='number' placeholder='' />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel label='Blood Group'>
                  <Form.Control type='text' placeholder='' />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col>
                <FloatingLabel label='Work*'>
                  <Form.Control type='text' placeholder='' required />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label='Date Created (Optional)'>
                  <Form.Control type='date' placeholder='' />
                </FloatingLabel>
              </Col>
              <Col></Col>
            </Row>

            <Button variant='dark' type='submit'>
              Preview
            </Button>
          </Form>
        </div>
      </div>
    );
  }
  
  export default AddCustomer;