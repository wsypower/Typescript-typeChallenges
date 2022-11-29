/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 21:49:40
 * @LastEditTime: 2022-11-29 21:50:45
 * @LastEditors: wsy
 */

type a1 = CapitalizeString<"handler">; // Handler
type a2 = CapitalizeString<"parent">; // Parent
type a3 = CapitalizeString<233>; // 233


/**
 * Capitalizes the first letter of a string.       
 * @param {string} str - the string to capitalize       
 * @returns {CapitalizeString<T>} - the capitalized string       
 */
export type CapitalizeString<T> = T extends string ? Capitalize<T> : T;
