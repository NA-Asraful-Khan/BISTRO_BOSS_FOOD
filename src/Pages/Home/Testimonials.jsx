// TestimonialCarousel.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../../Componants/SectionTitle';
import './CSS/Testimonials.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        const fetchJsonData = async () => {
            try {
              const response = await fetch('/reviews.json');
              const data = await response.json();
              const popularItems = data
              setReviews(popularItems);
            } catch (error) {
              console.error('Error fetching JSON data:', error);
            }
          };
          fetchJsonData();
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    console.log(reviews)
    return (
        <section className="w-[80%] max-w-screen-sm m-auto my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            ></SectionTitle>
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review._id} className="p-[20px] text-center bg-[#f2f2f2] rounded-[10px]">
                <div className="flex flex-col items-center mx-24 my-16">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                            
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      );
};

export default Testimonials;