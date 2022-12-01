/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-01 21:32:35
 * @LastEditTime: 2022-12-01 21:35:00
 * @LastEditors: wsy
 */

// flag extends  -flag
type A1 = SplitString<"handle-open-flag", "-">; // ["handle", "open", "flag"]
type A2 = SplitString<"flag", "-">; // ["open", "flag"]
type A3 = SplitString<"handle.open.flag", ".">; // ["handle", "open", "flag"]
type A4 = SplitString<"open.flag", ".">; // ["open", "flag"]
type A5 = SplitString<"open.flag", "-">; // ["open.flag"]


/**
 * Splits a string into an array of strings based on a separator.           
 * @param {string} string - the string to split           
 * @param {string} separator - the separator to split the string by           
 * @returns {SplitString<string, S>} - the split string           
 */
export type SplitString<T, S> = T extends `${infer L}${S & string}${infer R}` ? [L, ...SplitString<R, S>] : [T] 
