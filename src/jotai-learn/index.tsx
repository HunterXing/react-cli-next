import { useAtom, useSetAtom } from 'jotai';
import React, { useEffect } from 'react';

import { aAtom, a2Atom, bAtom } from './atoms';
import A from './A';
import B from './B';

export default function JotaiLearn() {
  const [aValue, setA] = useAtom(aAtom);
  const setB = useSetAtom(bAtom);
  const setA2 = useSetAtom(a2Atom);
  const setA2Simple = useSetAtom(a2Atom);

  useEffect(() => {
    console.log('app ==> Effect ');
  });

  return (
    <div style={{ border: '1px solid', padding: 10 }}>
      App
      <br />
      aAtom:{aValue}
      <br />
      <button
        onClick={() => {
          setA(aValue + 1);
        }}
      >
        change aAtom
      </button>
      <button
        onClick={() => {
          setB(2);
        }}
      >
        change bAtom
      </button>
      <button
        onClick={() => {
          // 并不会进行深比较，引用发生变化会re-render
          // setA2({ a: 1 });

          setA2({ a: 2 });
        }}
      >
        change a2Atom
      </button>
      <button
        onClick={() => {
          setA2Simple({ a: 1 });
        }}
      >
        setA2Simple
      </button>
      <A />
      <B />
    </div>
  );
}
