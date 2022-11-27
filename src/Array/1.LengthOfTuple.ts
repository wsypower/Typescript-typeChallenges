/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 18:46:29
 * @LastEditTime: 2022-11-27 20:10:02
 * @LastEditors: wsy
 */


type A = LengthOfTuple<["B", "F", "E"]>; // 3
type B = LengthOfTuple<[]>; // 0


/**
 * Returns the length of a tuple.       
 * @template T - the type of the tuple       
 * @param {T} tuple - the tuple to get the length of       
 * @returns the length of the tuple       
 */
export type LengthOfTuple<T extends any[]> = T["length"];


