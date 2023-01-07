import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
     <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
           <h2> LUXURY INCLUDED VACATION FOR TWO PEOPLE </h2>
            <p className='py-4'>Come experience the very pinnacle of luxury caribbeans all-inclusive
             vacations for the couples at BEACHES Resorts. Our luxury resorts,
             set along the most gorgeous tropical settings and exquisite beaches
             in saint lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
             Cuacao, features unlimited gournet dining, unique bars serving premium
             liquors and wines, and every land and water sport, including 
             Complimentary green fees at our golf resorts and certified scuba diving 
             at most resorts. If you are planning a wedding, BEACHES is the leader 
             in caribbean destination wedding and honeymoon packages.</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center '>
              <button>
                <RiCustomerService2Fill size={55} />
              </button>
                 <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'> ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                 </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center '>
              <button>
                <MdOutlineTravelExplore size={55} />
              </button>
                 <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY
                       FOR 20 YEARS IN-A-ROW</p>
                 </div>
            </div>  
        </div>
    </div>
     <div>
         <div className='border text-center '>
           <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
           <p className='py-4'>12 HOURS LEFT</p>
           <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAFE</p>
         </div>
     <form className='w-full'>
        <div className='flex flex-col my-2 '> 
           <label>Destination</label>
           <select className='border rounded-md p-2' >
              <option>Grande Antigua</option>
              <option>Maldives</option>
              <option>London</option>
              <option>Dubai</option>
              <option>Canada</option>
           </select>
        </div>
        <div className='flex flex-col my-4 '>
           <label> Check-in</label>
           <input className='border rounded-md p-2' type="date" />
        </div>
        <div className='flex flex-col my-2 '>
           <label> Check-Out</label>
           <input className='border rounded-md p-2' type="date" />
        </div>
            <button className='w-full my-4'>Rates & Availability</button>
     </form>
 </div>
    </div>
  )
}

export default Search