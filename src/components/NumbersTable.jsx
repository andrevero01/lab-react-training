import { useState } from 'react';

export const NumbersTable = ({ limit }) => {
  const squares = [];
  for (let i = 0; i <= limit; i++) {
    squares.push(i);
  }
  const numbers = squares.map((number) => (
    <div
      style={{
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: number % 2 === 0 ? 'red' : 'white',
        textAlign: 'center',
      }}
    >
      {number}{' '}
    </div>
  ));

  return <div className="numbers-table">{numbers}</div>;
};
