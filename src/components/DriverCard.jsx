function DriverCard({ name, rating, img, car }) {
  const roundedRating = Math.round(rating);
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
      <img src={img} alt="" width={150} />
      <div className="personalInfo">
        <p>{name}</p>
        <p>{stars}</p>
        <p>
          {car.model}-{car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
