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

        <div className='mx-8 my-12 shadow-blue-200'>
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}
        
        <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                  <div className='text-4xl font-semibold'>
                    Unlock Your
                    <HighLightText text={"coding potential"} />
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
              
        ></CodeBlocks>










        </div>
        
        
      
    </div>
  )
}

export default Home
