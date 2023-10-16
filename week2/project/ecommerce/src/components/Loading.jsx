const Loading = () => {
  const loadingStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "24px",
    fontWeight: "bold",
  };
  return (
    <div className="loading" style={loadingStyles}>
      Loading...
    </div>
  );
};

export default Loading;
