/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-29 22:33:30
 * @LastEditTime: 2022-12-01 21:32:18
 * @LastEditors: wsy
 */
// @ts-nocheck
type A = RepeatString<"a", 3>; // 'aaa'
type B = RepeatString<"a", 0>; // ''

export type RepeatString<T extends string, N extends number, R extends string = '', L extends any[] = []> =
  L['length'] extends N ? R : RepeatString<T, N, `${R}${T}`, [...L, never]>

