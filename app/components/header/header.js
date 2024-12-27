"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./header.css";
import Advace from "../advace/advace";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
export default function header() {
  return (
    <>
      <div className="state-city">
        <div>
          <LocationOnOutlinedIcon className="ms-1" />
        </div>
        <div>
          <p>انتخاب استان و شهر</p>
        </div>
        <div>
          <KeyboardArrowLeftOutlinedIcon />
        </div>
      </div>
      <div>
        <div className="d-flex header-drop">
          <div><p><ClearAllIcon className="ms-1"/>دسته بندی کالاها</p></div>
          <div><p><WhatshotOutlinedIcon className="ms-1"/>شگفت انگیز ها</p></div>
          <div><p><ShoppingBagOutlinedIcon className="ms-1"/>سوپر مارکت</p></div>
          <div><p><OfflineBoltOutlinedIcon className="ms-1"/>کارت هدیه</p></div>
          <div><p><LocalAtmOutlinedIcon className="ms-1"/>پرفروش ها</p></div>
          <div><p><DiscountOutlinedIcon className="ms-1"/>تخفیف ها و پیشنهاد ها</p></div>
          <div><p>سوالی دارید؟</p></div>
          <div><p>در دیجی کالا بفروشید!</p></div>
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
          <SwiperSlide className="img-header-slider">
            <img src="/images/1.png" alt="" className="img-header-slide" />
          </SwiperSlide>
          <SwiperSlide className="img-header-slider">
            <img src="/images/2.png" alt="" className="img-header-slide" />
          </SwiperSlide>
          <SwiperSlide className="img-header-slider">
            <img src="/images/3.png" alt="" className="img-header-slide" />
          </SwiperSlide>
          <SwiperSlide className="img-header-slider">
            <img src="/images/4.png" alt="" className="img-header-slide" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="under-slider">
        <img src="/images/5.png" alt="" />
      </div>
      <Advace />
    </>
  );
}
