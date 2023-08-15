import { atom } from 'jotai';

export const aAtom = atom(1);
export const bAtom = atom(0);
// 测试memo的对象比较
export const a2Atom = atom({ a: 2 });
