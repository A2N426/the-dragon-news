import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/AuthProviders';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    const [updated,setUpdated]=useState("")
    const [updatedError,setUpdatedError]=useState("")
    const [accepted,setAccepted]=useState(false)
    const {createUser} = useContext(UserContext)

    const handleRegister = event =>{
        event.preventDefault();
        setSuccess("")
        setError("")
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password,photo)
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
            setSuccess("Successfully created")
            updatePro(result.user,name,photo)
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
    }

    const updatePro = (user,name,photo) =>{
        updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
        .then(()=>{
            setUpdated("Profile Updated")
        })
        .catch(error=>{
            setUpdatedError(error.message)
        })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleRegister}>
                <h1>Please Register</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    name="accept" 
                    type="checkbox" 
                    label={<>Accept <Link to="/terms">Terms ans conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <p>{success && <small className='text-success'>{success}</small>}</p>
                <p>{error && <small className='text-danger'>{error}</small>}</p>
                <p>{updated && <small className='text-success'>{updated}</small>}</p>
                <p>{updatedError && <small className='text-danger'>{updatedError}</small>}</p>
                <br />
                <Form.Text className="text-muted">
                    Have an account? <Link to='/login'>Please Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;