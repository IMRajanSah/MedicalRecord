import React, { useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from "react-router-dom"; 

const SuccessAgentRegister = (props) => {
  const navigate = useNavigate();
  let docTitle = props.data.agentID+"-"+props.data.agentName
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:docTitle,
    pageStyle:"Table{margin:4rem 0rem 0rem 0rem }"
  });
  const navigateToRegister=()=>{
    navigate("/dashboard")
  }
    return (
      <div>
      <div style={{padding:"3rem 2rem"}}>
        <p><b>Agent Registered Successfully ! </b></p>
        <Button variant='dark' onClick={navigateToRegister}>Close</Button> &nbsp;
        <Button variant='dark' onClick={handlePrint}>Print</Button>
        <div ref={componentRef} >
                <Table responsive dark>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Agent Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Agent ID</td>
                          <td>{props.data.agentID}</td>
                        </tr>
                        <tr>
                          <td>Agent Name</td>
                          <td>{props.data.agentName}</td>
                        </tr>
                        <tr>
                          <td>Agent Address</td>
                          <td>{props.data.agentAddress}</td>
                        </tr>
                        <tr>
                          <td>Mobile Number</td>
                          <td>{props.data.agentMobileNumber}</td>
                        </tr>
                        <tr>
                          <td>Date Created</td>
                          <td>{props.data.agentDateCreated}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
      </div>
      </div>
    );
};
export default SuccessAgentRegister;