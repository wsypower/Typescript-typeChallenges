/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 20:13:56
 * @LastEditTime: 2022-11-27 20:16:40
 * @LastEditors: wsy
 */

type A = LastItem<[string, number, boolean]>; // boolean
type B = LastItem<["B", "F", "E"]>; // 'E'
type C = LastItem<[]>; // never
type D = LastItem<[1]>; // 1

/**
 * Gets the last item in a tuple.       
 * @template T - the type of the tuple       
 * @param {T} tuple - the tuple to get the last item from       
 * @returns the last item in the tuple       
 */
export type LastItem<T> = T extends [...any[], infer R] ? R : never


