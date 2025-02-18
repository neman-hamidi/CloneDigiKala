"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SpecialItem from "./specialItem/specialItem";
import "./special.css";
export default function special() {
  const [timeLeft, setTimeLeft] = useState(20 * 60 * 60); // 20 hours in seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const imgs = [{ src: "/images/p1.png" }, { src: "/images/p1-1.png" }];
  return (
    <section className="special mt-5">
      <div className="special-div-discount text-center">
        <p className="text-white py-2 text-center pt-4">پیشنهاد شگفت انگیز</p>
        <span className="countdown-special">{formatTime(timeLeft)}</span>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        className="mySwiper special-slide"
      >
        {Array.from({ length: 5 }).map((_, index) =>
          imgs.map((item, index) => (
            <SwiperSlide key={index} className="special-slider">
              <SpecialItem>
                <img src={item.src} alt="imgs" />
              </SpecialItem>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
}
