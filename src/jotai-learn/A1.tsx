import { useAtom } from 'jotai';
import React, { memo, useEffect } from 'react';
import { bAtom } from './atoms';
import A2 from './A2';

const A1 = memo(() => {
  const [bValue] = useAtom(bAtom);
  useEffect(() => {
    console.log('A1 ==> Effect ');
  });
  return (
    <div
      style={{
        border: '1px solid #000',
        padding: 20,
        backgroundColor: '#f7f7f7',
      }}
    >
      <h1>A1: bValue: {bValue}</h1>

      <A2 />
    </div>
  );
});

export default A1;
