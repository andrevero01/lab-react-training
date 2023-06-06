import { useState } from 'react';

export const Carousel = ({ images }) => {
  const currentLeftImg = images[0];
  const currentRightImg = images[2];
  const newLeftImg = images[1];
  const newRightImg = images[3];

  const [leftImage, setLeftImg] = useState(currentLeftImg);
  const [rightImage, setRightImg] = useState(currentRightImg);

  const changeLeftImage = () => {
    if (leftImage === images[0]) {
      setLeftImg(newLeftImg);
    } else {
      setLeftImg(images[0]);
    }
  };
  const changeRightImage = () => {
    if (rightImage === images[2]) {
      setRightImg(newRightImg);
    } else {
      setRightImg(images[2]);
    }
  };

  return (
    <div>
      <div className="picturesContainer">
        <img src={leftImage} alt=""></img>
        <img src={rightImage} alt=""></img>
      </div>
      <button
        onClick={() => {
          changeLeftImage();
        }}
      >
        Left
      </button>{' '}
      <button
        onClick={() => {
          changeRightImage();
        }}
      >
        Right
      </button>
    </div>
  );
};
