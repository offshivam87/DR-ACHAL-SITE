import React from 'react'
import Herosection from '../homecomps/Herosection'
import RegisterForWorkshop from './RegisterForWorkshop'
import Hero2 from './Hero2'
import Table from '../homecomps/Table'
import Fancy from '../homecomps/Fancy'
import Testimonial from '../homecomps/Testimonial'
import Contact from '../homecomps/Contact'

const Home = () => {
  return (
    <div className="w-full mt-[20%] md:mt-[10%] p-2 flex  flex-col text-center">
      <h2 className="text-5xl font-bold mb-3">
        Welcome to the Endoscopic Spine Workshop
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex laborum non aliquid. Sequi, aut unde. Enim eius laudantium repudiandae, quod dolorum officia libero <br /> natus.
      </p>

      {/* IMAGES-1 */}

      <div className='images flex flex-wrap gap-4 justify-center items-center w-full pb-0 md:w-full mx-auto mt-8 md:py-6'>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
      </div>


      {/* IMAGES-2 */}

      <div className='images flex flex-wrap gap-4 justify-center items-center w-full md:w-full mx-auto mt-8 py-6'>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
        <div className='w-[20vw] h-[14vh] md:w-[20vw] md:h-[50vh] bg-gray-400 rounded-[5%]'></div>
      </div>


      {/* image aur point */}
      <Herosection />
      <RegisterForWorkshop />
      <Hero2 />
      <Table />
      <Fancy/>
      <Testimonial/>
      <Contact/>




    </div>


  )
}

export default Home
