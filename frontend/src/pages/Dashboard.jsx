import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import MyTable from '../Components/MyTable'
function Dashboard() {
  const [agentData,setagentData]= useState([])
  const [customerData,setcustomerData]= useState([])
  const [key, setKey] = useState('Agent')
  const getAgentData=()=>{
    axios.get('http://localhost:8081/agent').then((res)=>{
      // console.log(res.data);
     setagentData(res.data)}).catch(err=>console.log(err))
  }
  const getCustomerData=()=>{
    axios.get('http://localhost:8081/customer').then((res)=>{
      // console.log(res.data);
     setcustomerData(res.data)}).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getAgentData()
    getCustomerData()
  },[])
    return (
      <div className='dashboard'>
        <div className="dashboard-title">Dashboard</div>
        <Tabs
          defaultActiveKey="Agent"
          className="mb-3"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          style={{marginTop:"1rem",padding:'0 4.5rem'}}
        >
          <Tab eventKey="Agent" title="Agent List" >
            <MyTable value={"Agent"} data={agentData}/>
          </Tab>
          <Tab eventKey="Customer" title="Customer List">
            <MyTable value={"Customer"} data={customerData}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
  
  export default Dashboard;