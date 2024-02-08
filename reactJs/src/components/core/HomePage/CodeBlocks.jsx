import React, { useState } from 'react'
import CTAButton from "./Button";
import {FaArrowRight} from "react-icons/fa"
import {TypeAnimation} from "react-type-animation"


const CodeBlocks = ({
  position, heading, subheading, ctabtn1, ctabtn2, codeblock,
  backgroundGredient, codeColor
}) => {


  return (
    <div className={`flex ${position} flex-row my-20 justify-between gap-10`}>
      {/*section 1*/}
      <div className='w-[50%] flex flex-col gap-8'> 
        {heading}
        <div className='text-richblack-300 font-bold' >
          {subheading}
        </div>

        <div className='flex gap-7 mt-7'>
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-2 item-center'>
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            <div className='flex gap-2 item-center'>
              {ctabtn2.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>

        <div className='relative h-fit flex flex-row text-[16px] w-[90%] py-4 lg:w-[500px] shadow-[#50d71e] '>
          <div className={`absolute  h-40 w-[200px] ${backgroundGredient} blur-[140px] `}>

          </div>
         
          <div className='absolute p-2 flex flex-row bg-gradient-to-r from-[#0E1A2D3D] to-[#111E3261] 
                         '>
              <div className=' text-center flex flex-col w-[20px] mr-4 
                              text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                
              </div>
              <div className=''>
                  <div  className={`w-[450px] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 `}>
                    <TypeAnimation
                    sequence={[codeblock, 1000, ""]}
                    repeat={Infinity}
                    cursor={true}
                    style={{
                      
                      whiteSpace: 'pre-line',
                      wordBreak:'break-all'
                    }}
                    omitDeletionAnimation={true}
                    />
                  </div>
              </div>
              
          </div>
          
        </div>

        
      </div>
    
  )
}

export default CodeBlocks
