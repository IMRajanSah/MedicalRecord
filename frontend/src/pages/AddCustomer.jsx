import './addCustomer.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import axios from 'axios';
import Success from '../Components/Success';
import SuccessCustomerRegister from './SuccessCustomerRegister';
function AddCustomer() {
  let [customertData, setCustomerData] = useState({
    MedicalNumber: '',
    CustomerName: '',
    Address: '',
    MobileNumber: '',
    Height: '',
    Weight: '',
    BloodGroup: '',
    ToBePaidByCustomer: '',
    PaidToCustomer: '',
    AppliedCountry: '',
    CutomerWork: '',
    RelatedAgent: '',
    dateCreated: '',
  });
  const handleInput = (event) => {
    setPostError('')
    setPostSuccess('')
    setCustomerData({ ...customertData, [event.target.name]: event.target.value });
  };
  let [postError,setPostError] = useState('')
  let [postSuccess,setPostSuccess] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    setPostError('')
    setPostSuccess('')
    // console.log(agentData);
    // setPostError('')
    axios
      .post('http://localhost:8081/addCustomer', customertData)
      .then((res) => {
        setPostSuccess(res.data)
        // console.log(res.data)
        // console.log(res.status);
      })
      .catch((err) => {
        if(err.toJSON().message==='Network Error'){
          setPostError(err.toJSON().message + ": Server Not Started")
        }else{
          setPostError(err.code+': '+err.response.statusText)
        }
        console.log(err);
      });
  };

  return (
    <div className='add-customer'>
    {postSuccess.length > 0 ?(<SuccessCustomerRegister msg={postSuccess} dataType='customer' data={customertData}/>):(
      <>
      <div className='customer-title'>
        <p style={{fontSize:"1rem"}}>Register New Customer</p>
        {postError.length > 0 ? (<p style={{color:'red',fontSize:'1.25rem',fontWeight:'400'}}>{postError}</p>):null}
      </div>
      <div className='customerForm'>
        <Form onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Col>
              <p>Link Customer with Agent</p>
              <FloatingLabel label='Agent ID*'>
                <Form.Control type='number' placeholder='' name='RelatedAgent' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Form.Label>Customer Details</Form.Label>
            <Col>
              <FloatingLabel label='Name*'>
                <Form.Control type='text' placeholder='' name='CustomerName' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Medical Number*'>
                <Form.Control type='number' placeholder='' name='MedicalNumber' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Mobile Number*'>
                <Form.Control type='tel' placeholder='' name='MobileNumber' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col>
              <FloatingLabel label='Total Amount*'>
                <Form.Control type='number' placeholder='' name='ToBePaidByCustomer' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Amount Paid*'>
                <Form.Control type='number' placeholder='' name='PaidToCustomer' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Applied Country*'>
                <Form.Control type='tel' placeholder='' name='AppliedCountry' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-3'>
          <Col>
              <FloatingLabel label='Address*'>
                <Form.Control type='text' placeholder='' name='Address' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Work*'>
                <Form.Control type='text' placeholder='' name='CutomerWork' onChange={handleInput} required />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Height (Optional)'>
                <Form.Control type='number' placeholder='' name='Height' onChange={handleInput} />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-3'>
          <Col>
              <FloatingLabel label='Weight (Optional)'>
                <Form.Control type='number' placeholder='' name='Weight' onChange={handleInput} />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Blood Group (Optional)'>
                <Form.Control type='text' placeholder='' name='BloodGroup' onChange={handleInput} />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Date Created (Optional)'>
                <Form.Control type='date' placeholder='' name='dateCreated' onChange={handleInput} />
              </FloatingLabel>
            </Col>
          </Row>

          <Button variant='dark' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
      </>
    )}
    </div>
  );
}

export default AddCustomer;
