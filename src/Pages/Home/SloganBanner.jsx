import React from 'react'
import featuredImg from '../../assets/home/featured.jpg'

const SloganBanner = () => {
  return (
    <div className=" text-white pt-8 my-10 featured-item bg-[url('/src/assets/home/featured.jpg')] bg-left bg-fixed bg-slate-500">
        <div className='md:flex justify-center items-center py-20 lg:px-24 md:px-12 pt-12 opacity-70'>
            <div className='w-[80%] text-center bg-white text-black p-16 rounded-lg'>
                <h2 className='font-bold text-4xl'>BISTRO BOSS</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam obcaecati nulla aspernatur enim libero impedit omnis dolorum sapiente rerum?</p>
            </div>
        </div>

    </div>
  )
}

export default SloganBanner