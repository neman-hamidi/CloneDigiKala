import "./advace.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function advace() {
  return (
    <div>
        <div className="my-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          className="mySwiper"
        >
          <SwiperSlide className="mb-4 slider-advace">
            <div className="div-advace">
              <img src="/images/6.png" alt="" />
            </div>
            <label className="label-header">بیتکوین بخر</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/7.png" alt="" />
            </div>
            <label className="label-header">شکار گنج</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/8.png" alt="" />
            </div>
            <label className="label-header">ایکس ویژن</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/9.png" alt="" />
            </div>
            <label className="label-header">دریافت وام</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/10.png" alt="" />
            </div>
            <label className="label-header">طلای دیجیتال</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/11.png" alt="" />
            </div>
            <label className="label-header">کدهای تخفیف</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/12.png" alt="" />
            </div>
            <label className="label-header">ارسال فروشنده</label>
          </SwiperSlide>
          <SwiperSlide className="slider-advace">
            <div className="div-advace">
              <img src="/images/13.png" alt="" />
            </div>
            <label className="label-header">دیجی استایل</label>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
