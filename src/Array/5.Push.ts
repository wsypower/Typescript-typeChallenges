/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 20:20:53
 * @LastEditTime: 2022-11-27 20:50:06
 * @LastEditors: wsy
 */
type A = Push<[1, 2, 3], 4>; // [1,2,3,4]
type B = Push<[1], 2>; // [1, 2]


export type Push<T extends any[], I> = [...T, I]
