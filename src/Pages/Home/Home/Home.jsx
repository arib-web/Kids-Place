import React from 'react';
import Banner from '../Banner/Banner';
import Trending from '../Trending/Trending';
import Blog from '../Blog/Blog';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Catagory></Catagory>
            <Blog></Blog>
        </div>
    );
};

export default Home;