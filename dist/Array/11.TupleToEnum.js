/*
 * @Description:
 * @Author: wsy
 * @Date: 2022-11-28 20:46:52
 * @LastEditTime: 2022-11-28 21:21:47
 * @LastEditors: wsy
 */
import { expectType } from 'tsd';
expectType({
    MacOS: "MacOS",
    Windows: "Windows",
    Linux: "Linux",
});
expectType({
    MacOS: 0,
    Windows: 1,
    Linux: 2,
});
