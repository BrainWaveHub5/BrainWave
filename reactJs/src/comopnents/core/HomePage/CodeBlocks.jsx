import React from 'react'
import CTAButton from "./Button";
import {FaArrowRight} from "react-icons/fa"
import {TypeAnimation} from "react-type-animation"

const CodeBlocks = ({
  position, heading, subheading, ctabtn1, ctabtn2, codeblock,
  backgroundGredient, codeColor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
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
    </div>
  )
}

export default CodeBlocks
