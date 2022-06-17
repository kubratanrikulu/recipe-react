import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
const Subscribe = () => {
    return (
        <div>
            <div className='container'>
                <div className='subscribe p-5'>
                    <div className='row align-items-center'>
                        <div className='col-6'>
                            <AiOutlineMail style={{ fontSize: "24px" }} />
                            <h4>NEVER MISS A RECIPE!</h4>
                            <div className='row'>
                                <p className='opacity-50'>Sign up and receive the latest tips via email.</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <form class="d-flex">
                                <input type="text" className="border-0 font-italic w-75 p-2" id="inlineFormInputName2" placeholder="Your Mail Adress" />
                                <button type="submit" className=" border-0 text-white ms-2 p-2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe