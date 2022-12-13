/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-13 18:59:27
 * @LastEditTime: 2022-12-13 19:03:14
 * @LastEditors: wsy
 */
import { type Primitive } from "type-fest";

// 定义一个函数，它接受一个原始类型的参数
function printValue(value: Primitive) {
  console.log(value);
}
// string | number | bigint | boolean | symbol | null | undefined
printValue("hello");
printValue(1);
printValue(78n);
printValue(false);
printValue(Symbol('123'));
printValue(null);
printValue(undefined);
