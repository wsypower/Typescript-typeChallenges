/*
 * @Description: 套路二 从新构造做转换
 * @Author: wsy
 * @Date: 2023-01-04 19:35:15
 * @LastEditTime: 2023-01-10 20:27:43
 * @LastEditors: wsy
 */
type Push<Arr extends unknown[], Element> = [...Arr, Element]
type PushResult = Push<[1, 2, 3], 4> // [1,2,3,4]

type UnShift<Arr extends unknown[], El> = [El, ...Arr]
type UnShiftResult = UnShift<[1, 2, 3], 4> // [4,1,2,3]


type PartialObjectPropByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any
> = Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>

interface Dong {
  name: string
  age: number
  address: string
}

type PartialObjectPropByKeysResult = PartialObjectPropByKeys<Dong, 'name'>
