/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-28 21:54:57
 * @LastEditTime: 2022-11-28 22:11:56
 * @LastEditors: wsy
 */
type A1 = Splice<[string, number, boolean, null, undefined, never], 0, 2>; // [boolean,null,undefined,never]
type A2 = Splice<[string, number, boolean, null, undefined, never], 1, 3>; // [string,undefined,never]
type A3 = Splice<
  [string, number, boolean, null, undefined, never],
  1,
  2,
  [1, 2, 3]
>; // [string,1,2,3,null,undefined,never]

/**
 * Splice a portion of an array.           
 * @param {any[]} T - the array to splice           
 * @param {number} Start - the index to start splicing at           
 * @param {number} DelLength - the number of elements to delete           
 * @param {any[]} Insert - the elements to insert           
 * @param {any[]} StartIndex - the index to start inserting at           
 * @param {any[]} EndIndex - the index to end inserting at           
 * @param {any[]} Result - the result of the splice           
 * @returns None           
 */
export type Splice<
  T extends any[],
  Start extends number,
  DelLength extends number,
  Insert extends any[] = [],
  StartIndex extends any[] = [],
  EndIndex extends any[] = [],
  Result extends any[] = []
> = T extends [infer L, ...infer R]
  ? StartIndex['length'] extends Start
  ? EndIndex['length'] extends DelLength
  ? [...Result, ...Insert, ...T]
  : Splice<R, Start, DelLength, Insert, StartIndex, [...EndIndex, never], Result>
  : Splice<R, Start, DelLength, Insert, [...StartIndex, never], EndIndex, [...Result, L]>
  : Result
