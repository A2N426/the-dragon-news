import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='border text-center'>
            <h2>Terms And Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eligendi corporis quos! Nesciunt voluptatum cupiditate earum maiores recusandae reiciendis fugiat velit neque illo ducimus harum saepe libero natus, quasi sit.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;