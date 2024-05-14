
import React from 'react';
import Chefscard from '../Chefscard/Chefscard';
import { useLoaderData } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import SocialChef_Number from '../SocialChef_Number/SocialChef_Number';
import PhotoGallery from '../Service/Service';

const Main = () => {
  const chefs = useLoaderData();
  return (
    <Container>
      <div className='slider'>
        <Slider />
      </div>
      <div>
        <h2 style={{color:'#FF8E88'}} className='text-center'>Our Expert Thai Chefs</h2>
        <Row>
          {chefs.map((chef) => (
            <Col key={chef.id} xs={12} md={4}>
              <Chefscard chefinfo={chef} />
            </Col>
          ))}
        </Row>
      </div>
      <div style={{backgroundColor:'#DFD3BD'}} className='mt-5 chef_number p-5'>
      <h2 style={{color:'#FF8E88'}} className='text-center'>SocialChef in numbers</h2>
      <div className='d-flex'>
        <SocialChef_Number></SocialChef_Number>
      </div>
      </div>
      <PhotoGallery></PhotoGallery>
    </Container>
  );
};

export default Main;
