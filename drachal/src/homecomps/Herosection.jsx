import React from "react";

const Herosection = () => {
  return (
    <div className=" w-[95vw] mx-auto flex flex-col items-center pt-4 space-y-8 my-4">
      <div className="head">
        <h2 className="text-4xl m-3 md:m-5">Heading</h2>
      </div>
      
      {/* ----------- First Block (Image Left, Text Right) ----------- */}
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full gap-4">
        {/* Image */}
        <div className="img w-[85vw] h-[25vh] md:w-[45vw] md:h-[50vh]">
          <img
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?_gl=1*1j8hdpy*_ga*Njc0NDc3NzYuMTc0MjEzOTcyNg..*_ga_8JE65Q40S6*czE3NTE4MTk1MTEkbzkkZzEkdDE3NTE4MTk1MTgkajUzJGwwJGgw"
            alt="Advanced Techniques"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Text */}
        <div className="points text-center md:text-left w-[85vw] md:w-[45vw]">
          <h2 className="md:text-5xl text-3xl font-semibold">Advanced Techniques</h2>
          <p className="md:text-2xl text-[1.2rem] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      {/* ----------- Second Block (Image Right, Text Left) ----------- */}
      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between w-full gap-4">
        {/* Image */}
        <div className="img w-[85vw] h-[25vh] md:w-[45vw] md:h-[50vh]">
          <img
            src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg"
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
            src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg"
            alt="Interactive Learning"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Text */}
        <div className="points text-center md:text-left w-[85vw] md:w-[45vw]">
          <h2 className="md:text-5xl text-3xl font-semibold">Interactive Learning</h2>
          <p className="md:text-2xl text-[1.2rem] mt-2">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

    </div>
  );
};

export default Herosection;
