import './App.css';
import Home from './pages/home';
import Schedules from './pages/schedules';
import Offers from './pages/offers';
import Login from './pages/login';
import Account from './pages/account';
import Navbar from './partials/navbar';
import Footer from './partials/footer';
import AccountData from './pages/accountData';
import MySubscription from './pages/mySubscription';
import AboutTrainer from './pages/aboutTrainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        <Routes>
          <Route path='/Account' element={<Account />} />
          <Route path='/' element={<Home />} />
          <Route path='/Schedules' element={<Schedules />} />
          <Route path='/Offers' element={<Offers />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/accountData' element={<AccountData />} />
          <Route path='/mySubscription' element={<MySubscription />} />
          <Route path='/aboutTrainer' element={<AboutTrainer />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;




