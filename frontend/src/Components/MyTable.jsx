import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
// import XLSX from 'xlsx'
import * as XLSX from 'xlsx/xlsx';
import '../App.css'
import { useState } from 'react';
function MyTable(props) {
  const [searchVal,setSearchVal]=useState("")
  const exportExcel = (excelData) => {
    // console.log(excelData);
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(excelData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
    XLSX.writeFile(wb, 'MyExcel.xlsx');
  };
  if (props.value === 'Agent') {
    // console.log(props.data);
    return (
      <div style={{paddingLeft:"1.5rem"}}>
        {/* <p>{props.value} data</p> */}
        <div className="myflex">
        <Button variant='dark' onClick={() => exportExcel(props.data)}>
          Export to Excel
        </Button>
        <input onChange={(e) => setSearchVal(e.target.value)} placeholder="Search for Agent Names..."/>
        </div>
        <div style={{ maxHeight: "325px",overflowY: "auto" }}>
        <Table style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {props.data.filter((row)=>!searchVal.length || row.Name .toString() .toLowerCase() .includes(searchVal.toString().toLowerCase())).map((agent, index) => (
              <tr key={index}>
                <td>{agent.AgentID}</td>
                <td>{agent.Name}</td>
                <td>{agent.Address}</td>
                <td>{agent.MobileNumber}</td>
                <td>{agent.dateCreated.split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
      </div>
    );
  }
  if (props.value === 'Customer') {
    // console.log(props);
    return (
      <div style={{paddingLeft:"1.5rem"}}>
        {/* <p>{props.value} Data</p> */}
        <div className="myflex">
        <Button variant='dark' onClick={() => exportExcel(props.data)}>
          Export to Excel
        </Button>
        <input onChange={(e) => setSearchVal(e.target.value)} placeholder="Search for Customer Names..."/>
        </div>
        <div style={{ maxHeight: "315px",overflowY: "auto" }}>
        <Table>
          <thead>
            <tr>
              <th>Medical Number</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>[H,W,BG]*</th>
              <th>Balance*</th>
              <th>Applied Country</th>
              <th>Cutomer Work</th>
              <th>Related Agent</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {props.data.filter((row)=>!searchVal.length || row.CustomerName .toString() .toLowerCase() .includes(searchVal.toString().toLowerCase())).map((customer, index) => (
              <tr key={index}>
                <td>{customer.MedicalNumber}</td>
                <td>{customer.CustomerName}</td>
                <td>{customer.Address}</td>
                <td>{customer.MobileNumber}</td>
                <td>
                  [{customer.Height}, {customer.Weight}, {customer.BloodGroup}]
                </td>
                <td>
                  {customer.ToBePaidByCustomer - customer.PaidToCustomer} = (
                  {customer.ToBePaidByCustomer} - {customer.PaidToCustomer})
                </td>
                <td>{customer.CutomerWork}</td>
                <td>{customer.RelatedAgent}</td>
                <td>{customer.RelatedAgent}</td>
                <td>{customer.dateCreated.split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
        <span style={{ fontSize: '.65rem' }}>
          <span style={{ listStyle: 'none' }}>
            <small>
              *Balance= ToBePaidByCustomer - PaidToCustomer, *H - Height, *W -
              Weight, *BG - Blood Group
            </small>
          </span>
        </span>
      </div>
    );
  }
}

export default MyTable;
