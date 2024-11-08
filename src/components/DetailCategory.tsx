import { useState } from "react";

function DetailCategory() {
  const [show, setShow] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        height: "35px",
        overflow: show ? "hidden" : "visible",
        position: "relative",
        width: "100%",
        marginTop: "10px",
      }}
    >
      <ul
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: "2",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            width: "100%",
            borderBottom: "1px solid black",
          }}
        >
          <div style={{ width: "15px" }}></div>
          <div
            style={{
              paddingBottom: "10px",
            }}
          >
            <li className="detailLi">전체</li>
            <li className="detailLi">메이저</li>
            <li className="detailLi">일반</li>
            <li className="detailLi">신규</li>
            <li className="detailLi">투자유의</li>
            <li className="detailLi">레이어</li>
            <li className="detailLi">레이어2</li>
            <li className="detailLi">메타버스</li>
            <li className="detailLi">NFT</li>
            <li className="detailLi">게이밍</li>
            <li className="detailLi">디파이</li>
            <li className="detailLi">소셜</li>
            <li className="detailLi">AI</li>
            <li className="detailLi">Memo</li>
            <li className="detailLi">결제</li>
            <li className="detailLi">서비스</li>
            <li className="detailLi">팬토큰</li>
          </div>
          <div style={{ width: "150px" }}></div>
          <button
            style={{
              backgroundColor: "white",
              position: "absolute",
              right: "20px",
              top: "5px",
              zIndex: "9",
              border: "none",
            }}
            onClick={() => setShow(show ? false : true)}
          >
            <img
              src="imgs/icons/pointer.svg"
              alt=""
              style={{ transform: show ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default DetailCategory;
