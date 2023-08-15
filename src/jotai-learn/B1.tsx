import { useAtom } from 'jotai';
import React, { memo, useEffect } from 'react';
import { aAtom } from './atoms';
const B1 = memo(() => {
  const [aValue] = useAtom(aAtom);

  useEffect(() => {
    console.log('B1 ==> Effect ');
  });

  return (
    <div
      style={{
        border: '1px solid #000',
        padding: 20,
        backgroundColor: '#f2f2f2',
      }}
    >
      <h1>B1-b: aValue: {aValue}</h1>
    </div>
  );
});

export default B1;
