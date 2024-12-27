import "./bestProduct.css"
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import Firstproduct from "../firstproduct/firstproduct";
export default function bestProduct() {
  return (
    <div>
        <div className="most-sale-product mt-5">
        <div>
          <p>
            <DiscountOutlinedIcon className="ms-1 icon-category"  />
            داغ ترین چند ساعت گذشته
          </p>
        </div>
        <div>
          <button>مشاهده همه</button>
        </div>
      </div>
      <div className="div-most-sale mt-4">
        <div className="div2-most-sale">
          <div><img src="/images/p18.png" alt="" /></div>
          <div><p className="p-number-most-sale">1</p></div>
          <div><p className="p-most-sale text-secondary">پنیر سفید ایرانی پگاه- 400گرم</p></div>
        </div>
        <div className="div2-most-sale">
          <div><img src="/images/p19.png" alt="" /></div>
          <div><p className="p-number-most-sale">2</p></div>
          <div><p className="p-most-sale text-secondary">کاغذ A4 کپی مکس</p></div>
        </div>
        <div className="div2-most-sale">
          <div><img src="/images/p20.png" alt="" /></div>
          <div><p className="p-number-most-sale">3</p></div>
          <div><p className="p-most-sale text-secondary">صابون گلنار مدل روغن نارگیل</p></div>
        </div>
      </div>
    </div>
  )
}
