import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './image/image1.jpg';
import img2 from './image/image2.jpg';
import img3 from './image/image3.jpg';
import img4 from './image/image4.jpg';
import img5 from './image/image5.jpg';
import "./Css/ImageCarousel.css";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;