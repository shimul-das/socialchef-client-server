import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recipe_info from '../Recipe_Info/Recipe_info';

const Detailschef = () => {
const chefs = useLoaderData();
const {id,chef_name,img,bio,experience,number_of_receipe,likes,recepie_info}=chefs
console.log(id)
return (
<Container className='pt-5'>
  <h2 style={{backgroundColor:"#FF8E88",color:'white'}} className='text-center p-3'>Chef Info & His Best Thai Recipies</h2>
  <div class="card mb-3">
    <img src={img} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{chef_name}</h5>
      <p class="card-text">{bio}</p>
      <Card.Text><span className='fw-bold text-warning'>Experienced:</span> {experience} Years</Card.Text>
      <Card.Text><span className='fw-bold text-info'>Numbers of recipes:</span> {number_of_receipe}</Card.Text>
      <Card.Text> <FaRegThumbsUp/> {likes}</Card.Text>
    </div>
  </div>
  <div>
    {
       recepie_info.map(recipes=><Recipe_info key={recipes.r_id} recipe={recipes}></Recipe_info>)
    }
  </div>
</Container>
)
}

export default Detailschef