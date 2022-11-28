/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-28 21:26:55
 * @LastEditTime: 2022-11-28 21:45:45
 * @LastEditors: wsy
 */

type A1 = Slice<[any, never, 1, "2", true, boolean], 0, 2>; // [any,never] 
type A2 = Slice<[any, never, 1, "2", true, boolean], 1, 3>; // [never,1]
type A3 = Slice<[any, never, 1, "2", true, boolean], 1, 2>; // [never]
type A4 = Slice<[any, never, 1, "2", true, boolean], 2>; // [1,'2',true,boolean]
type A5 = Slice<[any], 2>; // []
type A6 = Slice<[], 0>; // []


/**
 * Takes in a tuple and returns a new tuple with the elements sliced.       
 * @param {T} T - the tuple to slice       
 * @param {Start} Start - the start index to slice from       
 * @param {End} [End=T['length']] - the end index to slice to       
 * @param {StartIndex} [StartIndex=[]] - the index of the start index       
 * @param {EndIndex} [EndIndex=[]] - the index of the end index       
 * @param {Result} [Result=[]] - the result of the slice       
 * @returns {Result} - the result of the slice       
 */
export type Slice<
  T extends any[],
  Start,
  End = T['length'],
  StartIndex extends any[] = [],
  EndIndex extends any[] = [],
  Result extends any[] = []
> = T extends [infer L, ...infer R]
  ? StartIndex['length'] extends Start
    ? EndIndex['length'] extends End
      ? Result
      : Slice<R, Start, End, StartIndex, [...EndIndex, never], [...Result,L]>
    : Slice<R, Start, End, [...StartIndex, never], [...EndIndex, never], Result>
  : Result
