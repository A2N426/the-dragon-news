import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { UserContext } from '../../../providers/AuthProviders';
import { useState } from 'react';

const Login = () => {
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    const {signIn}=useContext(UserContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/category/0"
    const handleLogIn = event =>{
        event.preventDefault();
        setSuccess("")
        setError("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password) 
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            navigate(from,{replace:true})
            setSuccess("Successfully LogIn")
            console.log(loggedUser)
        })
        .catch(error=>{
            setError(error.message)
            console.log(error.message)
        })
    }

    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleLogIn}>
                <h1>Please Login </h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>{success && <small className='text-success'>{success}</small>}</p>
                <p>{error && <small className='text-danger'>{error}</small>}</p>
                <br />
                <Form.Text className="text-muted">
                    Don not have account <Link to='/register'>Please Register</Link>
                </Form.Text> 
                <Form.Text className="text-success">
                   
                </Form.Text>
                <Form.Text className="text-danger">
                        
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;