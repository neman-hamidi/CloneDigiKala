import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Special from "./components/special/special";
import Advace2 from "./components/advace2/advace2";
import Category from "./components/category/category";
import Introduction from "./components/introduction/introduction";
import BestProduct from "./components/bestProduct/bestProduct";
import Footer from "./components/footer/footer";
import Footer2 from "./components/footer2/footer2";
import FixNavbar from "./components/fixNavbar/fixNavbar";
import CustomCursor from "./components/customCursor/customCursor";
export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Header />
      <Special />
      <Advace2 />
      <Category />
      <Introduction />
      <BestProduct />
      <Footer />
      <Footer2 />
      <FixNavbar />
    </>
  );
}
