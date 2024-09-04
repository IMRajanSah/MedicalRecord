import React from 'react'
import { useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import {useReactToPrint} from 'react-to-print'
const Success = (props) => {
  const printRef = useRef()
  const handlePrint = useReactToPrint({
    content:()=>printRef.current,
  })
  if (props.dataType === 'agent') {
    let docTitle = props.data.agentID+"-"+props.data.agentName
    return (
      <div style={{padding:"3rem 2rem"}}>
        <p><b>Agent Registered Successfully ! </b></p>
        <Button variant='dark' onClick={handlePrint}>Print</Button>
        <div ref={printRef} className="app-details">
                <Table responsive dark>
                    <thead>
                        <tr>
                            <th>Agent ID</th>
                            <th>Agent Name</th>
                            <th>Agent Address</th>
                            <th>Mobile Number</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.data.agentID}</td>
                            <td>{props.data.agentName}</td>
                            <td>{props.data.agentAddress}</td>
                            <td>{props.data.agentMobileNumber}</td>
                            <td>{props.data.agentDateCreated}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
      </div>
    );
  }else{
    return (
        <div>
          {props.dataType}, {props.data.CustomerName}, {props.msg}
        </div>
      );
  }
};

export default Success;
