import React from 'react';
import Banner from '../Banner/Banner';
import Trending from '../Trending/Trending';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Blog></Blog>
        </div>
    );
};

export default Home;