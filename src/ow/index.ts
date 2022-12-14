/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-14 19:51:13
 * @LastEditTime: 2022-12-14 19:55:23
 * @LastEditors: wsy
 */
import ow from 'ow';

const unicorn = (input: string) => {
  ow(input, ow.string.minLength(5));
  console.log(123)
};

unicorn('yo');
