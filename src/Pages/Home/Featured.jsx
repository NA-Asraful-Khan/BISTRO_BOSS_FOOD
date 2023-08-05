import React from 'react'
import SectionTitle from '../../Componants/SectionTitle'

import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div className=" text-white pt-8 my-10 featured-item bg-[url('/src/assets/home/featured.jpg')] bg-left bg-fixed bg-slate-500">
        <SectionTitle className=''
        heading={"Featured Item"}
        subHeading={"check it out"}
        ></SectionTitle>
        <div className='md:flex justify-center items-center py-20 lg:px-24 md:px-12 pt-12  bg-slate-500 bg-opacity-50'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10 p-12 '>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque modi facilis eius deleniti dolorum, quasi accusamus nisi maiores neque ex ratione quibusdam animi fuga recusandae placeat earum reprehenderit doloremque hic excepturi ab porro nulla adipisci? In vitae minus provident dolorum quo maxime, rem harum debitis consequuntur? Harum, recusandae laborum.</p>
                <button className="btn btn-outline border-white hover:bg-white border-b-4 text-white hover:text-black">Order Now</button>
            </div>
        </div>

    </div>
  )
}

export default Featured