import React from 'react'

const RegisterForWorkshop = () => {
  return (
    <div>
      <div className="w-[90vw] h-[18vh] mx-auto my-auto bg-[#FFA673] md:w-[95vw] md:h-[45vh] ">
        <div className="md:pt-4 rot w-[88vw] md:w-[95vw] md:h-[45vh] h-[18vh]  flex flex-col md:justify-evenly md:flex-row items-center mx-auto bg-[#000] md:flex justify-center -rotate-3 rounded-[0.5em] text-white text-center">
            <div className="txt">

            <h2 className='text-white rotate-3 text-[1.5rem] md:text-5xl  '>Register for the Workshop</h2>
            <p className='rotate-3 text-[0.7rem]  p-1.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, saepe.</p>
            </div>
            <button className='text-white text-sm rotate-3 rounded-4xl  py-3 px-3 mb-1  bg-orange-500'>Register Now</button>
      </div>
      </div>
    </div>
  )
}

export default RegisterForWorkshop
