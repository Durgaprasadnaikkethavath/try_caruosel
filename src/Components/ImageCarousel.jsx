import Carousel from "better-react-carousel";
import React from "react";

const ImageCarousel = () => {
  return (
    <div>
      <p>Updated Carousel Images</p>
      <h1>Carousel</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="carousel images"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://picsum.photos/800/600?random=2"
            alt="carousel images"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://picsum.photos/800/600?random=3"
            alt="carousel images"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
