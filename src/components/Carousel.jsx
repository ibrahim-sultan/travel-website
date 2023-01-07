import React, {useState} from 'react'
import { BsArrowUpLeftSquare, BsArrowUpRightSquare  } from 'react-icons/bs';

 const sliderData =[
    {
        url:'https://images.unsplash.com/photo-1606820854416-439b3305ff39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG91cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
    },

    {
        url:'https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG91cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
    },

    {
        url:'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
    },

 ]


function Carousel() {
    const [slide, setSlide] = useState(0)
      const length = sliderData.length
        // console.log(length)

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide +1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }


  return (
    <div className='max-w-[1240px] object-fit:contain mx-auto px-4 py-16 relative flex justify-center items-center '>
        <BsArrowUpLeftSquare onClick={prevSlide} className='absolute top-[50%] text-3xl text-black cursor-pointer left-8' />
        <BsArrowUpRightSquare onClick={nextSlide} className='absolute top-[50%] text-3xl text-black cursor-pointer right-8' />
       {sliderData.map((item, index) => (
         <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (<img className='w-full rounded-md' src={item.url} alt="/" />)}
         </div>
       ))}

    </div>
  ); 
};

export default Carousel