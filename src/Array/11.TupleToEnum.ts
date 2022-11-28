/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-28 20:46:52
 * @LastEditTime: 2022-11-28 21:21:47
 * @LastEditors: wsy
 */

import { FindIndex } from "./10.FindIndex";
import { expectType } from 'tsd'
// 默认情况下，枚举对象中的值就是元素中某个类型的字面量类型
type a1 = TupleToEnum<["MacOS", "Windows", "Linux"]>;

expectType<a1>({
  MacOS: "MacOS",
  Windows: "Windows",
  Linux: "Linux",
})

type a2 = TupleToEnum<["MacOS", "Windows", "Linux"], true>;

expectType<a2>({
  MacOS: 0,
  Windows: 1,
  Linux: 2,
})

export type TupleToEnum<T extends any[], F extends boolean = false> = {
  readonly [Key in T[number]]: F extends true ? FindIndex<T, Key> : Key;
}
