/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-01 21:35:21
 * @LastEditTime: 2022-12-01 21:37:28
 * @LastEditors: wsy
 */
type A = LengthOfString<"BFE.dev">; // 7
type B = LengthOfString<"">; // 0


/**
 * Takes in a string and returns the length of the string.       
 * @param {string} str - the string to get the length of       
 * @returns {number} the length of the string       
 */
export type LengthOfString<T, N extends any[] = []> =
  T extends `${infer L}${infer R}` ? LengthOfString<R, [...N, L]> : N['length']
