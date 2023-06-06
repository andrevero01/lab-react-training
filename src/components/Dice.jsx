import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png';

export const Dice = () => {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  const randomDice = diceArr[randomNumber];
  const [currentDice, setCurrentDice] = useState(randomDice);
  const changeDice = () => {
    if (currentDice === emptyDice) {
      setCurrentDice(randomDice);
    } else {
      setCurrentDice(emptyDice);
    }
  };
  return (
    <div>
      <img
        onClick={() => {
          changeDice();
        }}
        src={currentDice}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
};
