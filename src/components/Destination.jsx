import React from 'react'

import Borabora from '../assests/borabora.jpg';
import Borabora2 from '../assests/borabora2.jpg';
import Maldives from '../assests/maldives.jpg';
import Maldives2 from '../assests/maldives2.jpg';
import Keywest from '../assests/keywest.jpg';

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h2>All-Inclusive Resorts</h2>
        <p className='py-4'>On the caribbean'n Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
           <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Borabora} alt="/" />
           <img className='w-full h-full object-cover' src={Borabora2} alt="/" />
           <img className='w-full h-full object-cover' src={Maldives} alt="/" />
           <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
           <img className='w-full h-full object-cover' src={Keywest } alt="/" />
        </div>
    </div>
 
    
  )
}

export default Destination