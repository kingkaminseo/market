import Category from "../components/Category";
import DetailCategory from "../components/DetailCategory";
import Banner from "../components/navbar/Banner";
import Navbar from "../components/navbar/Navbar";
import Schema from "../components/Schema";
import ViewAllMarket from "../components/ViewAllMarket";

function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <DetailCategory />
      <Schema />
      <ViewAllMarket />
    </>
  );
}

export default Main;
