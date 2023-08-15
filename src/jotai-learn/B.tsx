import { useAtom } from 'jotai';
import React, { memo, useEffect } from 'react';
import { bAtom } from './atoms';
import B1 from './B1';
const B = memo(() => {
  const [bValue] = useAtom(bAtom);

  useEffect(() => {
    console.log('B ==> Effect ');
  });

  return (
    <div
      style={{
        border: '1px solid #000',
        padding: 20,
        backgroundColor: '#f1f1f1',
      }}
    >
      <h1>B: {bValue}</h1>

      <B1 />
    </div>
  );
});

export default B;
