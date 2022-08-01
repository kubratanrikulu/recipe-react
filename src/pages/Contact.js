import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const Contact = () => {
    return (
        <div className='sidebar'>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-12 col-lg-9'>
                        <div className='row justify-content-center'>
                            <h2>Contact Us</h2>
                            <form>
                                <div class="form-group mb-3">
                                    <label for="exampleInputEmail1" className='font-italic'>Your Email</label>
                                    <input type="email" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="exampleInputPassword1">Your Name</label>
                                    <input type="text" className="form-control rounded-0" id="exampleInputPassword1" placeholder="Your Name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label for="exampleInputPassword1">Subject</label>
                                    <input type="text" className="form-control rounded-0" id="exampleInputPassword1" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='aboutme'>
                            <div className='widget'>
                                <h4 className='widget-title text-center'>About Me</h4>
                                <div className='about-widget text-center'>
                                    <div className='about-img '>
                                        <img src={'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                                    </div>
                                    <p className='mt-3'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.</p>
                                </div>
                            </div>
                        </div>
                        <div className='aboutme'>
                            <div className='social-widget'>
                                <h4 className='widget-title text-center'>SUBSRIBE & FOLLOW</h4>
                                <div className='about-widget text-center'>
                                    <div className=''>
                                        <div className=' icons  d-flex'>
                                            <div className='instagram'>
                                                <a className=' me-3 ' href=''><BsInstagram /></a>
                                            </div>
                                            <div className='twitter'>
                                                <a className=' me-3 ' href=''> <FaTwitterSquare /></a>
                                            </div>
                                            <div className='github'>
                                                <a className=' me-3 ' href=''> <BsGithub /></a>
                                            </div>
                                            <div className='medium'>
                                                <a className=' me-3 ' href=''> <BsMedium /></a>
                                            </div>
                                            <div className='linkedln'>
                                                <a className=' me-3 ' href=''>  <BsLinkedin /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-me'>
                            <div className='section-1 d-flex justify-content-center'>
                                <div className='category-img position-relative '>
                                    <img className='position-relative' src={'https://images.pexels.com/photos/6493067/pexels-photo-6493067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                                    <span className='bg-white text-black position-absolute py-2 px-5 opacity-75'>DESSERT</span>
                                </div>
                            </div>
                        </div>
                        <div className='about-me mt-3'>
                            <div className='section-1 d-flex justify-content-center'>
                                <div className='category-img position-relative '>
                                    <img className='position-relative' src={'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                                    <span className='bg-white text-black position-absolute py-2 px-5 opacity-75'>SOUP</span>
                                </div>
                            </div>
                        </div>
                        <div className='about-me mt-3'>
                            <div className='section-1 d-flex justify-content-center'>
                                <div className='category-img position-relative '>
                                    <img className='position-relative' src={'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                                    <span className='bg-white text-black position-absolute py-2 px-5 opacity-75'>VEGAN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact