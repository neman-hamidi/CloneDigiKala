import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { h3s, imgs, Ps, icons } from "./Text";
import "./footer2.css";
const footer2 = () => (
  <>
    <div className="straightLineFooter"></div>
    <div className="footer2  d-none d-md-block">
      <div className="mb-4 img-footer">
        <img src="/images/full-horizontal.png" alt="imgs" />
        <button>
          بازگشت به بالا <KeyboardArrowUpIcon className="ms-3" />
        </button>
      </div>
      <div className="support-footer2">
        {h3s.map((item, index) => (
          <h3 key={index} className={item.className || ""}>
            {item.title}
          </h3>
        ))}
      </div>
      <div className="support-img-footer">
        {imgs.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt="imgs" />
            <label>{item.title}</label>
          </div>
        ))}
      </div>
      <div className="desc-footer2">
        <div>
          <h3>با دیجی کالا</h3>
          {Ps.slice(0, 6).map((item, index) => (
            <p key={index} className="text-secondary mt-3">
              {item.title}
            </p>
          ))}
        </div>
        <div>
          <h3>خدمات مشتریان</h3>
          {Ps.slice(6, 11).map((item, index) => (
            <p key={index} className="text-secondary mt-3">
              {item.title}
            </p>
          ))}
        </div>
        <div>
          <h3>راهنمای خرید از دیجی کالا</h3>
          {Ps.slice(11, 14).map((item, index) => (
            <p key={index} className="text-secondary mt-3">
              {item.title}
            </p>
          ))}
        </div>
        <div>
          <p className="fs-6 mb-4">همراه ما باشید</p>
          <div className="d-flex gap-4 justify-content-start mb-3">
            {icons.map((item, index) => (
              <div key={index}>{item.icon}</div>
            ))}
          </div>
          <p className="fs-6">با ثبت ایمیل، از جدیدترین تخفیف ها باخبر شوید</p>
          <div className="email-footer2">
            <input type="email" placeholder="ایمیل شما" />
            <button>ثبت</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default footer2;
