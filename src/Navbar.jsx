import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import { IoIosHeart } from 'react-icons/io'; // Make sure you import the icon correctly
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { GiRoyalLove } from "react-icons/gi";

function Navbars() {
  return (
    <>
      <Navbar bg="secondary" className='text-light' data-bs-theme="light">
        <Container className='ms-5 mt-1'>
          <Nav className=" fw-bold">
          <NavLink to="/" className=' ms-5 fs-3 home text-decoration-none text-reset'><GiRoyalLove className='ms-5 me-2'/>AAMI</NavLink>
            <NavLink to="/about" className=' fs-3 ms-5 home text-decoration-none text-reset'><TbArrowRoundaboutRight className='ms-5 me-2'/>ABOUT</NavLink>
            <NavLink to="/education" className=" fs-3 ms-5 text-decoration-none text-reset"><MdOutlineCastForEducation className='ms-5 me-2'/>EDUCATION</NavLink>
            <NavLink to="/skills" className="fs-3 ms-5 text-decoration-none text-reset"><GiSkills className='ms-5 me-2'/>SKILLS</NavLink>
            <NavLink to="/projects" className="fs-3 ms-5 text-decoration-none text-reset"><GrProjects className='ms-5 me-2'/>PROJECTS</NavLink>
            <NavLink to="/contact" className="fs-3 ms-5 text-decoration-none text-reset"><GrContact className='ms-5 me-2'/>CONTACT</NavLink>

          </Nav>
        </Container>
      </Navbar>

      <Outlet/>
    </>
  );
}

export default Navbars;
