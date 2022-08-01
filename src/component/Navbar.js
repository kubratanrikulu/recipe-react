import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <div style={{ fontSize: '15px' }} className='col-6 icons text-black d-flex opacity-50 px-4'>
                        <div className='instagram'>
                            <a className='text-black me-3 ' href=''><BsInstagram /></a>
                        </div>
                        <div className='twitter'>
                            <a className='text-black me-3 ' href=''> <FaTwitterSquare /></a>
                        </div>
                        <div className='github'>
                            <a className='text-black me-3 ' href=''> <BsGithub /></a>
                        </div>
                        <div className='medium'>
                            <a className='text-black me-3 ' href=''> <BsMedium /></a>
                        </div>
                        <div className='linkedln'>
                            <a className='text-black me-3 ' href=''>  <BsLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <form className="d-flex w-25 justify-content-end px-4" role="search">
                        <input class="form-control me-2 border-0 fst-italic" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success border-0 text-black opacity-50" type="submit"><AiOutlineSearch /></button>
                    </form>

                </div>
            </div>

            <div className='row justify-content-center'>
                <img className="mt-5 w-25 mb-3 justify-content-center" src={"https://solopine.com/sproutspoon/wp-content/uploads/2016/03/logo.png"} alt="photo" />
            </div>
            <div className='row'>
                <div><nav class="navbar navbar-expand-lg navbar-light bg-transparent py-3 border border-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">

                                    <a class="nav-link active" aria-current="page" href="#"><Link to="/" className='nav-item'>Home</Link></a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/about" className='nav-item'>About</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><Link to="/contact" className='nav-item'>Contact Us</Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
                </div>
            </div>


        </div>

    )
}

export default Navbar