import { ViewCarouselOutlined } from '@mui/icons-material';
import React from 'react';
import '../HomePage/HomePage.css'
import Carousel from './Carousel';
import HomePageCards from './HomePageCards';
import MiniNavbar from './MiniNavbar';
import SlideShow from './SlideShow';

const HomePage = () => {
    return (
        <div className='block1'>
            <video id="background-video" loop autoPlay muted>
                <source src={require("./Future - 12917.mp4")} type="video/mp4" />
            </video>
            
        <h2 id='h2'>NerdGames</h2>
            <MiniNavbar/>
            <SlideShow/>
           <HomePageCards />
            <Carousel/>
           
        </div>
        
    );
};

export default HomePage;