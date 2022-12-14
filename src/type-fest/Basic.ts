/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-13 18:59:27
 * @LastEditTime: 2022-12-13 19:50:11
 * @LastEditors: wsy
 */
import type { Class, Constructor, Primitive } from "type-fest";


/*=============================================
=                  Primitive                  =
=============================================*/

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


/*=============================================
=                  Constructor                =
=============================================*/
class Foo {
  constructor(x: number) {
  }
  method(): void { }
}

function createInstance<T>(Class: Constructor<T, [x: number, y: string]>): T {
  return new Class(1, 'hello');
}

const foo = createInstance(Foo);
