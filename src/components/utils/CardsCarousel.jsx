import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function CardsCarousel() {
  

  


  return (
 
      <Swiper
  spaceBetween={30}
centeredSlides={false}
centerInsufficientSlides={true}
autoplay={true}
slidesPerView={2}
  breakpoints={{
    320: { slidesPerView: 3, spaceBetween: 20 },
    420: { slidesPerView: 4, spaceBetween: 10 },
    520: { slidesPerView: 5, spaceBetween: 10 },
    620: { slidesPerView: 6, spaceBetween: 10 },
    720: { slidesPerView: 7, spaceBetween: 10 },
    820: { slidesPerView: 9, spaceBetween: 10 },
  }}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>

        {Array(11).fill("1").map((i)=>(
             <SwiperSlide className='flex bg-secondary/5 min-w-max p-5 rounded-2xl'>
           <div className='flex flex-col gap-2 justify-center items-center group cursor-pointer'>
            <div className='w-auto h-14 '>
            <img src="/category-icons/fashion-icon.png" alt="" className='group-hover:scale-110 transition'/>
            </div>
            <span className='text-sm lg:text-md group-hover:text-primary transition '>Fashion</span>
           </div>
        </SwiperSlide>
        ))}
       
      </Swiper>

  )
}

export default CardsCarousel