import './addAgent.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { useState } from 'react';
import Success from '../Components/Success';
import SuccessAgentRegister from './SuccessAgentRegister';
function AddAgent() {
  let [agentData, setAgentData] = useState({
    agentID: '',
    agentName: '',
    agentAddress: '',
    agentMobileNumber: '',
    agentDateCreated: '',
  });
  let [postError,setPostError] = useState('')
  let [postSuccess,setPostSuccess] = useState('')
  
  const handleInput = (event) => {
    setPostError('')
    setPostSuccess('')
    setAgentData({ ...agentData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(agentData);
    setPostError('')
    setPostSuccess('')
    axios
      .post('http://localhost:8081/addAgent', agentData)
      .then((res) => {
        setPostSuccess(res.data)
        console.log(res.data)
        console.log(res.status);
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
    <div className='add-agent'>
    {postSuccess.length > 0 ?(<SuccessAgentRegister msg={postSuccess} dataType='agent' data={agentData}/>):(
      <>
      <div className='agent-title'>
        <p>Register New Agent</p>
        {postError.length > 0 ? (<p style={{color:'red',fontSize:'1.25rem',fontWeight:'400'}}>{postError}</p>):null}
      </div>
      <div className='agentForm'>
        <Form onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Col>
              <FloatingLabel label='Agent ID*'>
                <Form.Control
                  type='number'
                  placeholder='h'
                  onChange={handleInput}
                  name='agentID'
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label='Name*'>
                <Form.Control
                  type='text'
                  placeholder='h'
                  onChange={handleInput}
                  name='agentName'
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col>
              <FloatingLabel label='Address*'>
                <Form.Control
                  type='text'
                  placeholder='h'
                  onChange={handleInput}
                  name='agentAddress'
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col>
              <FloatingLabel label='Mobile Number*'>
                <Form.Control
                  type='tel'
                  placeholder='h'
                  onChange={handleInput}
                  name='agentMobileNumber'
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <FloatingLabel label='Date Created (Optional)'>
                <Form.Control
                  type='date'
                  onChange={handleInput}
                  name='agentDateCreated'
                />
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

export default AddAgent;
