import React from 'react';
import './port.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => {
  return (
    <>
<Container>
  <Row className='edu mb-4'>
    <Col md={6}>
      <h1 className='mt-5'><em>EDUCATION PATH TO SUCCESS</em></h1>
      <p className='fs-5 mt-5 text-secondary'>
        I am an enthusiastic individual who actively participates in hackathons and various tech-related events. 
        I am a proud member of the National Cadet Corps (NCC) and the National Service Scheme (NSS),
        where I engage in community service and leadership activities.
      </p>
    </Col>
    <Col md={6}>
      <img 
        src="main.webp" 
        className='img-fluid mx-auto d-block' 
        style={{ height: '280px', width: 'auto' }} 
        alt="education"
      />
    </Col>
  </Row>

  <Row className='text-center my-4'>
    <Col>
      <h1>Degrees Received</h1>
    </Col>
  </Row>

  <Container className='mb-4 d-flex flex-column align-items-center'>
    <div className='d-flex align-items-center mb-4 card-container' style={{ width: '100%', maxWidth: '900px' }}>
      <img 
        src="pu.png" 
        className='imagelogo img-fluid' 
        style={{ height: '170px', width: 'auto' }} 
        alt="university logo"
      />
      <Card className="black-card flex-grow-1 ms-3" style={{ minHeight: '250px' }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Pondicherry University</span>
          <span className="year">2021-2023</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>Masters in Computer Science</Card.Title>
          <Card.Text>
            ⚡ Core subjects like Machine Learning, Database Systems in Big Data, Data Mining Tools, Arithmetic Intelligence and Expert Systems, Cloud Computing.<br />
            ⚡ online course The joy of computing using python Completed<br />
          </Card.Text>
          <a href="https://www.pondiuni.edu.in/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT</a>
        </Card.Body>
      </Card>
    </div>

    <div className='d-flex align-items-center mb-4 card-container' style={{ width: '100%', maxWidth: '900px' }}>
      <img 
        src="uni.png" 
        className='imagelogo img-fluid' 
        style={{ height: '100px', width: 'auto' }} 
        alt="university logo"
      />
      <Card className="black-card flex-grow-1 ms-3" style={{ minHeight: '250px' }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <span>Calicut University</span><br />
            <span>EMEA COLLEGE OF ARTS AND SCIENCE KONDOTTY</span>
          </div>
          <span className="year">2021-2023</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>Bachelor in Computer Science</Card.Title>
          <Card.Text>
            ⚡ Core subjects like Data Structures, DBMS & RDBMS, Java, PHP, Android.<br />
            ⚡ NCC B & C certificate
          </Card.Text>
          <a href="https://emeacollege.ac.in/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT</a>
        </Card.Body>
      </Card>
    </div>
  </Container>
</Container>


      <style type="text/css">
        {`
          .card-container {
            display: flex;
            justify-content: space-between;
            gap: 15px; /* Add space between cards */
          }

          .card {
            width: 18rem;
            margin-bottom: 20px; /* Add bottom margin for better spacing on smaller screens */
          }

          .black-card {
            background-color: black;
            color: white;
            border: 1px solid #444;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
          }

          .black-card .card-header {
            background-color: #333;
            border-bottom: 1px solid #444;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .black-card .card-header .year {
            margin-left: auto;
            font-weight: normal;
          }

          .black-card .card-body {
            background-color: black;
            color: white;
            flex-grow: 1;
          }

          .imagelogo {
            margin-right: 15px;
          }

          .card-container {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          @media (max-width: 767px) {
            .black-card {
              margin-top: 20px;
            }

            .imagelogo {
              margin: 0 auto 15px;
            }

            .card-container {
              flex-direction: column;
              align-items: center;
            }
          }
            .black-card {
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
  }

  .black-card .card-header {
    background-color: #444;
    color: #fff;
  }

  .black-card .year {
    font-weight: bold;
  }

  .card-container img {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    .card-container {
      flex-direction: column;
    }

    .card-container img {
      margin-bottom: 15px;
    }

        `}
      </style>
      <h1 className='fw-bold fs-2 mx-auto d-flex ms-5'>ACADEMIC PROJECTS</h1>
<div className='container mt-4'>
  <div className='row'>
    <div className='col-md-4'>
      <div className='card'>
        <img src='heart.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>HEART FAILURE PREDICTION</h6>
          <p className='card-text'>Using machine learning, design a robust system predict the possibility of heart failure.</p>
          <a href='https://drive.google.com/file/d/1I4xA_V7S3flbWy-vzNpj6sF7NpFkDeGK/view?usp=drive_link' className='btn btn-primary'>PREDICTION</a>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='card'>
        <img src='bot.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>UNIVERSITY CHAT BOT</h6>
          <p className='card-text'>This system is a web application which provides answers to the queries of the users.</p>
          <a href='https://docs.google.com/presentation/d/19VpVNJPWCgMQqQGVx9zr_kgKHqcDoAsW/edit?usp=drive_link&ouid=118280948351492356259&rtpof=true&sd=true' className='btn btn-primary'>CHAT BOT</a>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='card'>
        <img src='conference.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>CONFERENCE PAPER</h6>
          <p className='card-text'>A Survey Paper on Heart Failure Prediction with Machine Learning.</p>
          <a href='https://drive.google.com/file/d/1MYSDc-NHmuI6-zUbgPifBMiTkNZw4CAT/view?usp=drive_link' className='btn btn-primary'>Conference paper</a>
        </div>
      </div>
    </div>
  </div>
</div>

<h1 className='fw-bold fs-2 mx-auto d-flex mt-5 ms-5'>CERTIFICATES</h1>
<div className='container mt-4'>
  <div className='row'>
    <div className='col-md-4'>
      <div className='card'>
        <img src='NC.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>NCC-NATIONAL CADET CORPS</h6>
          <p className='card-text'>Receiving the B and C NCC certificates is a reflection of my tireless efforts and passion for personal growth.</p>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='card'>
        <img src='phython.webp' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>JOY OF COMPUTING USING PYTHON</h6>
          <p className='card-text'>The beauty of Python is its simplicity, yet it can tackle complex problems with ease.</p>
          <a href='https://drive.google.com/file/d/1f0ueRmRQqpcZGEMmQ12q6POVmnhBcfr5/view?usp=drive_link' className='btn btn-primary'>VIEW</a>
        </div>
      </div>
    </div>
    <div className='col-md-4'>
      <div className='card'>
        <img src='cyber.webp' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h6 className='card-title'>CYBERSECURITY ON SOCIAL MEDIA</h6>
          <p className='card-text'>E-CERTIFICATE PARTICIPATION IN WEBINAR</p>
          <a href='https://drive.google.com/file/d/1--6fObDRdyohEjZN-Xrg1L4lyOfhgGkC/view?usp=drive_link' className='btn btn-primary'>VIEW</a>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Education;
