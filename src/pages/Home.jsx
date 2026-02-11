import React from "react";
import CardsCarousel from "../components/utils/CardsCarousel";
import FullSliderCarousel from "../components/utils/FullSliderCarousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductCard from "../components/products/ProductCard";
import { FiTruck } from "react-icons/fi";

import {
  FiRefreshCcw,
  FiCreditCard,
  FiGift,
  FiHeadphones,
} from "react-icons/fi";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination} from "swiper/modules";

function Home() {
  const [value, setValue] = React.useState(0);

  const features = [
  {
    icon: <FiTruck size={28} />,
    title: "Free Shipping",
    desc: "For all Orders Over $100",
  },
  {
    icon: <FiRefreshCcw size={28} />,
    title: "30 Days Returns",
    desc: "For an Exchange Product",
  },
  {
    icon: <FiCreditCard size={28} />,
    title: "Secured Payment",
    desc: "Payment Cards Accepted",
  },
  {
    icon: <FiGift size={28} />,
    title: "Special Gifts",
    desc: "Our First Product Order",
  },
  {
    icon: <FiHeadphones size={28} />,
    title: "Support 24/7",
    desc: "Contact us Anytime",
  },
];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="max-w-[1800px] mx-auto">
        <FullSliderCarousel />
      </div>

      <div className="container py-5">
        <CardsCarousel />
      </div>

      {/* Popular Products */}
      <div className="container py-5">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl 2xl:text-2xl font-bold text-darkGray">
              Popular Products
            </h2>
            <p className="text-sm 2xl:text-md text-lightGray">
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <div>
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 480, lg: 550 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ff5722", // custom indicator color
                  },
                  "& .MuiTab-root.Mui-selected": {
                    color: "#ff5722", // selected tab text color
                  },
                  "& .MuiTab-root": {
                    color: "#666", // default tab text color
                  },
                }}
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
              </Tabs>
            </Box>
          </div>
        </div>

        <div className=" py-5">
          <>
            <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              // centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                620: { slidesPerView: 3 },
                900:{ slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {Array(8).fill(1).map(()=>(
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              ))}
            
            
            </Swiper>
          </>
        </div>
      </div>

      {/* Carousel Banner */}
      <div className=" container">
        <div className="grid grid-cols-3 gap-2 ">
        <div className=" col-span-3 lg:col-span-2 h-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full swiper-fade" autoplay={true}>
        <SwiperSlide>
          <div className="relative rounded-xl overflow-hidden ">
          <div className="absolute right-8 h-full flex items-start flex-col justify-center">
            <span className="text-xs md:text-sm ">Big Special Sale</span>
            <h2 className="font-bold text-md md:text-xl lg:text-3xl text-left line-clamp-3 max-w-[180px] md:max-w-[300px] text-darkGray">Buy New iPhone 17 Pro at Cheapest Rate</h2>
            <p className="text-sm md:text-md mt-4 text-lightGray">Starting at <span className="font-bold text-sm md:text-md lg:text-xl text-primary">360,000</span></p>
                   <button className="bg-primary text-xs text-white py-1 px-2 rounded-md font-bold hover:bg-primary/90 mt-2 hover:shadow-md">SHOP NOW</button>
          </div>
          <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" alt="" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="relative rounded-xl overflow-hidden ">
          <div className="absolute right-8 h-full flex items-start flex-col justify-center">
            <span className="text-xs md:text-sm ">Big Special Sale</span>
            <h2 className="font-bold text-md md:text-xl lg:text-3xl text-left line-clamp-3 max-w-[180px] md:max-w-[300px] text-darkGray">Buy New iPhone 17 Pro at Cheapest Rate</h2>
            <p className="text-sm md:text-md mt-4 text-lightGray">Starting at <span className="font-bold text-sm md:text-md lg:text-xl text-primary">360,000</span></p>
                   <button className="bg-primary text-xs text-white py-1 px-2 rounded-md font-bold hover:bg-primary/90 mt-2 hover:shadow-md">SHOP NOW</button>
          </div>
          <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" alt="" />
          </div>
          </SwiperSlide>
      
     
       
      </Swiper>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col col-span-3  lg:col-span-1 gap-2">
              <div >
                    <div className="relative rounded-xl overflow-hidden ">
          <div className="absolute right-8 h-full flex items-start flex-col justify-center">
            <span className="text-xs ">Big Special Sale</span>
            <h2 className="font-bold text-sm md:text-md text-left line-clamp-3 max-w-[150px] text-darkGray">Buy New iPhone 17 Pro at Cheapest Rate</h2>
            <p className="text-xs md:text-sm mt-1 text-lightGray">Starting at <span className="font-bold text-md md:text-lg text-primary">360,000</span></p>
              <button className="bg-primary text-xs text-white py-1 px-2 rounded-md font-bold hover:bg-primary/90 mt-2 hover:shadow-md">SHOP NOW</button>
       
          </div>
          <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" alt="" />
          </div>
              </div>
             

              <div >
                    <div className="relative rounded-xl overflow-hidden ">
          <div className="absolute right-8 h-full flex items-start flex-col justify-center">
            <span className="text-xs ">Big Special Sale</span>
            <h2 className="font-bold text-md text-left line-clamp-3 max-w-[150px] text-darkGray">Buy New iPhone 17 Pro at Cheapest Rate</h2>
            <p className="text-sm mt-1 text-lightGray">Starting at <span className="font-bold text-lg text-primary">360,000</span></p>
                   <button className="bg-primary text-xs text-white py-1 px-2 rounded-md font-bold hover:bg-primary/90 mt-2 hover:shadow-md">SHOP NOW</button>
          </div>
          <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" alt="" />
          </div>
              </div>
      </div>
      </div>
      </div>

      {/* Free Delivery Bar */}
      <div className="container">
      <div className="mb-8 my-10 flex items-center justify-between rounded-xl border border-primary px-6 py-4">
      <div className="flex items-center gap-3">
        <FiTruck className="text-3xl text-darkGray" />
        <span className="text-lg font-semibold uppercase">
          Free Shipping
        </span>
      </div>

      <p className="hidden text-lightGray md:block text-center">
        Free Delivery Now On Your First Order and over $200
      </p>

      <span className="text-xl font-bold text-darkGray">
        – Only <span className="text-primary">$200*</span>
      </span>
    </div>


</div>

    {/* Low pricing Cards */}
<div className="container">
    
       <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                780: { slidesPerView: 3 },
                820: { slidesPerView: 3 },
    
         
                1024: { slidesPerView: 4 },
                
            
              }}
              
              
              className="mySwiper"
            >

            
    {/* Cards Looping */}
   {Array(4).fill(1).map(()=>(
     <SwiperSlide>
 <div className={`relative flex items-center rounded-xl group overflow-hidden cursor-pointer`}>
      <div className=" absolute left-3 w-[50%] text-left">
        <h2 className="xs:text-lg md:text-sm lg:text-xl my-1 font-semibold text-darkGray line-clamp-3">
          Buy bag with low price
        </h2>

        <div className="text-sm 2xl:text-xl font-bold text-primary">
         839 only
        </div>

        <button className="text-xs underline underline-offset-4 group-hover:text-primary">
          SHOP NOW
        </button>
      </div>

      <img
        src='https://serviceapi.spicezgold.com/download/1763531275315_1737020756772_New_Project_1.png'
        alt={"Cards"}
        className=" h-auto w-full object-contain"
      />
    </div>
    </SwiperSlide>
   ))}


     </Swiper>

