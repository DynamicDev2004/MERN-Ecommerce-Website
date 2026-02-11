import React, { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

// import required modules
import { Navigation, Thumbs, Zoom } from "swiper/modules";

import "react-inner-image-zoom/lib/styles.min.css";

function ProductImageMagnifier({
  images = [
    'https://serviceapi.spicezgold.com/download/1753712430060_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-0-202501041659.webp',
    'https://serviceapi.spicezgold.com/download/1753712435179_fireboltt-ninja-call-pro-plus-smart-watch-with-bluetooth-calling-black-digital-o493664720-p597671841-2-202501041659.webp',

  ],
  className = "max-w-[500px] h-[400px]",

}) {


  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);



  return (
    <>
      {/* MAIN GALLERY */}
      <div className={`flex ${className}`}>
        {/* THUMBNAILS */}
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          direction="vertical"
          modules={[Thumbs]}
          className="thumb-swiper w-[80px] shrink-0"
        >
          {images.map((img) => (
            <SwiperSlide key={img} className="p-1">
              <img
                src={img}
                className="rounded-md opacity-70 hover:opacity-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={img} className="w-full">
              <img
                src={img}
                className="cursor-zoom-in rounded-lg main-swiper "
                onClick={() => {
                  setActiveIndex(index);
                  setIsOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90" >
          {/* CLOSE */}
          <button
            className="absolute top-4 right-4 z-50 text-white text-3xl"
            onClick={() => setIsOpen(false)}
    
          >
            ×
          </button>

          <Swiper
            initialSlide={activeIndex}
            zoom={{ maxRatio: 3 }}
            navigation
            modules={[Zoom, Navigation]}
            className="h-full"
          >
            {images.map((img) => (
              <SwiperSlide key={img}>
                <div className="swiper-zoom-container flex items-center justify-center">
                  <img src={img} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default ProductImageMagnifier;
