// import React from 'react'
// import { Card, CardGroup } from 'react-bootstrap'
// import { FaComment, FaFileImage, FaNapster, FaPen, FaSearch, FaStarOfDavid } from 'react-icons/fa'

// const SocialChef_Number = () => {
//   return (
//     <CardGroup className='mx-auto'>
//     <Card className='mx-auto mt-3 ' style={{ width: '16.66%' }}>
//       <Card.Body className='text-center'>
//         <Card.Title><FaNapster className='fs-1 text-danger text-center'></FaNapster></Card.Title>
//         <Card.Text className='fs-4 fw-bold'>1730</Card.Text>
//         <Card.Text className='fs-6 text-danger'>Members</Card.Text>
//       </Card.Body>
//     </Card>
//     <Card className='mx-auto mt-3' style={{ width: '16.66%' }}>
//       <Card.Body className='text-center'>
//         <Card.Title><FaSearch className='fs-1 text-danger text-center'></FaSearch ></Card.Title>
//         <Card.Text className='fs-4 fw-bold'>1250</Card.Text>
//         <Card.Text className='fs-6 text-danger'>recipes</Card.Text>
//       </Card.Body>
//     </Card>
//     <Card className='mx-auto mt-3' style={{ width: '16.66%' }}>
//       <Card.Body className='text-center'>
//         <Card.Title><FaPen className='fs-1 text-danger text-center'></FaPen></Card.Title>
//         <Card.Text className='fs-4 fw-bold'>5300</Card.Text>
//         <Card.Text className='fs-6 text-danger'>photos</Card.Text>
//       </Card.Body>
//     </Card>
//     <Card className='mx-auto mt-3' style={{ width: '16.66%' }}>
//       <Card.Body className='text-center'>
//         <Card.Title><FaComment className='fs-1 text-danger text-center'></FaComment></Card.Title>
//         <Card.Text className='fs-4 fw-bold'>2300</Card.Text>
//         <Card.Text className='fs-6 text-danger'>posts</Card.Text>
//       </Card.Body>
//     </Card>
//     <Card className='mx-auto mt-3' style={{ width: '16.66%' }}>
//       <Card.Body className='text-center'>
//         <Card.Title><FaNapster className='fs-1 text-danger text-center'></FaNapster></Card.Title>
//         <Card.Text className='fs-4 fw-bold'>7400</Card.Text>
//         <Card.Text className='fs-6 text-danger'>Comments</Card.Text>
//       </Card.Body>
//     </Card>
//     <Card className='mx-auto mt-3' style={{ width: '16.66%' }}>
//       <Card.Body className='text-center'>
//         <Card.Title><FaStarOfDavid className='fs-1 text-danger text-center'></FaStarOfDavid></Card.Title>
//         <Card.Text className='fs-4 fw-bold'>1000</Card.Text>
//         <Card.Text className='fs-6 text-danger'>articales</Card.Text>
//       </Card.Body>
//     </Card>
//     </CardGroup>
//   )
// }

// export default SocialChef_Number
import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { FaComment, FaFileImage, FaNapster, FaPen, FaSearch, FaStarOfDavid } from 'react-icons/fa'

const SocialChef_Number = () => {
  return (
    <CardGroup className='mx-auto'>
 <Card className='mx-auto mt-3 col-12 col-md-4 col-lg-2' style={{ maxWidth: '80%' }}>
        <Card.Body className='text-center'>
          <Card.Title><FaNapster className='fs-1 text-danger text-center'></FaNapster></Card.Title>
          <Card.Text className='fs-4 fw-bold'>1730</Card.Text>
          <Card.Text className='fs-6 text-danger'>Members</Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-auto mt-3 col-12 col-md-4 col-lg-2' style={{ maxWidth: '80%' }}>
        <Card.Body className='text-center'>
          <Card.Title><FaSearch className='fs-1 text-danger text-center'></FaSearch ></Card.Title>
          <Card.Text className='fs-4 fw-bold'>1250</Card.Text>
          <Card.Text className='fs-6 text-danger'>recipes</Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-auto mt-3 col-12 col-md-4 col-lg-2' style={{ maxWidth: '80%' }}>
        <Card.Body className='text-center'>
          <Card.Title><FaPen className='fs-1 text-danger text-center'></FaPen></Card.Title>
          <Card.Text className='fs-4 fw-bold'>5300</Card.Text>
          <Card.Text className='fs-6 text-danger'>photos</Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-auto mt-3 col-12 col-md-4 col-lg-2' style={{ maxWidth: '80%' }}>
        <Card.Body className='text-center'>
          <Card.Title><FaComment className='fs-1 text-danger text-center'></FaComment></Card.Title>
          <Card.Text className='fs-4 fw-bold'>2300</Card.Text>
          <Card.Text className='fs-6 text-danger'>posts</Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-auto mt-3 col-12 col-md-4 col-lg-2' style={{ maxWidth: '80%' }}>
        <Card.Body className='text-center'>
          <Card.Title><FaNapster className='fs-1 text-danger text-center'></FaNapster></Card.Title>
          <Card.Text className='fs-4 fw-bold'>7400</Card.Text>
          <Card.Text className='fs-6 text-danger'>Comments</Card.Text>
        </Card.Body>
      </Card>
      <Card className='mx-auto mt-3 col-12 col-md-4 col-lg-2' style={{ maxWidth: '80%' }}>
        <Card.Body className='text-center'>
          <Card.Title><FaStarOfDavid className='fs-1 text-danger text-center'></FaStarOfDavid></Card.Title>
          <Card.Text className='fs-4 fw-bold'>1000</Card.Text>
          <Card.Text className='fs-6 text-danger'>articale </Card.Text>
          </Card.Body>
          </Card>
    </CardGroup>
  )
}

export default SocialChef_Number
