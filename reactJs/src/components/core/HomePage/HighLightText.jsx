import React from 'react'

const HighLightText = ({text}) => {
  return (
    
      <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#9C27B0]`}> 
      {" "}
      {text}
      </span>

  )
}

export default HighLightText
