import React from 'react'

const Hero2 = () => {
    return (
        <div>
            <div className=" w-[95vw] mx-auto flex flex-col items-center pt-4 space-y-8 my-4">
                 <div className="head">
        <h2 className="text-4xl m-3 md:m-7">Heading</h2>
      </div>

                {/* ----------- First Block (Image Left, Text Right) ----------- */}
                <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-4">
                    {/* Image */}
                    <div className="img w-[85vw] h-[25vh] md:w-[45vw] md:h-[50vh]">
                        <img
                            src="https://images.pexels.com/videos/7195710/advice-aid-business-composition-7195710.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2"
                            alt="Advanced Techniques"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    {/* Text */}
                    <div className="points text-center md:text-left w-[85vw] md:w-[45vw]">
                        <h2 className="md:text-5xl text-3xl font-semibold">Hands On Training</h2>
                        <p className="md:text-2xl text-[1.2rem] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                {/* ----------- Second Block (Image Right, Text Left) ----------- */}
                <div className="flex flex-col md:flex-row-reverse items-center md:justify-between w-full gap-4">
                    {/* Image */}
                    <div className="img w-[85vw] h-[25vh] md:w-[45vw] md:h-[50vh]">
                        <img
                            src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg"
                            alt="Expert Guidance"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    {/* Text */}
                    <div className="points text-center md:text-center w-[85vw] md:w-[45vw]">
                        <h2 className="md:text-5xl text-3xl font-semibold">Expert Guidance</h2>
                        <p className="md:text-2xl text-[1.2rem] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                {/* ----------- Third Block (Image Left, Text Right) ----------- */}
                <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-4">
                    {/* Image */}
                    <div className="img w-[85vw] h-[25vh] md:w-[45vw] md:h-[50vh]">
                        <img
                            src="https://images.pexels.com/photos/8378747/pexels-photo-8378747.jpeg"
                            alt="Interactive Learning"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    {/* Text */}
                    <div className="points text-center md:text-left w-[85vw] md:w-[45vw]">
                        <h2 className="md:text-5xl text-3xl font-semibold">Interactive Sessions </h2>
                        <p className="md:text-2xl text-[1.2rem] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero2
