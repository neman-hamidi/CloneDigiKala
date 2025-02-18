import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./nav.css";
export default function nav() {
  return (
    <>
      <div className="tablighat-nav">
        <img src="/images/img-up.png" alt="img" />
      </div>
      <nav className="nav">
        <div className="img-nav">
          <img src="/images/Neman.webp" alt="img" />
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
            <h3>
              <LoginOutlinedIcon className="ms-1" />
              ورود
            </h3>
            <div className="mini-div-amodi"></div>
            <h3>ثبت نام</h3>
          </div>
          <div className="div-amodi"></div>
          <ShoppingBagOutlinedIcon />
        </div>
      </nav>
    </>
  );
}
