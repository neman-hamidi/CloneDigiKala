"use client";
import Advace from "../advace/advace";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { details, imgs } from "./Text";
import "./header.css";
const header = () => (
  <>
    <div className="state-city">
      <LocationOnOutlinedIcon className="ms-1" />
      <p>انتخاب استان و شهر</p>
      <KeyboardArrowLeftOutlinedIcon />
    </div>
    <div>
      <div className="d-flex header-drop">
        {details.map((item, index) => (
          <div key={index}>
            <p>
              {item.icon}
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={index} className="img-header-slider">
            <img src={item.src} alt="imgs" className="img-header-slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="under-slider">
      <img src="/images/5.png" alt="imgs" />
    </div>
    <Advace />
  </>
);
export default header;
