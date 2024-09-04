import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddAgent from './pages/AddAgent';
import AddCustomer from './pages/AddCustomer';
import Home from './pages/Home';
import SuccessAgentRegister from './pages/SuccessAgentRegister';
import SuccessCustomerRegister from './pages/SuccessCustomerRegister';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add-agent' element={<AddAgent/>}/>
        <Route path='/add-customer' element={<AddCustomer/>}/>
        {/* <Route path='/add-agent-succcess' element={<SuccessAgentRegister/>}/>
        <Route path='/add-customer-succcess' element={<SuccessCustomerRegister/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
