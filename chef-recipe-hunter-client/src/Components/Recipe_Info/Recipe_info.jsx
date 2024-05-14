import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from 'react-rating-stars-component';


const Recipe_info = ({ recipe }) => {
const [favoriteRecipeId, setFavoriteRecipeId] = useState(null);

const handleFavoriteClick = (id, name) => {
setFavoriteRecipeId(id);
toast.success(`${name} is now your favorite.`, { autoClose: 3000 });
};

return (
<>
    <ToastContainer />
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Recipe Name</th>
                <th>Ingredients</th>
                <th>Cooking Method</th>
                <th>Rating</th>
                <th>Favorite</th>
            </tr>
        </thead>
        <tbody>
            <tr key={recipe.r_id}>
                <td className='fs-5 text-primary'>{recipe.r_name}</td>
                {/* <td className='fs-6'>{recipe.ingredients.join(', ')}</td> */}
                <td className='fs-6'>
                    {recipe.ingredients.map((step, index) => (
                    <div key={index}>
                        <FaStar /> {step}
                    </div>
                    ))}
                </td>
                {/* <td className='fs-6'>(*) {recipe.method.join(' (*) ')}</td> */}
                <td className='fs-6'>
                    {recipe.method.map((step, index) => (
                    <div key={index}>
                        <FaStar /> {step}
                    </div>
                    ))}
                </td>

                <td className='fs-5 fw-bold'>
                <span>{recipe.rating}</span>
                    <Rating value={recipe.rating} edit={false} count={5} size={24} activeColor="#ffd700" />
                </td>
                <td>
                    <button style={{backgroundColor:"#FF8E88"}} className="btn fs-5" onClick={()=>
                        handleFavoriteClick(recipe.id, recipe.r_name)}
                        disabled={favoriteRecipeId === recipe.id}
                        >
                        {favoriteRecipeId === recipe.id ? 'Favorited' : 'Favorite'}
                    </button>
                </td>
            </tr>
        </tbody>
    </Table>
</>
);
};

export default Recipe_info;