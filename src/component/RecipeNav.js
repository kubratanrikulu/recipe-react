import React from 'react'
import { NavLink } from 'react-router-dom'
const RecipeNav = () => {
  return (
    <div>
        <div className='container'>
          <div className='recipe-navbar text-center'>
            <ul className='d-flex justify-content-around'>
                <li>
                <img className='' src={"https://images.pexels.com/photos/4929692/pexels-photo-4929692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='w-100 mt-3'>DINNER</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>DESSERT</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>SOUP</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/3673762/pexels-photo-3673762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>VEGETARIAN</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>VEGAN</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/4519053/pexels-photo-4519053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>SALADS</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>ITALLIAN</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/299351/pexels-photo-299351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>MEAT</h6>
                </li>
                <li>
                <img className='' src={"https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                 <h6 className='mt-3'>PASTA</h6>
                </li>
            </ul>
          </div>  
        </div>
    </div>
  )
}

export default RecipeNav