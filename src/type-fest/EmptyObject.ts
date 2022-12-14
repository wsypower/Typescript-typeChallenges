/*
 * @Description:
 * @Author: wsy
 * @Date: 2022-12-13 20:56:19
 * @LastEditTime: 2022-12-13 21:20:56
 * @LastEditors: wsy
 */

// declare const emptyObjectSymbol: unique symbol;
// export type EmptyObject = { [emptyObjectSymbol]?: never };

// import { EmptyObject } from 'type-fest'

type EmptyObject = Record<keyof any, never>;

type Union = EmptyObject | { id: string };

const a: Union = {};
const b: string = a.id // no error
const c = a.id; // inferred type: `never`;
