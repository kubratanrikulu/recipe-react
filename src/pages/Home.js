import React from 'react'
import Vegetarian from '../component/Vegetarian'
import Popular from '../component/Popular'
import Slider from '../component/Slider'
import Subscribe from '../component/Subscribe'
import RecipeNav from '../component/RecipeNav'
import SideBar from '../component/SideBar'

const Home = () => {
  return (
    <div>
      <Slider/>,
      <RecipeNav/>,
      <Vegetarian />
      <Subscribe/>,
      <SideBar/>,
      <Popular/>
    </div>
  )
}

export default Home