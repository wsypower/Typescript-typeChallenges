/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 20:09:49
 * @LastEditTime: 2022-11-27 20:12:05
 * @LastEditors: wsy
 */
type A = FirstItem<[string, number, boolean]>; // string
type B = FirstItem<["B", "F", "E"]>; // 'B'
type C = FirstItem<[]>; // 'undefined'


/**
 * Takes in an array and returns the first item in the array.       
 * @param {any[]} array - the array to get the first item from       
 * @returns The first item in the array.       
 */
export type FirstItem<T extends any[]> = T extends [] ? undefined : T[0]
