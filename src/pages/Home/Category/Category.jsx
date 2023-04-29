import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h2 className=''>This Category News Quantity:{categoryNews.length}</h2>}
            <div>
                { categoryNews.length > 1 ?
                    categoryNews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>) : <h2 className='text-danger'>This category have no Quantity</h2>
                }
            </div>
        </div>
    );
};

export default Category;