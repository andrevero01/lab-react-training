import profiles from '../data/berlin.json';

export const FaceBook = () => {
  const countries = [];
  const countriesFilter = profiles.map((item) => {
    for (let i = 0; i <= profiles.length; i++) {
      if (!countries.includes(item.country)) {
        countries.push(item.country);
      }
    }
  });
  const countryBtn = countries.map((country) => {
    return <button>{country}</button>;
  });
  return (
    <div>
      {countryBtn}
      <div>
        {profiles.map((profile) => {
          return (
            <div className="facebook-card">
              <img src={profile.img} alt="" width={200} />
              <div className="facebook-info">
                <p>
                  <b>First name:</b> {profile.firstName}
                </p>
                <p>
                  <b>Last name:</b> {profile.lastName}
                </p>
                <p>
                  <b>Country:</b> {profile.country}
                </p>
                <p>
                  <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
