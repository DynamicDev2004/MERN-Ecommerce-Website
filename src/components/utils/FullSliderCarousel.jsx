import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    id: 1,
    img: 'https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Creative-Company-Banner.jpg',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  }
]

function FullSliderCarousel() {
  return (
    <div className='mx-2'>
      <Swiper
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-[450px] overflow-hidden rounded-2xl">
              <img
                src={slide.img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FullSliderCarousel
