/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-06 20:51:10
 * @LastEditTime: 2022-12-08 22:30:15
 * @LastEditors: wsy
 */
import type { Primitive } from 'type-fest';

// 定义一个函数，它接受一个原始类型的参数
function printValue(value: Primitive) {
  console.log(value);
}
// error 类型“{ name: number; }”的参数不能赋给类型“Primitive”的参数。
// printValue({ name: 1 })
