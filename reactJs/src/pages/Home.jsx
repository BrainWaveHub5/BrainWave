// rafc
import React from 'react';
import Banner from "../assets/Images/banner.mp4"
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import CTAbutton from "../components/core/HomePage/Button";
import HighLightText from '../components/core/HomePage/HighLightText';
const Home = () => {
  return (
    <div>
        <div className='relative mx-auto flex flex-col w-11/12 text-white
                        max-w-maxContent
                        item-center justify-between'>

            <Link to={"/signup"}>
                <div className='group mx-auto rounded-full bg-richblack-800 
                                font-bold text-richblack-200
                                transition-all duration-200 
                                hover:scale-95 w-fit'>
                  <div className='flex flex-row item-center gap-2
                                  rounded-full px-10 py-[5px]
                                  transition-all duration-200 
                                  group-hover:bg-richblack-900'>
                    <p>Become Instructor</p>
                    <FaArrowRight />
                  </div>   
                </div>
            </Link>


        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future with 
          <HighLightText text={"Coding Skills"} />
        </div>

        <div className='text-center mt-4 flex flex-row w-[100%]   justify-center text-lg font-bold 
                        text-richblack-300'>

         With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 

        </div>

        <div className='flex flex-row justify-center gap-7 mt-8'>
          <CTAbutton active={true} linkto={"/signup"} >
             Lets learn more   
          </CTAbutton>
          <CTAbutton active={false} linkto={"/login"} >
             Continue your learnings   
          </CTAbutton>
          
        </div>

        <div className='mx-8 my-12 shadow-blue-200 '>
          <video 
          muted 
          loop 
          autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}
        
        <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                  <div className='text-4xl font-semibold'>
                    Unlock Your
                    <HighLightText  text={"coding potential"} /> <br/>
                    with our online courses
                  </div>
                }
                ctabtn1={
                  {
                  btnText: "try it yourself",
                  linkto: "/signup",
                  active: true,
                  }
                }
                ctabtn2={
                  {
                  btnText: "learn more",
                  linkto: "/login",
                  active: false,
                  }
                }
              codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1>Hello, World!</h1>\n<h2>Namaste doston </h2>\n<h2> ki haal paji </h2>\n</body>\n</html>`}
              codeColor = {"text-orange-5"}
              backgroundGredient={"bg-yellow-25"}
              subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

        ></CodeBlocks>

          <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                  <div className='text-4xl font-semibold'>
                    Start 
                    <HighLightText  text={"coding in seconds"} /> <br />
                
                  </div>
                }
                ctabtn1={
                  {
                  btnText: "Continue Lesson",
                  linkto: "/signup",
                  active: true,
                  }
                }
                ctabtn2={
                  {
                  btnText: "learn more",
                  linkto: "/login",
                  active: false,
                  }
                }
              codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1>Hello, World!</h1>\n<h2>Namaste doston </h2>\n<h2> ki haal paji </h2>\n</body>\n</html>`}
              codeColor = {"text-blue-100"}
              backgroundGredient={"bg-blue-300"}
              subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}

        ></CodeBlocks>










        </div>
        
        
      
    </div>
  )
}

export default Home
