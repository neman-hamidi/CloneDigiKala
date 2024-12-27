import "./introduction.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Firstproduct from "../firstproduct/firstproduct";
export default function introduction() {
  return (
    <>
      <div className="introduction text-center">
        <div>
          <p className="pe-3 p1-intro">کیف و کاور گوشی</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p2.png" alt="" />
            </div>
            <div>
              <img src="/images/p3.png" alt="" />
            </div>
            <div>
              <img src="/images/p4.png" alt="" />
            </div>
            <div>
              <img src="/images/p5.png" alt="" />
            </div>
          </Firstproduct>
        </div>
        <div>
          <p className="pe-3 p1-intro mt-5">گوشی موبایل</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p6.png" alt="" />
            </div>
            <div>
              <img src="/images/p7.png" alt="" />
            </div>
            <div>
              <img src="/images/p8.png" alt="" />
            </div>
            <div>
              <img src="/images/p9.png" alt="" />
            </div>
          </Firstproduct>
        </div>
        <div>
          <p className="pe-3 p1-intro mt-5">هدفون هدستو هندزفری</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p10.png" alt="" />
            </div>
            <div>
              <img src="/images/p11.png" alt="" />
            </div>
            <div>
              <img src="/images/p12.png" alt="" />
            </div>
            <div>
              <img src="/images/p13.png" alt="" />
            </div>
          </Firstproduct>
        </div>
        <div>
          <p className="pe-3 p1-intro mt-5">ساعت هوشمند</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p14.png" alt="" />
            </div>
            <div>
              <img src="/images/p15.png" alt="" />
            </div>
            <div>
              <img src="/images/p16.png" alt="" />
            </div>
            <div>
              <img src="/images/p17.png" alt="" />
            </div>
          </Firstproduct>
        </div>
      </div>
      <div className="most-sale-product mt-5">
        <div>
          <p>
            <VerifiedOutlinedIcon className="ms-1 icon-category" />
            پر فروش ترین کالاها
          </p>
        </div>
        <div>
          <button>مشاهده همه</button>
        </div>
      </div>
      <div className="div-most-sale mt-4">
        <div className="div2-most-sale">
          <div>
            <img src="/images/p18.png" alt="" />
          </div>
          <div>
            <p className="p-number-most-sale">1</p>
          </div>
          <div>
            <p className="p-most-sale text-secondary">
              پنیر سفید ایرانی پگاه- 400گرم
            </p>
          </div>
        </div>
        <div className="div2-most-sale">
          <div>
            <img src="/images/p19.png" alt="" />
          </div>
          <div>
            <p className="p-number-most-sale">2</p>
          </div>
          <div>
            <p className="p-most-sale text-secondary">کاغذ A4 کپی مکس</p>
          </div>
        </div>
        <div className="div2-most-sale">
          <div>
            <img src="/images/p20.png" alt="" />
          </div>
          <div>
            <p className="p-number-most-sale">3</p>
          </div>
          <div>
            <p className="p-most-sale text-secondary">
              صابون گلنار مدل روغن نارگیل
            </p>
          </div>
        </div>
      </div>

      <div className="intro2">
        <div>
          <p className="pe-3 p1-intro mt-5">لپ تاپ و الترا بوک</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p21.png" alt="" />
            </div>
            <div>
              <img src="/images/p22.png" alt="" />
            </div>
            <div>
              <img src="/images/p23.png" alt="" />
            </div>
            <div>
              <img src="/images/p24.png" alt="" />
            </div>
          </Firstproduct>
        </div>
        <div>
          <p className="pe-3 p1-intro mt-5">رنگ مو</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p25.png" alt="" />
            </div>
            <div>
              <img src="/images/p26.png" alt="" />
            </div>
            <div>
              <img src="/images/p27.png" alt="" />
            </div>
            <div>
              <img src="/images/p28.png" alt="" />
            </div>
          </Firstproduct>
        </div>
        <div>
          <p className="pe-3 p1-intro mt-5">جوراب مردانه</p>
          <p className="text-secondary pe-3 p2-intro">براساس سلیقه شما</p>
          <Firstproduct>
            <div>
              <img src="/images/p29.jpg" alt="" />
            </div>
            <div>
              <img src="/images/p30.png" alt="" />
            </div>
            <div>
              <img src="/images/p31.png" alt="" />
            </div>
            <div>
              <img src="/images/p32.png" alt="" />
            </div>
          </Firstproduct>
        </div>
      </div>
      <div className="banner3">
        <img src="/images/t5.png" alt="" />
      </div>
    </>
  );
}
