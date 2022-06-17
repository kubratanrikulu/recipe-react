import React, { useEffect, useState } from 'react'
const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([])
  useEffect(() => {
    getVegetarian()
  }, [])
  const getVegetarian = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`);
    const data = await api.json();
    console.log(data)
    setVegetarian(data.recipes)
  }
  return (
    <div className='container'>
      <div className='row justify-content-between '>
        <h2>Vegetarian Recipes</h2>
        {vegetarian.map((recipe) => {
          return (
            <div className='p-3 col-6 col-lg-4  bg-white'>
              <div className='popular card p-0 mb-5 border-0 position-relative' key={recipe.id}>
                <img className='w-100' src={recipe.image} />
                <div className='bg-black opacity-75 position-absolute w-100 food-title' mb-3>
                  <a href=""><h6 className='text-center mt-3 py-2 opacity-75 text-white'>{recipe.title}</h6></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Vegetarian