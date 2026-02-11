import React from "react";

import ProductImageMagnifier from "../components/utils/ProductImageMagnifier";

import {
  FaStar,
  FaRegHeart,
  FaBalanceScale,
  FaShoppingCart,
} from "react-icons/fa";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ProductCard from "../components/products/ProductCard";
import CustomerReviewCard from "../components/utils/CustomerReviewCard";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PaginationNavigation from "@mui/material/Pagination";
import ProductInfo from "../components/products/ProductInfo";

function ProductDetails() {
  const arr = ["abc", "abcr"];
  const [page, setPage] = React.useState(1);
  const feedbacksHandleChange = (event, value) => {
    setPage(value);
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container py-20">
      {/* Main Product Top Section */}
      <ProductInfo/>

      {/* Description and Review Section */}
      <div className="my-14">
        <div>
          <Box
            sx={{
              width: "100%",
              typography: "body1",
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
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Description" value="1" />
                  <Tab label="Reviews" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <p className="text-sm text-lightGray font-primary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi molestiae expedita ratione adipisci dolorum aliquid
                  sed voluptas consectetur. Quis eaque, recusandae ut ea sequi
                  accusamus voluptatibus expedita nesciunt esse debitis.
                </p>
              </TabPanel>
              <TabPanel value="2">
                <CustomerReviewCard
                  name={"David Miller"}
                  content={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ab facere! Hic esse praesentium autem necessitatibus, aperiam expedita quam soluta amet unde perferendis! Assumenda impedit aspernatur, sequi deserunt earum obcaecati!"
                  }
                  img={
                    "https://as2.ftcdn.net/v2/jpg/01/09/39/73/1000_F_109397389_huBYRiES0sAHsYBHuo7XU9aRvD0I73if.jpg"
                  }
                />
                <CustomerReviewCard
                  name={"David Miller"}
                  content={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ab facere! Hic esse praesentium autem necessitatibus, aperiam expedita quam soluta amet unde perferendis! Assumenda impedit aspernatur, sequi deserunt earum obcaecati!"
                  }
                  img={
                    "https://as2.ftcdn.net/v2/jpg/01/09/39/73/1000_F_109397389_huBYRiES0sAHsYBHuo7XU9aRvD0I73if.jpg"
                  }
                />
                <CustomerReviewCard
                  name={"David Miller"}
                  content={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ab facere! Hic esse praesentium autem necessitatibus, aperiam expedita quam soluta amet unde perferendis! Assumenda impedit aspernatur, sequi deserunt earum obcaecati!"
                  }
                  img={
                    "https://as2.ftcdn.net/v2/jpg/01/09/39/73/1000_F_109397389_huBYRiES0sAHsYBHuo7XU9aRvD0I73if.jpg"
                  }
                />
                <CustomerReviewCard
                  name={"David Miller"}
                  content={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ab facere! Hic esse praesentium autem necessitatibus, aperiam expedita quam soluta amet unde perferendis! Assumenda impedit aspernatur, sequi deserunt earum obcaecati!"
                  }
                  img={
                    "https://as2.ftcdn.net/v2/jpg/01/09/39/73/1000_F_109397389_huBYRiES0sAHsYBHuo7XU9aRvD0I73if.jpg"
                  }
                />
                <CustomerReviewCard
                  name={"David Miller"}
                  content={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ab facere! Hic esse praesentium autem necessitatibus, aperiam expedita quam soluta amet unde perferendis! Assumenda impedit aspernatur, sequi deserunt earum obcaecati!"
                  }
                  img={
                    "https://as2.ftcdn.net/v2/jpg/01/09/39/73/1000_F_109397389_huBYRiES0sAHsYBHuo7XU9aRvD0I73if.jpg"
                  }
                />

                <div className="py-5 flex justify-end">
                  <Stack spacing={2}>
                    <PaginationNavigation
                      count={10}
                      page={page}
                      onChange={feedbacksHandleChange}
                    />
                  </Stack>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
     
      </div>

      {/* Related Products */}

      <div className=" py-5">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl 2xl:text-2xl font-bold text-darkGray">
              Popular Products
            </h2>
            <p className="text-sm 2xl:text-md text-lightGray">
              Do not miss the current offers until the end of March.
            </p>
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
                900: { slidesPerView: 4 },
                820: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper"
            >
              {Array(8)
                .fill(1)
                .map(() => (
                  <SwiperSlide>
                    <ProductCard />
                  </SwiperSlide>
                ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
