import { useState } from "react";

function DetailCategory() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      <ul
        style={{
          marginLeft: "15px",
          height: "35px",
          overflow: show ? "hidden" : "visible",
          width: "90%",
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
        <div
          style={{
            boxShadow: "0px 14px 1px 1px rgba(0, 0, 0, 0.2)",
          }}
        ></div>
      </ul>
      <button
        style={{ width: "10%", border: "none", backgroundColor: "white" }}
        onClick={() => setShow(show ? false : true)}
      >
        <img
          src="imgs/icons/pointer.svg"
          alt=""
          style={{ transform: show ? "rotate(0deg)" : "rotate(180deg)" }}
        />
      </button>
    </div>
  );
}

export default DetailCategory;
