function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <p>
      Random number between {min} and {max} = {randomNumber}
    </p>
  );
}
export default Random;
