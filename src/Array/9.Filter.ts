/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-11-27 22:04:55
 * @LastEditTime: 2022-11-27 22:12:46
 * @LastEditors: wsy
 */

type A = Filter<[1, "BFE", 2, true, "dev"], number>; // [1, 2]
type B = Filter<[1, "BFE", 2, true, "dev"], string>; // ['BFE', 'dev']
type C = Filter<[1, "BFE", 2, any, "dev"], string>; // ['BFE', any, 'dev']


export type Filter<T extends any[], Type, Result extends any[] = []> = T extends [infer L, ...infer R]
  ? [L] extends [Type]
  ? Filter<R, Type, [L, ...Result]>
  : Filter<R, Type, Result>
  : Result 
