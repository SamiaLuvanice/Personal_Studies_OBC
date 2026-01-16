export default () => {
  const status = true;
  return (
    <>
      <h2
        style={{
          color: status ? "#00FF9F" : "#f64348",
        }}
      >
        Status: {status ? "Online" : "Offline"}
      </h2>
    </>
  );
};
