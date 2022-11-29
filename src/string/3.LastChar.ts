/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 21:54:58
 * @LastEditTime: 2022-11-29 22:14:02
 * @LastEditors: wsy
 */

type A = LastChar<"BFE">;
type B = LastChar<"dev">;
type C = LastChar<"a">;

/**
 * Takes in a string and returns the last character of the string.       
 * @param {string} str - the string to get the last character of       
 * @returns The last character of the string       
 */
export type LastChar<T extends string, F extends string = ''> = T extends `${infer L}${infer R}` ? LastChar<R, L> : F
