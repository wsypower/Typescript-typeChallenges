/*
 * @Description: 套路二 从新构造做转换
 * @Author: wsy
 * @Date: 2023-01-04 19:35:15
 * @LastEditTime: 2023-01-04 19:37:55
 * @LastEditors: wsy
 */
type Push<Arr extends unknown[], Element> = [...Arr, Element]

type PushResult = Push<[1, 2, 3], 4> // [1,2,3,4]
