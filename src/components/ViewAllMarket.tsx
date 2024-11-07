import { useEffect, useRef, useState } from "react";
import Info from "../api/info/info";
import "../App.css";
interface Json {
  english_name: string;
  korean_name: string;
  market: string;
  market_warning: string;
}

function ViewAllMarket() {
  const [modalOpen, setModalOpen] = useState(true);

  const modalBackground = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState<Json[]>([]);
  useEffect(() => {
    const marketInquir = async () => {
      let result = await Info.marketInquiry();
      console.log(result);
      setData(result);
    };
    marketInquir();

    if (document.cookie) {
      setModalOpen(false);
    }
  }, []);

  function createCookie() {
    // 현재 날짜와 시간을 가져옵니다.
    const now = new Date();

    now.setTime(now.getTime() + 24 * 60 * 60 * 1000); //24
    // now.setTime(now.getTime() + 1 * 60 * 1000); // 1분
    document.cookie = `today=false Doe; expires=${now.toUTCString()}; path=/`;
  }

  return (
    <div
      className="filter"
      style={{
        backgroundColor: modalOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0,0)",
      }}
    >
      <h1>오늘의 시세를 확인해 보세요</h1>
      <div>
        <ul>
          {data.map((item) => (
            <li style={{ border: "1px solid gray" }}>
              {item.korean_name}
              <br />
              {item.market.split("-")[1]}
            </li>
          ))}
        </ul>
      </div>
      b<div className={"btn-wrapper"}></div>
      {modalOpen && (
        <div>
          <div
            className={"modal-container"}
            ref={modalBackground}
            onClick={(e) => {
              if (e.target === modalBackground.current) {
                setModalOpen(true);
              }
            }}
          >
            <div
              className={"modal-content"}
              style={{
                position: "relative",
                width: "370px",
                borderRadius: "10px",
                paddingTop: "0px !important",
              }}
            >
              <img
                src="imgs/icons/xicon.svg"
                alt=""
                style={{ position: "absolute", right: "15px" }}
                onClick={() => setModalOpen(false)}
              />
              <img
                src="imgs/modal/mobileImage.png"
                alt=""
                style={{
                  width: "70%",
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <button
                style={{
                  position: "absolute",
                  bottom: "40px",
                  backgroundColor: "rgb(28, 32, 40)",
                  color: "white",
                  width: "80%",
                  marginLeft: "5%",
                  border: "none",
                  height: "45px",
                  fontSize: "15px",
                  borderRadius: "5px",
                }}
                className={"modal-close-btn"}
                onClick={() =>
                  (window.location.href =
                    "https://m.bithumb.com/react/transfer")
                }
                id="font"
              >
                참여하기
              </button>
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "42%",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "black",
                  }}
                ></div>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginLeft: "6px",
                  }}
                ></div>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginLeft: "6px",
                  }}
                ></div>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "gray",
                    marginLeft: "6px",
                  }}
                ></div>
              </div>
            </div>
            <a
              href="/"
              style={{ color: "rgb(226, 228, 231)", marginTop: "20px" }}
              onClick={() => createCookie()}
            >
              오늘 그만 보기
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewAllMarket;
