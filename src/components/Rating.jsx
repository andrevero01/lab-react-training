function Rating({ children }) {
  const roundedRating = Math.round(children);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }

  return (
    <div>
      <span>{stars}</span>
    </div>
  );
}

export default Rating;
