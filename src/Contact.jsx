import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className='bg-dark' style={{width:'1850px' ,height:'880px'}}>

      <div className='ms-5 '>
      <p className='fs-1 text-light fw-bold'>Get in touch</p><br />
      <p className='text-secondary fs-3 ms-5'>
        If you wanna get in touch, talk to me about a project collaboration or just say hi,<br />
        fill up the awesome form below or send an email and ~let's talk.<br></br>
        <b><span className='text-light fs-4'>abiramiabip2001@gmail.com</span></b> 
      </p>
      </div>

      <input type="text" id="fname" name="fname" className="input" label="lets chat" />
      <MdOutlineMailOutline className='large-icon4 text-light' /><br />
      <button type="button" className="btn btn-custom1 text-bg-light">NEXT</button>
      <button type="button" className="btn btn-custom text-bg-light">SEND YOUR MESSAGE</button>

      <p className='ms-5 fs-1 text-light fw-bold mt-5'>Let's get Social</p>
      <p className='para1 text-secondary fs-3 ms-5'>Follow my online pages on Facebook, Instagram and profiles on GitHub and LinkedIn.</p>
      
      <a href="https://support.google.com/mail/answer/56256?hl=en" target="_blank" rel="noopener noreferrer">
      <SiGmail  className=" mt-5 large-icon" />
      </a>
      
      <a href=" https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
      <SiFacebook className=" mt-5 large-icon1" />
      </a>

      <a href="https://github.com/Abirami902" target="_blank" rel="noopener noreferrer">
        <FaGithub className=" mt-5 large-icon2" />
      </a>
      <a href="https://www.linkedin.com/in/abirami-narayanan-911b5126b/" target="_blank" rel="noopener noreferrer">
      <BsLinkedin className=" mt-5 large-icon3" />
      </a>
    </div>
  );
}

export default Contact;