</div>



   {/* Latest Products */}
      <div className="container py-5">

        
            <h2 className="text-xl 2xl:text-2xl font-bold text-darkGray">
              Latest Products
            </h2>
    
  

        <div className="mt-3">
          <>
            <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              // centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                620: { slidesPerView: 3 },
                900:{ slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {Array(8).fill(1).map(()=>(
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              ))}
            
            
            </Swiper>
          </>
        </div>
      </div>

   {/* Featured Products */}
      <div className="container py-5">

        
            <h2 className="text-xl 2xl:text-2xl font-bold text-darkGray">
              Featured Products
            </h2>
    
  

        <div className="mt-3">
          <>
            <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              // centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                620: { slidesPerView: 3 },
                900:{ slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {Array(8).fill(1).map(()=>(
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              ))}
            
            
            </Swiper>
          </>
        </div>
      </div>


    {/* Categories Cards */}
<div className="container ">
    
       <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                620: { slidesPerView: 3 },
                900:{ slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                
            
              }}
              
              
              className="mySwiper"
            >

            
    {/* Cards Looping */}
   {Array(4).fill(1).map(()=>(
     <SwiperSlide>
 <div className={`rounded-xl group overflow-hidden cursor-pointer`}>
   

      <img
        src='https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp'
        alt={"Cards"}
        className=" h-auto w-full object-contain group-hover:-rotate-3 group-hover:scale-105 transition-all"
      />
    </div>
    </SwiperSlide>
   ))}


     </Swiper>

</div>



   {/* Beauty Products */}
      <div className="container py-5 mt-10">

        
            <h2 className="text-xl 2xl:text-2xl font-bold text-darkGray">
              Beauty Products
            </h2>
    
  

        <div className="mt-3">
          <>
            <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              // centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                620: { slidesPerView: 3 },
                900:{ slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {Array(8).fill(1).map(()=>(
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              ))}
            
            
            </Swiper>
          </>
        </div>
      </div>


   {/* Groceries Products */}
      <div className="container py-5 mt-10">

        
            <h2 className="text-xl 2xl:text-2xl font-bold text-darkGray">
              Groceries Products
            </h2>
    
  

        <div className="mt-3">
          <>
            <Swiper
            
              slidesPerView={1}
              spaceBetween={20}
              // centerInsufficientSlides={true}
              centeredSlides={false}
         
              breakpoints={{
              

                520: { slidesPerView: 2 },
                620: { slidesPerView: 3 },
                900:{ slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
            
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {Array(8).fill(1).map(()=>(
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              ))}
            
            
            </Swiper>
          </>
        </div>
      </div>

      <div>
          <section className="border-b">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {features.map((item, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto mb-3 flex justify-center text-gray-700">
              {item.icon}
            </div>
            <h4 className="font-semibold text-gray-900">{item.title}</h4>
            <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
      </div>
    </>
  );
}

export default Home;
