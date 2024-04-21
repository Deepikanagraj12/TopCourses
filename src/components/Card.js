import React from 'react'
import { FcLikePlaceholder , FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let SetlikedCourses = props.SetlikedCourses;

  function clickHandler() {
    if(likedCourses.includes(course.id)){
      SetlikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ));
      toast.warning("like removed")
    }
    else{
      if(likedCourses.length === 0){
          SetlikedCourses([course.id]);
      }
      else{
        SetlikedCourses((prev) => [...prev, course.id])
      }

      toast.success("added to liked")

    }


  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative' >
            <img src={course.image.url} />

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                   {
                    likedCourses.includes(course.id) ? 
                    (<FcLike fontSize="1.75rem"/>):
                    (<FcLikePlaceholder fontSize="1.75rem"/>)
                   }
                </button>
            </div>
        </div>
        
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>{
                course.description > 100?
                (course.description.substring(0,100))+ "...":
                (course.description)
                }</p>
        </div>
       
    </div>
  )
}

export default Card