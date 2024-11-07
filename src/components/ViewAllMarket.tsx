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
          <li style={{ borderBottom: "1px solid rgb(243,244,244)" }}>
            {item.korean_name}
            <br />
            {item.market.split("-")[1]}
            {/* {item.market_warning} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewAllMarket;
