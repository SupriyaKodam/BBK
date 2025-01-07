import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Snowfall from './Components/Snowfall';
import Bookatable from './Components/Bookatable';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Details from './Components/Details';
import De from './Components/DetailsPage';
import BulkOrderPage from './Components/Bulkorder';
import StoreList from './Components/StoreList';
import Checkout from './Components/Checkout';
import LoginSignup from './Components/Login';
import CardDetails from './Components/CardDetails';
import ChatBot from './Components/ChatBot';


const App = () => {
  return (
    <Router>
      <Snowfall />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/bookatable" element={<Bookatable />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details" element={<Details />} />
        <Route path="/go" element={<De />} /> {/* Corrected route for De */}
        <Route path="/bulk" element={<BulkOrderPage />} />
        <Route path="/store" element={<StoreList />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Corrected route for Checkout */}
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/cart' element={<CardDetails/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>
      </Routes>
    </Router>
  );
};

export default App;
