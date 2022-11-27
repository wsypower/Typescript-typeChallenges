/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 18:46:29
 * @LastEditTime: 2022-11-27 20:09:00
 * @LastEditors: wsy
 */


type A = LengthOfTuple<["B", "F", "E"]>; // 3
type B = LengthOfTuple<[]>; // 0


type LengthOfTuple<T extends any[]> = T["length"];
