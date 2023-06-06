import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import {
  LikeButton,
  ClickablePicture,
  Dice,
  Carousel,
  NumbersTable,
  FaceBook,
} from './components';

function App() {
  const IdCardInfo = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: '1988-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <div className="App">
      <p> ITERATION 1 </p>
      {IdCardInfo.map((card) => {
        return (
          <IdCard
            lastName={card.lastName}
            firstName={card.firstName}
            gender={card.gender}
            height={card.height}
            birth={card.birth}
            picture={card.picture}
          />
        );
      })}
      <p>ITERATION 2</p>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <p>ITERATION 3</p>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <p>ITERATION 4</p>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <p>ITERATION 5</p>
      <div className="credit-cards-container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <p>ITERATION 6</p>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <div>
        <p>ITERATION 7</p>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <p>ITERATION 8</p>
        <LikeButton />
      </div>
      <div>
        <p>ITERATION 9 </p>
        <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      </div>
      <div>
        <p>ITERATION 10</p>
        <Dice />
      </div>
      <div>
        <p>ITERATION 11</p>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div>
        <p>ITERATION 12</p>
        <NumbersTable limit={12} />
      </div>
      <div>
        <p>ITERATION 13</p>
        <FaceBook />
      </div>
    </div>
  );
}

export default App;
