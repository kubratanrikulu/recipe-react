import React, { useEffect, useState } from 'react'
const Cuisine = () => {
  const [cuisine, setCuisine] = useState([])
    useEffect(() => {
    getcuisine()
    },[])
    const getcuisine  = async () =>  {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=dessert`);
        const data = await api.json();
        setCuisine(data.recipes)
    }
  return (
    <div className='container'>
    <div className='row justify-content-between '>
      <h2>cuisine Recipes</h2>
        {cuisine.map((recipe) => {
           return(
         <div className='p-3 col-6 col-lg-4  bg-white'>
         <div className='cuisine card p-0 mb-5 border-0 position-relative' key={recipe.id}>
           <img className='w-100' src={recipe.image}/>
           <div className='bg-black opacity-75 position-absolute w-100 food-title' mb-3>
           <a href=""><h6 className='card_title'>{recipe.title}</h6></a>
           </div>
         </div>
         </div>
        );
      })}
    </div>
    
    </div>
  )
}

export default Cuisine