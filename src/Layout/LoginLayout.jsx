import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;