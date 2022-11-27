/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 20:17:20
 * @LastEditTime: 2022-11-27 20:21:03
 * @LastEditors: wsy
 */

type A = Shift<[1, 2, 3]>; // [2,3] . [never,2,3]
type B = Shift<[1]>; // []
type C = Shift<[]>; // []


/**
 * Takes in an array and returns the last element of the array.           
 * @param {any[]} arr - the array to take the last element of           
 * @returns the last element of the array           
 */
export type Shift<T extends any[]> = T extends [infer L, ...infer R] ? R : T
