import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap'
// import XLSX from 'xlsx'
import * as XLSX from 'xlsx/xlsx';
function MyTable(props) {
    const exportExcel = (excelData)=>{
        // console.log(excelData);
        var wb = XLSX.utils.book_new(),
        ws = XLSX.utils.json_to_sheet(excelData);
        XLSX.utils.book_append_sheet(wb,ws,"Sheet");
        XLSX.writeFile(wb,"MyExcel.xlsx")
    }
    if(props.value=="Agent"){
    // console.log(props.data);
        return(
            <>
            {/* <p>{props.value} data</p> */}
            <Button variant='dark' onClick={()=>exportExcel(props.data)}>Export to Excel</Button>
            <Table responsive>
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
                    {props.data.map((agent,index)=>(
                        <tr key={index}>
                            <td>{agent.AgentID}</td>
                            <td>{agent.Name}</td>
                            <td>{agent.Address}</td>
                            <td>{agent.MobileNumber}</td>
                            <td>{(agent.dateCreated).split('T')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
      </>
        );
    }
    if(props.value=="Customer"){
    // console.log(props);
        return (
            <>
            {/* <p>{props.value} Data</p> */}
            <Button variant='dark' onClick={()=>exportExcel(props.data)}>Export to Excel</Button>
                <Table responsive>
                <thead>
                    <tr>
                        <th>Medical Number</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Mobile Number</th>
                        <th>[H,W,BG]</th>
                        <th>Balance = ( ToBePaidByCustomer - PaidToCustomer )</th>
                        <th>Applied Country</th>
                        <th>Cutomer Work</th>
                        <th>Related Agent</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody style={{}}>
                    {props.data.map((agent,index)=>(
                        <tr key={index}>
                            <td>{agent.MedicalNumber}</td>
                            <td>{agent.CustomerName}</td>
                            <td>{agent.Address}</td>
                            <td>{agent.MobileNumber}</td>
                            <td>[{agent.Height},{agent.Weight},{agent.BloodGroup}]</td>
                            <td>{agent.ToBePaidByCustomer-agent.PaidToCustomer}=({agent.ToBePaidByCustomer}-{agent.PaidToCustomer})</td>
                            <td>{agent.CutomerWork}</td>
                            <td>{agent.RelatedAgent}</td>
                            <td>{agent.RelatedAgent}</td>
                            <td>{(agent.dateCreated).split('T')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </>
          );
    }   
  }
  
  export default MyTable;