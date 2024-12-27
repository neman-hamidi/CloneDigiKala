import "./footer2.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
export default function footer2() {
  return (
    <>
      <div className="straightLineFooter"></div>
      <div className="footer2  d-none d-md-block">
        <div className="mb-4 img-footer">
          <div>
            <img src="/images/full-horizontal.png" alt="" />
          </div>
          <div>
            <button>
              بازگشت به بالا <KeyboardArrowUpIcon className="ms-3" />
            </button>
          </div>
        </div>
        <div className="support-footer2">
          <div>تلفن پشتیبانی 0210000000</div>
          <div className="div-amodi"></div>
          <div>021021021021</div>
          <div className="div-amodi"></div>
          <div>7روز هفته،24ساعته پاسخگوی شما هستیم</div>
        </div>
        <div className="support-img-footer">
          <div>
            <img src="/images/1f.png" alt="" />
            <label>امکان تحویل اکسپرس</label>
          </div>
          <div>
            <img src="/images/2f.png" alt="" />
            <label>امکان پرداخت در محل</label>
          </div>
          <div>
            <img src="/images/3f.png" alt="" />
            <label>7روز هفته،24ساعته</label>
          </div>
          <div>
            <img src="/images/4f.png" alt="" />
            <label>هفت روز ضمانت بازگشت کالا</label>
          </div>
          <div>
            <img src="/images/5f.png" alt="" />
            <label>ضمانت اصل بودن کالا</label>
          </div>
        </div>
        <div className="desc-footer2">
          <div>
            <h3>با دیجی کالا</h3>
            <p className="text-secondary mt-3">اتاق خبر دیجی کالا</p>
            <p className="text-secondary mt-3">فروش در دیجی کالا</p>
            <p className="text-secondary mt-3">فرصت های شغلی</p>
            <p className="text-secondary mt-3">گزارش تخلف در دیجی کالا</p>
            <p className="text-secondary mt-3">تماس با دیجی کالا</p>
            <p className="text-secondary mt-3">درباره دیجی کالا</p>
          </div>
          <div>
            <h3>خدمات مشتریان</h3>
            <p className="text-secondary mt-3">پاسخ به پرسش های متداول</p>
            <p className="text-secondary mt-3">رویه های بازگرداندن کالا</p>
            <p className="text-secondary mt-3">شرایط استفاده</p>
            <p className="text-secondary mt-3">حریم خصوصی</p>
            <p className="text-secondary mt-3">گزارش باگ</p>
          </div>
          <div>
            <h3>راهنمای خرید از دیجی کالا</h3>
            <p className="text-secondary mt-3">نحوه ثبت سفارش</p>
            <p className="text-secondary mt-3">رویه ارسال سفارش</p>
            <p className="text-secondary mt-3">شیوه های پرداخت</p>
          </div>
          <div>
            <p className="fs-6 mb-4">همراه ما باشید</p>
            <div className="d-flex gap-4 justify-content-start mb-3">
              <InstagramIcon className="text-secondary fs-2" />
              <XIcon className="text-secondary fs-2" />
              <LinkedInIcon className="text-secondary fs-2" />
              <TelegramIcon className="text-secondary fs-2" />
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
}
