import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Shared/QZone/QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='border'>
            <h4 className='text-center'>Login With</h4>
            <div className='text-center'>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"> <FaGithub /> Login With Google</Button>
            </div>
            <div className='mt-5'>
                <h4 className='text-center'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative text-center'>
                <img src={bg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-white'>
                    <h4>Create an Amazing Newspaper</h4>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;