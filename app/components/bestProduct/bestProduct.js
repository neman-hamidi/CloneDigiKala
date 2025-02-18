import "./bestProduct.css";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import details from "./Text";
export default function bestProduct() {
  return (
    <div>
      <div className="most-sale-product mt-5">
        <div>
          <p>
            <DiscountOutlinedIcon className="ms-1 icon-category" />
            داغ ترین چند ساعت گذشته
          </p>
        </div>
        <div>
          <button>مشاهده همه</button>
        </div>
      </div>
      <div className="div-most-sale mt-4">
        {details.map((item, index) => (
          <div key={index} className="div2-most-sale">
            <div>
              <img src={item.src} alt="imgs" />
            </div>
            <h3 className="p-number-most-sale">{item.title}</h3>
            <p className="p-most-sale text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
