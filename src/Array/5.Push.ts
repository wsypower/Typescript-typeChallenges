/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 20:20:53
 * @LastEditTime: 2022-11-27 20:58:50
 * @LastEditors: wsy
 */
type A = Push<[1, 2, 3], 4>; // [1,2,3,4]
type B = Push<[1], 2>; // [1, 2]


/**
 * Takes in an array and adds an item to the end of the array.       
 * @param {T extends any[]} array - the array to add the item to.       
 * @param {I} item - the item to add to the array.       
 * @returns {[...T, I]} - the array with the item added.       
 */
export type Push<T extends any[], I> = [...T, I]
