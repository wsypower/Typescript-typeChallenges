/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 22:24:42
 * @LastEditTime: 2022-11-29 22:31:22
 * @LastEditors: wsy
 */


type A = TupleToString<["a", "b", "c"]>; // 'abc'
type B = TupleToString<["a"]>; // 'a'
type C = TupleToString<[]>; // ''


/**
 * Takes in a tuple and returns a string of the tuple's elements.       
 * @template T - the tuple type       
 * @template F - the string to prepend to each element       
 * @param {T} tuple - the tuple to convert to a string       
 * @returns {string} the string of the tuple's elements       
 */
export type TupleToString<T extends any[], F extends string = ''> = T extends [infer L, ...infer R]
  ? TupleToString<R, `${F}${L & string}`> : F; 
