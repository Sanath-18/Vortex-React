export function Home() {
  return (
    <>
      <div
        style={{
          width: 400,
          height: 378,
          top: "30%",
          left: "-20%",
          position: "absolute",
          opacity: 0.5,
          background: "#7B1AB6",
          boxShadow: "150px 150px 150px ",
          borderRadius: 9999,
          filter: "blur(150px)",
        }}
      />
      <div
        style={{
          width: 400,
          height: 378,
          opacity: 0.5,
          top: "30%",
          left: "60%",
          position: "absolute",
          background: "#7B1AB6",
          boxShadow: "150px 150px 150px ",
          borderRadius: 9999,
          filter: "blur(150px)",
        }}
      />

      <h1
        style={{
          fontSize: 36,
          background: "linear-gradient(180deg, #7A3AE2 0%, #AF2B92 59%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "flex",
          textAlign: "center",
          marginLeft: "250px",
          marginTop: "50px",
        }}
      >
        Welcome to Vortex Website
      </h1>
      <h5
        style={{
          color: "pink",
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "50px",
        }}
      >
        What is Vortex What is Vortex? brief info ... if u are interested to do
        register by clicking on the register now button
      </h5>
      <div style={{ marginTop: "100px", marginLeft: "250px" }}>
        <button
          style={{
            width: "160px",
            height: "70px",
            marginRight: "80px",
            color: "white",
            borderRadius: "10px",
            background: "linear-gradient(180deg, #8F2BBF 50%, #AA2BBF 77%)",
          }}
        >
          Register
        </button>
        <button
          style={{
            width: "160px",
            height: "70px",
            marginLeft: "80px",
            color: "white",
            borderRadius: "10px",
            background: "linear-gradient(180deg, #8F2BBF 50%, #AA2BBF 77%)",
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}
