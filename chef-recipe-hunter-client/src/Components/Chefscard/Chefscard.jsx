
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image1 from './../../assets/image/slider-1.jpg';
import { FaRegThumbsUp } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chefscard = ({chefinfo}) => {
    const {chef_name,img,experience,number_of_receipe,likes,id}=chefinfo
    // console.log(chefinfo)
  return (
    <Card className='mx-auto mt-3' style={{ maxWidth: '400px' }}>
      {/* <Card.Img variant="top" src={img} /> */}
      <LazyLoad height={200} once>
        <Card.Img variant="top" src={img} />
      </LazyLoad>
      <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        <Card.Text><span className='fw-bold text-warning'>Experienced:</span> {experience} Years</Card.Text>
        <Card.Text><span className='fw-bold text-info'>Numbers of recipes:</span> {number_of_receipe}</Card.Text>
        <Card.Text> <FaRegThumbsUp/> {likes}</Card.Text>
        <Link to={`/chef/${id}`}><Button style={{backgroundColor:"#FF8E88"}}>View Recipes</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default Chefscard;
