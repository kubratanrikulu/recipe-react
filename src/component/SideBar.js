import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='container'>
        <div className='row'>
          <div className='col-9'>
            
          </div>
          <div className='col-3'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar