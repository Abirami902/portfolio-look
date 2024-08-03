import React from 'react';
import { LuPin } from "react-icons/lu";
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const projects = [
    {
      img: "img6.jpg",
      title: "AMORZITO",
      description: "A space for properties",
      link: "https://abirami902.github.io/website/"
    },
    {
      img: "atm.avif",
      title: "ATM CARD",
      description: "Dedicated payment card",
      link: "https://abirami902.github.io/position-ATM/"
    },
    {
      img: "pic1.jpg",
      title: "BOOT STRAP RECIPE",
      description: "Diabetes friendly recipes for you.",
      link: "https://abirami902.github.io/boot/"
    },
    {
      img: "imgrecipi.webp",
      title: "REACT RECIPE",
      description: "Using API showing recipes details",
      link: "https://foodrecipe-51q6.vercel.app/"
    },
    {
      img: "deck.png",
      title: "DECK CARD",
      description: "Using props creating various cards",
      link: "https://deckcard.vercel.app/"
    },
    {
      img: "cinema.avif",
      title: "MOVIES SEARCH",
      description: "Using API showing movie details",
      link: "https://movie-time-phi.vercel.app/"
    },
    {
      img: "home.avif",
      title: "HOME",
      description: "Bootstrap",
      link: "https://dream-home-one.vercel.app/"
    },
    {
      img: "weather.jpg",
      title: "WEATHER NOW",
      description: "React - Showing based on states",
      link: "https://what-about-the-climate.vercel.app/"
    },
    {
      img: "book.avif",
      title: "BOOK BUNCH",
      description: "Adding book details",
      link: "https://abirami902.github.io/boot/"
    },
    {
      img: "bio.webp",
      title: "BIODATA ",
      description: "Have a look to bio data",
      link: "https://abirami902.github.io/Biodata/"
    },
    {
      img: "reg.webp",
      title: "REGISTRATION ",
      description: "Registration form",
      link: " https://abirami902.github.io/Resume/"
    },
    {
      img: "port.jpg",
      title: "PORTFOLIO ",
      description: "All About Me",
      link: " https://abirami902.github.io/Resume/"
    }
   
  ];

  return (
    <>
      <style>
        {`
          .nou {
            text-decoration: none;
            color: blue;
          }

          .nou:hover {
            color: green;
          }
        `}
      </style>
      <div>
        <h1 className="skills text-center mb-5">PROJECTS</h1>
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card" style={{ width: '22rem' }}>
                  <img 
                    src={project.img} 
                    className="card-img-top" 
                    alt={project.title} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <span className='fw-bold'>{project.title}</span> <br />
                      {project.description}
                    </p>
                    <p className="card-text">
                      <LuPin />
                      <span className='ms-5'>
                        <a href={project.link} className="nou">LIVE DEMO</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
