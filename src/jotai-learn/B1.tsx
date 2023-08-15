import { useAtom } from 'jotai';
import React, { memo, useEffect } from 'react';
import { aAtom, a2Atom } from './atoms';

const B1 = memo(() => {
  const [aValue] = useAtom(aAtom);
  const [a2Value] = useAtom(a2Atom);
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
      <h1>a2Atom: a2Value: {JSON.stringify(a2Value)}</h1>
    </div>
  );
});

export default B1;
