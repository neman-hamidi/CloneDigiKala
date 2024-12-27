import "./nav.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export default function nav() {
  return (
    <>
    <div className="tablighat-nav">
      <img src="/images/img-up.png" alt="" />
    </div>
    <div className="nav">
      <div className="img-nav">
        <img src="/images/Neman.webp" alt="" />
      </div>
      <form>
        <div className="nav-div-form">
          <div>
          <SearchOutlinedIcon className="search-icon-nav" />
          <input type="text" name="kala" placeholder="جستجو در فروشگاه" />
          </div>
        </div>
      </form>
      <div className="main-div-login">
        <div className="login-div">
          <div><LoginOutlinedIcon className="ms-1"/>ورود</div>
          <div className="mini-div-amodi"></div>
          <div>ثبت نام</div>
        </div>
        <div className="div-amodi"></div>
        <div>
          <ShoppingBagOutlinedIcon/>
        </div>
      </div>
    </div>
    </>
  );
}
