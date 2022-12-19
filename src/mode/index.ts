/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-19 18:29:21
 * @LastEditTime: 2022-12-19 20:18:37
 * @LastEditors: wsy
 */

type P = Promise<'wei'>
type GetPromiseValue<T extends Promise<any>> = T extends Promise<infer P> ? P : never
type GetPromiseResult = GetPromiseValue<P> //'wei'

type arr = [2, 2, 3]
type FirstArr<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never
type GetFristArray = FirstArr<arr> //1

type LastArray<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never
type GetLastArray1 = LastArray<arr> //3



type PopArray<T extends unknown[]> = T extends []
  ? []
  : T extends [...infer F, infer L]
  ? F
  : never

type GetPopArray = PopArray<arr> //[2,2]

type UnShiftArray<T extends unknown[]> = T extends [] ? [] : T extends [infer F, ...infer L] ? L : never
type GetUnShiftArray1 = UnShiftArray<arr> //[2,3]
type GetUnShiftArray2 = UnShiftArray<[]> //[]


type StartsWith<T extends string, S extends string> = T extends `${S}${string}` ? true : false
type StartsS = StartsWith<'abc', 'a'> //true
type StartsS1 = StartsWith<'abc', 'b'> //false

type EndsWith<T extends string, S extends string> = T extends `${string}${S}` ? true : false
type EndS = EndsWith<'abc', 'c'> //true
type EndS1 = EndsWith<'abc', 'b'> //false

type Includes<T extends string, S extends string> = T extends `${infer F}${S}${infer L}` ? true : false
type IncludeS = Includes<'abc', 'b'> //true
type IncludeS1 = Includes<'abc', 'd'> //false





type Replace<T extends string, S extends string, R extends string> = T extends `${infer F}${S}${infer L}` ? `${F}${R}${L}` : T
type ReplaceS = Replace<'abc', 'b', 'd'> //adc
type ReplaceS1 = Replace<'abc', 'd', 'd'> //abc

type ReplaceAll<T extends string, S extends string, R extends string> = T extends `${infer F}${S}${infer L}` ? ReplaceAll<`${F}${R}${L}`, S, R> : T
type ReplaceAllS = ReplaceAll<'abc', 'b', 'd'> //adc
type ReplaceAllS1 = ReplaceAll<'abc', 'a', 'd'> //dbc

type TrimLeft<T extends string> = T extends ` ${infer F}` ? TrimLeft<F> : T
type TrimLeftS = TrimLeft<' abc'> //abc

type TrimRight<T extends string> = T extends `${infer F} ` ? TrimRight<F> : T
type TrimRightS = TrimRight<'abc '> //abc

type Trim<T extends string> = TrimLeft<TrimRight<T>>
type TrimS = Trim<' abc '> //abc


type GetParameters<T extends (...arg: any[]) => any> = T extends (...arg: infer P) => any ? P : never
type GetParametersS = GetParameters<(a: number, b: string) => void> //[number, string]

type GetReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer R ? R : never
type GetReturnTypeS = GetReturnType<(a: number, b: string) => void> //void

type GetConstructorParameters<T extends new (...arg: any[]) => any> = T extends new (...arg: infer P) => any ? P : never
type GetConstructorParametersS = GetConstructorParameters<new (a: number, b: string) => void> //[number, string]

type GetConstructorReturnType<T extends new (...arg: any[]) => any> = T extends new (...arg: any[]) => infer R ? R : never
type GetConstructorReturnTypeS = GetConstructorReturnType<new (a: number, b: string) => { name: string }> //void

type GetThisParameterType<T extends (...arg: any[]) => any> = T extends (this: infer P, ...arg: any[]) => any ? P : never;
type GetThisParameterTypeS = GetThisParameterType<(this: { name: string }, a: number, b: string) => void>
















export { }
