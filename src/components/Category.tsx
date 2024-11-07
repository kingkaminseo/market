import { useState } from "react";

function Category() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [tird, setTird] = useState(false);
  const [fourth, setFourth] = useState(false);

  function clickFirst() {
    setFirst(true);
    setSecond(false);
    setTird(false);
    setFourth(false);
  }
  function clickSecond() {
    setFirst(false);
    setSecond(true);
    setTird(false);
    setFourth(false);
  }
  function clickTird() {
    setFirst(false);
    setSecond(false);
    setTird(true);
    setFourth(false);
  }
  function clickFourth() {
    setFirst(false);
    setSecond(false);
    setTird(false);
    setFourth(true);
  }
  return (
    <div style={{ marginTop: "10px", marginLeft: "15px" }}>
      <ul>
        <li
          className="li"
          onClick={clickFirst}
          style={{
            color: first ? "black" : "gray",
            borderBottom: first ? "2px solid black" : "none",
            cursor: "pointer",
          }}
        >
          원화
        </li>
        <li
          className="li"
          onClick={clickSecond}
          style={{
            color: second ? "black" : "gray",
            borderBottom: second ? "2px solid black" : "none",
            cursor: "pointer",
          }}
        >
          BTC
        </li>
        <li
          className="li"
          onClick={clickTird}
          style={{
            color: tird ? "black" : "gray",
            borderBottom: tird ? "2px solid black" : "none",
            cursor: "pointer",
          }}
        >
          보유
        </li>
        <li
          className="li"
          onClick={clickFourth}
          style={{
            color: fourth ? "black" : "gray",
            borderBottom: fourth ? "2px solid black" : "none",
            cursor: "pointer",
          }}
        >
          관심
        </li>
      </ul>
    </div>
  );
}

export default Category;
