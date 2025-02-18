import "./advace.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgs from "./text";
export default function advace() {
  return (
    <div className="my-5">
      <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
        {imgs.map((item, index) => (
          <SwiperSlide key={index} className="slider-advace">
            <div className="div-advace">
              <img src={item.src} alt="imgs" />
            </div>
            <label className="label-header">{item.title}</label>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
