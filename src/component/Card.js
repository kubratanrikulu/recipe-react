import React from 'react'

const Card = () => {
  return (
    <div>
        {popular.map((recipe) => {
        return(
         <div key={recipe.id}>
           <p>{recipe.title}</p>
           
            </div>
        );
      })}
    </div>
  )
}

export default Card