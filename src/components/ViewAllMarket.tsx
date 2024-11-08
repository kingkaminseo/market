import { useEffect, useState } from "react";
import Info from "../api/info/info";
import "../App.css";
interface Json {
  english_name: string;
  korean_name: string;
  market: string;
  market_warning: string;
}

function ViewAllMarket() {
  const [data, setData] = useState<Json[]>([]);
  useEffect(() => {
    const marketInquir = async () => {
      let result = await Info.marketInquiry();
      console.log(result);
      setData(result);
    };
    marketInquir();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li
            style={{
              borderBottom: "1px solid rgb(243,244,244)",
              padding: "3px",
              paddingLeft: "12px",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: "700" }}>
              {item.korean_name}
            </p>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "rgb(147, 152, 158)",
              }}
            >
              {item.market.split("-")[1]}
            </span>
            {/* {item.market_warning} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewAllMarket;
