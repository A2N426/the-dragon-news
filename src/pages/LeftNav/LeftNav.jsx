import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='border ps-4'>
            <h4 className='mt-3'>All Categories</h4>
            <div className='ps-3'>
                {
                    categories.map(category => <p key={category.id}
                    >
                        <Link to={`/categories/${category.id}`} className='text-decoration-none text-black fs-5'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;