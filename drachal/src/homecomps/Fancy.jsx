import React from 'react'

const Fancy = () => {
  return (
    <div>
       <div className="main md:flex md:justify-between md:items-start w-[95vw] mx-auto  mt-9">
  {/* LEFT SIDE - Text Content */}
  <div className="text w-[95vw] md:w-[48%] mt-2 text-white bg-gray-600 rounded-[0.8em] min-h-[25vh] flex flex-col justify-center p-4">
    <h1 className="heading text-3xl">Lorem ipsum dolor sit amet consectetur.</h1>
    <p className="para mt-2">Sit amet consectetur adipisicing elit. Recusandae enim autem saepe.</p>
    <div className=' '>
    <button className='text-white text-sm rounded-4xl py-2 px-5 mt-4 w-fit bg-orange-500'>Register Now</button>
  </div>
  </div>

  {/* RIGHT SIDE - Fancy Orange Box */}
  <div className="fancy w-[95vw] md:w-[48%]">
   <div className="grey  bg-[#FFA673] p-1.5  m-2 mt-[2em] rounded-[0.8rem] -rotate-3">
                    <div className='flex justify-between mt-2 mb-3 px-2'>
                        <h1 className='text-3xl font-medium'>Registration</h1>
                        
                        <p className='text-3xl   font-medium'>01</p>
                    </div>
                    <p className='ml-2  flex w-[80vw] pb-4  ' >Lorem ipsum dolor sit amet.</p>
                    
                </div>
 






                <div className="grey  bg-[black] text-white p-1.5  m-2 mt-[2em] rounded-[0.8rem] rotate-3">
                    <div className='flex justify-between mt-2 mb-3 px-2'>
                        <h1 className='text-3xl font-medium'>Payment</h1>
                        
                        <p className='text-3xl   font-medium'>02</p>
                    </div>
                    <p className='ml-2  flex w-[80vw] pb-4  ' >Lorem ipsum dolor sit amet.</p>
                    
                </div>



                <div className="grey  bg-[#FFA673] p-1.5  m-2 mt-[2em] rounded-[0.8rem] -rotate-3">
                    <div className='flex justify-between mt-2 mb-3 px-2'>
                        <h1 className='text-3xl font-medium'>Preparation</h1>
                        
                        <p className='text-3xl   font-medium'>03</p>
                    </div>
                    <p className='ml-2  flex w-[80vw] pb-4  ' >Lorem ipsum dolor sit amet.</p>
                    
                </div>



                <div className="grey  bg-[#000] text-white p-1.5  m-2 mt-[2em] rounded-[0.8rem] rotate-3">
                    <div className='flex justify-between mt-2 mb-3 px-2'>
                        <h1 className='text-3xl font-medium'>Attendence</h1>
                        
                        <p className='text-3xl   font-medium'>04</p>
                    </div>
                    <p className='ml-2  flex w-[80vw] pb-4  ' >Lorem ipsum dolor sit amet.</p>
                    
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Fancy
