import React from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm';
import EventHandling from './components/EventHandling';
import GetData from './components/GetData';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>

        <Navbar />
        {/* <Home /> */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/simple-form" element={<SimpleForm />} />
  <Route path="/event-handling" element={<EventHandling />} />
  <Route path="/get-data" element={<GetData />} />
</Routes>

        <Footer />
    
    </BrowserRouter>
  );
}

export default App;
