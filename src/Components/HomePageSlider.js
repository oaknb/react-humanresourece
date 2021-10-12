import React from 'react'
import { Carousel } from 'antd';
import Slide1 from '../Components/img/Ekran1.jpg';

function HomePageSlider() {
    return (
        <Carousel autoplay>
        
         <img height='650px' src={Slide1} alt="" />
         
       
      </Carousel>
    )
}

export default HomePageSlider
