import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="txt my-7 ">
                <h2 className='text-4xl'>Contact us</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="images md:flex justify-center gap-9 ">
                <div className="img1txt">
                    <div className="img1 md:w-[40vw] rounded-2xl md:h-[35vw] w-full my-6
         mx-auto bg-amber-600 h-[40vh] ">
            <img src="https://images.pexels.com/photos/1630114/pexels-photo-1630114.jpeg" className='w-full h-full rounded-2xl object-cover '   alt="" />
                    </div>
                    <h2 className='text-4xl '>Workshop venue</h2>
                    <p>Lorem ipsum dolor sit amet.</p>

                </div>


                <div className="img1txt">
                  <div className="img1 md:w-[40vw] md:h-[35vw] w-full my-6
         mx-auto bg-amber-600 h-[40vh] rounded-2xl">
             <img src="https://images.pexels.com/photos/32811264/pexels-photo-32811264.jpeg" className='w-full h-full rounded-2xl object-cover '   alt="" />
                    </div>
                    <h2 className='text-4xl'>Contact Info</h2>
                    <p>Lorem ipsum dolor sit amet.</p>

                </div>
            </div>
        </div>
    )
}

export default Contact
