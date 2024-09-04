import React, { useRef } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';

const SuccessCustomerRegister = (props) => {
  let docTitle = props.data.MedicalNumber+"-"+props.data.CustomerName
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:docTitle,
    pageStyle:"Table{margin:4rem 0rem 0rem 0rem }"
  });
    return (
      <div>
      <div style={{padding:"3rem 2rem"}}>
        <p><b>Customer Registered Successfully ! </b></p>
        <Button variant='dark' onClick={handlePrint}>Print</Button>
        <div ref={componentRef} >
                <Table responsive dark>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Medical Number</td>
                          <td>{props.data.MedicalNumber}</td>
                        </tr>
                        <tr>
                          <td>Customer Name</td>
                          <td>{props.data.CustomerName}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>{props.data.Address}</td>
                        </tr>
                        <tr>
                          <td>Mobile Number</td>
                          <td>{props.data.MobileNumber}</td>
                        </tr>
                        <tr>
                          <td>Height</td>
                          <td>{props.data.Height}</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td>{props.data.Weight}</td>
                        </tr>
                        <tr>
                          <td>Blood Group</td>
                          <td>{props.data.BloodGroup}</td>
                        </tr>
                        <tr>
                          <td>Total Amount</td>
                          <td>{props.data.ToBePaidByCustomer}</td>
                        </tr>
                        <tr>
                          <td>Paid</td>
                          <td>{props.data.PaidToCustomer}</td>
                        </tr>
                        <tr>
                          <td>Applied Country</td>
                          <td>{props.data.AppliedCountry}</td>
                        </tr>
                        <tr>
                          <td>Cutomer Work</td>
                          <td>{props.data.CutomerWork}</td>
                        </tr>
                        <tr>
                          <td>Related Agent</td>
                          <td>{props.data.RelatedAgent}</td>
                        </tr>
                        <tr>
                          <td>Date Created</td>
                          <td>{props.data.dateCreated}</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
      </div>
      </div>
    );
}

export default SuccessCustomerRegister