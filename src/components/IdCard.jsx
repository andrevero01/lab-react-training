function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  const newHeight = (height / 100).toFixed(2);

  return (
    <div className="id-card">
      <img src={picture} alt="profile pic"></img>
      <div className="personal-info">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {newHeight}m</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
