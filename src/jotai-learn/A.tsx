import { useAtom } from 'jotai';
import React, { memo, useEffect } from 'react';
import { aAtom } from './atoms';
import A1 from './A1';
const A = memo(() => {
  const [aValue] = useAtom(aAtom);
  useEffect(() => {
    console.log('A ==> Effect ');
  });
  return (
    <div
      style={{
        border: '1px solid #000',
        padding: 20,
        backgroundColor: '#f4f4f4',
        margin: '20px 0',
      }}
    >
      <h1>A: {aValue}</h1>

      <A1 />
    </div>
  );
});

export default A;
