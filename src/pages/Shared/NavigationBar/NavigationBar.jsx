import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const { user,logOut } = useContext(UserContext)

    const handleLogOut = ()=>{
        logOut()
        .then((result)=>{
            console.log("sign out Successfully",result)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <Navbar className='mt-4 fs-5' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex gap-3">
                        <Link to='/category/0' className='text-decoration-none'>Home</Link>
                        <Link className='text-decoration-none' href="#pricing">About</Link>
                        <Link className='text-decoration-none' href="#pricing">Career</Link>
                    </Nav>
                    <Nav className='flex align-items-center gap-2'>
                        {user &&
                            <FaUserCircle className='display-6'></FaUserCircle>
                        }

                        {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                            <Link to='/login'>
                                <Button variant="secondary">Log in</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;