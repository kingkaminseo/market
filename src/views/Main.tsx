import Category from "../components/Category";
import DetailCategory from "../components/DetailCategory";
import Banner from "../components/navbar/Banner";
import Navbar from "../components/navbar/Navbar";

function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <DetailCategory />
    </>
  );
}

export default Main;
