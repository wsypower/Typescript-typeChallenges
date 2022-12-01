/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-01 22:03:50
 * @LastEditTime: 2022-12-01 22:15:21
 * @LastEditors: wsy
 */
// @ts-nocheck



// - 去掉，下一个字符要大写
type a1 = CamelCase<"handle-open-flag">; // HandleOpenFlag
type a2 = CamelCase<"open-flag">; // OpenFlag



/**
 * Takes in a string and returns the string with the first letter capitalized.           
 * @param {string} str - the string to capitalize           
 * @returns {string} - the string with the first letter capitalized           
 */
export type CamelCase<T extends string, F extends string = ''> =
  T extends `${infer L}-${infer R}${infer R1}`
  ? CamelCase<R1, `${F}${L}${Capitalize<R>}`>
  : Capitalize<`${F}${T}`>
