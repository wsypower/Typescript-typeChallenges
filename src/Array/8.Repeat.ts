/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 21:59:45
 * @LastEditTime: 2022-11-27 22:03:22
 * @LastEditors: wsy
 */
type A = Repeat<number, 3>; // [number, number, number]
type B = Repeat<string, 2>; // [string, string]
type C = Repeat<1, 1>; // [1]
type D = Repeat<0, 0>; // []


/**
 * Takes in a type and a length and returns an array of that type with the given length.           
 * @param {T} type - the type to repeat           
 * @param {Length} length - the length of the array           
 * @returns {Repeat<T, Length>} - the array of the given type with the given length           
 */
export type Repeat<T, Length extends number, Result extends any[] = []> = Result['length'] extends Length
  ? Result
  : Repeat<T, Length, [T, ...Result]>;
