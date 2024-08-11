import React from 'react';
import ReactDOM from 'react-dom/client';
import './port.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Education from './Education';
import Navbars from './Navbar'; // Updated to import your custom Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbars />
      <Routes>
      <Route path='/' element={<About/>}></Route>
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
