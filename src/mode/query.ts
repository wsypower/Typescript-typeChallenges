/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-09 19:25:15
 * @LastEditTime: 2023-01-09 19:53:12
 * @LastEditors: wsy
 */
type ParseParam<Param extends string> =
  Param extends `${infer Key}=${infer Value}`
  ? {
    [K in Key]: Value
  } : Record<string, any>;

type MergeValues<One, Other> =
  One extends Other
  ? One
  : Other extends unknown[]
  ? [One, ...Other]
  : [One, Other];

type MergeParams<
  OneParam extends Record<string, any>,
  OtherParam extends Record<string, any>
> = {
    readonly [Key in keyof OneParam | keyof OtherParam]:
    Key extends keyof OneParam
    ? Key extends keyof OtherParam
    ? MergeValues<OneParam[Key], OtherParam[Key]>
    : OneParam[Key]
    : Key extends keyof OtherParam
    ? OtherParam[Key]
    : never
  }

type ParseQueryString<Str extends string> =
  Str extends `${infer Param}&${infer Rest}`
  ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
  : ParseParam<Str>;


function parseQueryString<Str extends string>(queryStr: Str): ParseQueryString<Str>;
function parseQueryString(queryStr: string) {
  if (!queryStr || !queryStr.length) {
    return {};
  }
  const queryObj: Record<string, any> = {};
  const items = queryStr.split('&');
  items.forEach(item => {
    const [key, value] = item.split('=');
    if (queryObj[key]) {
      if (Array.isArray(queryObj[key])) {
        queryObj[key].push(value);
      } else {
        queryObj[key] = [queryObj[key], value]
      }
    } else {
      queryObj[key] = value;
    }
  });
  return queryObj;
}


const res = parseQueryString('a=1&b=2&c=3');
const res1 = parseQueryString('');



function is<T extends Array<unknown>>(arr: T): T {
  return arr
}

const arr = is(["1", "2", "3", 1])
