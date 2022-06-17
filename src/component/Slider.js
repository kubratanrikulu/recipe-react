import React from 'react'

const Slider = () => {
    return (
        <div className='p-5'>
            <div className='row'>
                <div className='col-4 d-flex justify-content-center'>
                    <div className='slider-card'>
                        <img className='w-100' src={"https://images.pexels.com/photos/4147872/pexels-photo-4147872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                        <div className='info'>
                        <h1> Mountain</h1>
		             	<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p> 
                        </div>
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-center'>
                    <div className='slider-card'>
                        <img className='w-100' src={"https://images.pexels.com/photos/7525115/pexels-photo-7525115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                    </div>
                </div>
                <div className='col-4 d-flex justify-content-center'>
                    <div className='slider-card'>
                        <img className='w-100' src={"https://images.pexels.com/photos/4057740/pexels-photo-4057740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider