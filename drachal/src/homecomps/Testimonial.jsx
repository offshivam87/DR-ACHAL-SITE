import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <div className="texts my-10">
                <h2 className="text-5xl m-3 font-bold md:m-5">Testimonials</h2>
                <p className='font-medium md:text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dicta?</p>
            </div>

            {/* Flex container wrapping both boxes */}
            <div className="tests">
                <div className="box md:flex md:flex-row md:justify-around md:gap-4 flex flex-col ">
                    {/* First Box */}
                    <div className="w-[90vw] -rotate-3 h-[19vh] mx-auto my-4 bg-[#FFA673] md:w-[48vw] md:h-[35vh]">
                        <div className="md:pt-4 rot w-[88vw] md:w-[48vw] md:h-[35vh] h-[19vh] mx-auto bg-[#000] rotate-3  rounded-[0.5em] text-white p-3">
                            <h2 className='  md:text-4xl text-2xl pt-2 font-bold'>Dummy Name</h2>
                            <p className=' md:text-2xl font-thin'>Lorem, ipsum dolor.</p>
                            <p className='  md:text-3xl pt-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>

                    {/* Second Box */}
                    <div className="w-[90vw] -rotate-3  h-[19vh] mx-auto my-4 bg-[#FFA673] md:w-[48vw] md:h-[35vh]">
                        <div className="md:pt-4 rot w-[88vw] md:w-[48vw] md:h-[35vh] h-[19vh] mx-auto bg-[#000] rotate-3 rounded-[0.5em] text-white p-3">
                            <h2 className=' md:text-4xl text-2xl pt-2 font-bold'>Dummy Name</h2>
                            <p className=' md:text-2xl font-thin'>Lorem, ipsum dolor.</p>
                            <p className=' md:text-3xl pt-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                </div>




                <div className="box md:flex md:flex-row md:justify-around md:gap-4 flex flex-col">
                    {/* First Box */}
                    <div className="w-[90vw]h-[19vh] mx-auto my-4 bg-[#FFA673] md:w-[48vw] md:h-[35vh]">
                        <div className="md:pt-4 rot w-[88vw] md:w-[48vw] md:h-[35vh] h-[19vh] mx-auto bg-[#000] -rotate-3 rounded-[0.5em] text-white p-3">
                            <h2 className='rotate-3 md:text-4xl text-2xl pt-2 font-bold'>Dummy Name</h2>
                            <p className='rotate-3 md:text-2xl font-thin'>Lorem, ipsum dolor.</p>
                            <p className='rotate-3 md:text-3xl pt-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>

                    {/* Second Box */}
                    <div className="w-[90vw] h-[19vh] mx-auto my-4 bg-[#FFA673] md:w-[48vw] md:h-[35vh]">
                        <div className="md:pt-4 rot w-[88vw] md:w-[48vw] md:h-[35vh] h-[19vh] mx-auto bg-[#000] rotate-3 rounded-[0.5em] text-white p-3">
                            <h2 className='-rotate-3 md:text-4xl text-2xl pt-2 font-bold'>Dummy Name</h2>
                            <p className='-rotate-3 md:text-2xl font-thin'>Lorem, ipsum dolor.</p>
                            <p className='-rotate-3 md:text-3xl pt-3 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
