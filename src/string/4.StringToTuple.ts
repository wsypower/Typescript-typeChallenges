/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 22:15:03
 * @LastEditTime: 2022-11-29 22:21:22
 * @LastEditors: wsy
 */

type A = StringToTuple<"BFE.dev">; // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<"">; // []

/**
 * Takes in a string and returns a tuple of the string split by commas.           
 * @param {string} str - the string to split by commas           
 * @returns {string[]} - the string split by commas           
 */
export type StringToTuple<T extends string, F extends any[] = []> = T extends `${infer L}${infer R}`
  ? StringToTuple<R, [...F, L]>
  : F
