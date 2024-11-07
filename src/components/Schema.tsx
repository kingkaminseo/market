function Schema() {
  return (
    <div
      style={{
        backgroundColor: "rgb(248, 249, 250)",
        display: "flex",
        padding: "10px",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "rgb(120,127,137)",
        }}
      >
        자산명
      </p>
      <p
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "rgb(120,127,137)",
          position: "absolute",
          right: "200px",
        }}
      >
        현재가
      </p>
      <p
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "rgb(120,127,137)",
          position: "absolute",
          right: "130px",
        }}
      >
        어제
      </p>
      <p
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "rgb(120,127,137)",
          position: "absolute",
          right: "90px",
        }}
      >
        변동
      </p>
      <p
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "rgb(120,127,137)",
          position: "absolute",
          right: "20px",
        }}
      >
        거래금액
      </p>
    </div>
  );
}

export default Schema;
