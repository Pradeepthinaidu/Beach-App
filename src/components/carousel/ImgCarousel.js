import React from 'react';
import './ImgCarouselStyles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';

function ImgCarousel() {
  return (
   <div name='carousel' className='container'>
      <Carousel className='carousel' infiniteLoop={true} showArrows={true} autoPlay={true}>
                <div>
                    <img src={BoraBora}  alt='/'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={BoraBora2}  alt='/'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Maldives}  alt='/' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
   </div> 
    
  );
}

export default ImgCarousel;
