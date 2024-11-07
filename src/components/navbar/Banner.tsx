function Banner() {
  return (
    <div
      style={{
        width: "90%",
        marginLeft: "5%",
        backgroundColor: "rgb(248,249,250)",
        padding: "15px",
        borderRadius: "15px",
        zIndex: "-1",
        position: "relative",
        marginTop: "10px",
      }}
    >
      <img src="imgs/icons/login.PNG" alt="" style={{ width: "150px" }} />
      <img
        src="imgs/icons/failUser.png"
        alt=""
        style={{
          position: "absolute",
          width: "105px",
          right: "0",
          top: "0px",
        }}
      />
    </div>
  );
}

export default Banner;
