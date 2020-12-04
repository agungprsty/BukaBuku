import React from 'react';
import Carausels from '../components/carousel/Carousel';
import Contents from '../components/content/Content';
import '../../styles/indexPages.css';

const Home = () => {
  return (
    <>
        <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
          <Carausels />
        </div>
        <div className='content'>
          <Contents />
        </div>
    </>
  );
};

export default Home;
