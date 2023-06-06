import { useState } from 'react';

export const ClickablePicture = ({ img, imgClicked }) => {
  const [currentImg, setcurrentImg] = useState(img);
  const updateImg = () => {
    if (currentImg === img) {
      setcurrentImg(imgClicked);
    } else {
      setcurrentImg(img);
    }
  };

  return (
    <img
      onClick={() => {
        updateImg();
      }}
      src={currentImg}
      alt=""
      width={200}
    />
  );
};
