import React,{useEffect} from 'react'

export default function loadingContent({setPage}) {

   useEffect(() => {
        setTimeout(() => {
          setPage((state) => state + 1);
        }, 2000);
      }, []);

  return (
    <img className='animationClass' src={"http://localhost:3355/loading_animation.gif"} alt="loading animation"/>
  )
}
