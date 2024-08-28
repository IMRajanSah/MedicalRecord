import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddAgent from './pages/AddAgent';
import AddCustomer from './pages/AddCustomer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add-agent' element={<AddAgent/>}/>
        <Route path='/add-customer' element={<AddCustomer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
