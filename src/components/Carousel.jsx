import { useState } from 'react';

export const Carousel = ({ images }) => {
  const [image1, setImage1] = useState(images[0]);
  const [image2, setImage2] = useState(images[1]);

  const changeLeftImage = () => {
    setImage1(images[2]);
  };
  const changeRightImage = () => {
    setImage2(images[3]);
  };

  return (
    <div>
      <div className="picturesContainer">
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
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
