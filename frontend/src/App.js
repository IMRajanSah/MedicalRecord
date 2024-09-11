import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddAgent from './pages/AddAgent';
import AddCustomer from './pages/AddCustomer';
import Home from './pages/Home';
import GetData from './pages/GetData';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add-agent' element={<AddAgent/>}/>
        <Route path='/add-customer' element={<AddCustomer/>}/>
        <Route path='/get-data' element={<GetData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
