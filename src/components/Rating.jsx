function Rating({ children }) {
  const stars = Math.ceil(children);
  return (
    <div>
      <span>&#9733;</span>
      <span>&#9734;</span>
    </div>
  );
}

export default Rating;
