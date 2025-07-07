import React from 'react'

const Table = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold m-5 flex justify-center'>Registration Details</h2>

      {/* Wrapper for all cards */}
      <div className='md:flex md:flex-row md:justify-around md:items-start flex flex-col'>

        {/* Conference Card */}
        <div className='flex flex-col items-center md:w-1/3'>
          <div className="head flex justify-center text-center gap-2 items-center">
            <h1 className='text-3xl font-medium pt-3'>Conference</h1>
            <p className='pt-2 font-medium'>only</p>
          </div>
          <div className="tables w-[80vw] md:w-[90%] text-white my-4">
            <div className="con rounded-2xl min-h-[30vh] bg-orange-500 flex flex-col pt-5 items-center text-center">
              <h2 className='text-5xl font-medium'>Early Bird</h2>
              <h2 className='text-[1.5rem] font-medium pt-1'>Till 15 July</h2>
              <h2 className='font-thin text-[1.8rem]'>4000/-</h2>
              <h2 className='text-[1.5rem] font-bold pt-1'>After 15 July</h2>
              <h2 className='font-thin text-[1.8rem]'>5000/-</h2>
            </div>
          </div>
        </div>

        {/* Workshop Card */}
        <div className='flex flex-col items-center md:w-1/3'>
          <div className="head flex justify-center text-center gap-2 items-center">
            <h1 className='text-3xl font-medium pt-3'>Workshop</h1>
            <p className='pt-2 font-medium'>only</p>
          </div>
          <div className="tables w-[80vw] md:w-[90%] text-white my-4">
            <div className="con rounded-2xl min-h-[30vh] bg-orange-500 flex flex-col pt-5 items-center text-center">
              <h2 className='text-5xl font-medium'>Early Bird</h2>
              <h2 className='text-[1.5rem] font-medium pt-1'>Till 15 July</h2>
              <h2 className='font-thin text-[1.8rem]'>10000/-</h2>
              <h2 className='text-[1.5rem] font-bold pt-1'>After 15 July</h2>
              <h2 className='font-thin text-[1.8rem]'>12000/-</h2>
            </div>
          </div>
        </div>

        {/* Hotel Card */}
        <div className='flex flex-col items-center md:w-1/3'>
          <div className="head flex justify-center text-center gap-2 items-center">
            <h1 className='text-3xl font-medium pt-3'>Hotel Mercure</h1>
            <p className='pt-2 font-medium'>Per Night</p>
          </div>
          <div className="tables w-[80vw] md:w-[90%] text-white my-4">
            <div className="con rounded-2xl min-h-[33vh] bg-orange-500 flex flex-col pt-5 items-center text-center">
              <h2 className='text-[3rem] font-medium pt-1'>Single</h2>
              <h2 className='font-thin text-[1.8rem]'>7500/-</h2>
              <h2 className='text-[3rem] font-bold pt-1'>Sharing</h2>
              <h2 className='font-thin text-[1.8rem]'>8500/-</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Table
