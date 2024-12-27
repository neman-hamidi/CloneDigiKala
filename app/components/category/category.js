"use client";
import "./category.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

export default function category() {
  return (
    <>
      <p className="text-center mt-5 one-p-category">خرید بر اساس دسته بندی</p>
      <div className="category">
        <div>
          <div>
            <img src="/images/m1.png" alt="" />
            <label>اسباب بازی</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m2.png" alt="" />
            <label>طلا و نقره</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m3.png" alt="" />
            <label>ورزش و سفر</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m4.png" alt="" />
            <label>کارت هدیه</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m5.png" alt="" />
            <label>محصولات بومی</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m6.png" alt="" />
            <label>کالا خوراکی</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m7.png" alt="" />
            <label>خودرو</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m8.png" alt="" />
            <label>آرایشی بهداشتی</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m9.png" alt="" />
            <label>لوازم خانه</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m10.png" alt="" />
            <label>کالای دیجیتال</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m11.png" alt="" />
            <label>لوازم تحریر</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m12.png" alt="" />
            <label>مد و پوشاک</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m13.png" alt="" />
            <label>تجهیزات پزشکی و سلامت</label>
          </div>
        </div>
        <div>
          <div>
            <img src="/images/m14.png" alt="" />
            <label>ابزار آلات</label>
          </div>
        </div>
      </div>
      <div className="tablighat">
        <div>
          <img src="/images/t1.png" alt="" />
        </div>
        <div>
          <img src="/images/t1.png" alt="" />
        </div>
      </div>
      <p className="text-center p-category">
        <VerifiedOutlinedIcon className="ms-2 icon-category" />
        محبوب ترین برند ها
      </p>
      <article className="slideshow">
        <ul className="my-4">
          <li className="shrink-0">
            <img src="/images/b1.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b2.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b3.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b4.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b5.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b6.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b7.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b8.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b9.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b10.png" alt="" />
          </li>
          <li className="shrink-0">
            <img src="/images/b11.png" alt="" />
          </li>
        </ul>
      </article>
      <div className="banner-2">
        <div><img src="/images/t3.png" alt="" /></div>
        <div><img src="/images/t4.png" alt="" /></div>
      </div>
    </>
  );
}
