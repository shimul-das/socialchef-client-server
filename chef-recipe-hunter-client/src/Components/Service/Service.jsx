import React from 'react'
import food from './../../assets/image/thi food.jpg';


const Service = () => {
  return (
<div class="card mb-3 mt-5" style={{maxWidth: '540px;'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={food} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-danger pb-3">Why the Quality of Thai Food Is so Good</h5>
        <p><span className='fw-bold fs-6 text-success'>Fresh Ingredients: </span>Thailand is bountiful when it comes to fragrant herbs and healthy vegetable resources.</p>
        <p><span className='fw-bold fs-6 text-success'>so Many Dishes!: </span>It doesn’t matter if you’re on a diet and want a healthy salad or would rather have a hearty curry, you’ll find what you want with Thai food.</p>
        <p><span className='fw-bold fs-6 text-success'>It’s Good for Your Health:</span>Thai cuisine is one of the healthiest cuisines out there. </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Service