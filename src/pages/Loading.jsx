const Loading = () => {
  return (
    <div
      className="spinner-container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Chargement en cours...</h1>
        <i
          style={{ fontSize: "48px" }}
          className="fa-solid fa-spinner"
          id="spinner"
        ></i>
      </div>
    </div>
  );
};

export default Loading;
