import React, { useState } from 'react';

export const LikeButton = () => {
  const [likesCount, setLikesCount] = useState(0);
  const updateLikes = () => {
    setLikesCount(likesCount + 1);
  };
  return (
    <div>
      <button onClick={() => updateLikes()}>{likesCount} Likes</button>
    </div>
  );
};
