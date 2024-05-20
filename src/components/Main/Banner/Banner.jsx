import React from 'react'
import {useState} from 'react'
import './Banner.css'

export const Banner = () => {

  const images = [
    './src/assets/images/slide1.png',
  ];

  const [ImageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
        <div id='banner' style={{ backgroundImage: `url(${images[ImageIndex]})` }}>
            <div id='btnLeft' onClick={prevImage}>
                <img src='./src/assets/images/icons/left.png'/>
            </div>
            <div id='bannerText'>
				      Умная колонка
              <p>
                <span>СКИДКА 30%</span><br/>
                при покупке второго товара
              </p>
            </div>
            <div id='btnRight' onClick={nextImage}>
                <img src='./src/assets/images/icons/right.png'/>  
            </div>
        </div>
    </>
  )
}
