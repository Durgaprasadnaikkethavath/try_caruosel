import Carousel from "better-react-carousel";
import React from "react";

const ImageCarousel = () => {
  return (
    <div>
      <h1>Carousel</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://picsum.photos/800/600?random=1"
            width="100%"
            height="400vh"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=2"
            height="400vh"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=3"
            height="400vh"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
