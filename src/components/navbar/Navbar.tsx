import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  function exchange() {
    setToggle(true);
  }
  function exchange2() {
    setToggle(false);
  }
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        display: "flex",
        paddingTop: "15px",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        zIndex: "88",
      }}
    >
      <img src="imgs/icons/logo.svg" alt="" />
      <div style={{ padding: "3px" }}>
        <Link
          to={"/"}
          className="header"
          style={{
            textDecoration: "none",
            marginRight: "10px",
            color: toggle ? "black" : "gray",
            zIndex: "999",
          }}
          onClick={exchange}
        >
          거래소
        </Link>
        <span style={{ position: "relative", bottom: "3px" }}>|</span>
        <Link
          to={"/"}
          className="header"
          style={{
            textDecoration: "none",
            marginLeft: "10px",
            color: !toggle ? "black" : "gray",
          }}
          onClick={exchange2}
        >
          시장동향
        </Link>
      </div>
      <img
        src="imgs/icons/search.svg"
        alt=""
        style={{ position: "absolute", right: "55px" }}
      />
      <img
        src="imgs/icons/setting.png"
        alt="asf"
        style={{ position: "absolute", right: "16px", width: "24px" }}
      />
    </div>
  );
}

export default Navbar;
