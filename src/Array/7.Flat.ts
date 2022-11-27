/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 21:10:42
 * @LastEditTime: 2022-11-27 21:59:37
 * @LastEditors: wsy
 */

type A = Flat<[1, 2, 3]>; // [1,2,3]
type B = Flat<[[[[[[[1]]]]]], [2, 3], [4, [5, [6]]]]>; // [1,2,3,4,5,6]
type C = Flat<[]>; // []
type D = Flat<[1]>; // [1]



/**
 * Flattens an array of arrays.           
 * @param {any[]} arr - the array to flatten           
 * @returns {any[]} - the flattened array           
 */
export type Flat<T extends any[]> = T extends [infer L, ...infer R]
  ? [...(L extends any[] ? Flat<L> : [L]), ...Flat<R>]
  : [];
