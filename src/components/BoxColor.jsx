function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: '200px',
        width: '300px',
      }}
    >
      <span style={{ color: '#fff' }}>
        rgb({r},{g},{b})
      </span>
    </div>
  );
}
export default BoxColor;
