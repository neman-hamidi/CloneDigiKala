import "./fixNavbar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export default function fixNavbar() {
  return (
    <div className="fixNavbar">
        <div className="div-fixNavbar">
            <div>
                <div><HomeOutlinedIcon className="text-secondary"/></div>
                <p className="text-secondary">خانه</p>
            </div>
            <div>
                <div><CategoryOutlinedIcon className="text-secondary"/></div>
                <p className="text-secondary">دسته بندی</p>
            </div>
            <div>
                <div><ShoppingCartOutlinedIcon className="text-secondary"/></div>
                <p className="text-secondary">سبد خرید</p>
            </div>
            <div>
                <div><PersonOutlineOutlinedIcon className="text-secondary"/></div>
                <p className="text-secondary">پروفایل</p>
            </div>
        </div>
    </div>
  )
}
