class Info {
  static marketInquiry = async () => {
    const response = await fetch(
      "https://api.bithumb.com/v1/market/all?isDetails=true"
    );
    const data = await response.json();
    return data;
  };
}

export default Info;
