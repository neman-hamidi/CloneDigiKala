import ClearAllIcon from "@mui/icons-material/ClearAll";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
const details = [
  { icon: <ClearAllIcon className="ms-1" />, title: "دسته بندی کالاها" },
  { icon: <WhatshotOutlinedIcon className="ms-1" />, title: "شگفت انگیز ها" },
  { icon: <ShoppingBagOutlinedIcon className="ms-1" />, title: "سوپر مارکت" },
  { icon: <OfflineBoltOutlinedIcon className="ms-1" />, title: "کارت هدیه" },
  { icon: <LocalAtmOutlinedIcon className="ms-1" />, title: "پرفروش ها" },
  {
    icon: <DiscountOutlinedIcon className="ms-1" />,
    title: "تخفیف ها و پیشنهاد ها",
  },
  { icon: "", title: "سوالی دارید؟" },
  { icon: "", title: "در دیجی کالا بفروشید!" },
];
const imgs = [
  { src: "/images/1.png" },
  { src: "/images/2.png" },
  { src: "/images/3.png" },
  { src: "/images/4.png" },
];
export { details, imgs };
