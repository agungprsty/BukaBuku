import React from 'react';
import './CarouselStyle.css';

const Carausels = () => {
    return(
        <>
            <ol className='carousel-indicators'>
                <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                <li data-target='#myCarousel' data-slide-to='1'></li>
                <li data-target='#myCarousel' data-slide-to='2'></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active image-1" data-interval='4000'>
                <div id='headling' className='container'>
                    <h1>Example Headling 1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book.</p>
                    <a href='/' className='btn btn-lg btn-primary'>
                    Get Started Now
                    </a>
                </div>
                </div>
                <div class="carousel-item image-2" data-interval='2000'>
                <div id='headling' className='container'>
                    <h1>Example Headling 2</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book.</p>
                    <a href='/' className='btn btn-lg btn-primary'>
                    Get Started Now
                    </a>
                </div>
                </div>
                <div class="carousel-item image-3" data-interval='4000'>
                    <div id='headling' className='container'>
                    <h1>Example Headling 3</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book.</p>
                    <a href='/' className='btn btn-lg btn-primary'>
                        Get Started Now
                    </a>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </>
    );
};

export default Carausels;