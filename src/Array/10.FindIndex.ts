/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-28 20:44:01
 * @LastEditTime: 2022-11-28 20:46:30
 * @LastEditors: wsy
 */
// 1） 找到两个值相等的一项，如何判断两个值是否相等？
// 2) 最终要返回的是索引， 内部构建一个数组，来记录当前遍历到了第几项
type a1 = [any, never, 1, "2", true];
type a2 = FindIndex<a1, 1>; // 2
type a3 = FindIndex<a1, 3>; // never

/**
 * Finds the index of the first element in an array that matches the given target.           
 * @param {any[]} array - the array to search for the target in           
 * @param {any} target - the target to search for in the array           
 * @returns The index of the first element in the array that matches the target.           
*/
export type FindIndex<T extends any[], Target, Index extends any[] = []> = T extends [infer L, ...infer R]
  ? isEqual<L, Target, Index['length'], FindIndex<R, Target, [...Index, never]>>
  : never;


/**
 * Checks if two types are equal.           
 * @param {T} T - The first type.           
 * @param {R} R - The second type.           
 * @returns {keyof T extends keyof R}           
 */
export type isEqual<T, R, Success, Fail> = [T] extends [R]
  ? [R] extends [T]
  ? keyof T extends keyof R
  ? keyof R extends keyof T
  ? Success
  : Fail
  : Fail
  : Fail
  : Fail
