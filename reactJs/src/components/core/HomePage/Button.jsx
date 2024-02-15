import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, active, linkto}) => {
  return (
    <div>
      <Link to={linkto}> 
        <div className={`
                        text-center text-[13px] 
                        px-6 py-3
                        rounded-md font-bold 
                        ${active ? "bg-yellow-50 text-black  border-b-2  border-r-2  border-yellow-500" : "bg-richblack-800  border-b-2 border-r-2 border-pure-greys-400"}
                        
                        hover:scale-95 transition-all duration-200
                        `}>
            {children}
        </div>
      </Link>
    </div>
  )
}

export default Button
