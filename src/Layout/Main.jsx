import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/RightNav/RightNav';
import LeftNav from '../pages/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='mt-4'>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col className='border' lg={6}>
                        <h2>Main content</h2>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;