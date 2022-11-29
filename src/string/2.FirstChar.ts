/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 21:51:36
 * @LastEditTime: 2022-11-29 21:52:41
 * @LastEditors: wsy
 */

type A = FirstChar<"BFE">; // 'B'
type B = FirstChar<"dev">; // 'd'
type C = FirstChar<"">; // never


/**
 * Takes in a string and returns the first character of the string.       
 * @param {string} str - the string to get the first character of.       
 * @returns The first character of the string.       
 */
export type FirstChar<T extends string> = T extends `${infer L}${string}` ? L : never;
