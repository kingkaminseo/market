import Category from "../components/Category";
import DetailCategory from "../components/DetailCategory";

import Banner from "../components/navbar/Banner";
import Navbar from "../components/navbar/Navbar";
import Schema from "../components/Schema";
import ViewAllMarket from "../components/ViewAllMarket";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <DetailCategory />
      <Schema />
      <ViewAllMarket />
      <Footer />
    </>
  );
}

export default Main;
