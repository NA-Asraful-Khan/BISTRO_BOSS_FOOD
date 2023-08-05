import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from "../../Componants/SectionTitle";


const Category = () => {
    return (
        <section className="md:mx-12 md:px-12 px-6">
            <SectionTitle subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}></SectionTitle>
            <Swiper
                slidesPerView={3.2}
                spaceBetween={30}
                centeredSlides={false}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide>
                    <img className="w-[300px]" src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-[300px]" src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-[300px]" src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-[300px]" src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-[300px]" src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;