import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import me from './AB.pdf';
import bg from './2.jpeg';
import { ReactTyped,Typed } from "react-typed";


const App = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <p className='hi'>Hi There!</p>
                                <h1 className='fw-bold ' style={{ color: "#6a0d37 ",marginTop:"40px" }}> I'M ABIRAMI </h1>
                            </Col>
                            <p style={{ fontSize: "1.5rem", fontWeight: "600" ,marginTop:"80px" }}>
                    I am a
                    <span style={{ marginLeft: "8px"}}>
                    <ReactTyped
          strings={["MERN FULL STACK DEVELEPOR"]}
          typeSpeed={40}
        />
                    </span>
                </p>

                <a href={me} download target='_blank'>
                    <Button variant="dark" className="me-5" size="lg">
                        DOWNLOAD CV
                    </Button>
                </a>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <img
                            src={bg}
                            alt="me"
                            className="img-fluid"
                            style={{ marginLeft:"100px" ,marginTop:"200px",height:"450px"}}
                        />
                    </Col>
                </Row>
               
            </Container>
        </>
    );
}

export default App;
