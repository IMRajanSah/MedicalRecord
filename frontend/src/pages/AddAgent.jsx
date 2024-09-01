import './addAgent.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
function AddAgent() {
    return (
      <div className='add-agent'>
        <div className='agent-title'><p>Register New Agent</p></div>
        <div className='agentForm'>
          <Form>
            <Row className='mb-3'>
              <Col>
                <FloatingLabel
                  label='Agent ID*'
                >
                  <Form.Control type='number' placeholder='h' required/>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  label='Name*'
                >
                  <Form.Control type='text' placeholder='h' required/>
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col>
                <FloatingLabel
                  label='Address*'
                >
                  <Form.Control type='text' placeholder='h' required/>
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='mb-3'>
              <Col>
                <FloatingLabel
                  label='Mobile Number*'
                >
                  <Form.Control type='tel' placeholder='h' required/>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  label='Date Created (Optional)'
                >
                  <Form.Control type='date'/>
                </FloatingLabel>
              </Col>
            </Row>

            <Button variant='dark' type='submit'>
              Preview
            </Button>
          </Form>
        </div>
      </div>
    );
  }
  
  export default AddAgent;