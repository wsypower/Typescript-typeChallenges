/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-01 21:38:57
 * @LastEditTime: 2022-12-01 21:56:06
 * @LastEditors: wsy
 */

type a1 = KebabCase<"HandleOpenFlag">; // handle-open-flag
type a2 = KebabCase<"OpenFlag">; // open-flag
type a3 = KebabCase<"openflag">; // open-flag

/**
 * Takes in a string and removes the first character if it is a dash.       
 * @param {string} str - the string to remove the dash from.       
 * @returns The string with the dash removed.       
 */
type RemoveFirst<T extends string, S extends string = '-'> = T extends `${S}${infer L}` ? L : T;

/**
 * Takes in a string and returns a kebab-case version of it.           
 * @param {string} str - the string to convert to kebab-case           
 * @returns {string} - the kebab-case version of the string           
 */
export type KebabCase<T extends string, F extends string = ''> =
  T extends `${infer L}${infer R}`
  ? Capitalize<L> extends L
  ? KebabCase<R, `${F}-${Lowercase<L>}`>
  : KebabCase<R, `${F}${L}`>
  : RemoveFirst<F, '-'>
