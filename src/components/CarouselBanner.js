import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container  style={{marginTop: "4rem"}}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
        <Carousel.Item>
          <img
            className="d-block banner w-100"
            src="./img/banner1.jpg"
            alt="First slide"
          />
          <div className="carousel-caption-ban">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button type="button" className="btn btn-success">Order Now</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block banner w-100"
            src="./img/banner1.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption-ban">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button type="button" className="btn btn-success">Order Now</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block banner w-100"
            src="./img/banner1.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption-ban">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button type="button" className="btn btn-success">Order Now</button>
          </div>
        </Carousel.Item>
    </Carousel>
    </Container>

  );
}

export default CarouselBanner;
