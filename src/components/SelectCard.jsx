import React from 'react'

const SelectCard = (props) => {
  return (
    <div className='relative'>
    <img className='w-full h-full object-cover' src={props.bg} alt="/" />
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
       <p className='text-2xl font-bold text-white absolute left-4 bottom-4'>
        {props.text}</p>
       
    </div>
 </div>
  ) 
}

export default SelectCard