/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 20:58:36
 * @LastEditTime: 2022-11-27 21:08:51
 * @LastEditors: wsy
 */

type A = ReverseTuple<[string, number, boolean]>; // [boolean, number, string]
type B = ReverseTuple<[1, 2, 3]>; // [3,2,1]
type C = ReverseTuple<[]>; // []

/**
 * Takes in a tuple and returns a tuple with the elements in reverse order.           
 * @param {Tuple} tuple - the tuple to reverse.           
 * @returns {Tuple} - the reversed tuple.           
*/

export type ReverseTuple<T extends any[], Result extends any[] = []> = T extends [...infer L, infer R]
  ? ReverseTuple<L, [...Result, R]>
  : Result
