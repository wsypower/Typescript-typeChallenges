/*
 * @Description: 
 * @Author: wsy
 * @Date: 2022-12-01 22:19:59
 * @LastEditTime: 2022-12-01 22:47:59
 * @LastEditors: wsy
 */

function createI18n<Schema extends object>(
  schema: Schema
): (path: ObjectAccessPaths<Schema>) => void {
  return (path) => {
    const reloadSchema = path.split(".");
    const result = reloadSchema.reduce((acc, cur) => {
      return (acc as any)[cur];
    }, schema)
    return result
  };
}
// .home.topBar
const i18n = createI18n({
  home: {
    topBar: {
      title: "顶部标题",
      welcome: "欢迎登录",
    },
    bottomBar: {
      notes: "XXX备案，归XXX所有",
    },
  },
  login: {
    username: "用户名",
    password: "密码",
  },
  c: '111'
});

i18n("home.topBar.title"); // correct
// i18n("home.topBar.welcome"); // correct
// i18n("home.bottomBar.notes"); // correct
// i18n('login.username')
// i18n('home.bottomBar.notes')
// i18n("home.login.abc"); // error，不存在的属性
// i18n("home.topBar"); // error，没有到最后一个属性

/**
 * Takes in an object and returns an array of all the keys that are objects.       
 * @param {object} obj - the object to get the keys of.       
 * @returns {string[]} - an array of all the keys that are objects.       
 */
export type ObjectAccessPaths<T extends object, F extends string = '', K = keyof T> =
  K extends keyof T
  ? T[K] extends object
  ? `${F}${K & string}.${ObjectAccessPaths<T[K], ''>}`
  : `${F}${K & string}`
  : never

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
