import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './../../assets/image/slider-1.jpg';
import slider2 from './../../assets/image/slider-2.jpg';
import slider3 from './../../assets/image/slider-3.jpg';
import { Container } from 'react-bootstrap';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='mt-3 mb-3'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ width: "100%", height: "80vh" }}>
          <img
            className="d-block w-100 h-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Experience the flavors of Thailand in every bite.</h3>
            <p>From spicy curries to tangy salads, Thai cuisine offers a unique blend of sweet, sour, salty, and spicy flavors that will tantalize your taste buds.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "100%", height: "80vh" }}>
          <img
            className="d-block w-100 h-100"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Indulge in the vibrant colors and textures of Thai cuisine.</h3>
            <p>With fresh herbs, crunchy vegetables, and tender meats, every dish is a feast for the eyes as well as the taste buds</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "100%", height: "80vh" }}>
          <img
            className="d-block w-100 h-100"
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Discover the health benefits of Thai food.</h3>
            <p>
            With its emphasis on fresh ingredients and bold flavors, Thai cuisine is a nutritious and satisfying choice for anyone looking to eat well and feel great.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}


export default Slider;