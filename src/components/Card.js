import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  return (
    <div>
        <div className='h-52 w-52' >
            <img src={course.image.url} />

            <div>
                <button >
                    <FcLikePlaceholder fontSize="1.75rem" />
                </button>
            </div>
        </div>
        
        <div>
              <p>{course.title}</p>
              <p>{course.description}</p>
        </div>
       
    </div>
  )
}

export default Card