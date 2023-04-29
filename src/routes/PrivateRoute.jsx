import React from 'react';
import { useContext } from 'react';
import { useCol } from 'react-bootstrap/esm/Col';
import { UserContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext) 
    const location = useLocation()
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    else if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;