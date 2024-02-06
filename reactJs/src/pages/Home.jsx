// rafc
import React from 'react';
import {FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <div className='relative mx-auto flex flex-col w-11/12 text-white
                        item-center justify-between'>
            <Link to={"/signup"}>
                <div className='mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                                transition-all duration-200 hover:scale-95 w-fit'>
                    <p>Become Instructor</p>
                    <FaArrowRight />
                </div>
            </Link>
        </div>
        
        
      
    </div>
  )
}

export default Home
