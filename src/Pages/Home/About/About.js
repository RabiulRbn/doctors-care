import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-title-container">
            <h3 className="title">About Us</h3>
            <div className="about-container mx-auto">
                
                <Container>
                    <Row>

                        <Col sm={8}>
                            <p className="detail">Doctors Care Clinic – The clinic provides affordable, high quality health care five days a week for patients newborn to age 50. Services include sick and well care, dental hygiene and behavioral health. The clinic accepts Medicaid, CHP+ and self pay/uninsured patients. Doctors Care offers a sliding fee payment option for uninsured patients. To learn more about the sliding fee program please click here.</p>
                            <br />
                            <Button variant="success">Learn More</Button>
                        </Col>
                        <Col sm={4}><img className="img" src={'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'} alt="" /></Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default About;