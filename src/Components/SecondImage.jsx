import Carousel from "better-react-carousel";
import React from "react";

const SecondImage = () => {
  return (
    <>
      <h1>Second ImageCarousel</h1>
      <Carousel>
        <Carousel.Item>
          <img
            src="/assets/carousel_1.png"
            alt="carousel"
            width="100%"
            height="100vh"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/assets/carousel_2.jpg"
            alt="carousel"
            width="100%"
            height="100vh"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/assets/carousel_3.jpeg"
            alt="carousel"
            width="100%"
            height="100vh"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/assets/carousel_4.jpeg"
            alt="carousel"
            width="100%"
            height="100vh"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SecondImage;
