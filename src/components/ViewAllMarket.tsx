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
    </div>
  );
}

export default ViewAllMarket;
