import React, { useState } from 'react';
import './GetData.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import axios from 'axios';
import * as XLSX from 'xlsx/xlsx';

const GetData = () => {
  const [dateData,setdateData]=useState('')
  const [postError1,setPostError1]=useState('')
  const [postSuccess1,setpostSuccess1]=useState('')

  const handleInputDate = (event) => {
    setPostError2('')
    setpostSuccess2('')
    setdateData(event.target.value.toString());
    // console.log(dateData);
    
  };
  const handleSubmitDate = (event) => {
    event.preventDefault();
    setPostError1('')
    setpostSuccess1('')
    // console.log(agentData);
    // setPostError('')
    // console.log(agentID);
    axios
      .post('http://localhost:8081/getCustomerByDate', {dateData})
      .then((res) => {
        // console.log(res.data);
        if(res.data.length===0){
          setPostError1("No Customer Registered on this Date")
        }else{
        setPostpostData(res.data)        
        setpostSuccess1('Sucessfull !')
          var wb = XLSX.utils.book_new(),
           ws = XLSX.utils.json_to_sheet(res.data);
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
          XLSX.writeFile(wb,"Customer-"+ dateData+'.xlsx');
        }
      })
      .catch((err) => {
        // if(err.toJSON().message==='Network Error'){
        //   setPostError2(err.toJSON().message + ": Server Not Started")
        // }else{
        //   setPostError2(err.code+': '+err.response.statusText)
        // }
        console.log(err);
      });
  };

  const [agentID,setagentID]=useState('')
  const [postError2,setPostError2]=useState('')
  const [postSuccess2,setpostSuccess2]=useState('')
  const [postData,setPostpostData]=useState()

  const handleInputAgentID = (event) => {
    setPostError2('')
    setpostSuccess2('')
    setagentID(event.target.value);
  };
  const handleSubmitAgentID = (event) => {
    event.preventDefault();
    setPostError2('')
    setpostSuccess2('')
    setPostpostData()
    // console.log(agentData);
    // setPostError('')
    // console.log(agentID);
    axios
      .post('http://localhost:8081/getCustomerByAgentID', {agentID})
      .then((res) => {
        console.log(res.data);
        if(res.data.length===0){
          setPostError2("Agent does not exist or no customer linked")
        }else{
        setPostpostData(res.data)
        setpostSuccess2('Sucessfull !')
          var wb = XLSX.utils.book_new(),
           ws = XLSX.utils.json_to_sheet(res.data);
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
          XLSX.writeFile(wb, res.data[0].AgentID+"-"+res.data[0].Name+'.xlsx');
        }
      })
      .catch((err) => {
        // if(err.toJSON().message==='Network Error'){
        //   setPostError2(err.toJSON().message + ": Server Not Started")
        // }else{
        //   setPostError2(err.code+': '+err.response.statusText)
        // }
        console.log(err);
      });
      
  };

  return (
    <div className='get-data'>
      <div className='get-data-title'>
        <p className='title'>Get Data</p>
      </div>
      <div className="data">
      <div className='customerList'>
        <p>Customer list registered on specific date</p>
        {postError1.length > 0 ? (<p style={{color:'red',fontSize:'1.25rem',fontWeight:'400'}}>{postError1}</p>):null}
      {postSuccess1.length > 0 ? (<p style={{color:'green',fontSize:'1.25rem',fontWeight:'400'}}>{postSuccess1}</p>):null}
        <FloatingLabel label='Date' style={{width:'65%'}}>
          <Form.Control
            type='Date'
            placeholder=''
            name='dateCustomer'
            onChange={handleInputDate}
            required
          />
        </FloatingLabel><br></br>
        <Button variant='dark' onClick={handleSubmitDate}>
          Download
        </Button>
      </div>
      <div className='agentDetails'>
      <p>Customer list registered by an Agent</p>
      {postError2.length > 0 ? (<p style={{color:'red',fontSize:'1.25rem',fontWeight:'400'}}>{postError2}</p>):null}
      {postSuccess2.length > 0 ? (<p style={{color:'green',fontSize:'1.25rem',fontWeight:'400'}}>{postSuccess2}</p>):null}
        <FloatingLabel label='Agent ID' style={{width:'65%'}}>
          <Form.Control
            type='number'
            placeholder=''
            name='agentID'
            onChange={handleInputAgentID}
            required
          />
        </FloatingLabel><br></br>
        <Button variant='dark' onClick={handleSubmitAgentID}>
          Download
        </Button>
      </div>
      </div>
    </div>
  );
};

export default GetData;
