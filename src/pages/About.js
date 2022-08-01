import React from 'react'
import { BsGithub, BsMedium, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
const About = () => {
  return (
    <div className='sidebar'>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-12 col-lg-9'>
            <div className='row justify-content-center'>
              <img className='w-75 mb-5' src={'https://images.pexels.com/photos/5761124/pexels-photo-5761124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
              <p>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko.

Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.</p>
           <p>Lorem Ipsum Dolor
Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies.</p>
            <p>
            Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies.
Selfies iPhone Kickstarter, drinking vinegar jean.
Kale chips proident chillwave deep v laborum.
Deep v cliche lomo biodiesel Neutra selfies.
Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean shorts fixie consequat flexitarian four loko.
            </p>
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
                <img className='position-relative' src={'https://images.pexels.com/photos/6493067/pexels-photo-6493067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                <span className='bg-white text-black position-absolute py-2 px-5 opacity-75'>DESSERT</span>
                </div>
              </div>
            </div>
            <div className='about-me mt-3'>
              <div className='section-1 d-flex justify-content-center'>
                <div className='category-img position-relative '>
                <img className='position-relative' src={'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
                <span className='bg-white text-black position-absolute py-2 px-5 opacity-75'>SOUP</span>
                </div>
              </div>
            </div>
            <div className='about-me mt-3'>
              <div className='section-1 d-flex justify-content-center'>
                <div className='category-img position-relative '>
                <img className='position-relative' src={'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
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

export default About