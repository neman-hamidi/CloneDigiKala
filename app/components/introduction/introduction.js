import "./introduction.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Firstproduct from "../firstproduct/firstproduct";
import { details, imgs, mostSale } from "./Text";
const introduction = () => {
  const itemsPerPage = 4;
  let currentPage = 0;
  let currentPage2 = 4;
  function showImages(images, currentPage, itemsPerPage) {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentImages = images.slice(startIndex, endIndex);
    return currentImages.map((item, index) => (
      <div key={index}>
        <img src={item.src} alt="imgs-product" />
      </div>
    ));
  }
  return (
    <>
      <div className="introduction text-center">
        {details.slice(0, 4).map((item, index) => (
          <div key={index} className="mt-5">
            <h3 className="pe-3 p1-intro">{item.title}</h3>
            <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
            <Firstproduct>
              {showImages(imgs, currentPage, itemsPerPage)}
              {currentPage++}
            </Firstproduct>
          </div>
        ))}
      </div>
      <div className="most-sale-product mt-5">
        <p>
          <VerifiedOutlinedIcon className="ms-1 icon-category" />
          پر فروش ترین کالاها
        </p>
        <button>مشاهده همه</button>
      </div>
      <div className="div-most-sale mt-4">
        {mostSale.map((item, index) => (
          <div key={index} className="div2-most-sale">
            <img src={item.src} alt="imgs-mostSale" />
            <h3 className="p-number-most-sale">{item.count}</h3>
            <p className="p-most-sale text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="intro2">
        {details.slice(4).map((item, index) => (
          <div key={index} className="mt-5">
            <h3 className="pe-3 p1-intro">{item.title}</h3>
            <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
            <Firstproduct>
              {showImages(imgs, currentPage2, itemsPerPage)}
              {currentPage2++}
            </Firstproduct>
          </div>
        ))}
      </div>
      <div className="banner3">
        <img src="/images/t5.png" alt="" />
      </div>
    </>
  );
};
export default introduction;
