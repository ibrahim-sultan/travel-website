import React from 'react'

import Borabora from '../assests/borabora.jpg';
import Borabora2 from '../assests/borabora2.jpg';
import Maldives from '../assests/maldives.jpg';
import Maldives2 from '../assests/maldives2.jpg';
import maldives3 from '../assests/maldives3.jpg'
import Keywest from '../assests/keywest.jpg';
import SelectCard from './SelectCard';

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        
       <SelectCard bg={Borabora} text='Bora Bora' />
       <SelectCard bg={Borabora2} text='Maldives' />
       <SelectCard bg={Maldives} text='Antique' />
       <SelectCard bg={Maldives2} text='Jamaica' />
       <SelectCard bg={Keywest} text='Keywest' />
       <SelectCard bg={maldives3} text='Kenya' />

    </div>
  )
}

export default Select