import React from 'react';
import Banner from '../Banner/Banner';
import Trending from '../Trending/Trending';
import Blog from '../Blog/Blog';
import Catagory from '../Catagory/Catagory';
import ToyGallery from '../ToyGallery/ToyGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <Catagory></Catagory>
            <ToyGallery></ToyGallery>
            <Blog></Blog>
        </div>
    );
};

export default Home;