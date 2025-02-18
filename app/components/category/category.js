import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { details, categorySlideShow } from "./Text";
import "./category.css";
export default function category() {
  return (
    <>
      <p className="text-center mt-5 one-p-category">خرید بر اساس دسته بندی</p>
      <div className="category">
        {details.slice(0, 14).map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.src} alt="imgs" />
            <label>{item.title}</label>
          </div>
        ))}
      </div>
      <div className="tablighat">
        {details.slice(14, 16).map((item, index) => (
          <img key={index} src={item.src} alt="img" />
        ))}
      </div>
      <p className="text-center p-category">
        <VerifiedOutlinedIcon className="ms-2 icon-category" />
        محبوب ترین برند ها
      </p>
      <article className="slideshow">
        <ul className="my-4">
          {categorySlideShow.map((item, index) => (
            <li key={index} className="shrink-0">
              <img src={item.src} alt="img" />
            </li>
          ))}
        </ul>
      </article>
      <div className="banner-2">
        {details.slice(15, 17).map((item, index) => (
          <img key={index} src={item.src} alt="img" />
        ))}
      </div>
    </>
  );
}
